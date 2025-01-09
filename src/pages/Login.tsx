import { FormLogin } from "../components/fragments/FormLogin"

export const Login = () => {
    return (
        <>
            <section className="bg-[#F4F5FA]">
                <div className="min-h-screen flex justify-center items-center">
                    <div className="rounded-2xl p-6 shadow-md bg-white min-w-96 flex flex-col items-center">
                        <h1 className="font-bold text-3xl text-center">Login</h1>
                        <div className="mt-8 w-full">
                            <FormLogin/>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
