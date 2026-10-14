import type { LucideIcon } from "lucide-react";

export interface Category {
    id: number;
    name: string;
    color: string;
    icon: LucideIcon;
    type: "income" | "expense";
}
export interface CategorySummary extends Category {
    total: number;
    transactionCount: number;
}
export interface ExpenseByCategory extends Category {
    value: number;
    percentage: number;
}
