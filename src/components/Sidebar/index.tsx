import logoNuvora from "@/assets/images/logo/logo-nuvora.png";
import { House, ArrowLeftRight, Tag, Settings, User } from "lucide-react";

export const Sidebar = () => {
    return (
        <>
            <aside className="fixed inset-y-0 left-0 hidden w-65 flex-col justify-between border-r border-slate-200 bg-white px-5 py-6 shadow-sm lg:flex">
                <div>
                    <a href="/" className="mb-8 flex items-center gap-3 px-2">
                        <img src={logoNuvora} alt="Nuvora" className="w-10" />
                        <span className="text-2xl font-bold text-slate-950">Nuvora</span>
                    </a>

                    <nav>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center gap-4 rounded-lg bg-[#F0F8F5] px-4 py-3 text-sm font-bold text-[#087A5B]"
                                >
                                    <House className="size-5 stroke-3" />
                                    Dashboard
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/movimentacoes"
                                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 hover:font-bold"
                                >
                                    <ArrowLeftRight className="size-5 group-hover:stroke-3" />
                                    Movimentações
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/categorias"
                                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 hover:font-bold"
                                >
                                    <Tag className="size-5 group-hover:stroke-3" />
                                    Categorias
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="border-t border-slate-200 pt-5">
                    <a
                        href="/configuracoes"
                        className="mb-4 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                    >
                        <Settings className="size-5" />
                        Configurações
                    </a>

                    <div className="flex items-center gap-3 px-2">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <User className="size-5 text-slate-500" />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-slate-900">João Silva</p>

                            <span className="block truncate text-xs text-slate-400">joao@email.com</span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};
