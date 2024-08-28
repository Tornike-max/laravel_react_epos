import React, { createContext, useState, useEffect } from "react";

interface SidebarInterface {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    toggleSidebar: () => void;
}

const initialContext: SidebarInterface = {
    isOpen: false,
    setIsOpen: () => {},
    toggleSidebar: () => {},
};

export const ContextProvider = createContext<SidebarInterface>(initialContext);

export const SidebarProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialContext.isOpen);

    useEffect(() => {
        const val = localStorage.getItem("sidebarVal");
        if (val === "closed") {
            setIsOpen(false);
        }

        if (val === "open") {
            setIsOpen(true);
        }
    }, [isOpen]);

    const toggleSidebar = () => {
        if (isOpen === true) {
            setIsOpen(false);
            localStorage.setItem("sidebarVal", "closed");
        }
        if (isOpen === false) {
            setIsOpen(true);
            localStorage.setItem("sidebarVal", "open");
        }
    };

    const values = {
        isOpen,
        setIsOpen,
        toggleSidebar,
    };

    return (
        <ContextProvider.Provider value={values}>
            {children}
        </ContextProvider.Provider>
    );
};
