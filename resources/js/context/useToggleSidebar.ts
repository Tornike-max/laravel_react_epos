import { useContext } from "react";
import { ContextProvider } from "./SidebarContext";

export const useToggleSidebar = () => {
    const context = useContext(ContextProvider);
    if (context === undefined) {
        throw new Error(
            "useSidebarContext must be used within a SidebarProvider"
        );
    }

    return context;
};
