import { PageProps } from "@/types";
import { Product, ProductType } from "@/types/types";
import generateImagePath from "@/ui/generateImagePath";
import { Link } from "@inertiajs/react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const HorizontalScroll = ({ auth, user, products }: PageProps) => {
    return (
        <div className="bg-gray-900">
            <HorizontalScrollCarousel
                auth={auth}
                user={user}
                products={products}
            />
        </div>
    );
};

const HorizontalScrollCarousel = ({ auth, user, products }: PageProps) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section
            ref={targetRef}
            className="relative h-[200vh] bg-gradient-to-r bg-gray-800 rounded-lg"
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-6 md:gap-8">
                    {products?.data.map((product) => (
                        <Link
                            href={route("products.show", product.id)}
                            key={product.id}
                        >
                            <Card product={product} />
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ product }: { product: Product }) => {
    return (
        <div
            key={product.id}
            className="group relative md:h-[400px] md:w-[450px] overflow-hidden bg-gray-200 rounded-lg shadow-lg transition-transform duration-300 transform hover:rotate-1 hover:scale-105"
        >
            <div
                style={{
                    backgroundImage: `url(${
                        generateImagePath(
                            typeof product?.image === "string"
                                ? product.image
                                : null
                        ) || "path/to/default-image.jpg"
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/30 to-white/10 p-4 md:p-8 text-xl md:text-3xl font-black uppercase text-white backdrop-blur-md">
                    {product.title}
                </p>
            </div>
        </div>
    );
};

export default HorizontalScroll;
