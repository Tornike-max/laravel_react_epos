import HorizontalScroll from "@/Components/HorizontalCarousel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Product } from "@/types/types";
import AnimatedSearchInput from "@/ui/AnimatedSearchInput";
import generateImagePath from "@/ui/generateImagePath";
import Pagination from "@/ui/Pagination";
import ProductsGrid from "@/ui/ProductsGrid";
import { Head } from "@inertiajs/react";
import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Index = ({ auth, products }: PageProps) => {
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

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
        >
            <Head title="Products" />

            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.3,
                    delay: 0.2,
                }}
                className="py-12 px-4"
            >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="mb-6 w-full">
                        <AnimatedSearchInput
                            routePath="products.index"
                            placeholder="Search by title..."
                        />
                    </div>

                    <div className="hidden md:block">
                        <HorizontalScroll
                            products={products}
                            auth={{
                                user: auth.user,
                            }}
                            user={auth.user}
                        />
                    </div>
                    <ProductsGrid
                        products={products}
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
