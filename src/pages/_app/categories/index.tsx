import { createFileRoute } from "@tanstack/react-router";
import { useContext, useState } from "react";
import { PageHeader } from "../../../components/PageHeader";
import { CategoryFilters } from "../../../components/CategoryFilters";
import { CategoryTable } from "../../../components/CategoryTable";
import { FinanceContext } from "../../../contexts/FinanceContext";
import type { CategorySummary } from "../../../interfaces/categories";
import { months } from "../../../mocks/months";
import { CalendarButton } from "../../../components/CalendarButton";
import { NewCategoryButton } from "../../../components/NewCategoryButton";
import { TransactionPagination } from "../../../components/TransactionPagination";

export const Route = createFileRoute("/_app/categories/")({
    component: CategoriesPage,
});

function CategoriesPage() {
    const { categories, filteredTransactions, selectedMonth, selectedYear } = useContext(FinanceContext);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const categoriesPerPage = 10;

    const visibleCategories = categories
        .filter((category) => category.name.toLowerCase().includes(search.toLowerCase()))
        .filter((category) => type === "" || category.type === type)
        .sort((a, b) => {
            const comparison = a.name.localeCompare(b.name, "pt-BR");
            return sortOrder === "asc" ? comparison : -comparison;
        });

    const categorySummaries: CategorySummary[] = visibleCategories
        .map((category) => {
            const categoryTransactions = filteredTransactions.filter(
                (transaction) => transaction.categoryId === category.id,
            );

            return {
                ...category,
                total: categoryTransactions.reduce((sum, transaction) => sum + transaction.value, 0),
                transactionCount: categoryTransactions.length,
            };
        })
        .filter((category) => category.total !== 0);

    const totalCategories = categorySummaries.length;
    const totalPages = Math.ceil(totalCategories / categoriesPerPage);
    const startIndex = (currentPage - 1) * categoriesPerPage;
    const endIndex = startIndex + categoriesPerPage;
    const currentCategories = categorySummaries.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleTypeChange = (value: string) => {
        setType(value);
        setCurrentPage(1);
    };

    const handleSortOrderChange = (value: "asc" | "desc") => {
        setSortOrder(value);
        setCurrentPage(1);
    };

    const selectedMonthData = months.find((month) => month.value === selectedMonth);

    const periodLabel = `${selectedMonthData?.name.slice(0, 3).toUpperCase()}/${selectedYear}`;
    return (
        <div className="flex min-w-0 flex-col gap-6 px-5 py-8 sm:px-8">
            <PageHeader title="Categorias" subtitle="Organize suas receitas e despesas por categoria">
                <CalendarButton />
                <NewCategoryButton />
            </PageHeader>
            <CategoryFilters
                search={search}
                type={type}
                sortOrder={sortOrder}
                onSearchChange={handleSearchChange}
                onTypeChange={handleTypeChange}
                onSortOrderChange={handleSortOrderChange}
            />
            <div className="min-w-0 rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
                <CategoryTable categories={currentCategories} periodLabel={periodLabel} />
                <TransactionPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalTransactions={totalCategories}
                    startIndex={startIndex}
                    endIndex={endIndex}
                    onPageChange={handlePageChange}
                    itemLabel="categorias"
                />
            </div>
        </div>
    );
}
