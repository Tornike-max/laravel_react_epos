import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 flex flex-col">
                <main className={`overflow-y-auto `}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default HomePageLayout;
