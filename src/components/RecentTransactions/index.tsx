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
        <section className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-950">Últimas movimentações</h2>

                <p className="mt-1 text-sm text-gray-400">Suas movimentações mais recentes</p>
            </div>

            <div className="flex flex-col gap-4">
                {recentTransactions.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} categories={categories} />
                ))}
            </div>

            <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800 cursor-pointer">
                Ver todas as movimentações
                <ArrowRight className="size-4" />
            </button>
        </section>
    );
};
