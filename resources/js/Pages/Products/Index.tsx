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
    const sliderControlls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            sliderControlls.start("visible");
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {products &&
                            products.data.map((product) => (
                                <Link
                                    href={route("products.show", product.id)}
                                    key={product.id}
                                    className="relative overflow-hidden group cursor-pointer"
                                >
                                    {}
                                    <img
                                        src={
                                            generateImagePath(
                                                typeof product?.image ===
                                                    "string"
                                                    ? product.image
                                                    : null
                                            ) || "path/to/default-image.jpg"
                                        }
                                        alt="image"
                                    />

                                    <div className="absolute rounded-xl inset-0 bg-black bg-opacity-40 transition-opacity duration-500 z-10 opacity-100 hover:opacity-0" />
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
