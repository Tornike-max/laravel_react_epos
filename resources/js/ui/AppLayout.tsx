import { useLocation } from "react-router-dom";
import HomePageLayout from "./HomePageLayout";
import MainLayout from "./MainLayout";

const AppLayout = () => {
    const { pathname } = useLocation();
    return (
        <div className="w-full">
            {pathname === "/" && <HomePageLayout />}
            {pathname !== "/" && <MainLayout />}
        </div>
    );
};

export default AppLayout;
