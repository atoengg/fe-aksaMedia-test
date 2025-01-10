import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { addUser, editUser } from "../../store/userCrudSlice";
import { Layout } from "../../Layout";
import { useTheme } from "../../context/ThemeContext";

export const UserForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { theme } = useTheme();

    const isEdit = Boolean(id);
    const users = useSelector((state: RootState) => state.userCrud);
    const userToEdit = isEdit ? users.find((user) => user.id === Number(id)) : null;

    const [formData, setFormData] = useState({
        namaLengkap: userToEdit?.namaLengkap || "",
        jenisKelamin: userToEdit?.jenisKelamin || "Laki-laki",
        alamat: userToEdit?.alamat || "",
        status: userToEdit?.status || "Lajang",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            dispatch(editUser({ id: Number(id), ...formData }));
        } else {
            dispatch(addUser({ id: Date.now(), ...formData }));
        }
        navigate("/users");
    };

    return (
        <>
            <Layout>
                <div className={`p-4 rounded-xl ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#1A1A1D] shadow-gray-800' : 'bg-white'}  shadow-lg`}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className={`block mb-2 font-semibold ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>Nama Lengkap</label>
                            <input
                                required
                                type="text"
                                name="namaLengkap"
                                value={formData.namaLengkap}
                                onChange={handleInputChange}
                                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#2f2f33] text-white' : 'bg-[#F4F5FA]'}`}
                            />
                        </div>
                        <div className="mb-4">
                            <label className={`block mb-2 font-semibold ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>Jenis Kelamin</label>

                            <select
                                required
                                name="jenisKelamin"
                                value={formData.jenisKelamin}
                                onChange={handleInputChange}
                                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#2f2f33] text-white' : 'bg-[#F4F5FA]'}`}
                            >
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className={`block mb-2 font-semibold ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>Alamat</label>
                            <input
                                required
                                type="text"
                                name="alamat"
                                value={formData.alamat}
                                onChange={handleInputChange}
                                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#2f2f33] text-white' : 'bg-[#F4F5FA]'}`}
                            />
                        </div>
                        <div className="mb-4">
                            <label className={`block mb-2 font-semibold ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>Status</label>
                            <input
                                required
                                type="text"
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#2f2f33] text-white' : 'bg-[#F4F5FA]'}`}
                            />
                        </div>
                        <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg">
                            {isEdit ? "Update" : "Tambah"} User
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    );
};
