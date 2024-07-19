// import { Spinner } from "@nextui-org/react";
import { useToggleDarkMode } from "../context/useToggleDarkMode";

const Loading = () => {
    const { selected } = useToggleDarkMode();
    return (
        <div className="w-full h-screen flex justify-center items-center">
            {/* <Spinner
                color={`${selected === "dark" ? "default" : "primary"}`}
                size="lg"
            /> */}
        </div>
    );
};

export default Loading;
