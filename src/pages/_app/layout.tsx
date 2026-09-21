import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";
import { MobileNavbar } from "../../components/MobileNavbar";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_app")({
    component: AppLayout,
});

function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (!isSidebarOpen) return; // Se for false retorna

        const previousOverflow = document.body.style.overflow; // não sei

        document.body.style.overflow = "hidden"; // sei que esta escondendo

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isSidebarOpen]); // Sempre que mudar o useEffect é execultado

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <div className="flex min-h-screen flex-col lg:ml-65">
                <main className="min-w-0 flex-1 bg-gray-50">
                    <MobileNavbar isOpen={isSidebarOpen} onOpen={() => setIsSidebarOpen(true)} />

                    <Outlet />
                </main>

                <Footer />
            </div>
        </>
    );
}
