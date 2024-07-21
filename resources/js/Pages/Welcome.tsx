import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { AiOutlineProduct } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className=" min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-2 lg:grid-cols-3 ">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <ApplicationLogo src="/images/epos.png" />
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                <nav>
                                    <Link
                                        href={route("admin")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Admin Panel
                                    </Link>
                                    <Link
                                        href={route("products.index")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                </nav>
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <a
                                    href={route("products.index")}
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <AiOutlineProduct className="text-3xl text-red-600" />
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Products
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Welcome to our exciting games! One
                                            of our latest is Babylon, featuring
                                            thrilling gameplay and stunning
                                            graphics. Dive into the action and
                                            start your gaming journey with us
                                            today!
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href={route("press-release.index")}
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <HiOutlineNewspaper className="text-3xl text-red-600" />
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Press Release
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            We’re excited to announce Babylon,
                                            our newest arcade game. Featuring
                                            stunning visuals and engaging
                                            gameplay, Babylon offers a thrilling
                                            experience. Get ready for a new
                                            level of fun and adventure with
                                            Babylon!
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <a
                                href={route("press-release.index")}
                                className="flex mt-6 lg:mt-8 items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                            >
                                {" "}
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                    <IoBagOutline className="text-3xl text-red-600" />
                                </div>
                                <div className="pt-3 sm:pt-5 ">
                                    <h2 className="text-xl font-semibold text-black dark:text-white">
                                        Company
                                    </h2>

                                    <p className="mt-4 text-sm/relaxed">
                                        At Epos Software Limited, we are
                                        dedicated to creating immersive and
                                        innovative gaming experiences. Explore
                                        our diverse range of games designed to
                                        captivate and entertain. Stay tuned for
                                        exciting updates and new releases from
                                        our passionate team.
                                    </p>
                                </div>
                            </a>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
