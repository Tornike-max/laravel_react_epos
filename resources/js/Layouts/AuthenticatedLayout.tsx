import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import ToggleDark from "@/ui/ToggleDark";
import { useDarkMode } from "@/context/useDarkMode";

export default function Authenticated({
    user,
    header,
    links,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode; links?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const { isDark } = useDarkMode();

    const bgColor = isDark ? "bg-gray-900" : "bg-gray-200";
    const textColor = isDark ? "text-gray-100" : "text-gray-800";
    const navBgColor = isDark
        ? "bg-gray-800 border-gray-700"
        : "bg-gray-100 border-gray-300";
    const linkTextColor = isDark
        ? "text-gray-200 hover:text-white"
        : "text-gray-800 hover:text-black";
    const dropdownTextColor = isDark
        ? "text-gray-400 hover:text-gray-300 hover:bg-gray-700"
        : "text-gray-600 hover:text-gray-800 hover:bg-gray-100";

    return (
        <div className={`min-h-screen ${bgColor} ${textColor}`}>
            <nav className={`border-b ${navBgColor}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo src="/images/epos.png" />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("products.index")}
                                    active={route().current("products.index")}
                                    className={linkTextColor}
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    href={route("press-release.index")}
                                    active={route().current(
                                        "press-release.index"
                                    )}
                                    className={linkTextColor}
                                >
                                    Press Release
                                </NavLink>
                                <NavLink
                                    href={route("company.index", "about")}
                                    active={route().current("company.index")}
                                    className={linkTextColor}
                                >
                                    Company
                                </NavLink>
                                <NavLink
                                    href={route("support.index")}
                                    active={route().current("support.index")}
                                    className={linkTextColor}
                                >
                                    Support
                                </NavLink>
                            </div>
                        </div>
                        {user && user.is_admin === 1 && (
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <Link
                                    className={`hover:text-blue-400 duration-300 transition-all font-semibold ${linkTextColor}`}
                                    href={route("admin")}
                                >
                                    Admin Panel
                                </Link>
                            </div>
                        )}
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <ToggleDark />
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (prevState) => !prevState
                                    )
                                }
                                className={`inline-flex items-center justify-center p-2 rounded-md ${dropdownTextColor} transition duration-150 ease-in-out`}
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className={`p-2 space-y-1 ${navBgColor}`}>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                            className={linkTextColor}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("products.index")}
                            active={route().current("products.index")}
                            className={linkTextColor}
                        >
                            Products
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("press-release.index")}
                            active={route().current("press-release.index")}
                            className={linkTextColor}
                        >
                            Press Release
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("company.index", "about")}
                            active={route().current("company.index")}
                            className={linkTextColor}
                        >
                            Company
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("support.index")}
                            active={route().current("support.index")}
                            className={linkTextColor}
                        >
                            Support
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>
            {header && (
                <header className={`${navBgColor} shadow`}>
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            {links && (
                <div className={`${navBgColor} shadow`}>
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {links}
                    </div>
                </div>
            )}
            <main>{children}</main>
        </div>
    );
}
