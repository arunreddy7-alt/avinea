import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function Badge({ children, dark }) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold",
                dark ? "bg-white/10 text-accent border border-white/10" : "bg-black/5 text-accent-dark border border-black/5"
            )}
        >
            {children}
        </span>
    );
}
