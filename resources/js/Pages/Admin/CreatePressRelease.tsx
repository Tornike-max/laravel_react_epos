import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import AddMemberForm from "./partials/AddMemberForm";
import CreatePressForm from "./partials/CreatePressForm";

const CreatePressRelease = ({ auth, products }: PageProps) => {
    const data = products?.data;

    return (
        <AdminLayout user={auth.user}>
            <Head title="Form" />
            <div className="py-12">
                <div className="w-full max-w-7xl flex justify-center items-center flex-col mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Add Press Release
                    </h1>
                    <CreatePressForm products={data} />
                </div>
            </div>
        </AdminLayout>
    );
};

export default CreatePressRelease;
