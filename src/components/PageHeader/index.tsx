interface PageHeaderProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

export const PageHeader = ({ title, subtitle, children }: PageHeaderProps) => {
    return (
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">{title}</h1>

                <p className="mt-1 text-sm text-gray-500 sm:text-lg">{subtitle}</p>
            </div>

            {children && (
                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">{children}</div>
            )}
        </header>
    );
};