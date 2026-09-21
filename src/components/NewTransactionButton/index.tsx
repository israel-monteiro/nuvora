import { Plus } from "lucide-react";

export const NewTransactionButton = () => {
    return (
        <button
            type="button"
            className="flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:px-5"
        >
            <Plus className="size-5 shrink-0" />
            <span>Nova movimentação</span>
        </button>
    );
};
