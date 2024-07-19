import React from "react";
import { useNavigate } from "react-router-dom";
import { useToggleDarkMode } from "../context/useToggleDarkMode";

const AnimatedButton = ({
  children,
  path,
  size,
}: {
  children: React.ReactNode;
  path: string;
  size?: "sm" | "md" | "lg" | "xl";
}) => {
  const { selected } = useToggleDarkMode();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className={`group relative px-2 py-2 font-medium ${
        selected === "light" ? "text-slate-900" : "text-slate-100"
      }  transition-colors duration-[400ms] hover:text-blue-500`}
    >
      <span
        className={`font-extrabold  ${
          size === "sm"
            ? "text-sm sm:text-base"
            : size === "md"
            ? "text-base sm:text-lg"
            : size === "lg"
            ? "text-lg sm:text-xl"
            : size === "xl"
            ? "text-xl sm:text-2xl"
            : "text-base"
        }  cursor-pointer`}
      >
        {children}
      </span>

      {/* TOP */}
      <span
        className={`absolute left-0 top-0 h-[2px] w-0 bg-blue-400 transition-all duration-100 group-hover:w-full`}
      />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-400 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-400 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-400 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default AnimatedButton;
