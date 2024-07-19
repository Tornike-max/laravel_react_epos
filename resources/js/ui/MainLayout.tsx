import { Outlet } from "react-router-dom";
import MiniSidebar, { SidebarItem } from "./MiniSidebar";
import { pageList } from "../constants/constant";
import PageHeader from "./PageHeader";
import NavbarMenuMobile from "./NavbarMenuMobile";
import HeaderTitle from "./HeaderTitle";
import Footer from "./Footer";
import { useToggleDarkMode } from "@/context/useToggleDarkMode";

const MainLayout = () => {
    const { selected } = useToggleDarkMode();

    return (
        <div className="flex absolute w-full flex-col">
            <div className="flex w-full">
                <header className="sm:hidden">
                    <NavbarMenuMobile />
                </header>
                <section
                    className={`fle min-h-screen flex-col flex-1 h-full ${
                        selected === "light" ? "bg-slate-100" : "bg-slate-950"
                    } duration-150 transition-all pb-10 md:pb-20`}
                >
                    <header className="hidden sm:block">
                        <PageHeader />
                    </header>

                    <header className="mt-20 sm:mt-2">
                        <HeaderTitle />
                    </header>

                    <main className="w-full ">
                        <Outlet />
                    </main>
                </section>
                <aside className="hidden sticky sm:block right-0 top-0 h-screen ">
                    <MiniSidebar>
                        {pageList.slice(1).map((item) => (
                            <SidebarItem
                                key={item.path}
                                path={item.path}
                                text={item.label}
                            />
                        ))}
                    </MiniSidebar>
                </aside>
            </div>
            <footer
                className={`fixed bottom-0 w-full h-14 sm:h-20 border-t ${
                    selected === "light"
                        ? "bg-slate-50"
                        : "bg-slate-900 border-slate-950"
                } duration-150 transition-all sm:block`}
            >
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;
