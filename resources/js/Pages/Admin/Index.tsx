import { Head, Link, router, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import { AiOutlineProduct } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FormEvent } from "react";
import generateImagePath from "@/ui/generateImagePath";
import Pagination from "@/ui/Pagination";
import NoDataInfo from "@/ui/NoDataInfo";
import { formatDate } from "@/ui/formatDate";

export default function Index({
    auth,
    products,
    pressRelease,
    productsCount,
    pressReleaseCount,
    csrfToken,
}: PageProps) {
    const { delete: destroy, get } = useForm();

    const handleSubmit = (
        e: FormEvent<HTMLFormElement>,
        productId: number | undefined
    ) => {
        e.preventDefault();
        destroy(route("products.destroy", { product: productId }));
    };

    const handleNavigateToCreateForm = () => {
        get(route("products.create"));
    };

    const handleNavigate = (id: number) => {
        get(route("admin.product.show", { product: id }));
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="Admin" />
            <div className="py-12">
                <div className="w-full ">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white border-[1px] border-gray-200 hover:border-blue-700 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden shadow-md rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div className="w-full flex justify-between items-center mb-4">
                                    <h1 className="text-xl font-semibold text-start">
                                        Total Products
                                    </h1>
                                    <div className="p-2 bg-blue-100 rounded-full">
                                        <AiOutlineProduct className="w-10 h-10 text-blue-700" />
                                    </div>
                                </div>
                                <div className="bg-blue-100 rounded-md">
                                    <p className="text-2xl font-bold text-center">
                                        {productsCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border-[1px] border-gray-200 hover:border-blue-700 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden shadow-md rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div className="w-full flex justify-between items-center mb-4">
                                    <h1 className="text-xl font-semibold text-start">
                                        Total Releases
                                    </h1>
                                    <div className="p-2 bg-blue-100 rounded-full">
                                        <HiOutlineNewspaper className="w-10 h-10 text-blue-700" />
                                    </div>
                                </div>
                                <div className="bg-blue-100 rounded-md">
                                    <p className="text-2xl font-bold text-center">
                                        {pressReleaseCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {auth.user.access_type === "admin" && (
                        <div className="w-full flex justify-center items-center my-4">
                            <button
                                onClick={handleNavigateToCreateForm}
                                className="w-full py-2 px-3 rounded-lg bg-blue-700 text-slate-100 hover:bg-blue-600 hover:text-slate-50 duration-300 transition-all"
                            >
                                Create Product
                            </button>
                        </div>
                    )}

                    <div className="w-full mt-6 bg-white border-[1px] border-gray-200 hover:border-blue-700 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden shadow-md rounded-lg">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Product List
                            </h2>
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
                                        products?.data.map((product) => (
                                            <tr
                                                key={product.id}
                                                className="hover:bg-gray-100 transition-colors"
                                                onClick={() =>
                                                    handleNavigate(product.id)
                                                }
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
                                                    {product?.user?.name}
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
                                                    <div className="flex items-center justify-start gap-1 ">
                                                        <Link
                                                            href={route(
                                                                "products.edit",
                                                                product.id
                                                            )}
                                                            className="py-1 px-2 rounded-lg bg-blue-700 text-slate-100 hover:bg-blue-600 hover:text-slate-50 duration-300 transition-all"
                                                        >
                                                            Edit
                                                        </Link>
                                                        {auth.user
                                                            .access_type ===
                                                            "admin" && (
                                                            <form
                                                                onSubmit={(e) =>
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
                                        ))
                                    ) : (
                                        <NoDataInfo
                                            info="There are currently no
                                                        Data to
                                                        display."
                                        />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Pagination links={products?.meta.links ?? []} />
            </div>
        </AdminLayout>
    );
}
