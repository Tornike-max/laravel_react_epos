import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import AddMemberForm from "./partials/AddMemberForm";
import EditMemberForm from "./partials/EditMemberForm";

const CreateTeamMember = ({ auth, member }: PageProps) => {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Form" />
            <div className="py-12">
                <div className="w-full max-w-7xl flex justify-center items-center flex-col mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Edit Team Member
                    </h1>
                    <EditMemberForm member={member} />
                </div>
            </div>
        </AdminLayout>
    );
};

export default CreateTeamMember;
