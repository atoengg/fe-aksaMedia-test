import { useTheme } from "../../context/ThemeContext";

type CardProps = {
    title?: string;
    subTitle?: number;
    icon?: string;
}

export const Card = ({ title, subTitle, icon }: CardProps) => {

    const {theme} = useTheme()

    return (
        <>
            <div className={`p-10 rounded-lg shadow-md ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "bg-[#1A1A1D]" : "bg-white"}`}>
                <div className="flex flex-col items-start mt-6">
                    <img src={icon} alt="icon-user" className="w-12 h-12" />
                    <p className="mt-4 text-gray-400">{title}</p>
                    <p className={`text-5xl font-bold mt-2 ${theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : '' }`}>{subTitle}</p>
                </div>
            </div>
        </>
    )
}