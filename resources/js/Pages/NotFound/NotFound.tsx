import React from "react";
import { motion } from "framer-motion";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const NotFound = ({ auth, message }: PageProps) => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-100 leading-tight">
                    Press Release
                </h2>
            }
        >
            <Head title="Press Release" />
            <main className="grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-base font-semibold text-indigo-400">
                        404
                    </p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Not found
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-400">
                        {message}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button
                            onClick={handleGoBack}
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </button>
                        <Link
                            href={route("support.index")}
                            className="text-sm font-semibold text-gray-300 hover:text-gray-100 transition-colors duration-500"
                        >
                            Contact support
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </motion.div>
            </main>
        </AuthenticatedLayout>
    );
};

export default NotFound;
