import styles from './Header.module.css'
import logo from '../../public/logo.svg'

export function Header() {
    return (
        <header className={styles.container}>
            <img src={logo} alt='The application logo, which contains a rocket and written TODO'/>       
        </header>
    )
}