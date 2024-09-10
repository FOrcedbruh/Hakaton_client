import styles from './Auth.module.scss'
import { Outlet, NavLink } from "react-router-dom";

const AuthLayout: React.FC = () => {
    return (
        <section className={styles.window}>
            <nav>
                <NavLink to={"/auth/registration"}>Регистрация</NavLink>
                <NavLink to={"/auth/login"}>Вход</NavLink>
            </nav>
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </section>
    )
}

export default AuthLayout;