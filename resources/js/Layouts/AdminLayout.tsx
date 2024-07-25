import React, { ReactNode, useState } from "react";
import { User } from "@/types";

import OpenSideBar from "./OpenSideBar";
import ClosedSideBar from "./ClosedSideBar";
import { useToggleSidebar } from "@/context/useToggleSidebar";

const AdminLayout = ({
    user,
    children,
}: {
    user: User;
    children: React.ReactNode;
}) => {
    const { isOpen } = useToggleSidebar();

    return (
        <div className="flex min-h-screen bg-gray-100">
            {isOpen ? (
                <OpenSideBar user={user} />
            ) : (
                <ClosedSideBar user={user} />
            )}

            <main className="flex-1 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <section className="w-full">{children}</section>
            </main>
        </div>
    );
};

export default AdminLayout;
