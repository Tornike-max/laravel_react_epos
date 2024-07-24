import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { getCsrfToken } from "./getCsrfToken";

const LogoutButton = ({ type }: { type: "sm" | "lg" }) => {
    const [csrfToken, setCsrfToken] = useState<string | null>(null);

    useEffect(() => {
        const token = getCsrfToken();
        if (!token) {
            console.error("CSRF token not found");
        }
        setCsrfToken(token);
    }, []);
    return (
        <>
            {type === "lg" ? (
                <form action={route("logout")} method="POST">
                    <input
                        type="hidden"
                        name="_token"
                        value={csrfToken || ""}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 px-4 mb-2 flex justify-between items-center hover:bg-blue-700 rounded pr-4"
                    >
                        <span>Logout</span>
                        <HiOutlineArrowLeftOnRectangle className="w-6 h-6" />
                    </button>
                </form>
            ) : (
                <form action={route("logout")} method="POST">
                    <input
                        type="hidden"
                        name="_token"
                        value={csrfToken || ""}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 px-4 mb-2 flex justify-between items-center hover:bg-blue-700 rounded pr-4"
                    >
                        <HiOutlineArrowLeftOnRectangle className="w-6 h-6" />
                    </button>
                </form>
            )}
        </>
    );
};

export default LogoutButton;
