interface PageHeaderProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

export const PageHeader = ({ title, subtitle, children }: PageHeaderProps) => {
    return (
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">{title}</h1>

                <p className="mt-1 text-sm text-gray-500 sm:text-lg">{subtitle}</p>
            </div>

            {children && (
                <div className="flex w-full items-center gap-4 max-[376px]:flex-col max-[375px]:items-stretch sm:w-auto">
                    {children}
                </div>
            )}
        </header>
    );
};
