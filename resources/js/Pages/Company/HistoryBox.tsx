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
                duration: 0.3,
                delay: 0.2,
            }}
        >
            {histories?.data.map((history) => (
                <div
                    key={history.id}
                    className="bg-white overflow-hidden shadow-sm sm:rounded-lg mx-4 my-4"
                >
                    <div className="p-6 text-gray-900">
                        <div className="w-full flex flex-col justify-center items-start gap-4">
                            <h1 className="font-bold text-lg sm:text-xl">
                                {formatDate(history.date)}
                            </h1>
                            <p className="font-medium text-sm sm:text-base text-gray-700">
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
