import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { formatDate } from "@/ui/formatDate";
import generateImagePath from "@/ui/generateImagePath";
import { Head, Link } from "@inertiajs/react";
import { Divider } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
    HiOutlineDocumentArrowDown,
    HiOutlineVideoCamera,
} from "react-icons/hi2";

const Show = ({ auth, product }: PageProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const sliderControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            sliderControls.start("visible");
        }
    }, [isInView]);

    const handleNavigate = (url: string) => {
        if (url === "") return;
        window.location.href = url;
    };

    const imagePath =
        generateImagePath(
            typeof product?.image === "string" ? product.image : null
        ) || "path/to/default-image.jpg";

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-100 leading-tight">
                    Products
                </h2>
            }
        >
            <Head title="Dashboard" />

            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                }}
                className="py-12 px-4"
            >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-800 text-gray-200 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex justify-center items-center gap-4 p-4">
                            <img
                                className="max-w-lg w-full rounded-md"
                                src={imagePath}
                                alt=""
                            />
                            <div className="w-full flex justify-start items-start flex-col">
                                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-100">
                                    {product?.title}
                                </h1>
                                <p
                                    className={`text-sm sm:text-base flex items-center gap-2 text-gray-300`}
                                >
                                    <span>Release Date:</span>
                                    <span>
                                        {formatDate(product?.release || "")}
                                    </span>
                                </p>
                                <p
                                    className={`text-sm sm:text-base flex items-center gap-4 text-gray-300`}
                                >
                                    <span>Genre:</span>
                                    <span>{product?.genre}</span>
                                </p>
                                <p
                                    className={`text-sm sm:text-base flex items-center gap-4 text-gray-300`}
                                >
                                    <span>For:</span>
                                    <span>{product?.for}</span>
                                </p>
                                <div className="w-full py-2">
                                    <motion.a
                                        initial={{ scale: 0.9 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2,
                                        }}
                                        href={
                                            "https://www.youtube.com/watch?v=1NjOWtQ7S2o&list=PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz"
                                        }
                                        className=" px-3 py-2 md:px-4 md:py-3 text-lg flex items-center gap-2 font-medium bg-blue-700 hover:bg-blue-800 text-white w-fit  transform duration-500 transition-all rounded-lg"
                                    >
                                        <HiOutlineVideoCamera />
                                        <span>Trailer</span>
                                    </motion.a>
                                </div>

                                <div className="w-full flex items-center justify-center flex-col pt-4 gap-2">
                                    <motion.button
                                        onClick={() =>
                                            handleNavigate(
                                                product?.gameUrl || ""
                                            )
                                        }
                                        className={`py-2 px-3 w-full rounded-md bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-2 text-slate-100 text-xs md:text-sm lg:text-base duration-500 transition-all ${
                                            product?.gameUrl
                                                ? "cursor-pointer"
                                                : "cursor-not-allowed"
                                        }`}
                                        initial={{ scale: 0.9 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2,
                                        }}
                                    >
                                        <HiOutlineDocumentArrowDown />
                                        <span>Download apk for android</span>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                        <Divider
                            variant="fullWidth"
                            className="bg-gray-600 px-4"
                        />
                        <div className="w-full flex items-start justify-center flex-col gap-4 p-4">
                            <h3
                                className={`w-full text-start text-xl sm:text-2xl font-semibold text-gray-100`}
                            >
                                Product Summary
                            </h3>
                            <div className={`w-full text-start`}>
                                <p
                                    className={`font-medium text-base sm:text-lg text-gray-400`}
                                >
                                    {product?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AuthenticatedLayout>
    );
};

export default Show;
