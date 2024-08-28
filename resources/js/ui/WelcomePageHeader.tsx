import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import React from "react";

const WelcomePageHeader = () => {
    return (
        <header className="grid grid-cols-2 items-center gap-2 py-2 lg:grid-cols-3">
            <div className="flex lg:justify-center lg:col-start-2">
                <ApplicationLogo src="/images/epos.png" />
            </div>
            <nav className="-mx-3 flex flex-1 justify-end">
                <nav className="flex items-center">
                    <Link
                        href={route("admin")}
                        className="rounded-md px-1 sm:px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white text-sm sm:text-base "
                    >
                        Admin Panel
                    </Link>
                    <Link
                        href={route("products.index")}
                        className="rounded-md px-1 sm:px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white text-sm sm:text-base"
                    >
                        Dashboard
                    </Link>
                </nav>
            </nav>
        </header>
    );
};

export default WelcomePageHeader;
