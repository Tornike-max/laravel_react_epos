import { HistoryType } from "@/types/types";
import { formatDate } from "@/ui/formatDate";
import { motion } from "framer-motion";
import React from "react";

const HistoryBox = ({ data }: { data: HistoryType | any }) => {
    return (
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
        >
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mx-4">
                <div className="p-6 text-gray-900">
                    <div className="w-full flex flex-col justify-center items-start gap-4">
                        <h1 className="font-bold text-lg sm:text-xl">
                            {formatDate(data.date)}
                        </h1>
                        <p className="font-medium text-sm sm:text-base text-gray-700">
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HistoryBox;
