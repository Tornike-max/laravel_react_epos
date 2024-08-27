import { AboutType } from "@/types/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AccessBox = ({ data }: { data: AboutType | any }) => {
    const [loadingIframe, setLoadingIframe] = useState(true);

    useEffect(() => {
        setLoadingIframe(false);
    }, []);

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
                    <div className="w-full flex flex-col items-center py-8 gap-8">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                            <p className="max-w-[200px] w-full font-semibold text-sm sm:text-base md:text-lg text-gray-300">
                                Map
                            </p>
                            {loadingIframe && (
                                <div className="max-w-[1000px] w-full min-h-96 rounded-xl animate-pulse bg-gray-700"></div>
                            )}
                            <iframe
                                className={`border-0 max-w-[1000px] w-full min-h-96 rounded-xl ${
                                    !loadingIframe ? "visible" : "hidden"
                                }`}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.019036614436!2d114.20480327529513!3d22.39063977962175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340406471228bbc7%3A0x2611f10f25c8eb38!2sI.T.%20OUTSOURCING!5e0!3m2!1ska!2sge!4v1718089570127!5m2!1ska!2sge"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                onLoad={() => setLoadingIframe(false)}
                            ></iframe>
                        </div>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p className="w-full font-semibold text-sm sm:text-base md:text-lg text-gray-300">
                                Address
                            </p>
                            <p className="w-full text-sm sm:text-base md:text-lg">
                                {data.Address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AccessBox;
