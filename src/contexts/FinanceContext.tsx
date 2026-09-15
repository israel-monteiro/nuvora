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
    selectedMonth: number;
    selectedYear: number;
    setSelectedMonth: (month: number) => void;
    setSelectedYear: (year: number) => void;
    filteredTransactions: Transaction[];
}

export const FinanceContext = createContext({} as FinanceContext);
