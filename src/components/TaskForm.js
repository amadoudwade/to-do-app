import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert('Both fields are required!');
      return;
    }
    onAddTask({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        placeholder="Task Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <textarea 
        placeholder="Task Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;