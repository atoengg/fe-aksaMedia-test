import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUser = {
    username: "adminAksa",
    password: "admin123",
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // Cek apakah isAuthenticated disimpan di localStorage ketika aplikasi dimuat
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(storedAuthStatus === "true");

    // Fungsi login
    const login = (username: string, password: string) => {
        if (username === mockUser.username && password === mockUser.password) {
            setIsAuthenticated(true);
            localStorage.setItem("isAuthenticated", "true"); // Simpan status login ke localStorage
            return true;
        }
        return false;
    };

    // Fungsi logout
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false"); // Hapus status login di localStorage
    };

    // Menjaga agar state isAuthenticated tetap terjaga saat aplikasi dimuat ulang
    useEffect(() => {
        // Ketika status isAuthenticated berubah, simpan ke localStorage
        localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
