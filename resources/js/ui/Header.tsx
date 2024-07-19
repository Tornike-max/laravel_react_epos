import { motion } from "framer-motion";
import { pageList } from "../constants/constant";
import CompanyName from "./CompanyName";
import NavbarItems from "./NavbarItems";

const Header = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className="w-full z-50 px-4 md:px-8 py-2 rounded-lg opacity-90 "
    >
      <motion.ul className="relative w-full z-50 flex items-center justify-center">
        {pageList.slice(0, 1).map((page, i) => (
          <CompanyName key={i} page={page} />
        ))}
        {pageList.slice(1).map((page, i) => (
          <NavbarItems key={i} page={page} />
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Header;
