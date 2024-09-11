import styles from './Profile.module.scss'
import { useAuthContext } from '../../context/authContext'
import profileIcon from '../../icons/profileIcon.svg'
import backIcon from "./../../icons/backIcon.svg"
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import logoutIcon from './../../icons/logoutIcon.svg'
import { logout } from '../../auth/handlers'


const Profile: React.FC = () => {

    const navigate= useNavigate()

    const { authUser } = useAuthContext()

    const goHome = () => navigate("/")

    const logoutHandler = () => {
        logout()
        navigate("/auth/login")
    }

    
    return (
        <section  className={styles.window}>
            <div onClick={goHome} className={styles.backBtn}>
                <img src={backIcon} width={20} height={20}/><p>home</p>
            </div>
            <motion.div initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0, transition: { duration: 0.5 }}} className={styles.userData}>
                <img src={profileIcon} width={150} height={200} />
                <h2>{authUser.firstname} {authUser.surname}</h2><sup>{authUser.email}</sup>
            </motion.div>
            <div className={styles.logout}>
                <Button onClick={logoutHandler} width='200px' type='button' >
                    <p>Выйти <img src={logoutIcon} width={24} height={24}/></p>
                </Button>
            </div>
        </section>
    )
}


export default Profile