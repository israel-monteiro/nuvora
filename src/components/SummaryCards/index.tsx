import type { ReactNode } from "react";
import { formatCurrency } from "../../utils/format-currency";

type SummaryCardVariant = "default" | "income" | "expense";

interface SummaryCardProps {
    icon: ReactNode;
    title: string;
    value: number;
    description: string;
    variant?: SummaryCardVariant;
}

const variants = {
    default: {
        icon: "bg-gray-100 text-gray-600",
        value: "text-gray-950",
    },
    income: {
        icon: "bg-emerald-50 text-emerald-700",
        value: "text-emerald-700",
    },
    expense: {
        icon: "bg-red-50 text-red-600",
        value: "text-red-600",
    },
};

export const SummaryCard = ({ icon, title, value, description, variant = "default" }: SummaryCardProps) => {
    const styles = variants[variant];

    return (
        <div className="flex items-center justify-center gap-5 rounded-xl border border-gray-100 bg-white px-6 py-5">
            <div className={`flex size-12 shrink-0 items-center justify-center rounded-full ${styles.icon}`}>
                {icon}
            </div>

            <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-600">{title}</span>

                <h2 className={`text-2xl font-bold leading-tight ${styles.value}`}>{formatCurrency(value)}</h2>

                <span className="mt-1 text-xs text-gray-400">{description}</span>
            </div>
        </div>
    );
};
