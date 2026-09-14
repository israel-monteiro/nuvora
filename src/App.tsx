import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./router-tree-gen";
import { FinanceProvider } from "./contexts/FinanceProvider";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <FinanceProvider>
            <RouterProvider router={router} />;
        </FinanceProvider>
    );
}

export default App;
