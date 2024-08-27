import { PageProps } from "@/types";
import { formatDate } from "@/ui/formatDate";
import Pagination from "@/ui/Pagination";
import { motion } from "framer-motion";

const HistoryBox = ({ histories }: PageProps) => {
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
            className="bg-gray-900 text-gray-200 w-full"
        >
            {histories?.data.map((history) => (
                <div
                    key={history.id}
                    className="bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mx-4 my-4"
                >
                    <div className="p-6">
                        <div className="w-full flex flex-col justify-center items-start gap-4">
                            <h1 className="font-bold text-lg sm:text-xl text-gray-100">
                                {formatDate(history.date)}
                            </h1>
                            <p className="font-medium text-sm sm:text-base text-gray-300">
                                {history.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <Pagination links={histories?.meta.links ?? []} />
        </motion.div>
    );
};

export default HistoryBox;
