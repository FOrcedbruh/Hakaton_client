import styles from "./Registration.module.scss"
import { useForm } from "react-hook-form"
import eyeIcon from "./../../icons/eye.svg"
import closeEye from "./../../icons/closeEye.svg"
import {  useState } from "react"
import Button from "../../components/Button/Button"
import { registration } from "../../auth/handlers"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context/authContext"


interface IFormState {
    email: string,
    password: string,
    firstname: string,
    surname: string
}

const Registration: React.FC = () => {

    const { setAuthUser } = useAuthContext()

    const navigate = useNavigate()

    const [viewPass, setViewPass] = useState<boolean>(false)


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
        const resData = await registration(data.email, data.password, data.firstname, data.surname)

        localStorage.setItem("user", JSON.stringify(resData.user))
        setAuthUser(resData.user)
        if (resData.status === 200) {
            navigate("/me")
        }
        reset()
    }
    
    return (
        <section className={styles.window}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h3>Регистрация</h3>
                <div>
                    <label htmlFor="firstname">Полное имя</label>
                    <input type="text" {...register("firstname", {
                        required: "Поле обязательно"
                    })}/>
                    {errors.firstname && <div className={styles.error}>{errors.firstname.message}</div>}
                </div>
                <div>
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" {...register("surname", {
                        required: "Поле обязательно"
                    })}/>
                    {errors.surname && <div className={styles.error}>{errors.surname.message}</div>}
                </div>
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
                    <label id={styles.passLabel} htmlFor="password">Придумайте пароль</label>
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
                    Создать
                </Button>
            </form>
        </section>
    )
}

export default Registration