import { useState } from "react";
import { transactions as mockTransactions } from "../mocks/transaction";
import { categories as mockCategories } from "../mocks/categories";
import { FinanceContext } from "./FinanceContext";
import type { Transaction } from "../interfaces/transaction";
import type { Category } from "../interfaces/categories";

interface FinanceProviderProps {
    children: React.ReactNode;
}

export const FinanceProvider = ({ children }: FinanceProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
    const [categories, setCategories] = useState<Category[]>(mockCategories);

    const income = transactions.filter((transaction) => transaction.type === "income");
    const totalIncome = income.reduce((sum, transaction) => sum + transaction.value, 0);

    const expenses = transactions.filter((transaction) => transaction.type === "expense");
    const totalExpenses = expenses.reduce((sum, transaction) => sum + transaction.value, 0);

    const expensesByCategory = categories.map((category) => {
        const categoryExpenses = expenses.filter((transaction) => transaction.categoryId === category.id);

        const total = categoryExpenses.reduce((sum, transaction) => sum + transaction.value, 0);

        return {
            ...category,
            value: total,
        };
    });

    const balance = totalIncome - totalExpenses;

    return (
        <FinanceContext.Provider
            value={{ transactions, categories, expenses, expensesByCategory, totalIncome, totalExpenses, balance }}
        >
            {children}
        </FinanceContext.Provider>
    );
};
