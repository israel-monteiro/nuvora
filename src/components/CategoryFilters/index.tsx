import { Search } from "lucide-react";

interface CategoryFiltersProps {
    search: string;
    type: string;
    sortOrder: "asc" | "desc";
    onSearchChange: (value: string) => void;
    onTypeChange: (alue: string) => void;
    onSortOrderChange: (value: "asc" | "desc") => void;
}

export const CategoryFilters = ({
    search,
    type,
    sortOrder,
    onSearchChange,
    onTypeChange,
    onSortOrderChange,
}: CategoryFiltersProps) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.8fr_1fr_1fr]">
                <div className="relative min-w-0">
                    <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar categoria..."
                        aria-label="Buscar categoria"
                        value={search}
                        onChange={(event) => onSearchChange(event.target.value)}
                        className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
                    />
                </div>
                <select
                    aria-label="Filtrar por tipo"
                    value={type}
                    onChange={(event) => {
                        const value = event.target.value;
                        if (value === "" || value === "income" || value === "expense") onTypeChange(value);
                    }}
                    className="h-11 min-w-0 w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
                >
                    <option value="">Todos os tipos</option>
                    <option value="income">Receita</option>
                    <option value="expense">Despesa</option>
                </select>
                <select
                    aria-label="Ordenar categorias por nome"
                    value={sortOrder}
                    onChange={(event) => {
                        const value = event.target.value;
                        if (value === "asc" || value === "desc") onSortOrderChange(value);
                    }}
                    className="h-11 min-w-0 w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
                >
                    <option value="asc">Ordenar por nome (A-Z)</option>
                    <option value="desc">Ordenar por nome (Z-A)</option>
                </select>
            </div>
        </div>
    );
};
