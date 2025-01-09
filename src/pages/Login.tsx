import { FormLogin } from "../components/fragments/FormLogin"
import { useTheme } from "../context/ThemeContext"

export const Login = () => {
    const {theme} = useTheme()
    return (
        <>
            <section className={`${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#1E201E]' : 'bg-[#F4F5FA]'}`}>
                <div className="min-h-screen flex justify-center items-center">
                    <div className={`rounded-2xl p-6 shadow-lg ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'bg-[#1A1A1D]' : 'bg-white'} min-w-96 flex flex-col items-center`}>
                        <h1 className={`font-bold text-3xl text-center ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : '' }`}>Login</h1>
                        <div className="mt-8 w-full">
                            <FormLogin/>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
