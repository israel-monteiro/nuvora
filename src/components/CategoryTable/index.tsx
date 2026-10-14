import type { CategorySummary } from "../../interfaces/categories";
import { CategoryTableRow } from "./CategoryTableRow";

interface CategoryTableProps {
    categories: CategorySummary[];
    periodLabel: string;
}

export const CategoryTable = ({ categories, periodLabel }: CategoryTableProps) => {
    return (
        <div className="overflow-x-auto" role="region" aria-label="Tabela de categorias" tabIndex={0}>
            <table className="w-full">
                <thead className="border-b border-gray-200">
                    <tr className="text-left text-xs font-semibold uppercase text-gray-500">
                        <th scope="col" className="px-5 py-3">Categoria</th>
                        <th scope="col" className="px-5 py-3">Tipo</th>
                        <th scope="col" className="whitespace-nowrap px-5 py-3">Total ({periodLabel})</th>
                        <th scope="col" className="px-5 py-3 text-center">Movimentações</th>
                        <th scope="col" className="px-5 py-3 text-center">Cor</th>
                        <th scope="col" className="px-5 py-3 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => <CategoryTableRow key={category.id} category={category} />)}
                    {categories.length === 0 && (
                        <tr>
                            <td colSpan={6} className="px-5 py-8 text-center text-sm text-gray-500">Nenhuma categoria encontrada.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
