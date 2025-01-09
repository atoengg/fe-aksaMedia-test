import Navbar from "../components/fragments/Navbar";
import { Sidebar } from "../components/fragments/Sidebar"
import { useTheme } from "../context/ThemeContext";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

    const {theme} = useTheme()

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className={`${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#1E201E]' : 'bg-[#F4F5FA]'} p-4 w-full ml-16 md:ml-56`}>
                    <Navbar />
                    <main className="h-screen my-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
