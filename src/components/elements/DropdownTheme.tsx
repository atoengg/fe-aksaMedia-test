import { BsSunFill, BsMoonStarsFill, BsWindows } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

type DropdownThemeProps = {
  isOpen: boolean;
};

export function DropdownTheme({ isOpen }: DropdownThemeProps) {
  if (!isOpen) return null;

  const { theme, setTheme } = useTheme();

  return (
    <div className={`absolute p-2 rounded-2xl top-14 right-2 w-32 border ${theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "bg-[#0B192C] border-indigo-950 shadow text-white" : "bg-white border-indigo-300 shadow"}`}>
      <ul className="flex flex-col">
        <li
          onClick={() => setTheme("light")}
          className={`flex items-center px-4 gap-2 cursor-pointer hover:bg-indigo-500 hover:text-white rounded-lg py-1 ${theme === "light"  ? "bg-indigo-500 text-white" : ""
            }`}>
          <BsSunFill className="w-4 h-4" />
          <p className="text-sm">Light</p>
        </li>

        <li
          onClick={() => setTheme("dark")}
          className={`flex items-center px-4 gap-2 cursor-pointer hover:bg-indigo-500 hover:text-white rounded-lg py-1 my-3 ${theme === "dark" ? "bg-indigo-500 text-white" : ""
            }`}>
          <BsMoonStarsFill className="w-4 h-4" />
          <p className="text-sm">Dark</p>
        </li>

        <li
          onClick={() => setTheme("system")}
          className={`flex items-center px-4 gap-2 cursor-pointer hover:bg-indigo-500 hover:text-white rounded-lg py-1 ${theme === "system" ? "bg-indigo-500 text-white" : ""
            }`}>
          <BsWindows className="w-4 h-4" />
          <p className="text-sm">System</p>
        </li>
      </ul>
    </div >
  );
}
