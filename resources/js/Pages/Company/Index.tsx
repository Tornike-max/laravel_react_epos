import ButtonChanger from "@/Components/ButtonChanger";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import HistoryBox from "./HistoryBox";
import AboutBox from "./AboutBox";
import AccessBox from "./AccessBox";
import { getHref } from "@/ui/getHref";

const Index = ({ auth, data, histories }: PageProps) => {
    const pageHrefName = getHref();
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Company
                </h2>
            }
            links={<ButtonChanger />}
        >
            <Head title="Company" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {data && pageHrefName === "about" && (
                        <AboutBox data={data} />
                    )}
                    {histories && pageHrefName === "history" && (
                        <HistoryBox
                            histories={histories}
                            auth={auth}
                            user={auth.user}
                        />
                    )}
                    {data && pageHrefName === "access" && (
                        <AccessBox data={data} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
