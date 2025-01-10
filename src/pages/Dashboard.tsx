import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext"
import { Layout } from "../Layout"
import { RootState } from "../store";
import { heroImgDashboard, iconFemale, iconMale, iconUser, iconWedding } from "../Image";
import { Card } from "../components/fragments/Card";
import { useEffect } from "react";

export const Dashboard = () => {

  const username = useSelector((state: RootState) => state.user.username);
  const users = useSelector((state: RootState) => state.userCrud);

  const { theme } = useTheme()

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const getTotalsFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const totalUsers = users.length;
    const totalMale = users.filter((user: any) => user.jenisKelamin === "Laki-laki").length;
    const totalFemale = users.filter((user: any) => user.jenisKelamin === "Perempuan").length;
    const totalMarried = users.filter((user: any) => user.status === "Menikah").length;

    return {
      totalUsers,
      totalMale,
      totalFemale,
      totalMarried,
    };
  };

  const { totalUsers, totalMale, totalFemale, totalMarried } = getTotalsFromLocalStorage();


  return (
    <>
      <Layout>
        <div className={`p-10 shadow-md rounded-lg ${theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#1A1A1D]' : "bg-white"}`}>
          <div className="flex items-center justify-between gap-10">
            <div className="w-full md:w-1/2">
              <h2 className={`text-lg md:text-xl lg:text-2xl font-semibold mb-4 ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : '' }`}>Selamat datang kembali, {username}!</h2>
              <p className="text-[12px] md:text-sm text-gray-400">Senang melihat Anda kembali. Mari kita mulai hari ini dengan mengelola situs ini.</p>
            </div>
            <div className="w-1/2 hidden md:block">
              <img src={heroImgDashboard} alt="hero-img" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 ">
          <Card subTitle={totalUsers} title="Total user" icon={iconUser} />
          <Card subTitle={totalMale} title="Total jenis kelamin laki-laki" icon={iconMale} />
          <Card subTitle={totalFemale} title="Total jenis kelamin perempuan" icon={iconFemale} />
          <Card subTitle={totalMarried} title="Total status menikah" icon={iconWedding} />
        </div>
      </Layout>
    </>
  )
}
