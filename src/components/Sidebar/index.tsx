import logoNuvora from "@/assets/images/logo/logo-nuvora.png";
import { House, ArrowLeftRight, Tag, Settings, User, X } from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return (
        <>
            {/* Overlay mobile */}
            {isOpen && (
                <button
                    type="button"
                    aria-label="Fechar menu"
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
            )}

            <aside
                id="app-sidebar"
                aria-label="Menu principal"
                className={`
                    fixed inset-y-0 left-0 z-50
                    flex w-65 max-w-full flex-col justify-between gap-6
                    overflow-y-auto overscroll-contain
                    border-r border-slate-200 bg-white
                    px-5 py-6 shadow-sm
                    transition-transform duration-300
                    lg:translate-x-0

                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="shrink-0">
                    {/* Logo */}
                    <div className="mb-8 flex items-center justify-between">
                        <a href="/" className="flex items-center gap-3 px-2" onClick={onClose}>
                            <img src={logoNuvora} alt="Nuvora" className="w-10" />

                            <span className="text-2xl font-bold text-slate-950">Nuvora</span>
                        </a>

                        {/* Fechar - apenas mobile */}
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Fechar menu"
                            className="flex size-9 cursor-pointer items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 lg:hidden"
                        >
                            <X className="size-5" />
                        </button>
                    </div>

                    {/* Navegação */}
                    <nav>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a
                                    href="/"
                                    onClick={onClose}
                                    className="flex items-center gap-4 rounded-lg bg-[#F0F8F5] px-4 py-3 text-sm font-bold text-[#087A5B]"
                                >
                                    <House className="size-5 stroke-3" />
                                    Dashboard
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/movimentacoes"
                                    onClick={onClose}
                                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:font-bold hover:text-slate-900"
                                >
                                    <ArrowLeftRight className="size-5 group-hover:stroke-3" />
                                    Movimentações
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/categorias"
                                    onClick={onClose}
                                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:font-bold hover:text-slate-900"
                                >
                                    <Tag className="size-5 group-hover:stroke-3" />
                                    Categorias
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Rodapé */}
                <div className="shrink-0 border-t border-slate-200 pt-5">
                    <a
                        href="/configuracoes"
                        onClick={onClose}
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
