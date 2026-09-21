import { useContext } from "react";
import { CategoryExpensesChart } from "./CategoryExpensesChart";
import { FinanceContext } from "../../contexts/FinanceContext";
import { formatCurrency } from "../../utils/format-currency";

export const ExpensesByCategory = () => {
    const { expensesByCategory, totalExpenses } = useContext(FinanceContext);

    const visibleCategories = [...expensesByCategory]
        .filter((category) => category.value > 0)
        .sort((a, b) => b.value - a.value)
        .slice(0, 6);

    return (
        <section className="@container min-w-0 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-6 text-center lg:text-left">
                <h2 className="text-xl font-bold text-gray-950 sm:text-2xl">Gastos por categoria</h2>

                <p className="mt-1 text-sm text-gray-400">Veja como suas despesas estão distribuídas</p>
            </div>

            <div className="flex flex-col gap-6 @2xl:flex-row @2xl:items-center xl:@lg:flex-row xl:@lg:items-center">
                <div className="flex min-w-0 w-full justify-center @2xl:w-56 @2xl:shrink-0 xl:@lg:w-56 xl:@lg:shrink-0">
                    <CategoryExpensesChart categories={visibleCategories} total={totalExpenses} />
                </div>

                <div className="min-w-0 w-full flex-1">
                    {visibleCategories.map((category) => (
                        <div
                            key={category.id}
                            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2 border-b border-gray-100 py-3 last:border-b-0 sm:py-4"
                        >
                            <div className="flex min-w-0 items-center gap-2">
                                <div
                                    className="size-3 shrink-0 rounded-full"
                                    style={{ backgroundColor: category.color }}
                                />

                                <p className="min-w-0 wrap-anywhere text-sm text-gray-700">{category.name}</p>
                            </div>

                            <strong className="min-w-0 wrap-anywhere text-right text-sm font-semibold text-gray-900">
                                {formatCurrency(category.value)}
                            </strong>

                            <span className="whitespace-nowrap text-right text-sm text-gray-400">{category.percentage.toFixed(1)}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
