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

    const currentDate = new Date();

    const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

    const filteredTransactions = transactions.filter((transaction) => {
        const [year, month] = transaction.date.split("-").map(Number);

        return month === selectedMonth + 1 && year === selectedYear;
    });

    const income = filteredTransactions.filter((transaction) => transaction.type === "income");

    const totalIncome = income.reduce((sum, transaction) => sum + transaction.value, 0);

    const expenses = filteredTransactions.filter((transaction) => transaction.type === "expense");

    const totalExpenses = expenses.reduce((sum, transaction) => sum + transaction.value, 0);

    const expensesByCategory = categories.map((category) => {
        const categoryExpenses = expenses.filter((transaction) => transaction.categoryId === category.id);

        const total = categoryExpenses.reduce((sum, transaction) => sum + transaction.value, 0);

        const percentage = totalExpenses > 0 ? (total / totalExpenses) * 100 : 0;

        return {
            ...category,
            value: total,
            percentage,
        };
    });

    const balance = totalIncome - totalExpenses;

    return (
        <FinanceContext.Provider
            value={{
                transactions,
                categories,
                expenses,
                expensesByCategory,
                totalIncome,
                totalExpenses,
                balance,
                selectedMonth,
                setSelectedMonth,
                selectedYear,
                setSelectedYear,
                filteredTransactions,
            }}
        >
            {children}
        </FinanceContext.Provider>
    );
};
