import React, { ReactNode, useState } from "react";
import { User } from "@/types";

import OpenSideBar from "./OpenSideBar";
import ClosedSideBar from "./ClosedSideBar";

const AdminLayout = ({
    user,
    children,
}: {
    user: User;
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

            <main className="flex-1 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <section className="w-full">{children}</section>
            </main>
        </div>
    );
};

export default AdminLayout;
