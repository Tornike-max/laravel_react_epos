import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import UpdateAbout from "./partials/UpdateAbout";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Settings({ auth, about }: PageProps) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Admin-Edit" />
            <div className="py-12">
                <div className="w-full my-4 flex justify-center items-center mt-6 bg-white border-[1px] border-gray-200 rounded-lg">
                    <ApplicationLogo src="/images/dark-epos.png" />
                </div>
                <div className="w-full">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg w-full flex justify-center items-center">
                        <UpdateAbout about={about} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
