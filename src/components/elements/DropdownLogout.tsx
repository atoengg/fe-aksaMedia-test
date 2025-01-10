import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

type DropdownLogoutProps = {
  isOpen: boolean;
};

export function DropdownLogout({ isOpen }: DropdownLogoutProps) {
  if (!isOpen) return null;

  const { logout } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className={`absolute z-10 px-4 py-2 rounded-2xl top-14 right-20 text-center w-32 border ${theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "bg-[#0B192C] border-indigo-950 shadow text-white" : "bg-white border-indigo-300 shadow"} border-indigo-300`}>
      <button type="button" onClick={handleLogout} className="text-red-500 font-semibold">Logout</button>
    </div>
  );
}
