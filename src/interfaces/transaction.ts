export interface Transaction {
    id: number;
    description: string;
    value: number;
    type: "income" | "expense";
    categoryId: number;
    date: string;
}