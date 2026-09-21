import { useContext } from "react";
import { Search } from "lucide-react";
import { FinanceContext } from "../../contexts/FinanceContext";

export const TransactionFilters = () => {
    const { categories } = useContext(FinanceContext);
    return (
        <>
            <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.8fr_1fr_1fr]">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            placeholder="Buscar movimentação..."
                            aria-label="Buscar movimentação"
                            className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
                        />
                    </div>

                    <select
                        name="type"
                        id="type"
                        aria-label="Filtrar por tipo"
                        className="h-11 w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
                    >
                        <option value="">Todos os tipos</option>
                        <option value="income">Receita</option>
                        <option value="expense">Despesa</option>
                    </select>

                    <select
                        name="category"
                        id="category"
                        aria-label="Filtrar por categoria"
                        className="h-11 w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
                    >
                        <option value="">Todas as categorias</option>

                        {categories.map((category) => (
                            <option value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};
