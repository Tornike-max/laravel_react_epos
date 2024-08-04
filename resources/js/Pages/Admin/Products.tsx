import React, { FormEvent } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import { formatDate } from "@/ui/formatDate";
import generateImagePath from "@/ui/generateImagePath";
import NoDataInfo from "@/ui/NoDataInfo";
import Pagination from "@/ui/Pagination";
import { Head, Link, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

const Products = ({ auth, products }: PageProps) => {
    const { delete: destroy, get } = useForm();

    const handleSubmit = (e: FormEvent<HTMLFormElement>, productId: number) => {
        e.preventDefault();
        destroy(route("products.destroy", { product: productId }));
    };

    const handleNavigate = (id: number) => {
        get(route("admin.product.show", { product: id }));
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="Products" />
            <div className="py-12">
                <div className="w-full my-4 flex justify-center items-center mt-6 bg-white border-[1px] border-gray-200 rounded-lg">
                    <ApplicationLogo src="/images/dark-epos.png" />
                </div>
                <div className="w-full">
                    <div className="w-full mt-6 bg-white border-[1px] border-gray-200 hover:border-blue-700 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden shadow-md rounded-lg">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Product List
                            </h2>
                            {/* Container for horizontal scrolling */}
                            <div className="overflow-x-auto">
                                <div className="min-w-max">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr>
                                                <th className="py-2 px-4 border-b text-start">
                                                    Image
                                                </th>
                                                <th className="py-2 px-4 border-b text-start">
                                                    Created By
                                                </th>
                                                <th className="py-2 px-4 border-b text-start">
                                                    Product Name
                                                </th>
                                                <th className="py-2 px-4 border-b text-start">
                                                    Category
                                                </th>
                                                <th className="py-2 px-4 border-b text-start">
                                                    For
                                                </th>
                                                <th className="py-2 px-4 border-b text-start">
                                                    Release
                                                </th>
                                                <th className="py-2 px-4 border-b text-start">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products?.data.length !== 0 ? (
                                                products?.data.map(
                                                    (product) => (
                                                        <tr
                                                            key={product.id}
                                                            className="hover:bg-gray-100 transition-colors"
                                                        >
                                                            <td className="py-2 px-4 border-b">
                                                                <img
                                                                    src={
                                                                        generateImagePath(
                                                                            typeof product?.image ===
                                                                                "string"
                                                                                ? product.image
                                                                                : null
                                                                        ) ||
                                                                        "path/to/default-image.jpg"
                                                                    }
                                                                    className="w-12"
                                                                />
                                                            </td>
                                                            <td className="py-2 px-4 border-b">
                                                                {
                                                                    product
                                                                        ?.user
                                                                        ?.name
                                                                }
                                                            </td>
                                                            <td className="py-2 px-4 border-b">
                                                                {product?.title}
                                                            </td>
                                                            <td className="py-2 px-4 border-b">
                                                                {product.genre}
                                                            </td>
                                                            <td className="py-2 px-4 border-b">
                                                                {product.for}
                                                            </td>
                                                            <td className="py-2 px-4 border-b">
                                                                {formatDate(
                                                                    product.release
                                                                )}
                                                            </td>
                                                            <td className="py-2 px-4 border-b">
                                                                <div className="flex items-center justify-start gap-1">
                                                                    <Link
                                                                        href={route(
                                                                            "products.edit",
                                                                            product.id
                                                                        )}
                                                                        className="z-10 py-1 px-2 rounded-lg bg-blue-700 text-slate-100 hover:bg-blue-600 hover:text-slate-50 duration-300 transition-all"
                                                                    >
                                                                        Edit
                                                                    </Link>
                                                                    {auth.user
                                                                        .access_type ===
                                                                        "admin" && (
                                                                        <form
                                                                            onSubmit={(
                                                                                e
                                                                            ) =>
                                                                                handleSubmit(
                                                                                    e,
                                                                                    product.id
                                                                                )
                                                                            }
                                                                        >
                                                                            <button className="py-1 px-2 rounded-lg bg-red-600 text-slate-100 hover:bg-red-500 hover:text-slate-50 duration-300 transition-all">
                                                                                Delete
                                                                            </button>
                                                                        </form>
                                                                    )}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                )
                                            ) : (
                                                <NoDataInfo info="There are currently no Products to display." />
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination links={products?.meta?.links ?? []} />
            </div>
        </AdminLayout>
    );
};

export default Products;
