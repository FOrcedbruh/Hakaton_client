import { Outlet, useNavigate } from "react-router-dom"
import styles from './Layout.module.scss'
import dbIcon from './../../icons/dbIcon.svg'
import profileIcon from './../../icons/profileIcon.svg'
import { useAuthContext } from "../../context/authContext"

const Layout: React.FC = () => {

    const { authUser } = useAuthContext()

    const navigate = useNavigate()

    return (
        <section className={styles.window}>
            <header className={styles.header}>
                <div onClick={() => navigate("/")} className={styles.logo}>
                <img src={dbIcon} width={60} height={100}/> <h2>Система автоматизации отправки заявок</h2> 
                </div>
                {authUser && <div className={styles.user}>
                    <img src={profileIcon} width={30} height={30}/> <p onClick={() => navigate("/me")}>{authUser.firstname} {authUser.surname}</p>
                </div>}
            </header>
            <section>
                <Outlet />
            </section>
        </section>
    )
}


export default Layout