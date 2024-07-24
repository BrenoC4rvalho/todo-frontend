import { PropsWithChildren } from 'react'
import styles from './Btn.module.css'

export function Btn({ children }: PropsWithChildren<HTMLButtonElement>) {
    return (
        <button className={styles.container}>
            {children}
        </button>
    )
}