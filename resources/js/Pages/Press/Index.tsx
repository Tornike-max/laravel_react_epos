import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useDarkMode } from "@/context/useDarkMode";
import AnimatedSearchInput from "@/ui/AnimatedSearchInput";
import { formatDate } from "@/ui/formatDate";
import NoDataInfo from "@/ui/NoDataInfo";

const Index = ({ auth, pressRelease }: PageProps) => {
    const { isDark } = useDarkMode();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const sliderControlls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            sliderControlls.start("visible");
        }
    }, [isInView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2
                    className={`font-semibold text-xl leading-tight ${
                        isDark ? "text-gray-100" : "text-gray-800"
                    }`}
                >
                    Press Release
                </h2>
            }
        >
            <Head title="Press Release" />
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                className="py-12 px-4"
            >
                <AnimatedSearchInput
                    routePath="press-release.index"
                    placeholder="Search by title..."
                />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        {pressRelease?.data.length !== 0 ? (
                            pressRelease?.data.map((press) => (
                                <div
                                    className={`flex flex-col justify-center items-start gap-4 p-4 my-2 ${
                                        isDark
                                            ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                                            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                                    } duration-500 transition-all overflow-hidden shadow-sm hover:shadow-lg sm:rounded-lg`}
                                    key={press.id}
                                >
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h1 className="text-lg font-semibold">
                                            {formatDate(press.date)}
                                        </h1>
                                        <p className="max-w-xl w-full text-base">
                                            {press.info}
                                        </p>
                                    </div>

                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h2 className="font-medium text-lg">
                                            {press.product.title}
                                        </h2>

                                        <p className="max-w-xl w-full text-base">
                                            {press.product.description}
                                        </p>
                                    </div>
                                    <Link
                                        href={route(
                                            "products.show",
                                            press.product.id
                                        )}
                                        className={`py-2 px-3 rounded-lg duration-500 transition-all ${
                                            isDark
                                                ? "text-slate-50 bg-blue-500 hover:bg-blue-600"
                                                : "text-slate-900 bg-blue-400 hover:bg-blue-500"
                                        }`}
                                    >
                                        See Full
                                    </Link>
                                    <div
                                        className={`w-full px-4 border-[2px] mt-4 ${
                                            isDark
                                                ? "border-gray-600"
                                                : "border-gray-300"
                                        }`}
                                    ></div>
                                </div>
                            ))
                        ) : (
                            <motion.div
                                ref={ref}
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.2,
                                }}
                                className="w-full flex justify-center items-center py-4"
                            >
                                <div
                                    className={`p-6 border rounded-lg shadow-md ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600"
                                            : "bg-gray-100 border-gray-300"
                                    }`}
                                >
                                    <p
                                        className={`text-lg font-semibold text-center ${
                                            isDark
                                                ? "text-gray-200"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        No Data Available
                                    </p>
                                    <p className="text-sm text-red-400">
                                        Currently, there are no press releases.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
        </AuthenticatedLayout>
    );
};

export default Index;
