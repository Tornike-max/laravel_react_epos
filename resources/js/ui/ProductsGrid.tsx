import { PageProps } from "@/types";
import { Product } from "@/types/types";
import { Link } from "@inertiajs/react";
import React from "react";
import generateImagePath from "./generateImagePath";
import { useDarkMode } from "@/context/useDarkMode";

const ProductsGrid = ({ products }: PageProps) => {
    const { isDark } = useDarkMode();
    const handleClickImage = (id: string | number) => {
        console.log(id);
    };

    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4 p-4 rounded-lg ${
                isDark
                    ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                    : "bg-gradient-to-r from-gray-200 via-gray-300 to-white"
            }`}
        >
            {products &&
                products.data.map((product: Product) => (
                    <Link
                        href={route("products.show", product.id)}
                        key={product.id}
                        className={`relative overflow-hidden group cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
                            isDark ? "bg-gray-800" : "bg-white"
                        }`}
                        onClick={() => handleClickImage(product.id)}
                    >
                        <img
                            src={
                                generateImagePath(
                                    typeof product?.image === "string"
                                        ? product.image
                                        : null
                                ) || "path/to/default-image.jpg"
                            }
                            alt={product?.title || "Product Image"}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:rotate-2 group-hover:scale-105"
                            loading="lazy"
                        />
                    </Link>
                ))}
        </div>
    );
};

export default ProductsGrid;
