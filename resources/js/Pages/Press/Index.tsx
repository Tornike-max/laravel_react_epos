import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { PressRelease } from "@/types/types";
import { formatDate } from "@/ui/formatDate";
import NoDataInfo from "@/ui/NoDataInfo";
import { Head, Link } from "@inertiajs/react";
import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Index = ({ auth, pressRelease }: PageProps) => {
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
                className="py-12 px-4"
            >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        {pressRelease?.data.length !== 0 ? (
                            pressRelease?.data.map((press) => (
                                <div
                                    className="flex flex-col justify-center items-start gap-4 bg-gray-800 hover:bg-gray-700 duration-500 transition-all overflow-hidden shadow-sm hover:shadow-lg sm:rounded-lg p-4 my-2"
                                    key={press.id}
                                >
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h1 className="text-lg text-gray-200 font-semibold">
                                            {formatDate(press.date)}
                                        </h1>
                                        <p className="max-w-xl w-full text-base text-gray-300">
                                            {press.info}
                                        </p>
                                    </div>

                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h2 className="font-medium text-gray-200 text-lg">
                                            {press.product.title}
                                        </h2>

                                        <p className="max-w-xl w-full text-base text-gray-300">
                                            {press.product.description}
                                        </p>
                                    </div>
                                    <Link
                                        href={route(
                                            "products.show",
                                            press.product.id
                                        )}
                                        className="py-2 px-3 rounded-lg text-slate-50 bg-blue-500 hover:bg-blue-600 hover:text-slate-100 duration-500 transition-all"
                                    >
                                        See Full
                                    </Link>
                                    <div className="w-full px-4 border-[2px] mt-4 border-gray-600"></div>
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
                                <div className="p-6 bg-gray-700 border border-gray-600 rounded-lg shadow-md">
                                    <p className="text-lg font-semibold text-center text-gray-200">
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
