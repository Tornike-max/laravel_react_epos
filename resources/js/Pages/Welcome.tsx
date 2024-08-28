import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { motion } from "framer-motion";
import Footer from "@/ui/Footer";
import WelcomePageMainContent from "@/ui/WelcomePageMainContent";
import WelcomePageHeader from "@/ui/WelcomePageHeader";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Head title="Welcome" />
            <motion.div
                className="bg-cover bg-center bg-gray-900 text-black/50 dark:bg-black dark:text-white/50"
                style={{
                    backgroundImage: "url('images/6.jpg')",
                }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                <div className="min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <WelcomePageHeader />
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <WelcomePageMainContent />
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Footer />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
