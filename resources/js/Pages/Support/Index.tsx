import ApplicationLogo from "@/Components/ApplicationLogo";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";

type MessageType = {
    email: string;
    message: string;
    subject: string;
};

const Index = ({ auth }: PageProps) => {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MessageType>();

    const onSubmit: SubmitHandler<MessageType> = async (data: MessageType) => {
        try {
            setLoading(true);
            await router.post(route("support.store"), data);
            setSuccessMessage("Message sent successfully!");
        } catch (error) {
            console.error("Error while sending email", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-100 leading-tight">
                    Support
                </h2>
            }
        >
            <Head title="Support" />
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                }}
                className="bg-gray-900 text-gray-200 py-12"
            >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form
                                method="POST"
                                onSubmit={handleSubmit(onSubmit)}
                                className="max-w-2xl w-full flex flex-col m-auto gap-4"
                            >
                                <ApplicationLogo src="/images/epos.png" />
                                <h1 className="font-semibold text-xl text-gray-100">
                                    Please fill out the form.
                                </h1>
                                <div className="w-full">
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                        })}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 bg-gray-700 ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Your Email"
                                    />
                                    {errors.email && (
                                        <span className="text-red-400 text-xs">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>

                                <div className="w-full">
                                    <input
                                        type="text"
                                        {...register("subject", {
                                            required: "Subject is required",
                                        })}
                                        placeholder="Enter Your Subject"
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 bg-gray-700 ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                                    />
                                    {errors.subject && (
                                        <span className="text-red-400 text-xs">
                                            {errors.subject.message}
                                        </span>
                                    )}
                                </div>

                                <div className="w-full">
                                    <textarea
                                        {...register("message", {
                                            required: "Message is required",
                                        })}
                                        placeholder="Enter Your Message"
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 bg-gray-700 ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                                    />
                                    {errors.message && (
                                        <span className="text-red-400 text-xs">
                                            {errors.message.message}
                                        </span>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 duration-300 transition-all py-2 px-3 text-slate-50 rounded-md"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                                {successMessage && (
                                    <p className="text-green-400 text-sm mt-2">
                                        {successMessage}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AuthenticatedLayout>
    );
};

export default Index;
