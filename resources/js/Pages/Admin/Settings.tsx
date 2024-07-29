import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import UpdateAbout from "./partials/UpdateAbout";

export default function Settings({ auth, about }: PageProps) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Admin-Edit" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg w-full flex justify-center items-center">
                        <UpdateAbout about={about} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
