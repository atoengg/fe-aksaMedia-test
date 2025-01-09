import { BsSunFill, BsMoonStarsFill, BsWindows } from "react-icons/bs";

type DropdownThemeProps = {
  isOpen: boolean;
};

export function DropdownTheme({ isOpen }: DropdownThemeProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute p-2 rounded-2xl top-14 right-2 w-32 border border-indigo-300 bg-white">
      <ul className="flex flex-col">
        <li className="flex items-center px-4 gap-2 cursor-pointer hover:bg-indigo-500 hover:text-white rounded-lg py-1">
          <BsSunFill className="w-4 h-4" />
          <p className="text-sm">Light</p>
        </li>
        <li className="flex items-center px-4 gap-2 cursor-pointer hover:bg-indigo-500 hover:text-white rounded-lg py-1 my-3">
          <BsMoonStarsFill className="w-4 h-4" />
          <p className="text-sm">Dark</p>
        </li>
        <li className="flex items-center px-4 gap-2 cursor-pointer hover:bg-indigo-500 hover:text-white rounded-lg py-1">
          <BsWindows className="w-4 h-4" />
          <p className="text-sm">System</p>
        </li>
      </ul>
    </div>
  );
}
