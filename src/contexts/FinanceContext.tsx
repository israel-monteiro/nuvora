import { createContext } from "react";
import type { Transaction } from "../interfaces/transaction";
import type { Category, ExpenseByCategory } from "../interfaces/categories";

interface FinanceContext {
    transactions: Transaction[];
    categories: Category[];
    expenses: Transaction[];
    expensesByCategory: ExpenseByCategory[];
    totalIncome: number;
    totalExpenses: number;
    balance: number;
}

export const FinanceContext = createContext({} as FinanceContext);
