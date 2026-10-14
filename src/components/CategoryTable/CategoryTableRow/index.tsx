import { ArrowDown, ArrowUp, Pencil, Trash2 } from "lucide-react";
import type { CategorySummary } from "../../../interfaces/categories";
import { formatCurrency } from "../../../utils/format-currency";

const variants = {
    income: { label: "Receita", typeStyle: "bg-emerald-50 text-emerald-700", valueStyle: "text-emerald-700", signal: "+ ", icon: ArrowUp },
    expense: { label: "Despesa", typeStyle: "bg-red-50 text-red-600", valueStyle: "text-red-600", signal: "- ", icon: ArrowDown },
};

export const CategoryTableRow = ({ category }: { category: CategorySummary }) => {
    const variant = variants[category.type];
    const Icon = variant.icon;
    const CategoryIcon = category.icon;

    return (
        <tr className="border-b border-gray-100 last:border-b-0">
            <td className="px-5 py-2.5">
                <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${category.color}18`, color: category.color }}>
                        <CategoryIcon className="size-4" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{category.name}</span>
                </div>
            </td>
            <td className="px-5 py-2.5">
                <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm ${variant.typeStyle}`}>
                    <Icon className="size-4" />
                    {variant.label}
                </span>
            </td>
            <td className={`whitespace-nowrap px-5 py-2.5 text-sm font-semibold ${variant.valueStyle}`}>
                {variant.signal}{formatCurrency(category.total)}
            </td>
            <td className="px-5 py-2.5 text-center text-sm text-gray-500">{category.transactionCount}</td>
            <td className="px-5 py-2.5">
                <span className="mx-auto block size-4 rounded-full" style={{ backgroundColor: category.color }} role="img" aria-label={`Cor ${category.color}`} />
            </td>
            <td className="px-5 py-2.5">
                <div className="flex items-center justify-center gap-4">
                    <button type="button" aria-label={`Editar categoria ${category.name}`} className="cursor-pointer text-slate-600 transition hover:text-slate-900">
                        <Pencil className="size-4" />
                    </button>
                    <button type="button" aria-label={`Excluir categoria ${category.name}`} className="cursor-pointer text-red-500 transition hover:text-red-700">
                        <Trash2 className="size-4" />
                    </button>
                </div>
            </td>
        </tr>
    );
};
