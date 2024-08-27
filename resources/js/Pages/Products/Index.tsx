import HorizontalScroll from "@/Components/HorizontalCarousel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Product } from "@/types/types";
import generateImagePath from "@/ui/generateImagePath";
import Pagination from "@/ui/Pagination";
import { Head, Link } from "@inertiajs/react";
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

    const handleClickImage = (id: string | number) => {
        console.log(id);
    };

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
                    <div className="hidden md:block">
                        <HorizontalScroll
                            products={products}
                            auth={{
                                user: auth.user,
                            }}
                            user={auth.user}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
                        {products &&
                            products.data.map((product: Product) => (
                                <Link
                                    href={route("products.show", product.id)}
                                    key={product.id}
                                    className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                                    onClick={() => handleClickImage(product.id)}
                                >
                                    <img
                                        src={
                                            generateImagePath(
                                                typeof product?.image ===
                                                    "string"
                                                    ? product.image
                                                    : null
                                            ) || "path/to/default-image.jpg"
                                        }
                                        alt={product?.title || "Product Image"}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:rotate-2 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-black bg-opacity-40 transition-opacity duration-500 z-10 opacity-100 group-hover:opacity-0" />
                                </Link>
                            ))}
                    </div>

                    <Pagination links={products?.meta?.links ?? []} />
                </div>
            </motion.div>
        </AuthenticatedLayout>
    );
};

export default Index;
