import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Index = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    About
                </h2>
            }
        >
            <Head title="About" />
        </AuthenticatedLayout>
    );
};

export default Index;
