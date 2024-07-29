import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import UpdatePress from "./partials/UpdatePress";

const EditPressRelease = ({ auth, pressRelease, products }: PageProps) => {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Form" />
            <div className="py-12">
                <div className="w-full max-w-7xl flex justify-center items-center flex-col mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Edit Press Release
                    </h1>
                    <UpdatePress
                        pressRelease={pressRelease}
                        products={products}
                        auth={auth}
                    />
                </div>
            </div>
        </AdminLayout>
    );
};

export default EditPressRelease;
