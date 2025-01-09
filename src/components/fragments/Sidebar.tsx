import { Link, useLocation } from "react-router-dom";
import { SIDEBAR } from "../../constants/sidebar";
import { logoAksamedia } from "../../Image";

export const Sidebar = () => {
    const location = useLocation(); 

    return (
        <div className="w-16 md:w-56 fixed left-0 top-0 h-screen z-10 border-r pt-8 px-4 bg-white">
            <div className="mb-8">
                <div className="flex items-center gap-3">
                    <img src={logoAksamedia} alt="logo-img" className="w-10 hidden md:flex" />
                    <p className="font-semibold hidden md:flex">Aksa Media</p>
                </div>
                <img src={logoAksamedia} alt="logo-img" className="w-8 md:hidden" />
            </div>

            <ul className="mt-6 space-y-6">
                {SIDEBAR.map((item) => (
                    <li
                        key={item.id}
                        className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${location.pathname === item.path ? 'bg-indigo-500 text-white' : ''
                            }`}
                    >
                        <Link
                            to={item.path}
                            className="flex items-center md:justify-start md:space-x-5"
                        >
                            <span>{item.icon}</span>
                            <span className="text-sm hidden md:flex">{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
