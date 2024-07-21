import React, { ReactNode, useState } from "react";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineTeam, AiOutlineProduct } from "react-icons/ai";
import { SiSemanticrelease } from "react-icons/si";
import { IoBagOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import {
    HiOutlineArrowLeftOnRectangle,
    HiMiniChevronDoubleRight,
} from "react-icons/hi2";
import OpenSideBar from "./OpenSideBar";
import ClosedSideBar from "./ClosedSideBar";

const AdminLayout = ({
    user,
    header,
    children,
}: {
    user: User;
    header?: ReactNode;
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {isOpen ? (
                <OpenSideBar
                    user={user}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            ) : (
                <ClosedSideBar
                    user={user}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            )}
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <main className="flex-1 p-6">
                <header className="mb-6">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </header>
                <section>{children}</section>
            </main>
        </div>
    );
};

export default AdminLayout;
