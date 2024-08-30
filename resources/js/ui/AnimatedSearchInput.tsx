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

    const handleFocus = () => {
        setIsFocused(true);
        inputControls.start({ scale: 1.05 });
    };

    const handleBlur = () => {
        setIsFocused(false);
        inputControls.start({ scale: 1 });
    };

    // Debounced search function
    const handleSearch = (query: string) => {
        setData("title", query);
        get(route(routePath), {
            preserveState: true,
            only: ["searchedProducts"],
        });
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value);
    };

    return (
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
                onBlur={handleBlur}
                onChange={handleChange}
                value={data.title}
            />
        </div>
    );
};

export default AnimatedSearchInput;
