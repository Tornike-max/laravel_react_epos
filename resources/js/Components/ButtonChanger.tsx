import { Tooltip } from "@mui/material";
import { Link } from "@inertiajs/react";
import { getHref } from "@/ui/getHref";

const ButtonChanger = () => {
    const pageHrefName = getHref();
    return (
        <div
            className={`w-full flex items-center justify-start gap-4 text-base font-semibold `}
        >
            <Tooltip title="About" arrow enterDelay={500}>
                <Link
                    className={` ${
                        pageHrefName === "about"
                            ? "text-blue-500"
                            : "hover:text-blue-500"
                    } duration-300 transition-all`}
                    href={route("company.index", "about")}
                >
                    About
                </Link>
            </Tooltip>
            <span>|</span>
            <Tooltip title="History" arrow enterDelay={500}>
                <Link
                    className={` ${
                        pageHrefName === "history"
                            ? "text-blue-500"
                            : "hover:text-blue-500"
                    } duration-300 transition-all`}
                    href={route("company.index", "history")}
                >
                    History
                </Link>
            </Tooltip>
            <span>|</span>
            <Tooltip title="Access" arrow enterDelay={500}>
                <Link
                    className={` ${
                        pageHrefName === "access"
                            ? "text-blue-500"
                            : "hover:text-blue-500"
                    } duration-300 transition-all`}
                    href={route("company.index", "access")}
                >
                    Access
                </Link>
            </Tooltip>
        </div>
    );
};

export default ButtonChanger;
