import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useToggleDarkMode } from "../context/useToggleDarkMode";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ToggleDarkMode = () => {
  const { selected, setSelected } = useToggleDarkMode();
  return (
    <div
      className={`grid ${
        selected === "light" ? "bg-slate-50" : "bg-slate-900"
      }  rounded-full place-content-center md:px-2 transition-colors`}
    >
      <div className="relative flex w-fit items-center duration-150 transition-all rounded-full">
        <button
          className={`${TOGGLE_CLASSES} ${
            selected === "light" ? "text-white" : "text-slate-100"
          }`}
          onClick={() => {
            setSelected("light");
          }}
        >
          <FiSun className="relative z-10 text-xs md:text-lg" />
          <span className="relative z-10">Light</span>
        </button>
        <button
          className={`${TOGGLE_CLASSES} ${
            selected === "dark" ? "text-white" : "text-slate-900"
          }`}
          onClick={() => {
            setSelected("dark");
          }}
        >
          <FiMoon className="relative z-10 text-xs md:text-lg" />

          <span className="relative z-10">Dark</span>
        </button>
        <div
          className={`absolute inset-0 z-0 flex ${
            selected === "dark" ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleDarkMode;
