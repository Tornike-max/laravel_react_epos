import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import React from "react";

const Edit = ({ auth }: PageProps) => {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Edit Product" />
            Edit
        </AdminLayout>
    );
};

export default Edit;
