import { User } from "@/types";
import LogoutButton from "@/ui/LogoutButton";
import { Link } from "@inertiajs/react";
import { AiOutlineTeam, AiOutlineProduct } from "react-icons/ai";
import {
    HiMiniChevronDoubleLeft,
    HiOutlineCog6Tooth,
    HiOutlineNewspaper,
} from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard, MdOutlineWebAsset } from "react-icons/md";
import { motion } from "framer-motion";
import { useToggleSidebar } from "@/context/useToggleSidebar";

const OpenSideBar = ({ user }: { user: User }) => {
    const { isOpen, toggleSidebar } = useToggleSidebar();

    const menuItems = [
        {
            label: "Web Site",
            href: route("products.index"),
            icon: MdOutlineWebAsset,
        },
        {
            label: "Dashboard",
            href: route("admin"),
            icon: MdOutlineSpaceDashboard,
        },
        { label: "Team", href: route("admin.team"), icon: AiOutlineTeam },
        {
            label: "Products",
            href: route("admin.products"),
            icon: AiOutlineProduct,
        },
        {
            label: "Press Release",
            href: route("admin.press"),
            icon: HiOutlineNewspaper,
        },
        { label: "Company", href: route("admin.company"), icon: IoBagOutline },

        {
            label: "Settings",
            href: route("admin.settings.index"),
            icon: HiOutlineCog6Tooth,
        },
    ];

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10"
                    onClick={() => toggleSidebar()}
                />
            )}

            {/* Sidebar */}
            <motion.aside
                className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white py-4 overflow-y-auto md:w-64 z-20"
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center px-6 py-4 bg-gray-800">
                        <Link
                            href={route("profile.edit")}
                            className="flex flex-col items-center"
                        >
                            <h2 className="text-lg font-semibold">
                                Admin Panel
                            </h2>
                            <span>
                                {user && user.is_admin === 1 && user.name}
                            </span>
                        </Link>
                    </div>
                    <nav className="flex-1 mt-6">
                        <ul className="flex flex-col gap-2">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className={`w-full py-3 px-6 flex items-center justify-between rounded-lg transition-colors duration-300 ${
                                            route().current(item.href)
                                                ? "bg-blue-700 text-white"
                                                : "hover:bg-blue-500 hover:text-white"
                                        }`}
                                    >
                                        <span>{item.label}</span>
                                        <item.icon className="w-6 h-6" />
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <LogoutButton type="lg" />
                            </li>
                        </ul>
                    </nav>
                    <button
                        onClick={() => toggleSidebar()}
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700"
                    >
                        <HiMiniChevronDoubleLeft className="w-6 h-6" />
                    </button>
                </div>
            </motion.aside>
        </>
    );
};

export default OpenSideBar;
