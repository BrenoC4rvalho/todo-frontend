import styles from './Btn.module.css'

type Props = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export function Btn({ children, ...rest }: Props) {
    return (
        <button className={styles.container} {...rest}>
            {children}
        </button>
    )
}