import { ChevronFirst, ChevronLast } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToggleSidebar } from "../context/useToggleSidebar";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { SiEsotericsoftware } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { PiPresentationChartFill } from "react-icons/pi";
import { MdBusinessCenter } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import AnimatedButton from "./AnimatedButton";
import { useToggleDarkMode } from "../context/useToggleDarkMode";

const MiniSidebar = ({ children }: { children: React.ReactNode }) => {
    const { expanded, handleToggleSidebar } = useToggleSidebar();
    const { selected } = useToggleDarkMode();
    return (
        <nav
            className={`h-full relative flex flex-col border-l ${
                selected === "light"
                    ? "bg-slate-50"
                    : "bg-slate-900 border-slate-950"
            } duration-150 transition-all  shadow-sm pt-6`}
        >
            <div className="md:p-4 pb-8 flex justify-between items-center flex-col gap-2 ">
                <button
                    onClick={() => handleToggleSidebar()}
                    className={`p-1.5 rounded-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 duration-150 transition-all `}
                >
                    {expanded ? <ChevronLast /> : <ChevronFirst />}
                </button>

                <img
                    src={`${
                        selected === "dark"
                            ? "/images/epos.png"
                            : "/images/dark-epos.png"
                    }`}
                    alt="logo"
                    className={`overflow-hidden transition-all ${
                        expanded ? "w-40" : "hidden"
                    } `}
                />
            </div>
            <ul className="w-full px-3 space-y-6">{children}</ul>
            <div className="border-t flex justify-end items-center p-3 mt-2">
                <div
                    className={` flex justify-center items-center overflow-hidden transition-all ${
                        expanded ? "w-56 mr-3" : "hidden"
                    }`}
                >
                    <div className="w-full flex flex-col justify-center items-center">
                        <AnimatedButton size="md" path="/">
                            EPOS SOWTWARE
                        </AnimatedButton>
                        <span
                            className={`text-xs ${
                                selected === "light"
                                    ? "text-gray-600"
                                    : "text-slate-100"
                            } `}
                        >
                            © 2024 Epos Software. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MiniSidebar;

export function SidebarItem({ text, path }: { text: string; path: string }) {
    const { pathname } = useLocation();
    const { expanded, setExpanded } = useToggleSidebar();
    const navigate = useNavigate();

    const renderIcon = (path: string) => {
        switch (path) {
            case "open":
                return <HiMiniBars3BottomLeft />;
            case "/":
                return <HiOutlineHomeModern />;
            case "/company":
                return <SiEsotericsoftware />;
            case "/products":
                return <IoGameController />;
            case "/press-release":
                return <PiPresentationChartFill />;
            case "/careers":
                return <MdBusinessCenter />;
            case "/support":
                return <MdSupportAgent />;
            default:
                return null;
        }
    };

    const handleNavigate = () => {
        if (expanded) {
            setExpanded(false);
        }
        navigate(path);
    };

    return (
        <li
            onClick={handleNavigate}
            className={`relative group flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
                pathname === path
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-500"
            } `}
        >
            <p className="w-full flex items-center justify-start gap-4">
                <span className="text-xl">{renderIcon(path)}</span>
                <span
                    className={`overflow-hidden transition-all ${
                        expanded ? "max-w-52 mr-3" : "hidden"
                    }`}
                >
                    {text}
                </span>
            </p>
            {!expanded && (
                <div
                    className={`absolute right-full rounded-md px-3 py-1 mr-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {text}
                </div>
            )}
        </li>
    );
}
