import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function Section({ id, className, children, dark = false }) {
    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-32 px-6 transition-colors duration-500",
                dark ? "bg-bg-dark text-text-inv" : "bg-bg-light text-text-main",
                className
            )}
        >
            {children}
        </section>
    );
}