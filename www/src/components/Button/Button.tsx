import styles from './Button.module.scss'
import { motion } from 'framer-motion'


interface IButton {
    children: React.ReactNode,
    width: string,
    disabled?: boolean,
    type: "button" | "submit" | "reset",
    onClick?: () => void
}

const Button: React.FC<IButton> = ({ children, disabled, width, type, onClick }) => {


    return (
        <motion.button whileHover={{scale: 1.05}}
            onClick={onClick}
            whileTap={{scale: 1}}
            type={type} 
            className={styles.button} 
            disabled={disabled} 
            style={{"width": width, "backgroundColor": disabled ? "#gray" : "#78B7D0", "cursor": disabled ? "not-allowed" : "pointer"}}>
            {children}
        </motion.button>
    )
}

export default Button