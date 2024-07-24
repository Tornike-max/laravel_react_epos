import { User } from "@/types";
import LogoutButton from "@/ui/LogoutButton";
import { Link } from "@inertiajs/react";
import { Tooltip } from "@mui/material";
import { AiOutlineTeam, AiOutlineProduct } from "react-icons/ai";
import {
    HiOutlineUser,
    HiOutlineArrowLeftOnRectangle,
    HiMiniChevronDoubleRight,
    HiOutlineNewspaper,
} from "react-icons/hi2";
import { IoBagOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineWebAsset } from "react-icons/md";

const ClosedSideBar = ({
    user,
    isOpen,
    setIsOpen,
}: {
    user: User;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) => {
    return (
        <aside className="w-16 bg-gray-900 text-white py-4">
            <Tooltip
                title={user && user.is_admin === 1 && `${user.name}'s Profile`}
                placement="right"
            >
                <Link
                    href={route("profile.edit")}
                    className={`w-full py-2 px-4 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                        route().current("profile.edit")
                            ? "bg-blue-700 text-white"
                            : "hover:bg-blue-500 hover:text-white"
                    }`}
                >
                    <HiOutlineUser className="w-6 h-6" />
                </Link>
            </Tooltip>
            <nav className="mt-5">
                <ul className="flex flex-col gap-2">
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
                            className="w-full py-2 px-4 mb-2 flex justify-between items-center hover:bg-blue-500 rounded pr-4"
                        >
                            <IoBagOutline className="w-6 h-6" />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Settings" placement="right">
                        <Link
                            href="/admin/setting"
                            className="w-full py-2 px-4 mb-2 flex justify-between items-center hover:bg-blue-500 rounded pr-4"
                        >
                            <IoSettingsOutline className="w-6 h-6" />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Profile" placement="right">
                        <Link
                            href="/admin/profile"
                            className="w-full py-2 px-4 mb-2 flex justify-between items-center hover:bg-blue-500 rounded pr-4"
                        >
                            <HiOutlineUser className="w-6 h-6" />
                        </Link>
                    </Tooltip>

                    <Tooltip title="Logout" placement="right">
                        <LogoutButton type="sm" />
                    </Tooltip>
                    <Tooltip title="Open" placement="right">
                        <button
                            onClick={() => setIsOpen(true)}
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
