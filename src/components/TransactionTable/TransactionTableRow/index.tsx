import type { Transaction } from "../../../interfaces/transaction";
import type { Category } from "../../../interfaces/categories";
import { formatDate } from "../../../utils/formatDate";
import { formatCurrency } from "../../../utils/format-currency";
import { ArrowDown, ArrowUp, Pencil, Trash2 } from "lucide-react";

interface TransactionTableRowProps {
    transaction: Transaction;
    categories: Category[];
}

const variants = {
    income: {
        label: "Receita",
        typeStyle: "bg-emerald-50 text-emerald-700",
        valueStyle: "text-emerald-700",
        signal: "+ ",
        icon: ArrowUp,
    },
    expense: {
        label: "Despesa",
        typeStyle: "bg-red-50 text-red-600",
        valueStyle: "text-red-600",
        signal: "- ",
        icon: ArrowDown,
    },
};

export const TransactionTableRow = ({ transaction, categories }: TransactionTableRowProps) => {
    const category = categories.find((category) => category.id === transaction.categoryId);
    const variant = variants[transaction.type];
    const Icon = variant?.icon;
    const CategoryIcon = category?.icon;

    return (
        <tr className="border-b border-gray-100 last:border-b-0">
            {/* Descrição */}
            <td className="px-5 py-2.5">
                <div className="flex items-center gap-3">
                    <div
                        className="flex size-9 shrink-0 items-center justify-center rounded-full"
                        style={{
                            backgroundColor: `${category?.color}18`,
                            color: category?.color,
                        }}
                    >
                        {CategoryIcon && <CategoryIcon className="size-4" strokeWidth={2.5} />}
                    </div>

                    <span className="text-sm font-medium text-gray-900">{transaction.description}</span>
                </div>
            </td>

            {/* Categoria */}
            <td className="px-5 py-2.5 text-sm text-gray-500">{category?.name}</td>

            {/* Data */}
            <td className="whitespace-nowrap px-5 py-3 text-sm text-gray-500">{formatDate(transaction.date)}</td>

            {/* Tipo */}
            <td className="px-5 py-2.5">
                <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm ${variant.typeStyle}`}>
                    <Icon className="size-4" />
                    {variant.label}
                </span>
            </td>

            {/* Valor */}
            <td className={`whitespace-nowrap px-5 py-2.5 text-sm font-semibold ${variant.valueStyle}`}>
                {variant.signal}
                {formatCurrency(transaction.value)}
            </td>

            {/* Ações */}
            <td className="px-5 py-2.5">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        aria-label="Editar movimentação"
                        className="cursor-pointer text-slate-600 transition hover:text-slate-900"
                    >
                        <Pencil className="size-4" />
                    </button>

                    <button
                        type="button"
                        aria-label="Excluir movimentação"
                        className="cursor-pointer text-red-500 transition hover:text-red-700"
                    >
                        <Trash2 className="size-4" />
                    </button>
                </div>
            </td>
        </tr>
    );
};
