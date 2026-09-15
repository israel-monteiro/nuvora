import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, useState } from "react";
import { FinanceContext } from "../../contexts/FinanceContext";
import { months } from "../../mocks/months";

export const CalendarButton = () => {
    const { selectedMonth, setSelectedMonth, selectedYear, setSelectedYear } = useContext(FinanceContext);

    const [isOpen, setIsOpen] = useState(false);

    const chosenMonth = months.find((month) => month.value === selectedMonth);

    return (
        <div className="relative w-full sm:w-52">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 lg:w-52"
            >
                <CalendarDays className="mr-3 size-5 shrink-0" />

                <span>
                    {chosenMonth?.name} {selectedYear}
                </span>

                <ChevronDown className="ml-auto size-4 shrink-0" />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white p-2 shadow-lg lg:w-52">
                    <div className="flex items-center justify-between px-2 py-2">
                        <button
                            type="button"
                            onClick={() => setSelectedYear(selectedYear - 1)}
                            className="cursor-pointer"
                        >
                            <ChevronLeft className="size-4" />
                        </button>

                        <strong>{selectedYear}</strong>

                        <button
                            type="button"
                            onClick={() => setSelectedYear(selectedYear + 1)}
                            className="cursor-pointer"
                        >
                            <ChevronRight className="size-4" />
                        </button>
                    </div>

                    {months.map((month) => (
                        <button
                            key={month.value}
                            type="button"
                            onClick={() => {
                                setSelectedMonth(month.value);
                                setIsOpen(false);
                            }}
                            className="block w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-gray-100"
                        >
                            {month.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
