import type { ReactNode } from "react";
import { formatCurrency } from "../../utils/format-currency";
import { ChevronRight } from "lucide-react";

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
        <div className="flex min-w-0 items-center gap-4 rounded-xl border border-gray-100 bg-white px-4 py-4 sm:gap-5 sm:px-6 sm:py-5 md:flex-col md:items-center md:text-center xl:flex-row xl:items-center xl:text-left">
            <div className={`flex size-12 shrink-0 items-center justify-center rounded-full ${styles.icon}`}>
                {icon}
            </div>

            <div className="min-w-0 flex-1 md:w-full md:flex-none xl:w-auto xl:flex-1">
                <span className="text-xs font-medium text-gray-600">{title}</span>

                <h2 className={`wrap-anywhere text-xl font-bold leading-tight sm:text-2xl ${styles.value}`}>
                    {formatCurrency(value)}
                </h2>

                <span className="mt-1 block text-xs text-gray-400">{description}</span>
            </div>

            <ChevronRight className="size-5 shrink-0 text-gray-400 sm:hidden" />
        </div>
    );
};
