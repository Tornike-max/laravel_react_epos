import { useForm } from "@inertiajs/react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useDarkMode } from "@/context/useDarkMode";

const AnimatedSearchInput = ({
    routePath,
    placeholder,
}: {
    routePath: string;
    placeholder: string;
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const { data, setData, get } = useForm({ title: "" });
    const { isDark } = useDarkMode();

    const inputControls = useAnimation();
    const buttonControls = useAnimation();

    const handleFocus = () => {
        setIsFocused(true);
        inputControls.start({ scale: 1.05 });
    };

    const handleBlur = () => {
        setIsFocused(false);
        inputControls.start({ scale: 1 });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        get(route(routePath));
    };

    return (
        <form
            method="GET"
            onSubmit={onSubmit}
            className="flex items-center max-w-sm mx-auto"
        >
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <div className="relative w-full">
                <motion.div
                    className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    animate={inputControls}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <svg
                        className={`w-4 h-4 ${
                            isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                        />
                    </svg>
                </motion.div>
                <motion.input
                    type="text"
                    name="title"
                    id="simple-search"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ${
                        isDark
                            ? "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            : ""
                    } transition-colors duration-500`}
                    placeholder={placeholder}
                    required
                    onFocus={handleFocus}
                    onBlur={(e) => {
                        handleBlur();
                        setData("title", e.target.value);
                    }}
                    value={data.title}
                />
            </div>
            <motion.button
                type="submit"
                className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-500"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                <span className="sr-only">Search</span>
            </motion.button>
        </form>
    );
};

export default AnimatedSearchInput;
