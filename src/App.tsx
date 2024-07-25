import { useState } from 'react'

import styles from './App.module.css'

import { PlusCircle } from '@phosphor-icons/react'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Btn } from './components/Btn'
import { ListHeader } from './components/List/ListHeader'
import { Empty } from './components/List/Empty'
import { Item } from './components/List/Item'

export interface Task {
  id: string
  title: string
  description: string
  isChecked: boolean 
}

export function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
  }

  const newTask: Task = {
      id: new Date().getTime().toString(),
      title: inputValue,
      description: 'inputValue',
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }


  return (
    <div>

      <Header />
      
      <section className={styles.content}>

        <div className={styles.taskFormContainer}>
          <Input 
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Btn onClick={handleAddTask}>
            Create
            <PlusCircle size={16} color='#F2F2F2' weight='bold' />
          </Btn>
        </div>

        <div className={styles.tasksList}>
          <ListHeader 
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item 
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}

            </div>
          ) : (
            <Empty />
          )}

        </div>

      </section>

    </div>
  )
}


