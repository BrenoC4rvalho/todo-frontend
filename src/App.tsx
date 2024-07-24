import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Btn } from './components/Btn'
import { PlusCircle } from '@phosphor-icons/react'
import { ListHeader } from './components/List/ListHeader'
import { Empty } from './components/List/Empty'


export function App() {
  return (
    <div>

      <Header />
      
      <section className={styles.content}>

        <div className={styles.taskFormContainer}>
          <Input />
          <Btn>
            Create
            <PlusCircle size={16} color='#F2F2F2' weight='bold' />
          </Btn>
        </div>

        <div className={styles.tasksList}>
          <ListHeader />

          <Empty />
        </div>

      </section>

    </div>
  )
}


