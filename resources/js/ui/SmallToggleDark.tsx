// import { Switch } from "@nextui-org/react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useToggleDarkMode } from "../context/useToggleDarkMode";
import { Switch } from "@mui/material";

const SmallToggleDark = () => {
    const { selected, handleToggleDarkMode } = useToggleDarkMode();

    return (
        <Switch
            defaultSelected={selected === "dark" ? true : false}
            onClick={handleToggleDarkMode}
            // size="lg"
            color="primary"
            // thumbIcon={({ isSelected, className }) =>
            //     isSelected ? (
            //         <HiOutlineSun className={className} />
            //     ) : (
            //         <HiOutlineMoon className={className} />
            //     )
            // }
        >
            <span className={`${"text-slate-100"}`}>
                {selected === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
        </Switch>
    );
};

export default SmallToggleDark;
