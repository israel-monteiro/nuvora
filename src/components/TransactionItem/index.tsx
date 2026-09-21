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
        icon: <ArrowUp className="size-4 sm:size-6" />,
        signal: "",
    },
    expense: {
        iconStyle: "bg-red-50 text-red-600",
        valueStyle: "text-red-600",
        icon: <ArrowDown className="size-4 sm:size-6" />,
        signal: "- ",
    },
};

export const TransactionItem = ({ transaction, categories }: TransactionItemProps) => {
    const styles = variants[transaction.type];

    const category = categories.find((category) => category.id === transaction.categoryId);
    const formattedDate = transaction.date.split("-").reverse().join("/");

    return (
        <div className="grid grid-cols-[32px_minmax(0,1fr)_auto] items-start gap-x-2 gap-y-0.5 border-b border-gray-100 py-3 last:border-b-0 sm:flex sm:items-center sm:gap-4">
            <div className={`row-span-2 flex size-8 shrink-0 items-center justify-center rounded-full sm:size-12 ${styles.iconStyle}`}>
                {styles.icon}
            </div>

            {/* Descrição / categoria / data */}
            <div className="contents sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-between sm:gap-3">
                <div className="contents sm:block sm:min-w-0 sm:flex-1">
                    <p className="col-start-2 row-start-1 min-w-0 wrap-anywhere text-sm font-semibold text-gray-900 sm:truncate">{transaction.description}</p>

                    <div className="col-span-2 col-start-2 row-start-2 min-w-0 text-sm text-gray-400">
                        <span className="wrap-anywhere sm:block sm:truncate">{category?.name}</span>
                        <span className="whitespace-nowrap text-xs sm:hidden">
                            {category?.name && <span aria-hidden="true"> • </span>}
                            {formattedDate}
                        </span>
                    </div>
                </div>

                {/* Data no desktop */}
                <span className="hidden shrink-0 text-sm text-gray-400 sm:block">{formattedDate}</span>

                {/* Valor desktop */}
                <span className={`hidden shrink-0 whitespace-nowrap text-right text-sm font-bold sm:block ${styles.valueStyle}`}>
                    {styles.signal}
                    {formatCurrency(transaction.value)}
                </span>
            </div>

            {/* Valor mobile */}
            <span className={`col-start-3 row-start-1 whitespace-nowrap text-right text-xs font-bold sm:hidden ${styles.valueStyle}`}>
                {styles.signal}
                {formatCurrency(transaction.value)}
            </span>
        </div>
    );
};
