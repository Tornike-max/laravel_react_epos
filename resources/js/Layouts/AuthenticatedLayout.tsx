import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { User } from "@/types";

export default function Authenticated({
    user,
    header,
    links,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode; links?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <nav className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo src="/images/epos.png" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("products.index")}
                                    active={route().current("products.index")}
                                    className="text-gray-200 hover:text-white"
                                >
                                    Products
                                </NavLink>

                                <NavLink
                                    href={route("press-release.index")}
                                    active={route().current(
                                        "press-release.index"
                                    )}
                                    className="text-gray-200 hover:text-white"
                                >
                                    Press Release
                                </NavLink>

                                <NavLink
                                    href={route("company.index", "about")}
                                    active={route().current("company.index")}
                                    className="text-gray-200 hover:text-white"
                                >
                                    Company
                                </NavLink>

                                <NavLink
                                    href={route("support.index")}
                                    active={route().current("support.index")}
                                    className="text-gray-200 hover:text-white"
                                >
                                    Support
                                </NavLink>
                            </div>
                        </div>

                        {user && user.is_admin === 1 ? (
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Link
                                        className="hover:text-blue-400 duration-300 transition-all font-semibold text-gray-300"
                                        href={route("admin")}
                                    >
                                        Admin Panel
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-gray-300 transition duration-150 ease-in-out"
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
                    <div className="p-2 space-y-1 bg-gray-800">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                            className="text-gray-300 hover:text-white"
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="p-2 space-y-1 bg-gray-800">
                        <ResponsiveNavLink
                            href={route("products.index")}
                            active={route().current("products.index")}
                            className="text-gray-300 hover:text-white"
                        >
                            Products
                        </ResponsiveNavLink>
                    </div>
                    <div className="p-2 space-y-1 bg-gray-800">
                        <ResponsiveNavLink
                            href={route("press-release.index")}
                            active={route().current("press-release.index")}
                            className="text-gray-300 hover:text-white"
                        >
                            Press Release
                        </ResponsiveNavLink>
                    </div>
                    <div className="p-2 space-y-1 bg-gray-800">
                        <ResponsiveNavLink
                            href={route("company.index", "about")}
                            active={route().current("company.index")}
                            className="text-gray-300 hover:text-white"
                        >
                            Company
                        </ResponsiveNavLink>
                    </div>
                    <div className="p-2 space-y-1 bg-gray-800">
                        <ResponsiveNavLink
                            href={route("support.index")}
                            active={route().current("support.index")}
                            className="text-gray-300 hover:text-white"
                        >
                            Support
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            {links && (
                <div className="bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {links}
                    </div>
                </div>
            )}

            <main>{children}</main>
        </div>
    );
}
