import { useLocation } from "react-router-dom";
import FlyoutLink from "./FlyoutLink";

const NavbarItems = ({ page }: { page: { label: string; path: string } }) => {
  const { pathname } = useLocation();

  return (
    <li className="w-full flex items-center justify-center z-50">
      <FlyoutLink href={page.path}>
        <p
          className={`text-base md:text-lg font-semibold hover:text-slate-950 duration-150 transition-all  ${
            pathname === page.path
              ? "text-slate-950 font-bold"
              : "text-slate-800"
          }`}
        >
          {page.label}
        </p>
      </FlyoutLink>
    </li>
  );
};

export default NavbarItems;
