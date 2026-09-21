import { ChevronLeft, ChevronRight } from "lucide-react";

interface TransactionPaginationProps {
    currentPage: number;
    totalPages: number;
    totalTransactions: number;
    startIndex: number;
    endIndex: number;
    onPageChange: (page: number) => void;
}

export const TransactionPagination = ({
    currentPage,
    totalPages,
    totalTransactions,
    startIndex,
    endIndex,
    onPageChange,
}: TransactionPaginationProps) => {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 px-5 py-3">
            <p className="text-sm text-gray-400">
                Mostrando {totalTransactions === 0 ? 0 : startIndex + 1} a {Math.min(endIndex, totalTransactions)} de{" "}
                {totalTransactions} movimentações
            </p>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1 || totalTransactions === 0}
                    type="button"
                    aria-label="Página anterior"
                    className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronLeft className="size-4" />
                </button>

                {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            type="button"
                            onClick={() => onPageChange(page)}
                            aria-current={currentPage === page ? "page" : undefined}
                            className={`flex size-9 cursor-pointer items-center justify-center rounded-lg text-sm font-semibold transition ${
                                currentPage === page
                                    ? "bg-emerald-700 text-white hover:bg-emerald-800"
                                    : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || totalTransactions === 0}
                    type="button"
                    aria-label="Próxima página"
                    className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronRight className="size-4" />
                </button>
            </div>
        </div>
    );
};
