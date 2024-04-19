import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, toggleComplete, editTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const handleEdit = () => {
        if (isEditing) {
            editTask(task.id, editTitle);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className=" flex items-center justify-center">
           <div>
             <input
                type="checkbox"
                checked={task.isComplete}
                onChange={() => toggleComplete(task.id)}
                className=" bg-gray-700 rounded-full py-1 px-3 m-2 text-white"
            /></div>
           <div className=" m-2"> {isEditing ? (
                <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className=" bg-gray-700 rounded-full py-1 px-3 m-2 text-white"
                />
            ) : (
                <span>{task.title}</span>
            )}</div>
           <div className=" m-2"> <button onClick={handleEdit}>
                <FontAwesomeIcon icon={isEditing ? faCheck : faPenToSquare} />
            </button></div>
          <div className=" m-2"> <button onClick={() => deleteTask(task.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button></div> 
        </div>
    );
};

export default Task;
