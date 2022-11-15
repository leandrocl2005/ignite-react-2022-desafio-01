import styles from './TaskCreateForm.module.css';
import plusIcon from '../assets/plus.svg';
import { FormEvent, useState } from 'react';

interface TaskCreateFormProps {
    createTask: (taskDescription: string) => void;
}

export function TaskCreateForm({ createTask }: TaskCreateFormProps) {

    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        createTask(taskDescription);
        setTaskDescription('');
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                name="task-name"
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button type="submit">Criar <img src={plusIcon} alt="Icon com sinal de mais" /></button>
        </form>
    )
}

