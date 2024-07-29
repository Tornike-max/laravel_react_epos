import React, { useEffect, useState, forwardRef } from "react";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { getCsrfToken } from "./getCsrfToken";

type LogoutButtonProps = {
    type: "sm" | "lg";
};

const LogoutButton = forwardRef<HTMLFormElement, LogoutButtonProps>(
    ({ type }, ref) => {
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
                    <form action={route("logout")} method="POST" ref={ref}>
                        <input
                            type="hidden"
                            name="_token"
                            value={csrfToken || ""}
                        />
                        <button
                            type="submit"
                            className={`w-full py-3 px-6 flex items-center justify-between rounded-lg transition-colors duration-300 ${
                                route().current("logout")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <span>Logout</span>
                            <HiOutlineArrowLeftOnRectangle className="w-6 h-6 hidden lg:block" />
                        </button>
                    </form>
                ) : (
                    <form action={route("logout")} method="POST" ref={ref}>
                        <input
                            type="hidden"
                            name="_token"
                            value={csrfToken || ""}
                        />
                        <button
                            type="submit"
                            className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                                route().current("admin.logout")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <HiOutlineArrowLeftOnRectangle className="w-6 h-6" />
                        </button>
                    </form>
                )}
            </>
        );
    }
);

export default LogoutButton;
