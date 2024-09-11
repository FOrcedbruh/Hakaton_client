import styles from "./Create.module.scss"
import { useForm } from "react-hook-form"
import Button from "../../components/Button/Button"
import aiIcon from './../../icons/aiIcon.svg'
import { create_contacting } from "../../api/handlers"
import { useAuthContext } from "../../context/authContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"

interface IFormState {
    region: string,
    text: string
}

const Create: React.FC = () => {

    const [success, setSuccess] = useState<boolean>(false)

    const navigate = useNavigate()

    const { authUser } = useAuthContext()

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isValid,
            errors
        }
    } = useForm<IFormState>()

    const onSubmit = async (data: IFormState) => {
        const resData = await create_contacting(data.text, authUser.id)

        if (resData.status === 201) {
            setSuccess(true)
            reset()
            navigate("/contacting/recents")
        }
    }

    return (
        <section className={styles.window}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Укажите адрес с точностью до города" {...register("region", {
                    required: "Введите регион"
                })}/>
                <textarea placeholder="Напишите текст обращения" {...register("text", {
                    required: "Обращение не должно быть пустым",
                    maxLength: {
                        value: 200,
                        message: "Максимум 200 слов"
                    }
                })}></textarea>
                
                <Button disabled={!isValid} type="submit" width="180px">
                    Отправить
                </Button>
            </form>
            <p>Система автоматически определит ваше обращения в конкретный сервис <img src={aiIcon} width={30} height={30}/></p>
            {success && <motion.div initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0}} className={styles.success}><h3>Ваше обращение отправлено не проверку</h3></motion.div>}
        </section>
    )
}

export default Create