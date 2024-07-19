import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const Chip = ({ text, selected }: { text: string; selected: boolean }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeTab = (text: string) => {
    searchParams.set("tab", text);
    setSearchParams(searchParams);
  };

  return (
    <button
      onClick={() => handleChangeTab(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-base sm:text-lg transition-colors px-3 py-1 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};
export default Chip;
