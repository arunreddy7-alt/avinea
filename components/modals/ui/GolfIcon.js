export function GolfIcon({ className = "w-6 h-6" }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M12 22v-8" />
            <path d="M12 8v4" />
            <path d="M12 8V4" />
            <path d="M12 4h6" />
            <path d="M12 4l-2 2" />
            <path d="M12 4l2 2" />
        </svg>
    );
}

