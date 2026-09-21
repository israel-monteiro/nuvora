import type { Category } from "../../interfaces/categories";
import type { Transaction } from "../../interfaces/transaction";
import { TransactionTableRow } from "./TransactionTableRow";

interface TransactionTableProps {
    transactions: Transaction[];
    categories: Category[];
}
export const TransactionTable = ({transactions,categories}: TransactionTableProps ) => {
    return (
        <>
            <div className="rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
                <table className="w-full">
                    <thead className="border-b border-gray-200">
                        <tr className="text-left text-xs font-semibold uppercase text-gray-500">
                            <th className="px-5 py-3">Descrição</th>
                            <th className="px-5 py-3">Categoria</th>
                            <th className="px-5 py-3">Data</th>
                            <th className="px-5 py-3">Tipo</th>
                            <th className="px-5 py-3">Valor</th>
                            <th className="px-5 py-3 text-center">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction) => (
                            <TransactionTableRow
                                key={transaction.id}
                                transaction={transaction}
                                categories={categories}
                            />
                        ))}
                    </tbody>
                </table>
                
            </div>
        </>
    );
};
