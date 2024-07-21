import ApplicationLogo from "@/Components/ApplicationLogo";
import InputError from "@/Components/InputError";
import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import { Product } from "@/types/types";
import { Head, router, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import React, { ChangeEvent, FormEvent } from "react";

interface EditProps extends PageProps {
    csrfToken: string;
    product: Product;
}

const Edit: React.FC<EditProps> = ({ auth, product, csrfToken }) => {
    const { data, setData, post, errors, reset } = useForm({
        image: "",
        title: product.title || "",
        genre: product.genre || "",
        release: product.release || "",
        for: product.for || "",
        description: product.description || "",
        gameUrl: "",
        _method: "PUT",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setData(e.target.name, e.target.value);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setData(e.target.name, e.target.files[0]);
        }
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route("products.update", { product: product.id }));
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="Edit Product" />

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.3,
                    delay: 0.2,
                }}
            >
                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <form
                                    onSubmit={onSubmit}
                                    className="max-w-2xl w-full flex justify-center items-center flex-col m-auto gap-2"
                                    encType="multipart/form-data"
                                >
                                    <input
                                        type="hidden"
                                        name="_token"
                                        value={csrfToken}
                                    />
                                    <h1 className="font-semibold text-xl text-gray-800">
                                        Please fill out the form.
                                    </h1>
                                    <div className="w-full">
                                        <label
                                            htmlFor="title"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            defaultValue={product.title}
                                            id="title"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Title"
                                            onChange={handleChange}
                                        />
                                        {errors.title && (
                                            <span className="text-red-500 text-xs">
                                                {errors.title}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-full">
                                        <label
                                            htmlFor="genre"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Genre
                                        </label>
                                        <input
                                            type="text"
                                            name="genre"
                                            placeholder="Enter Genre"
                                            defaultValue={product.genre}
                                            id="genre"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                        />
                                        {errors.genre && (
                                            <span className="text-red-500 text-xs">
                                                {errors.genre}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-full">
                                        <label
                                            htmlFor="release"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Release Date
                                        </label>
                                        <input
                                            type="date"
                                            name="release"
                                            placeholder="Enter Release"
                                            defaultValue={product.release}
                                            id="release"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                        />
                                        {errors.release && (
                                            <span className="text-red-500 text-xs">
                                                {errors.release}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-full">
                                        <label
                                            htmlFor="for"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Operating System
                                        </label>
                                        <input
                                            type="text"
                                            name="for"
                                            placeholder="Enter Operating System"
                                            defaultValue={product.for}
                                            id="for"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                        />
                                        {errors.for && (
                                            <span className="text-red-500 text-xs">
                                                {errors.for}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-full">
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            placeholder="Enter Description"
                                            defaultValue={product.description}
                                            id="description"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                        ></textarea>
                                        {errors.description && (
                                            <span className="text-red-500 text-xs">
                                                {errors.description}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-full">
                                        <label
                                            htmlFor="image"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={handleFileChange}
                                            placeholder="Enter Image"
                                            id="image"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.image && (
                                            <span className="text-red-500 text-xs">
                                                {errors.image}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-full">
                                        <label
                                            htmlFor="gameUrl"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Game URL
                                        </label>
                                        <input
                                            type="file"
                                            name="gameUrl"
                                            onChange={handleFileChange}
                                            placeholder="Enter Game URL"
                                            id="gameUrl"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <InputError
                                            message={errors.gameUrl}
                                            className="mt-2"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 hover:bg-blue-600 duration-300 transition-all py-2 px-3 text-slate-50 hover:text-slate-100 rounded-md"
                                    >
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AdminLayout>
    );
};

export default Edit;
