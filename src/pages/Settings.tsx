import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setUsername } from "../store/userSlice";
import { Layout } from "../Layout";
import { useTheme } from "../context/ThemeContext";

export const SettingsPage = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);
  const { theme } = useTheme()

  const [newUsername, setNewUsername] = useState(username);

  const handleUpdateUsername = () => {
    dispatch(setUsername(newUsername));
    alert("Username updated!");
  };

  return (
    <>
      <Layout>
        <div className="max-w-96 mt-12">
          <div className={`${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#1A1A1D] shadow-gray-800' : 'bg-white'} rounded-2xl flex justify-between flex-col p-4 shadow-lg`}>
            <div className="mb-4">
              <label htmlFor="username" className={`block font-semibold mb-2 ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>
                Edit Username:
              </label>
              <input
                id="username"
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="border p-2 rounded-md w-full focus:outline-none"
              />
            </div>
            <button
              onClick={handleUpdateUsername}
              className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
            >
              Update Username
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};
