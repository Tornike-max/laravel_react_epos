import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps } from "@/types";
import { formatDate } from "@/ui/formatDate";
import NoDataInfo from "@/ui/NoDataInfo";
import Pagination from "@/ui/Pagination";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const HistoryTable = () => {
    const { delete: destroy, get } = useForm();
    const handleSubmit = (e: FormEvent<HTMLFormElement>, pressId: number) => {
        e.preventDefault();
        destroy(route("admin.press.delete", { press: pressId }));
    };

    const handleNavigate = () => {
        get(route("admin.press.create"));
    };

    return (
        <div className="py-12">
            <div className="w-full ">
                <div className="w-full flex justify-center items-center my-4">
                    <button
                        onClick={handleNavigate}
                        className="w-full py-2 px-3 rounded-lg bg-blue-700 text-slate-100 hover:bg-blue-600 hover:text-slate-50 duration-300 transition-all"
                    >
                        Add New Press Release
                    </button>
                </div>
                <div className="w-full mt-6 bg-white border-[1px] border-gray-200 hover:border-blue-700 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden shadow-md rounded-lg">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Press Releases List
                        </h2>
                    </div>
                </div>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-start text-nowrap">
                                Id
                            </th>
                            <th className="py-2 px-4 border-b text-start text-nowrap">
                                Date
                            </th>
                            <th className="py-2 px-4 border-b text-start text-nowrap">
                                Description
                            </th>
                            <th className="py-2 px-4 border-b text-start">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {pressRelease?.data.length !== 0 ? (
                            pressRelease?.data?.map((press) => (
                                <tr
                                    key={press.id}
                                    className="hover:bg-gray-100 transition-colors"
                                >
                                    <td className="py-2 px-4 border-b">
                                        {press.id}
                                    </td>
                                    <td className="py-2 px-4 border-b text-nowrap">
                                        {formatDate(press.date)}
                                    </td>
                                    <td className="py-2 px-4 border-b max-w-[150px] w-full">
                                        {press.info}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <div className="flex flex-col sm:flex-row items-center justify-start gap-1 ">
                                            <Link
                                                href={route(
                                                    "admin.press.edit",
                                                    {
                                                        press: press.id,
                                                    }
                                                )}
                                                className="w-full text-center py-1 px-2 rounded-lg bg-blue-700 text-slate-100 hover:bg-blue-600 hover:text-slate-50 duration-300 transition-all"
                                            >
                                                Edit
                                            </Link>
                                            <form
                                                onSubmit={(e) =>
                                                    handleSubmit(e, press.id)
                                                }
                                            >
                                                <button className="w-full text-center py-1 px-2 rounded-lg bg-red-600 text-slate-100 hover:bg-red-500 hover:text-slate-50 duration-300 transition-all">
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <NoDataInfo
                                info="There are currently no
                                                        press releases to
                                                        display."
                            />
                        )} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoryTable;
