import { useState } from "react";
import { BsCaretDownFill, BsMoonStarsFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { DropdownTheme } from "../elements/DropdownTheme";
import { DropdownLogout } from "../elements/DropdownLogout";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useTheme } from "../../context/ThemeContext";

type Props = {
    titlePage?: string;
};

export default function Navbar({ titlePage }: Props) {
    const location = useLocation();
    const username = useSelector((state: RootState) => state.user.username);
    const { theme } = useTheme()
    const [activeDropdown, setActiveDropdown] = useState<"theme" | "logout" | null>(null);

    const pageTitles: Record<string, string> = {
        "/dashboard": "Dashboard",
        "/users": "Users",
        "/settings": "Settings",
        "/users/add": "Tambah User",
        "/users/edit/:id": "Edit User",
    };

    const dynamicTitle = titlePage || pageTitles[location.pathname] || "Edit User";

    const toggleDropdown = (dropdown: "theme" | "logout") => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <nav className="flex justify-between w-full items-center">
            <h2 className={`text-lg md:text-2xl font-bold ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>{dynamicTitle}</h2>

            <div className="flex flex-row gap-4">
                <div className={`flex items-center gap-1 cursor-pointer ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`} onClick={() => toggleDropdown('logout')}>
                    <p className={`font-semibold text-sm md:text-lg `}>hi, {username}</p>
                    <BsCaretDownFill className="w-3 h-3" />
                </div>

                <div className={`flex items-center gap-1 cursor-pointer border-l ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'border-white text-white' : 'border-black'} pl-4`} onClick={() => toggleDropdown('theme')}>
                    <BsMoonStarsFill />
                    <BsCaretDownFill className="w-3 h-3" />
                </div>
            </div>

            <DropdownTheme isOpen={activeDropdown === "theme"} />
            <DropdownLogout isOpen={activeDropdown === "logout"} />
        </nav>
    );
}
