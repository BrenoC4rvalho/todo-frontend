import styles from './Input.module.css'

export function Input() {
    return (
        <input 
            type="text"
            className={styles.container} 
            placeholder='Add a new task' 
        />
    )
}