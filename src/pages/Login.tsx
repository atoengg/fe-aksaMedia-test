
export const Login = () => {
    return (
        <>
            <section className="bg-[#F4F5FA]">
                <div className="min-h-screen flex justify-center items-center">
                    <div className="rounded-2xl p-6 shadow-md bg-white max-w-[500px] flex flex-col items-center">
                        <h1 className="font-bold text-3xl text-center">Login</h1>
                        <div className="mt-8">
                            <form action="">

                                <label htmlFor="email" className="font-semibold text-sm">
                                    Email
                                </label>
                                <input required type="email" name="email" id="email" placeholder="Masukan email anda" className="w-full text-sm px-3 py-2 rounded-lg border-solid mt-1 border mb-3 focus:outline-none" />
                                
                                <label htmlFor="email" className="font-semibold text-sm">
                                    Password
                                </label>
                                <input required type="password" name="password" id="password" placeholder="Masukan password" className="w-full text-sm px-3 py-2 rounded-lg border-solid mt-1 border mb-6 focus:outline-none" />

                                <button type="submit" className="block w-full py-2 font-bold rounded-lg text-white bg-teal-500 hover:bg-teal-600">Masuk</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
