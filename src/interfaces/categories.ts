import type { LucideIcon } from "lucide-react";

export interface Category {
    id: number;
    name: string;
    color: string;
    icon: LucideIcon;
}
export interface ExpenseByCategory extends Category {
    value: number;
    percentage: number;
}
