import React from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import NavbarDrawer from "./NavbarDrawer";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useToggleDarkMode } from "@/context/useToggleDarkMode";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

interface Props {
    window?: () => Window;
}

const NavbarMenuMobile = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const { selected } = useToggleDarkMode();
    const navigate = useNavigate();

    const appBarStyles = {
        backgroundColor: `${selected === "dark" ? "#0f172a" : "#e2e8f0"}`,
        color: "white",
        transition:
            "background-color 150ms ease-in-out, color 150ms ease-in-out",
    };

    const drawerPaperStyles = {
        boxSizing: "border-box",
        width: drawerWidth,
        backgroundColor: `${selected === "dark" ? "#1f2937" : "#374151"}`,
        color: "white",
        transition:
            "background-color 150ms ease-in-out, color 150ms ease-in-out",
    };

    const iconColor = selected === "dark" ? "inherit" : "default";

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar position="fixed" sx={appBarStyles}>
                <Toolbar>
                    <IconButton
                        color={iconColor}
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <HiOutlineBars3 />
                    </IconButton>
                    <img
                        onClick={() => navigate("/")}
                        src={`${
                            selected === "dark"
                                ? "/images/epos.png"
                                : "/images/dark-epos.png"
                        }`}
                        alt="logo"
                        className="w-24 text-slate-500 rounded-md cursor-pointer"
                    />
                </Toolbar>
            </AppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{ "& .MuiDrawer-paper": drawerPaperStyles }}
            >
                <NavbarDrawer />
            </Drawer>
        </>
    );
};

export default NavbarMenuMobile;
