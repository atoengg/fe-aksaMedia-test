import { BsArrowLeft, BsArrowRight, BsSearch } from "react-icons/bs";
import { Layout } from "../Layout";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteUser } from "../store/userCrudSlice";
import { useTheme } from "../context/ThemeContext";

export const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme()

  const users = useSelector((state: RootState) => state.userCrud);

  // Parse query string from URL
  const queryParams = new URLSearchParams(location.search);
  const initialPage = Number(queryParams.get("page")) || 1;
  const initialKeyword = queryParams.get("search") || "";

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchKeyword, setSearchKeyword] = useState(initialKeyword);
  const itemsPerPage = 5;

  // Filtered data based on search
  const filteredUsers = users.filter((user) =>
    user.namaLengkap.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const currentData = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Update query string when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (currentPage > 1) params.set("page", currentPage.toString());
    if (searchKeyword) params.set("search", searchKeyword);
    navigate(`?${params.toString()}`);
  }, [currentPage, searchKeyword, navigate]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    setCurrentPage(1); // Reset to first page after search
  };

  return (
    <Layout>
      <div className={`flex items-center justify-between px-3 py-4 ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#1A1A1D] shadow-gray-800' : 'bg-gray-50'}`}>
        <p className={`font-semibold text-[16px] md:text-lg whitespace-nowrap ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>Data User</p>

        <div className="flex flex-row items-center gap-4 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchKeyword}
              onChange={handleSearch}
              className="rounded-lg w-32 md:w-48 px-8 py-2 text-sm border border-[#c7c8cb] focus:outline-none"
            />
            <BsSearch className="absolute top-2 left-2 w-5 h-5 text-[#c7c8cb]" />
          </div>
          <div className="">
            <button className="p-2 md:py-2 md:px-4 rounded-lg bg-indigo-500 text-white whitespace-nowrap">
              <Link to={"/users/add"}>Tambah Data</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-auto rounded-b-lg shadow-md">
        <table className="w-full">
          <thead className={`${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#232327] border-[#0d0d0e] text-white' : 'bg-gray-50 border-gray-200' } border-b-2 `}>
            <tr>
              <th className="w-12 p-3 text-sm font-semibold tracking-wide text-left">No</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Nama Lengkap</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Jenis Kelamin</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Alamat</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Aksi</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'divide-[#2f2f33]' : 'divide-gray-100' } `}>
            {currentData.length === 0 ? (
              <tr>
                <td colSpan={6} className={`text-center py-4 ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>
                  Data user kosong
                </td>
              </tr>
            ) : (
              currentData.map((user, index) => (
                <tr className={`${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#1A1A1D]' : 'bg-white' } `} key={user.id}>
                  <td className={`p-3 text-sm ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-gray-200' : 'text-gray-700'}  whitespace-nowrap`}>
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className={`p-3 text-sm ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-gray-200' : 'text-gray-700'}  whitespace-nowrap`}>
                    {user.namaLengkap}
                  </td>
                  <td className={`p-3 text-sm ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-gray-200' : 'text-gray-700'}  whitespace-nowrap`}>
                    {user.jenisKelamin}
                  </td>
                  <td className={`p-3 text-sm ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-gray-200' : 'text-gray-700'}  whitespace-nowrap`}>
                    {user.alamat}
                  </td>
                  <td className={`p-3 text-sm ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-gray-200' : 'text-gray-700'}  whitespace-nowrap`}>
                    {user.status}
                  </td>
                  <td className={`p-3 text-sm ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-gray-200' : 'text-gray-700'}  whitespace-nowrap`}>
                    <Link to={`/users/edit/${user.id}`} className="mr-2 text-indigo-500 hover:text-indigo-700">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          className={`p-2 rounded-lg ${currentPage === 1 ? "bg-gray-300" : "bg-indigo-500 text-white hover:bg-indigo-600"}`}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <BsArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-lg ${currentPage === index + 1
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-300"
                }`}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className={`p-2 rounded-lg ${currentPage === totalPages ? "bg-gray-300" : "bg-indigo-500 text-white hover:bg-indigo-600"}`}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <BsArrowRight className="w-4 h-4" />
        </button>
      </div>
    </Layout>
  );
};
