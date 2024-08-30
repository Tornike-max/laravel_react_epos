import HorizontalScroll from "@/Components/HorizontalCarousel";
import { useDarkMode } from "@/context/useDarkMode";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import AnimatedSearchInput from "@/ui/AnimatedSearchInput";
import Pagination from "@/ui/Pagination";
import ProductsGrid from "@/ui/ProductsGrid";
import { Head } from "@inertiajs/react";
import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Index = ({ auth, products, searchedProducts }: PageProps) => {
    const { isDark } = useDarkMode();
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

    const bgColor = isDark ? "bg-gray-900" : "bg-gray-100";
    const textColor = isDark ? "text-gray-100" : "text-gray-900";

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2
                    className={`font-semibold text-xl ${textColor} leading-tight transition-colors duration-500`}
                >
                    Products
                </h2>
            }
        >
            <Head title="Products" />

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                className={`py-12 px-4 ${bgColor} transition-colors duration-500`}
            >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="hidden md:block">
                        <HorizontalScroll
                            products={products}
                            auth={{
                                user: auth.user,
                            }}
                            user={auth.user}
                        />
                    </div>
                    <div className="mb-6 w-full">
                        <AnimatedSearchInput
                            routePath="products.index"
                            placeholder="Search by title..."
                        />
                    </div>

                    <ProductsGrid
                        products={searchedProducts}
                        auth={{
                            user: auth.user,
                        }}
                        user={auth.user}
                    />

                    <Pagination links={products?.meta?.links ?? []} />
                </div>
            </motion.div>
        </AuthenticatedLayout>
    );
};

export default Index;
