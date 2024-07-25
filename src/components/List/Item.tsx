import { Check, Trash } from "@phosphor-icons/react";

import styles from './Item.module.css'
import { Task } from "../../App";

interface Props {
    data: Task
    removeTask: (id: string) => void
    toggleTaskStatus: ({ id, value}: { id: string, value: boolean }) => void

}
export function Item({ data, removeTask, toggleTaskStatus}: Props) {

    function handleTasktoogle() {
        toggleTaskStatus({ id: data.id, value: !data.isChecked })
    }

    function handleRemoveTask() {
        removeTask(data.id)
    }

    const checkboxCheckedClassname = data.isChecked
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.isChecked
        ? styles['paragraph-checked']
        : ''

    return(
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleTasktoogle}>
                    <input readOnly type="checkbox" checked={data.isChecked} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {data.isChecked &&
                            <Check size={12}/>
                        }
                    </span>
                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {data.title}
                    </p>
                </label>
            </div>
            <button onClick={handleRemoveTask}>
                <Trash size={16} color="#808080"/>
            </button>
        </div>
    )
}