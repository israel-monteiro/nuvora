import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { FinanceContext } from "../../contexts/FinanceContext";
import { TransactionItem } from "../TransactionItem";

export const RecentTransactions = () => {
    const { transactions, categories } = useContext(FinanceContext);

    const recentTransactions = [...transactions]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);

    return (
        <section className="min-w-0 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-5 sm:mb-6">
                <h2 className="text-xl font-bold text-gray-950 sm:text-2xl">Últimas movimentações</h2>

                <p className="mt-1 text-sm text-gray-400">Suas movimentações mais recentes</p>
            </div>

            <div className="flex flex-col">
                {recentTransactions.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} categories={categories} />
                ))}
            </div>

            <button className="mt-6 flex max-w-full cursor-pointer items-center gap-2 text-left text-sm font-semibold text-emerald-700 transition hover:text-emerald-800">
                <span className="min-w-0">Ver todas as movimentações</span>
                <ArrowRight className="size-4 shrink-0" />
            </button>
        </section>
    );
};
