import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useToggleDarkMode } from "../context/useToggleDarkMode";

const Footer = () => {
  const navigate = useNavigate();
  const { selected } = useToggleDarkMode();
  return (
    <div className=" w-full flex flex-col justify-center items-center z-50">
      <div className="w-full text-black flex justify-center items-center py-1 gap-4 text-2xl">
        <Link
          to="https://www.instagram.com/epossoftware/"
          className={`cursor-pointer  p-1 rounded-md  ${
            selected === "light"
              ? "bg-[#EFEFFA] hover:bg-[#DFE0FC] text-slate-900 "
              : "bg-slate-950 hover:bg-slate-900 text-slate-100 "
          }  duration-150 transition-colors hover:text-[#405DE6]`}
        >
          <FaInstagram />
        </Link>
        <span
          className={`cursor-pointer  p-1 rounded-md ${
            selected === "light"
              ? "bg-[#EFEFFA] hover:bg-[#DFE0FC] text-slate-900"
              : "bg-slate-950 hover:bg-slate-900 text-slate-100"
          } duration-150 transition-colors hover:text-[#1877F2]`}
        >
          <FaFacebook />
        </span>
        <Link
          to="https://www.linkedin.com/company/epos-software-limited/"
          className={`cursor-pointer  p-1 rounded-md ${
            selected === "light"
              ? "bg-[#EFEFFA] hover:bg-[#DFE0FC] text-slate-900 "
              : "bg-slate-950 hover:bg-slate-900 text-slate-100 "
          } duration-150 transition-colors hover:text-[#2867B2]`}
        >
          <FaLinkedin />
        </Link>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full hidden sm:flex items-center justify-center text-sm sm:text-base gap-1 sm:gap-2 ">
          <button
            onClick={() => navigate("/company?info=access")}
            className="relative cursor-pointer group"
          >
            <p
              className={`flex items-center gap-1 ${
                selected === "light" ? "text-primary-500" : "text-slate-100"
              } duration-150 transition-colors`}
            >
              <span>Access</span>
              <span
                className={`${
                  selected === "light"
                    ? "text-slate-50 group-hover:text-primary-500"
                    : "text-slate-900 group-hover:text-slate-100"
                } duration-150 transition-colors`}
              >
                <HiOutlineArrowRight />
              </span>
            </p>
            <span className="absolute left-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 group-hover:w-full group-hover:bg-[#405DE6]" />
          </button>
          <button className="relative cursor-pointer group">
            <p
              className={`flex items-center gap-1 ${
                selected === "light" ? "text-primary-500" : "text-slate-100"
              } duration-150 transition-colors`}
            >
              <span>Privacy Policy</span>
              <span
                className={`${
                  selected === "light"
                    ? "text-slate-50 group-hover:text-primary-500"
                    : "text-slate-900 group-hover:text-slate-100"
                } duration-150 transition-colors`}
              >
                <HiOutlineArrowRight />
              </span>
            </p>
            <span className="absolute left-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 group-hover:w-full group-hover:bg-[#405DE6]" />
          </button>
          <button className="relative cursor-pointer group text-sm sm:text-base">
            <p
              className={`flex items-center  gap-1 ${
                selected === "light" ? "text-primary-500" : "text-slate-100"
              } duration-150 transition-colors`}
            >
              <span> Site Policy</span>
              <span
                className={`${
                  selected === "light"
                    ? "text-slate-50 group-hover:text-primary-500"
                    : "text-slate-900 group-hover:text-slate-100"
                } duration-150 transition-colors`}
              >
                <HiOutlineArrowRight />
              </span>
            </p>
            <span className="absolute left-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 group-hover:w-full group-hover:bg-[#405DE6]" />
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <span
            className={` ${
              selected === "light" ? "text-slate-600" : "text-slate-100"
            } text-sm sm:text-base`}
          >
            © 2024 EposSoftware, Inc. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
