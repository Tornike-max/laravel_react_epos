import ApplicationLogo from "@/Components/ApplicationLogo";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Button, TextField } from "@mui/material";
import { error } from "console";
import { motion } from "framer-motion";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
            router.post(route("support.store"), data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw new Error("Error while sending email");
        } finally {
            setLoading(false);
        }
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
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
                    duration: 0.3,
                    delay: 0.2,
                }}
            >
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <form
                                    method="POST"
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="max-w-2xl w-full flex justify-center items-center flex-col m-auto gap-2"
                                >
                                    <ApplicationLogo src="/images/dark-epos.png" />
                                    <h1 className="font-semibold text-xl text-gray-800">
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
                                            className="block w-full rounded-md border-0 py-2 px-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Your Email"
                                        />
                                        {errors.email && (
                                            <span className="text-red-500 text-xs">
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
                                            className="block w-full rounded-md border-0 py-2 px-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.subject && (
                                            <span className="text-red-500 text-xs">
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
                                            className="block w-full rounded-md border-0 py-2 px-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.message && (
                                            <span className="text-red-500 text-xs">
                                                {errors.message.message}
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 hover:bg-blue-600 duration-300 transition-all py-2 px-3 text-slate-50 hover:text-slate-100 rounded-md"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AuthenticatedLayout>
    );
};

export default Index;
