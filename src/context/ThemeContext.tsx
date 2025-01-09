import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem("theme");
        return (storedTheme as Theme) || "system";
    });

    useEffect(() => {
        const root = document.documentElement;
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = (selectedTheme: Theme) => {
            if (selectedTheme === "system") {
                const isSystemDark = systemPrefersDark.matches;
                root.classList.toggle("dark", isSystemDark);
            } else {
                root.classList.toggle("dark", selectedTheme === "dark");
            }
        };

        applyTheme(theme);

        // Simpan tema ke LocalStorage
        localStorage.setItem("theme", theme);

        // Deteksi perubahan preferensi sistem
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (theme === "system") {
                root.classList.toggle("dark", e.matches);
            }
        };

        systemPrefersDark.addEventListener("change", handleSystemThemeChange);

        return () => {
            systemPrefersDark.removeEventListener("change", handleSystemThemeChange);
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
