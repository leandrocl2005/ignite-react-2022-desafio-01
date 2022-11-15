import { useState } from 'react'
import { Header } from './components/Header'
import { TaskCreateForm } from './components/TaskCreateForm'
import { TaskList } from './components/TaskList'
import './styles.css'
import { v4 as uuidv4 } from 'uuid'

function App() {

    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            description: "dfsa fd sdf asdf dsaf sdf dasf",
            done: false
        },
        {
            id: uuidv4(),
            description: "dporeiwpok lk flçdk ldfksa çldfk",
            done: true
        }
    ])

    const createTask = (taskDescription: string) => {
        setTasks([...tasks, {
            id: uuidv4(), description: taskDescription, done: false
        }])
    }

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const toogleDone = (taskId: string) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, done: !task.done }
            } else {
                return task
            }
        }))
    }

    return (
        <>
            <Header />

            <main>
                <TaskCreateForm createTask={createTask} />
                <TaskList
                    tasks={tasks}
                    deleteTask={deleteTask}
                    toogleDone={toogleDone}
                />
            </main>
        </>
    )
}

export default App
