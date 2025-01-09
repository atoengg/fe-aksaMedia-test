import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type DropdownLogoutProps = {
  isOpen: boolean;
};

export function DropdownLogout({ isOpen }: DropdownLogoutProps) {
  if (!isOpen) return null;

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="absolute px-4 py-2 rounded-2xl top-14 right-20 w-20 border border-indigo-300 bg-white">
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
}
