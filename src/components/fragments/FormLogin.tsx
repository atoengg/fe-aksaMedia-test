import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";


export const FormLogin = () => {
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const { theme } = useTheme();

    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const [errMsg, setErrMsg] = useState({
        username: "",
        password: "",
    });

    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {
        if (isAuthenticated || localStorage.getItem("isAuthenticated") === "true") {
            // Jika sudah login, arahkan ke halaman dashboard
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        // memantau perubahan pada errMsg dan memperbarui isFormValid
        const isFormValid = Object.values(errMsg).every((error) => !error);
        setIsFormValid(isFormValid);
    }, [errMsg]);


    const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInput({
            ...input,
            [name]: value,
        });
        validateForm(e);
    };

    const validateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'username') {
            if (value === '') {
                setErrMsg({
                    ...errMsg,
                    username: 'username tidak boleh kosong'
                })
            } else {
                setErrMsg({
                    ...errMsg,
                    username: ''
                })
            }
        } else {
            if (value === '') {
                setErrMsg({
                    ...errMsg,
                    password: 'password tidak boleh kosong'
                })
            } else {
                setErrMsg({
                    ...errMsg,
                    password: ''
                })
            }
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { username, password } = input

        if (login(username, password)) {
            localStorage.setItem("isAuthenticated", "true");
            navigate('/dashboard')
        } else {
            alert("Username atau password salah!");
        }

    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="username" className={`font-semibold text-sm ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>
                        Username
                    </label>
                    <input required type="username" name="username" id="username" placeholder="Masukan username anda" value={input.username} onChange={handleInputLogin} className={`w-full text-sm px-3 py-2 rounded-lg border-solid mt-1 border mb-2 ${errMsg.username ? 'border-red-500' : 'border-teal-500'} focus:outline-none`} />
                    {errMsg.username && (
                        <div className="text-red-500 text-sm">{errMsg.username}</div>
                    )}
                </div>

                <div className="">

                    <label htmlFor="password" className={`font-semibold text-sm ${theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'text-white' : ''}`}>
                        Password
                    </label>
                    <input required type="password" name="password" id="password" placeholder="Masukan password" value={input.password} onChange={handleInputLogin} className={`w-full text-sm px-3 py-2 rounded-lg border-solid mt-1 border mb-2 ${errMsg.password ? 'border-red-500' : 'border-teal-500'} focus:outline-none`} />
                    {errMsg.password && (
                        <div className="text-red-500 text-sm mb-6">{errMsg.password}</div>
                    )}
                </div>

                <button type="submit" disabled={!isFormValid} className={`block mt-3 w-full py-2 font-bold rounded-lg ${!isFormValid ? "bg-teal-100 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600"
                    } text-white`}>Masuk</button>
            </form>
        </>
    )
}
