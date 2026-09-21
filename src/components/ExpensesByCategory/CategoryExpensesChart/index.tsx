import type { ExpenseByCategory } from "../../../interfaces/categories";

interface CategoryExpensesChartProps {
    categories: ExpenseByCategory[];
    total: number;
}
export const CategoryExpensesChart = ({ categories, total }: CategoryExpensesChartProps) => {
    const { parts } = categories.reduce(
        (acc, category) => {
            const start = acc.total;
            const end = start + category.percentage;

            return {
                total: end,
                parts: [...acc.parts, `${category.color} ${start}% ${end}%`],
            };
        },
        {
            total: 0,
            parts: [] as string[],
        },
    );

    const chartGradient = categories.length > 0 ? `conic-gradient(${parts.join(", ")})` : "#e5e7eb";

    return (
        <div className="relative aspect-square w-full max-w-56 rounded-full" style={{ background: chartGradient }}>
            <div className="absolute inset-10 flex flex-col items-center justify-center rounded-full bg-white">
                <strong className="max-w-full wrap-anywhere text-center text-lg font-bold">R$ {total.toFixed(2)}</strong>

                <span className="text-xs text-gray-400">Total de despesas</span>
            </div>
        </div>
    );
};
