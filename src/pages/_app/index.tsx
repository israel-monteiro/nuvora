import { createFileRoute } from "@tanstack/react-router";
import { SummaryCard } from "../../components/SummaryCards";
import { ArrowDown, ArrowUp, Wallet } from "lucide-react";
import { useContext } from "react";
import { FinanceContext } from "../../contexts/FinanceContext";
import { RecentTransactions } from "../../components/RecentTransactions";
import { ExpensesByCategory } from "../../components/ExpensesByCategory";
import { PageHeader } from "../../components/PageHeader";
import { CalendarButton } from "../../components/CalendarButton";
import { NewTransactionButton } from "../../components/NewTransactionButton";

export const Route = createFileRoute("/_app/")({
    component: Dashboard,
});

function Dashboard() {
    const { totalIncome, totalExpenses, balance } = useContext(FinanceContext);
    return (
        <>
            <div className=" p-8 flex flex-col gap-6">
                <PageHeader title="Dashboard" subtitle="Visão geral das suas finanças">
                    <CalendarButton />

                    <NewTransactionButton />
                </PageHeader>

                <div className="grid grid-cols-3 gap-6">
                    <SummaryCard
                        icon={<Wallet />}
                        title={"Saldo atual"}
                        value={balance}
                        description={"Seu saldo neste mês"}
                    />
                    <SummaryCard
                        icon={<ArrowUp />}
                        title={"Receitas"}
                        value={totalIncome}
                        description={"Total de entradas no mês"}
                        variant="income"
                    />
                    <SummaryCard
                        icon={<ArrowDown />}
                        title={"Despesas"}
                        value={totalExpenses}
                        description={"Total de saídas no mês"}
                        variant="expense"
                    />
                </div>
                <div className="grid grid-cols-1 gap-6 min-[1460px]:grid-cols-2">
                    <ExpensesByCategory />
                    <RecentTransactions />
                </div>
            </div>
        </>
    );
}
