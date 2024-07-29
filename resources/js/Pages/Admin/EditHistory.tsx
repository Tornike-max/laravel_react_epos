import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import UpdatePress from "./partials/UpdatePress";
import { PageProps } from "@/types";
import UpdateHistory from "./partials/UpdateHistory";

const EditHistory = ({ auth, history }: PageProps) => {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Form" />
            <div className="py-12">
                <div className="w-full max-w-7xl flex justify-center items-center flex-col mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Edit Press Release
                    </h1>
                    <UpdateHistory history={history} />
                </div>
            </div>
        </AdminLayout>
    );
};

export default EditHistory;
