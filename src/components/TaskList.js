import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleCompletion }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onEdit={onEditTask} 
          onDelete={onDeleteTask} 
          onToggleCompletion={onToggleCompletion} 
        />
      ))}
    </ul>
  );
};

export default TaskList;