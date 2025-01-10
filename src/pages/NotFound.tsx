import { useTheme } from "../context/ThemeContext"
import { imgNotFound } from "../Image"
import { Layout } from "../Layout"

export const NotFound = () => {

    const { theme } = useTheme()

    return (
        <>
            <Layout>
                <div className="lg:min-h-screen">
                    <div className="flex flex-col justify-center items-center">
                        <img src={imgNotFound} alt="img-notFound" className="md:max-w-md" />
                        <h2 className={`text-center text-xl lg:px-32 lg:text-2xl font-bold mt-2 ${theme === 'dark'  || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>
                            Oops!, Halaman tidak ditemukan
                        </h2>
                        <p className="text-center lg:px-32 mt-2 text-sm text-gray-400">Maaf, sepertinya halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan, dihapus, atau tidak pernah ada. Pastikan URL yang Anda masukkan benar.</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}
