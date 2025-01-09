import Navbar from "../components/fragments/Navbar";
import { Sidebar } from "../components/fragments/Sidebar"

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="bg-[#F4F5FA] p-4 w-full ml-16 md:ml-56 ">
                    <Navbar />
                    <main className="h-screen my-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
