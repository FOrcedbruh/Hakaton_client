import styles from "./Login.module.scss"
import { useForm } from "react-hook-form"
import eyeIcon from "./../../icons/eye.svg"
import closeEye from "./../../icons/closeEye.svg"
import { useState } from "react"
import Button from "../../components/Button/Button"
import { login } from "../../auth/handlers"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context/authContext"


interface IFormState {
    email: string,
    password: string
}

const Login: React.FC = () => {

    const { setAuthUser } = useAuthContext()

    const [viewPass, setViewPass] = useState<boolean>(false)

    const navigate = useNavigate()

    const {
        formState: {
            errors,
            isValid
        },
        reset,
        register,
        handleSubmit
    } = useForm<IFormState>({mode: "onChange"})

    const onSubmit = async (data: IFormState) => {
        const resData = await login(data.email, data.password)

        
        if (resData.status === 200) {
            navigate("/me")
            localStorage.setItem("user", JSON.stringify(resData.user))
            setAuthUser(resData.user)
            localStorage.setItem("id", resData.user.id)
            reset()
        }
    }
    
    return (
        <section className={styles.window}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h3>Вход</h3>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" {...register("email", {
                        required: "Заполните E-mail",
                        pattern: {
                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                            message: "Синтаксис E-mail неверный"
                        }
                    })}/>
                    {errors.email && <div className={styles.error}>{errors.email.message}</div>}
                </div>
                
                <div>
                    <label id={styles.passLabel} htmlFor="password">Пароль</label>
                    <div id={styles.passInput}>
                        <input {...register("password", {
                            required: "Пароль обязателен",
                            minLength: {
                                value: 6,
                                message: "Минимальная длинна пароля 6 символов"
                            }
                        })} type={viewPass ? "text" : "password"} />
                        <button type="button" onClick={() => setViewPass(!viewPass)} className={styles.eye}><img height={24} width={24} src={viewPass ? eyeIcon : closeEye} alt="" /></button>
                    </div>
                    {errors.password && <div className={styles.error}>{errors.password.message}</div>}
                </div>
                <Button width="90%" type="submit" disabled={!isValid}>
                    Войти
                </Button>
            </form>
        </section>
    )
}

export default Login