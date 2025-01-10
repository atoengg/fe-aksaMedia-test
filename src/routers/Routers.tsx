import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { Users } from "../pages/Users"
import { PrivateRoute } from "./PrivateRoute"
import { SettingsPage } from "../pages/Settings"
import { UserForm } from "../components/fragments/useForm"
import { NotFound } from "../pages/NotFound"


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
                <Route path="/users/add" element={
                    <PrivateRoute>
                        <UserForm />
                    </PrivateRoute>} />
                <Route path="/users/edit/:id" element={
                    <PrivateRoute>
                        <UserForm />
                    </PrivateRoute>} />
                <Route path="*" element={
                    <PrivateRoute>
                        <NotFound />
                    </PrivateRoute>} />
            </Routes>
        </>
    )
}
