import { Menu } from "lucide-react";
import logoNuvora from "@/assets/images/logo/logo-nuvora.png";
import type { MouseEvent } from "react";

interface MobileNavBarProps {
    onOpen: (event: MouseEvent<HTMLButtonElement>) => void;
    isOpen: boolean;
}

export const MobileNavbar = ({ onOpen, isOpen }: MobileNavBarProps) => {
    return (
        <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:hidden">
            <div className="flex items-center gap-3">
                <img src={logoNuvora} alt="Nuvora" className="size-7" />

                <span className="text-xl font-bold text-gray-950">Nuvora</span>
            </div>

            <button
                type="button"
                onClick={onOpen}
                aria-label="Abrir menu"
                aria-expanded={isOpen}
                aria-controls="app-sidebar"
                className="flex size-10 cursor-pointer items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100"
            >
                <Menu className="size-6" />
            </button>
        </div>
    );
};
