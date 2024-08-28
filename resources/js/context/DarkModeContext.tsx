import React, { createContext, useEffect, useState } from "react";

interface DarkmodeType {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
    toggleDarkMode: () => void;
}

const initialState: DarkmodeType = {
    isDark: false,
    setIsDark: () => {},
    toggleDarkMode: () => {},
};

export const DarkModeContext = createContext<DarkmodeType>(initialState);

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState<boolean>(initialState.isDark);

    useEffect(() => {
        const val = localStorage.getItem("isDark");
        if (val === "true") {
            setIsDark(true);
        }
        if (val === "false") {
            setIsDark(false);
        }
    }, [isDark]);

    const toggleDarkMode = () => {
        if (isDark === true) {
            localStorage.setItem("isDark", "false");
            setIsDark(false);
        }

        if (isDark === false) {
            localStorage.setItem("isDark", "true");
            setIsDark(true);
        }
    };

    const value = {
        isDark,
        setIsDark,
        toggleDarkMode,
    };

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;
