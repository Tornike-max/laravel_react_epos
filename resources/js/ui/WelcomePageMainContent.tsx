import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";

const WelcomePageMainContent = () => {
    return (
        <main className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                <a
                    href={route("products.index")}
                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20] opacity-80 hover:opacity-90"
                >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                        <AiOutlineProduct className="text-3xl text-red-600" />
                    </div>

                    <div className="pt-3 sm:pt-5">
                        <h2 className="text-xl font-semibold text-black dark:text-white">
                            Products
                        </h2>

                        <p className="mt-4 text-sm/relaxed">
                            Welcome to our exciting games! One of our latest is
                            Babylon, featuring thrilling gameplay and stunning
                            graphics. Dive into the action and start your gaming
                            journey with us today!
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
                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20] opacity-80 hover:opacity-90"
                >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                        <HiOutlineNewspaper className="text-3xl text-red-600" />
                    </div>

                    <div className="pt-3 sm:pt-5">
                        <h2 className="text-xl font-semibold text-black dark:text-white">
                            Press Release
                        </h2>

                        <p className="mt-4 text-sm/relaxed">
                            We’re excited to announce Babylon, our newest arcade
                            game. Featuring stunning visuals and engaging
                            gameplay, Babylon offers a thrilling experience. Get
                            ready for a new level of fun and adventure with
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
                className="flex mt-6 lg:mt-8 items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20] opacity-80 hover:opacity-90"
            >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                    <IoBagOutline className="text-3xl text-red-600" />
                </div>
                <div className="pt-3 sm:pt-5">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                        Company
                    </h2>

                    <p className="mt-4 text-sm/relaxed">
                        At Epos Software Limited, we are dedicated to creating
                        immersive and innovative gaming experiences. Explore our
                        diverse range of games designed to captivate and
                        entertain. Stay tuned for exciting updates and new
                        releases from our passionate team.
                    </p>
                </div>
            </a>
        </main>
    );
};

export default WelcomePageMainContent;
