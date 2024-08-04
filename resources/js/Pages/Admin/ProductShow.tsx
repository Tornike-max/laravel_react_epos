import React, { FormEvent } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import generateImagePath from "@/ui/generateImagePath";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ProductShow = ({ auth, product }: PageProps) => {
    const { delete: destroy } = useForm();

    const handleSubmit = (
        e: FormEvent<HTMLFormElement>,
        productId: number | undefined
    ) => {
        e.preventDefault();
        destroy(route("products.destroy", { product: productId }));
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title={`Product - ${product?.title}`} />
            <div className="py-12">
                <div className="w-full max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Product Details
                    </h1>
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="md:w-1/2">
                            {product?.image && (
                                <img
                                    src={
                                        generateImagePath(
                                            typeof product?.image === "string"
                                                ? product.image
                                                : null
                                        ) || "path/to/default-image.jpg"
                                    }
                                    alt={product.title}
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                            )}
                        </div>
                        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {product?.title}
                            </h2>
                            <p className="text-gray-600 mt-4">
                                {product?.description}
                            </p>
                            <div className="mt-6">
                                <span className="text-lg font-semibold text-gray-700">
                                    Genre:
                                </span>
                                <span className="text-lg text-gray-800 ml-2">
                                    {product?.genre}
                                </span>
                            </div>
                            <div className="mt-4">
                                <span className="text-lg font-semibold text-gray-700">
                                    Release Date:
                                </span>
                                <span className="text-lg text-gray-800 ml-2">
                                    {product?.release}
                                </span>
                            </div>
                            <div className="mt-4">
                                <span className="text-lg font-semibold text-gray-700">
                                    Platform:
                                </span>
                                <span className="text-lg text-gray-800 ml-2">
                                    {product?.for}
                                </span>
                            </div>
                            <Stack direction="row" spacing={2} className="mt-6">
                                <Link
                                    href={route("products.edit", product?.id)}
                                    className="py-[5px] px-[14px] rounded-[4px] bg-blue-700 text-slate-100 hover:bg-blue-600 hover:text-slate-50 duration-300 transition-all"
                                >
                                    Edit
                                </Link>
                                {auth.user.is_admin === 1 && (
                                    <form
                                        onSubmit={(e) =>
                                            handleSubmit(e, product?.id)
                                        }
                                    >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="error"
                                        >
                                            Delete
                                        </Button>
                                    </form>
                                )}
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ProductShow;
