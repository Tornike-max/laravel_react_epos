import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { useDarkMode } from "@/context/useDarkMode";

export default function Guest({ children }: PropsWithChildren) {
    const { isDark } = useDarkMode();

    const bgColor = isDark ? "bg-gray-900" : "bg-gray-100";
    const textColor = isDark ? "text-gray-100" : "text-gray-900";
    const cardBgColor = isDark ? "bg-gray-800" : "bg-white";
    const logoSrc = isDark ? "/images/dark-epos.png" : "/images/epos.png";

    return (
        <div
            className={`min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ${bgColor} ${textColor} transition-colors duration-500`}
        >
            <div>
                <Link href="/">
                    <ApplicationLogo src={logoSrc} />
                </Link>
            </div>

            <div
                className={`w-full sm:max-w-md mt-6 px-6 py-4 ${cardBgColor} shadow-md overflow-hidden sm:rounded-lg transition-colors duration-500`}
            >
                {children}
            </div>
        </div>
    );
}
