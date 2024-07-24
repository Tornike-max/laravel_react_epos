import { User } from "@/types";
import LogoutButton from "@/ui/LogoutButton";
import { Link } from "@inertiajs/react";
import { AiOutlineTeam, AiOutlineProduct } from "react-icons/ai";
import {
    HiOutlineUser,
    HiOutlineArrowLeftOnRectangle,
    HiMiniChevronDoubleLeft,
    HiOutlineNewspaper,
} from "react-icons/hi2";
import { IoBagOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard, MdOutlineWebAsset } from "react-icons/md";

const OpenSideBar = ({
    user,
    isOpen,
    setIsOpen,
}: {
    user: User;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) => {
    return (
        <aside className="w-52 bg-gray-900 text-white py-4 overflow-y-auto">
            <Link
                href={route("profile.edit")}
                className={`w-full py-2 px-4  flex justify-center items-start flex-col rounded pr-0 sm:pr-2 md:pr-4 transition-colors duration-300 ease-in-out bg-gray-800 hover:bg-gray-700`}
            >
                <h2 className="text-lg font-semibold">Admin Panel</h2>
                <span>{user && user.is_admin === 1 && user.name}</span>
            </Link>
            <nav className="mt-5">
                <ul className="flex flex-col gap-2">
                    <Link
                        href={route("products.index")}
                        className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                            route().current("products.index")
                                ? "bg-blue-700 text-white"
                                : "hover:bg-blue-500 hover:text-white"
                        }`}
                    >
                        <span>Web Site</span>
                        <MdOutlineWebAsset className="w-6 h-6" />
                    </Link>
                    <Link
                        href={route("admin")}
                        className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                            route().current("admin")
                                ? "bg-blue-700 text-white"
                                : "hover:bg-blue-500 hover:text-white"
                        }`}
                    >
                        <span>Dashboard</span>
                        <MdOutlineSpaceDashboard className="w-6 h-6" />
                    </Link>
                    <Link
                        href={route("admin.team")}
                        className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                            route().current("admin.team")
                                ? "bg-blue-700 text-white"
                                : "hover:bg-blue-500 hover:text-white"
                        }`}
                    >
                        <span>Team</span>
                        <AiOutlineTeam className="w-6 h-6" />
                    </Link>
                    <Link
                        href="/admin/products"
                        className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                            route().current("admin.products")
                                ? "bg-blue-700 text-white"
                                : "hover:bg-blue-500 hover:text-white"
                        }`}
                    >
                        <span>Products</span>
                        <AiOutlineProduct className="w-6 h-6" />
                    </Link>
                    <Link
                        href={route("admin.press")}
                        className={`w-full py-2 px-4 mb-2 flex justify-between items-center rounded pr-4 transition-colors duration-300 ease-in-out ${
                            route().current("admin.press")
                                ? "bg-blue-700 text-white"
                                : "hover:bg-blue-500 hover:text-white"
                        }`}
                    >
                        <span>Press Release</span>
                        <HiOutlineNewspaper className="w-6 h-6" />
                    </Link>
                    <Link
                        href={route("admin.company")}
                        className="w-full py-2 px-4 mb-2 flex justify-between items-center hover:bg-blue-500 rounded pr-4"
                    >
                        <span>Company</span>
                        <IoBagOutline className="w-6 h-6" />
                    </Link>
                    <Link
                        href="/admin/setting"
                        className="w-full py-2 px-4 mb-2 flex justify-between items-center hover:bg-blue-500 rounded pr-4"
                    >
                        <span>Settings</span>
                        <IoSettingsOutline className="w-6 h-6" />
                    </Link>
                    <Link
                        href={route("profile.edit")}
                        className="w-full py-2 px-4 mb-2 flex justify-between items-center hover:bg-blue-500 rounded pr-4"
                    >
                        <span>Profile</span>
                        <HiOutlineUser className="w-6 h-6" />
                    </Link>
                    <LogoutButton type="lg" />

                    <button
                        onClick={() => setIsOpen(false)}
                        className="my-6 py-2 px-4 w-full hover:bg-blue-500 flex justify-center items-center rounded pr-4"
                    >
                        <p>
                            <HiMiniChevronDoubleLeft className="w-6 h-6" />
                        </p>
                    </button>
                </ul>
            </nav>
        </aside>
    );
};

export default OpenSideBar;
