import styles from './Empty.module.css'
import clipboard from '../../../public/clipboard.png'

export function Empty() {
    return (
        <div className={styles.container}>
            <img src={clipboard} alt="clipboard icon" />
            <p>
                <strong>You don't have tasks registered yet</strong>
                Create tasks and organize your to-dos
            </p>
        </div>
    )
}