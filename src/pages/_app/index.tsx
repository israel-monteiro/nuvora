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
    const { totalIncome, totalExpenses, balance, transactions, categories, selectedMonth, selectedYear } =
        useContext(FinanceContext);

    const filteredTransactions = transactions.filter((transaction) => {
        const [year, month] = transaction.date.split("-");

        const matchesMonth = Number(month) === selectedMonth + 1;
        const matchesYear = Number(year) === selectedYear;

        return matchesMonth && matchesYear;
    });

    const recentTransactions = [...filteredTransactions]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);

    return (
        <>
            <div className="flex flex-col gap-6 px-5 py-8 sm:px-8">
                <PageHeader title="Dashboard" subtitle="Visão geral das suas finanças">
                    <CalendarButton />

                    <NewTransactionButton />
                </PageHeader>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
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
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                    <ExpensesByCategory />
                    <RecentTransactions transactions={recentTransactions} categories={categories} />
                </div>
            </div>
        </>
    );
}
