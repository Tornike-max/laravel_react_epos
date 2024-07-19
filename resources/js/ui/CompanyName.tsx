import { Link } from "react-router-dom";

const CompanyName = ({ page }: { page: { label: string; path: string } }) => {
  return (
    <Link to={page.path} className="w-full text-2xl font-bold text-black">
      <img className="w-28" src={"/images/dark-epos.png"} alt="logo" />
    </Link>
  );
};

export default CompanyName;
