import styles from './EmptyTaskList.module.css';
import clipboard from '../assets/Clipboard.svg';

export function EmptyTaskList() {
    return (
        <div className={styles.tasksBody}>
            <img src={clipboard} alt="Planilha" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus items a fazer</p>
        </div>     
    )
}