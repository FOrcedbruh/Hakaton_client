import { useAuthContext } from "../../context/authContext"
import { useNavigate } from "react-router-dom"
import styles from './Home.module.scss'
import Button from "../../components/Button/Button"
import { motion } from "framer-motion"
import createIcon from './../../icons/createIcon.svg'
import recentsIcon from './../../icons/recentsIcon.svg'

const Home: React.FC = () => {

    const { authUser } = useAuthContext()
    const navigate = useNavigate()

    const toAuth = () => {
        navigate("/auth/login")
    }

    return (
        <section className={styles.window}>
        {!authUser && <Button onClick={toAuth} type="button" width="200px" ><p>Войдите в аккаунт</p></Button>}
        {
            authUser && 
            <section className={styles.topics}>
                <motion.div onClick={() => navigate("/contacting/create")} whileHover={{scale: 1.04}}>
                    <h4>Создать новое обращение <img src={createIcon} width={30} height={30}/></h4>
                </motion.div>
                <motion.div onClick={() => navigate("/contacting/recents")} whileHover={{scale: 1.04}}>
                    <h4>Посмотреть мои обращения <img src={recentsIcon} width={30} height={30}/></h4>
                </motion.div>
            </section>
        }
        </section>
    )
}

export default Home