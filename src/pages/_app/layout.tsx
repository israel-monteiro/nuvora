import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";

export const Route = createFileRoute("/_app")({
    component: AppLayout,
});

function AppLayout() {
    return (
        <>
            <Sidebar />

            <div className="flex min-h-screen flex-col lg:ml-65">
                <main className="min-w-0 flex-1 bg-gray-50">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </>
    );
}
