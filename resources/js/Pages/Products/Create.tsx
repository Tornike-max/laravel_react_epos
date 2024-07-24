import InputError from "@/Components/InputError";
import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import { Product } from "@/types/types";
import { Head, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";

const Create = ({ auth, csrfToken }: PageProps) => {
    const { data, setData, post, errors, reset } = useForm<Product>();
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("products.store", []));
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
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-800">
                                        Create Product
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
                                            id="title"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        {errors.title && (
                                            <InputError
                                                message={errors.title}
                                                className="mt-2"
                                            />
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
                                            value={data.genre}
                                            id="genre"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setData(
                                                    "genre",
                                                    e.target.value
                                                );
                                            }}
                                        />
                                        {errors.genre && (
                                            <InputError
                                                message={errors.genre}
                                                className="mt-2"
                                            />
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
                                            value={data.release}
                                            id="release"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setData(
                                                    "release",
                                                    e.target.value
                                                );
                                            }}
                                        />
                                        {errors.release && (
                                            <InputError
                                                message={errors.release}
                                                className="mt-2"
                                            />
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
                                            value={data.for}
                                            id="for"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setData("for", e.target.value);
                                            }}
                                        />
                                        {errors.for && (
                                            <InputError
                                                message={errors.for}
                                                className="mt-2"
                                            />
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
                                            value={data.description}
                                            id="description"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setData(
                                                    "description",
                                                    e.target.value
                                                );
                                            }}
                                        ></textarea>
                                        {errors.description && (
                                            <InputError
                                                message={errors.description}
                                                className="mt-2"
                                            />
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
                                            type="text"
                                            name="gameUrl"
                                            onChange={(e) =>
                                                setData(
                                                    "gameUrl",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Enter Game URL"
                                            id="gameUrl"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <InputError
                                            message={errors.gameUrl}
                                            className="mt-2"
                                        />
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
                                            placeholder="Enter Image"
                                            id="image"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) =>
                                                setData(
                                                    "image",
                                                    e.target.files
                                                        ? e.target.files[0]
                                                        : null
                                                )
                                            }
                                        />
                                        {errors.image && (
                                            <InputError
                                                message={errors.image}
                                                className="mt-2"
                                            />
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 hover:bg-blue-600 duration-300 transition-all py-2 px-3 text-slate-50 hover:text-slate-100 rounded-md"
                                    >
                                        Create Product
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

export default Create;
