import { useTheme } from "../context/ThemeContext"
import { Layout } from "../Layout"

export const Dashboard = () => {

  const { theme } = useTheme()

  return (
    <>
      <Layout>
        <div className="">
          <p className={`text-xl ${theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : "text-black"}`}>homepage</p>
        </div>
      </Layout>
    </>
  )
}
