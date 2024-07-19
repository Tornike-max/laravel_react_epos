import { useLocation } from "react-router-dom";
import { useToggleDarkMode } from "../context/useToggleDarkMode";
import { useEffect, useState } from "react";

const HeaderTitle = () => {
  const { pathname } = useLocation();
  const { selected } = useToggleDarkMode();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/company":
        setTitle("Company");
        break;
      case "/products":
        setTitle("Products");
        break;
      case "/press-release":
        setTitle("Press Release");
        break;
      case "/careers":
        setTitle("Careers");
        break;
      case "/support":
        setTitle("Support");
        break;
      default:
        setTitle("");
        break;
    }
  }, [pathname]);

  return (
    <h1
      className={`font-bold pb-0 pt-4w ${
        selected === "light" ? "text-slate-900" : "text-slate-100"
      } duration-150 transition-all text-xl sm:text-3xl px-4 sm:px-6 md:px-8 lg:px-10`}
    >
      {title}
    </h1>
  );
};

export default HeaderTitle;
