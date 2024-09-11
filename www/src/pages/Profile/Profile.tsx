import styles from './Profile.module.scss'
import { useAuthContext } from '../../context/authContext'

const Profile: React.FC = () => {

    const { authUser } = useAuthContext()

    
    return (
        <section  className={styles.window}>
            
        </section>
    )
}


export default Profile