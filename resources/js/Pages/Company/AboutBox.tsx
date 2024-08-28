import { AboutType } from "@/types/types";
import { motion } from "framer-motion";
import { useDarkMode } from "@/context/useDarkMode";

const AboutBox = ({ data }: { data: AboutType | any }) => {
    const { isDark } = useDarkMode();

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
            className="transition-all duration-500"
        >
            <div
                className={`overflow-hidden shadow-sm sm:rounded-lg mx-4 p-6 transition-all duration-500 ${
                    isDark
                        ? "bg-gray-800 text-gray-200"
                        : "bg-gray-100 text-gray-800"
                }`}
            >
                <div className="max-w-lg w-full flex flex-col gap-6">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p className="font-semibold">Company Name:</p>
                        <p>{data.companyName}</p>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p className="font-semibold">Date of Foundation:</p>
                        <p>{data.founded_at}</p>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p className="font-semibold">Address:</p>
                        <p>
                            {data.Address.includes("Hong Kong") && "Hong Kong"}
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p className="font-semibold">DUNS Number:</p>
                        <p>{data.DUNS}</p>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p className="font-semibold">
                            Description of Business:
                        </p>
                        <p>{data.businessDesc}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutBox;
