import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";

const Index = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    History
                </h2>
            }
        >
            <Head title="History" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.3,
                        delay: 0.2,
                    }}
                    className="w-full flex flex-col items-start justify-center gap-4 sm:pt-4"
                >
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <div
                            className={`w-full flex items-center justify-start gap-4 text-base font-medium  `}
                        >
                            <Tooltip title="About" arrow enterDelay={500}>
                                <span
                                    onClick={() => {}}
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300"
                                >
                                    About
                                </span>
                            </Tooltip>
                            <span>|</span>
                            <Tooltip title="History" arrow enterDelay={500}>
                                <span
                                    onClick={() => {}}
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300"
                                >
                                    History
                                </span>
                            </Tooltip>
                            <span>|</span>
                            <Tooltip title="Access" arrow enterDelay={500}>
                                <span
                                    onClick={() => {}}
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300"
                                >
                                    Access
                                </span>
                            </Tooltip>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
