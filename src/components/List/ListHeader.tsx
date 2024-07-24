import  styles from './ListHeader.module.css'

export function ListHeader() {
    return(
        <header className={styles.container}>
            <aside>
                <p>Created tasks</p>
                <span>10</span>
            </aside>
            <aside>
                <p>Completed</p>
                <span>5 de 5</span>
            </aside>
        </header>
    )
}