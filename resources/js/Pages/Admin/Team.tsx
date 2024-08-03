import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import NoDataInfo from "@/ui/NoDataInfo";
import Pagination from "@/ui/Pagination";
import { Head, Link, useForm } from "@inertiajs/react";
import { Tooltip } from "@mui/material";
import { FormEvent } from "react";
import { HiOutlineMinusCircle } from "react-icons/hi2";

const Team = ({ auth, team }: PageProps) => {
    const { delete: destroy, get } = useForm();
    const handleSubmit = (e: FormEvent<HTMLFormElement>, memberId: number) => {
        e.preventDefault();
        destroy(route("admin.destroy.member", { user: memberId }));
    };

    const handleNavigate = () => {
        get(route("admin.team.create"));
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="Team" />
            <div className="py-12">
                <div className="w-full ">
                    <div className="w-full flex justify-center items-center my-4">
                        <button
                            onClick={handleNavigate}
                            className="w-full py-2 px-3 rounded-lg bg-blue-700 text-slate-100 hover:bg-blue-600 hover:text-slate-50 duration-300 transition-all"
                        >
                            Add New Member
                        </button>
                    </div>
                    <div className="w-full mt-6 bg-white border-[1px] border-gray-200 hover:border-blue-700 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden shadow-md rounded-lg">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Product List
                            </h2>
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b text-start">
                                            Id
                                        </th>
                                        <th className="py-2 px-4 border-b text-start">
                                            Name
                                        </th>
                                        <th className="py-2 px-4 border-b text-start">
                                            Email
                                        </th>
                                        <th className="py-2 px-4 border-b text-start">
                                            Access type
                                        </th>
                                        <th className="py-2 px-4 border-b text-start">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {team?.data.length !== 0 ? (
                                        team?.data?.map((member) => (
                                            <tr
                                                key={member.id}
                                                className="hover:bg-gray-100 transition-colors"
                                            >
                                                <td className="py-2 px-4 border-b">
                                                    {member.id}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    {member.name}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    {member.email}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    {`${member.access_type
                                                        .slice(0, 1)
                                                        .toUpperCase()}${member.access_type.slice(
                                                        1
                                                    )}`}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <div className="flex items-center justify-start gap-1 ">
                                                        {auth.user.is_admin ===
                                                            1 &&
                                                        auth.user.id ===
                                                            member.id ? (
                                                            <Tooltip
                                                                title="You cannot delete yourself or change your admin status."
                                                                placement="right"
                                                            >
                                                                <span>
                                                                    <HiOutlineMinusCircle className="text-2xl text-red-500" />
                                                                </span>
                                                            </Tooltip>
                                                        ) : (
                                                            <>
                                                                <Link
                                                                    href={route(
                                                                        "admin.team.edit",
                                                                        {
                                                                            user: member.id,
                                                                        }
                                                                    )}
                                                                    className="py-1 px-2 rounded-lg bg-blue-700 text-slate-100 hover:bg-blue-600 hover:text-slate-50 duration-300 transition-all"
                                                                >
                                                                    Edit
                                                                </Link>
                                                                {auth.user
                                                                    .access_type ===
                                                                "editor" ? (
                                                                    ""
                                                                ) : (
                                                                    <form
                                                                        onSubmit={(
                                                                            e
                                                                        ) =>
                                                                            handleSubmit(
                                                                                e,
                                                                                member.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <button className="py-1 px-2 rounded-lg bg-red-600 text-slate-100 hover:bg-red-500 hover:text-slate-50 duration-300 transition-all">
                                                                            Delete
                                                                        </button>
                                                                    </form>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <NoDataInfo
                                            info="There are currently no
                                                Team members to
                                                display."
                                        />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Pagination links={team?.meta?.links ?? []} />
            </div>
        </AdminLayout>
    );
};

export default Team;
