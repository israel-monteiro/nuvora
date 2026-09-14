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
        <section className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-950">Gastos por categoria</h2>

                <p className="mt-1 text-sm text-gray-400">Veja como suas despesas estão distribuídas</p>
            </div>

            <div className="flex items-center gap-10">
                <CategoryExpensesChart categories={visibleCategories} total={totalExpenses} />

                <div className="min-w-0 flex-1">
                    {visibleCategories.map((category) => (
                        <div
                            key={category.id}
                            className="flex items-center justify-between border-b border-gray-100 py-4 last:border-b-0"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="size-3 shrink-0 rounded-full"
                                    style={{ backgroundColor: category.color }}
                                />

                                <p className="text-sm text-gray-700">{category.name}</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <strong className="text-sm font-semibold text-gray-900">
                                    {formatCurrency(category.value)}
                                </strong>

                                <span className="w-12 text-right text-sm text-gray-400">
                                    {category.percentage.toFixed(1)}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
