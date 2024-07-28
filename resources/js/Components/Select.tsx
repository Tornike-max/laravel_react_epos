import React, {
    forwardRef,
    useEffect,
    useRef,
    SelectHTMLAttributes,
} from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    isFocused?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = "", isFocused = false, children, ...props }, ref) => {
        const localRef = useRef<HTMLSelectElement>(null);

        useEffect(() => {
            if (isFocused && localRef.current) {
                localRef.current.focus();
            }
        }, [isFocused]);

        return (
            <select
                {...props}
                className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className}`}
                ref={localRef}
            >
                {children}
            </select>
        );
    }
);

export default Select;
