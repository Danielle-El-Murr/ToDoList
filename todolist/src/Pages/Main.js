import { useState } from 'react';
import Task from '../Components/Task';

const Main = () => {
    const [title, setTitle] = useState('');
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Sample Task', isComplete: false }
    ]);

    const getNextId = () => {
        return tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    };

    const addTask = () => {
        if (!title.trim()) return;
        const newTask = {
            id: getNextId(),
            title: title,
            isComplete: false
        };
        setTasks([...tasks, newTask]);
        setTitle('');
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, isComplete: !task.isComplete } : task
        ));
    };

    const editTask = (id, newTitle) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, title: newTitle } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="w-screen flex flex-col gap-4 text-lg items-center justify-center">
            <h1 className='text-2xl'>Tasks</h1>
            <div>
                <input
               
                    type="text"
                    className=" bg-gray-700 rounded-full py-1 px-3 m-2 text-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <div className=''>
                {tasks.map((task) => (
                    <Task
                        key={`id-${task.id}`}
                        task={task}
                        toggleComplete={toggleComplete}
                        editTask={editTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main;
