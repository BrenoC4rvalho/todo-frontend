import  styles from './ListHeader.module.css'

interface Props {
    tasksCounter: number
    checkedTasksCounter: number  // Counter of checked tasks
}

export function ListHeader({ tasksCounter, checkedTasksCounter }: Props) {
    return(
        <header className={styles.container}>
            <aside>
                <p>Created tasks</p>
                <span>{tasksCounter}</span>
            </aside>
            <aside>
                <p>Completed</p>
                <span>
                    {tasksCounter === 0
                        ? tasksCounter 
                        : `${checkedTasksCounter} of ${tasksCounter} `
                    }
                </span>
            </aside>
        </header>
    )
}