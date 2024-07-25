import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import UpdateAbout from "./partials/UpdateAbout";
import UpdateHistory from "./partials/UpdateHistory";

const Company = ({ auth, about, history }: PageProps) => {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Admin-Edit" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateAbout about={about} />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateHistory history={history} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Company;
