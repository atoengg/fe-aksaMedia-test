import { useState } from "react";
import { BsCaretDownFill, BsMoonStarsFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { DropdownTheme } from "../elements/DropdownTheme";
import { DropdownLogout } from "../elements/DropdownLogout";

type Props = {
    titlePage?: string;
};

export default function Navbar({ titlePage }: Props) {
    const location = useLocation();
    const [activeDropdown, setActiveDropdown] = useState<"theme" | "logout" | null>(null);

    const pageTitles: Record<string, string> = {
        "/dashboard": "Dashboard",
        "/users": "Users",
        "/settings": "Settings",
    };

    const dynamicTitle = titlePage || pageTitles[location.pathname] || "Untitled Page";

    const toggleDropdown = (dropdown: "theme" | "logout") => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <nav className="flex justify-between w-full items-center">
            <h2 className="text-2xl font-bold">{dynamicTitle}</h2>

            <div className="flex flex-row gap-4">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => toggleDropdown('logout')}>
                    <p className="font-semibold text-sm md:text-lg">hi, Irham</p>
                    <BsCaretDownFill className="w-3 h-3" />
                </div>

                <div className="flex items-center gap-1 cursor-pointer border-l border-black pl-4" onClick={() => toggleDropdown('theme')}>
                    <BsMoonStarsFill />
                    <BsCaretDownFill className="w-3 h-3" />
                </div>
            </div>

            <DropdownTheme isOpen={activeDropdown === "theme"} />
            <DropdownLogout isOpen={activeDropdown === "logout"} />
        </nav>
    );
}
