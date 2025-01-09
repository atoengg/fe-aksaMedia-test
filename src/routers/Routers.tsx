import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { Users } from "../pages/Users"
import { PrivateRoute } from "./PrivateRoute"
import { SettingsPage } from "../pages/Settings"


export const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>} />
                <Route path="/users" element={
                    <PrivateRoute>
                        <Users />
                    </PrivateRoute>} />
                <Route path="/settings" element={
                    <PrivateRoute>
                        <SettingsPage />
                    </PrivateRoute>} />
            </Routes>
        </>
    )
}
