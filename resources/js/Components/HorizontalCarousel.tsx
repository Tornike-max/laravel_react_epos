import { useDarkMode } from "@/context/useDarkMode";
import { PageProps } from "@/types";
import { Product } from "@/types/types";
import generateImagePath from "@/ui/generateImagePath";
import { Link } from "@inertiajs/react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const HorizontalScroll = ({ auth, user, products }: PageProps) => {
    const { isDark } = useDarkMode();
    return (
        <div
            className={`${
                isDark ? "bg-gray-900" : "bg-gray-200"
            } duration-500 transition-all`}
        >
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

    const { isDark } = useDarkMode();
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section
            ref={targetRef}
            className={`relative h-[200vh] ${
                isDark
                    ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                    : "bg-gradient-to-r from-gray-200 via-gray-300 to-white"
            } rounded-lg duration-500 transition-all`}
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-6 md:gap-8">
                    {products?.data.map((product) => (
                        <Link
                            href={route("products.show", product.id)}
                            key={product.id}
                        >
                            <Card product={product} isDark={isDark} />
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ product, isDark }: { product: Product; isDark: boolean }) => {
    return (
        <div
            key={product.id}
            className={`group relative md:h-[400px] md:w-[450px] overflow-hidden rounded-lg shadow-lg transition-transform duration-500 transform hover:rotate-2 hover:scale-105 ${
                isDark ? "bg-gray-800" : "bg-gray-200"
            }`}
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
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p
                    className={`p-4 md:p-8 text-xl md:text-3xl font-black uppercase backdrop-blur-md transform duration-500 transition-all ${
                        isDark
                            ? "bg-gradient-to-br from-black/30 to-black/10 text-white"
                            : "bg-gradient-to-br from-white/30 to-white/10 text-gray-800"
                    }`}
                >
                    {product.title}
                </p>
            </div>
        </div>
    );
};

export default HorizontalScroll;
