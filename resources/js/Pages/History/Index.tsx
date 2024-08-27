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
                <h2 className="font-semibold text-xl text-gray-100 leading-tight">
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
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className="w-full flex items-center justify-start gap-4 sm:pt-4"
                >
                    <div
                        className={`w-full flex items-center justify-start gap-4 text-base font-medium`}
                    >
                        <Tooltip title="About" arrow enterDelay={500}>
                            <span
                                onClick={() => {}}
                                className="relative cursor-pointer hover:text-gray-300"
                            >
                                About
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-500"></span>
                            </span>
                        </Tooltip>
                        <span>|</span>
                        <Tooltip title="History" arrow enterDelay={500}>
                            <span
                                onClick={() => {}}
                                className="relative cursor-pointer hover:text-gray-300"
                            >
                                History
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-500"></span>
                            </span>
                        </Tooltip>
                        <span>|</span>
                        <Tooltip title="Access" arrow enterDelay={500}>
                            <span
                                onClick={() => {}}
                                className="relative cursor-pointer hover:text-gray-300"
                            >
                                Access
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-500"></span>
                            </span>
                        </Tooltip>
                    </div>
                </motion.div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
