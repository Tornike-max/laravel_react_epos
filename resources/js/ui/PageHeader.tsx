import { Link } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";
import { useToggleDarkMode } from "../context/useToggleDarkMode";
import { Divider } from "@mui/material";

const PageHeader = () => {
    const { selected } = useToggleDarkMode();

    return (
        <div className="sticky px-10 py-6 w-full flex flex-col justify-center items-start gap-2 sm:gap-3">
            <div className="w-full flex justify-between items-center">
                <Link to="/">
                    <img
                        src={`${
                            selected === "dark"
                                ? "/images/epos.png"
                                : "/images/dark-epos.png"
                        }`}
                        alt="logo"
                        className="w-40 text-slate-500 rounded-md"
                    />
                </Link>
                <ToggleDarkMode />
            </div>
            <Divider
                className={`${selected === "dark" ? "bg-slate-600" : ""}`}
            />
        </div>
    );
};

export default PageHeader;
