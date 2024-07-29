import { useToggleSidebar } from "@/context/useToggleSidebar";
import { User } from "@/types";
import LogoutButton from "@/ui/LogoutButton";
import { Link } from "@inertiajs/react";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { AiOutlineTeam, AiOutlineProduct } from "react-icons/ai";
import {
    HiOutlineUser,
    HiMiniChevronDoubleRight,
    HiOutlineNewspaper,
    HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { IoBagOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineWebAsset } from "react-icons/md";

const ClosedSideBar = ({ user }: { user: User }) => {
    const { isOpen, toggleSidebar } = useToggleSidebar();

    return (
        <aside className="sticky top-0 left-0 max-w-16 w-full h-screen bg-gray-900 text-white py-2">
            <nav className="mt-4">
                <ul className="flex flex-col gap-2">
                    <Tooltip
                        title={
                            user &&
                            user.is_admin === 1 &&
                            `${user.name}'s Profile`
                        }
                        placement="right"
                    >
                        <Link
                            href={route("profile.edit")}
                            className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                                route().current("profile.edit")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <HiOutlineUser className="w-6 h-6" />
                        </Link>
                    </Tooltip>

                    <Tooltip title="Go To Website" placement="right">
                        <Link
                            href={route("products.index")}
                            className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                                route().current("products.index")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <MdOutlineWebAsset className="w-6 h-6" />
                        </Link>
                    </Tooltip>

                    <Tooltip title="Dashboard" placement="right">
                        <Link
                            href={route("admin")}
                            className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                                route().current("admin")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <MdOutlineSpaceDashboard className="w-6 h-6" />
                        </Link>
                    </Tooltip>

                    <Tooltip title="Team" placement="right">
                        <Link
                            href={route("admin.team")}
                            className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                                route().current("admin.team")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <AiOutlineTeam className="w-6 h-6" />
                        </Link>
                    </Tooltip>

                    <Tooltip title="Products" placement="right">
                        <Link
                            href={route("admin.products")}
                            className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                                route().current("admin.products")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <AiOutlineProduct className="w-6 h-6" />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Press Release" placement="right">
                        <Link
                            href={route("admin.press")}
                            className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                                route().current("admin.press")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <HiOutlineNewspaper className="w-6 h-6" />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Company" placement="right">
                        <Link
                            href={route("admin.company")}
                            className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                                route().current("admin.company")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <IoBagOutline className="w-6 h-6" />
                        </Link>
                    </Tooltip>

                    <Tooltip title="Settings" placement="right">
                        <Link
                            href={route("admin.settings.index")}
                            className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                                route().current("admin.settings.index")
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <HiOutlineCog6Tooth className="w-6 h-6" />
                        </Link>
                    </Tooltip>

                    <Tooltip title="Logout" placement="right">
                        <LogoutButton type="sm" />
                    </Tooltip>

                    <Tooltip title="Open" placement="right">
                        <button
                            onClick={() => toggleSidebar()}
                            className="w-full mt-4 py-2 px-4 mb-2 flex justify-between items-center hover:bg-blue-500 rounded pr-4"
                        >
                            <HiMiniChevronDoubleRight className="w-6 h-6" />
                        </button>
                    </Tooltip>
                </ul>
            </nav>
        </aside>
    );
};

export default ClosedSideBar;
