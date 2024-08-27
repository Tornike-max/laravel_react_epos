import { AboutType } from "@/types/types";
import { motion } from "framer-motion";

const AboutBox = ({ data }: { data: AboutType | any }) => {
    return (
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
        >
            <div className="bg-gray-800 text-gray-200 overflow-hidden shadow-sm sm:rounded-lg mx-4">
                <div className="p-6">
                    <div className="max-w-lg w-full flex flex-col gap-6">
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <p className="font-semibold text-gray-300">
                                Company Name:
                            </p>
                            <p>{data.companyName}</p>
                        </div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <p className="font-semibold text-gray-300">
                                Date of Foundation:
                            </p>
                            <p>{data.founded_at}</p>
                        </div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <p className="font-semibold text-gray-300">
                                Address:
                            </p>
                            <p>
                                {data.Address.includes("Hong Kong") &&
                                    "Hong Kong"}
                            </p>
                        </div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <p className="font-semibold text-gray-300">
                                DUNS Number:
                            </p>
                            <p>{data.DUNS}</p>
                        </div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <p className="font-semibold text-gray-300">
                                Description of Business:
                            </p>
                            <p>{data.businessDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutBox;
