import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? "border-indigo-400 text-indigo-400 bg-gray-800 focus:text-indigo-500 focus:bg-gray-700 focus:border-indigo-500"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:bg-gray-700 hover:border-gray-600 focus:text-gray-300 focus:bg-gray-700 focus:border-gray-600"
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
