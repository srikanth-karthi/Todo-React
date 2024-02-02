import { FaTimes } from 'react-icons/fa';

export const Task = ({ task, deletetask, tooglereminder }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => tooglereminder(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => deletetask(task.id)}
        />
      </h3>
    </div>
  );
};
