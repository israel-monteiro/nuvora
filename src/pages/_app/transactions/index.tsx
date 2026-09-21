import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../../../components/PageHeader";
import { NewTransactionButton } from "../../../components/NewTransactionButton";
import { TransactionFilters } from "../../../components/TransactionFilters";
import { TransactionTable } from "../../../components/TransactionTable";
import { useContext, useState } from "react";
import { FinanceContext } from "../../../contexts/FinanceContext";
import { TransactionPagination } from "../../../components/TransactionPagination";

export const Route = createFileRoute("/_app/transactions/")({
    component: RouteComponent,
});

function RouteComponent() {
    const { transactions, categories } = useContext(FinanceContext);

    const [currentPage, setCurrentPage] = useState(1);

    const transactionsPerPage = 10;

    const sortedTransactions = [...transactions].sort((a, b) => b.date.localeCompare(a.date));

    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;

    const currentTransactions = sortedTransactions.slice(startIndex, endIndex);

    const totalTransactions = transactions.length;

    const totalPages = Math.ceil(totalTransactions / transactionsPerPage);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;

        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col gap-6 px-5 py-8 sm:px-8">
            <PageHeader title="Movimentações" subtitle="Acompanhe suas receitas e despesas">
                <NewTransactionButton />
            </PageHeader>
            <TransactionFilters />
            <TransactionTable transactions={currentTransactions} categories={categories} />
            <TransactionPagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalTransactions={totalTransactions}
                startIndex={startIndex}
                endIndex={endIndex}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
