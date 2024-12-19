import React, { useState } from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleCompletion }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(task.name);
    const [editedDescription, setEditedDescription] = useState(task.description);
  
    const handleSave = () => {
      if (!editedName || !editedDescription) {
        alert('Both fields are required!');
        return;
      }
      onEdit(task.id, { name: editedName, description: editedDescription });
      setIsEditing(false);
    };
  
    return (
      <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        {isEditing ? (
          <div className="edit-form">
            <input 
              type="text" 
              value={editedName} 
              onChange={(e) => setEditedName(e.target.value)}
            />
            <textarea 
              value={editedDescription} 
              onChange={(e) => setEditedDescription(e.target.value)}
            ></textarea>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <div className="task-details">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onToggleCompletion(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </div>
        )}
      </li>
    );
  };
  
  export default TaskItem;