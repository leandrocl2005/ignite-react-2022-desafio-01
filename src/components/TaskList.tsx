import { EmptyTaskList } from './EmptyTaskList';
import styles from './TaskList.module.css';
import { ReactComponent as Trash } from '../assets/trash.svg';

interface Task {
    id: string;
    description: string;
    done: boolean;
}


interface TaskListProps {
    tasks: Task[];
    deleteTask: (taskId: string) => void;
    toogleDone: (taskId: string) => void;
}

export function TaskList({ tasks, deleteTask, toogleDone }: TaskListProps) {

    const completedTasks = tasks.filter(task => task.done).length;

    return (
        <div className={styles.tasksContainer}>

            <div className={styles.tasksSummary}>
                <p>Tarefas criadas: <span>{tasks.length}</span></p>
                <p>Concluídas: <span>{completedTasks ? `${completedTasks} de ${tasks.length}` : '0'}</span></p>
            </div>

            {tasks.length > 0 ?
                <div className={styles.tasksItemContainer}>
                    {tasks.map(task =>
                        <div className={styles.taskItem} key={task.id}>
                            <div className={styles.checkboxDescriptionContainer}>
                                <div className={styles.checkboxInput} >
                                    <input
                                        type="checkbox"
                                        id={`option-${task.id}`}
                                        checked={task.done}
                                        onChange={() => toogleDone(task.id)}
                                    />
                                    <label htmlFor={`option-${task.id}`} > <span></span> </label>
                                </div>
                                <p className={task.done ? styles.checked : 'no-checked'}>{task.description}</p>
                            </div>
                            <div className={styles.trashIconContainer}>
                                <Trash
                                    className={styles.trashIcon}
                                    onClick={() => deleteTask(task.id)}
                                />
                            </div>
                        </div>
                    )}
                </div>
                : <EmptyTaskList />}
        </div>
    )
}


