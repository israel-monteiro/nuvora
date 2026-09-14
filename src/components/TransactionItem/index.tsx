import type { Transaction } from "../../interfaces/transaction";
import { ArrowDown, ArrowUp } from "lucide-react";
import { formatCurrency } from "../../utils/format-currency";
import type { Category } from "../../interfaces/categories";

interface TransactionItemProps {
    transaction: Transaction;
    categories: Category[];
}

const variants = {
    income: {
        iconStyle: "bg-emerald-50 text-emerald-700",
        valueStyle: "text-emerald-700",
        icon: <ArrowUp className="size-6" />,
        signal: "",
    },
    expense: {
        iconStyle: "bg-red-50 text-red-600",
        valueStyle: "text-red-600",
        icon: <ArrowDown className="size-6" />,
        signal: "- ",
    },
};

export const TransactionItem = ({ transaction, categories }: TransactionItemProps) => {
    const styles = variants[transaction.type];

    const category = categories.find((category) => category.id === transaction.categoryId);

    return (
        <div className="flex items-center gap-4 border-b border-gray-100  last:border-b-0">
            <div className={`flex size-12 shrink-0 items-center justify-center rounded-full ${styles.iconStyle}`}>
                {styles.icon}
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-between gap-6">
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-900">{transaction.description}</p>

                    <span className="text-sm text-gray-400">{category?.name}</span>
                </div>

                <span className="shrink-0 text-sm text-gray-400">{transaction.date}</span>

                <span className={`w-28 shrink-0 text-right text-sm font-bold ${styles.valueStyle}`}>
                    {styles.signal}
                    {formatCurrency(transaction.value)}
                </span>
            </div>
        </div>
    );
};
