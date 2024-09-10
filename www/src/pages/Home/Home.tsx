import { useEffect } from "react"
import { useAuthContext } from "../../context/authContext"
import { useNavigate } from "react-router-dom"
import styles from './Home.module.scss'
import Button from "../../components/Button/Button"

const Home: React.FC = () => {

    const { authUser } = useAuthContext()
    const navigate = useNavigate()

    const toAuth = () => {
        navigate("/auth/login")
    }

    return (
        <section className={styles.window}>
        {!authUser && <Button onClick={toAuth} type="button" width="200px" ><p>Войдите в аккаунт</p></Button>}
        </section>
    )
}

export default Home