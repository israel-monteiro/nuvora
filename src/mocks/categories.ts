import {
    BriefcaseBusiness,
    ShoppingCart,
    Dumbbell,
    Car,
    Gamepad2,
    Shirt,
} from "lucide-react";
import type { Category } from "../interfaces/categories";

export const categories: Category[] = [
    {
        id: 1,
        name: "Salário",
        color: "#059669",
        icon: BriefcaseBusiness,
        type: "income",
    },
    {
        id: 2,
        name: "Alimentação",
        color: "#ef4444",
        icon: ShoppingCart,
        type: "expense",
    },
    {
        id: 3,
        name: "Saúde",
        color: "#8b5cf6",
        icon: Dumbbell,
        type: "expense",
    },
    {
        id: 4,
        name: "Transporte",
        color: "#3b82f6",
        icon: Car,
        type: "expense",
    },
    {
        id: 5,
        name: "Lazer",
        color: "#f97316",
        icon: Gamepad2,
        type: "expense",
    },
    {
        id: 6,
        name: "Outros",
        color: "#64748b",
        icon: Shirt,
        type: "expense",
    },
    {
        id: 7,
        name: "Freelance",
        color: "#64748b",
        icon: BriefcaseBusiness,
        type: "income",
    },
];
