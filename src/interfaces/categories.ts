export interface Category {
    id: number;
    name: string;
    color: string;
}

export interface ExpenseByCategory extends Category {
    value: number;
    percentage: number
}