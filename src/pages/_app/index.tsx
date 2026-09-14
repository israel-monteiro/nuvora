import { createFileRoute } from "@tanstack/react-router";
import { SummaryCard } from "../../components/SummaryCards";
import { ArrowDown, ArrowUp, CalendarDays, ChevronDown, Plus, Wallet } from "lucide-react";

export const Route = createFileRoute("/_app/")({
    component: Dashboard,
});

function Dashboard() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 p-8">
                <header className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-950">Dashboard</h1>

                        <p className="mt-1 text-lg text-gray-500">Visão geral das suas finanças</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700">
                            <CalendarDays className="size-5" />
                            Setembro 2026
                            <ChevronDown className="size-4" />
                        </button>

                        <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                            <Plus className="size-5" />
                            Nova movimentação
                        </button>
                    </div>
                </header>
                <div className="grid grid-cols-3 gap-6">
                    <SummaryCard
                        icon={<Wallet />}
                        title={"Saldo atual"}
                        value={3250}
                        description={"Seu saldo neste mês"}
                    />
                    <SummaryCard
                        icon={<ArrowUp />}
                        title={"Receitas"}
                        value={5000}
                        description={"Total de entradas no mês"}
                        variant="income"
                    />
                    <SummaryCard
                        icon={<ArrowDown />}
                        title={"Despesas"}
                        value={1750}
                        description={"Total de saídas no mês"}
                        variant="expense"
                    />
                </div>
                <div></div>
            </div>
        </>
    );
}
