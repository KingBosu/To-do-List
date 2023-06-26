import { useState, ChangeEvent } from 'react';
import './To-do-List.css'

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  };
  
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='list'>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((task: string, index: number) => (
          <li key={index}>
            {task}
            <button className='deletebtn' onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

