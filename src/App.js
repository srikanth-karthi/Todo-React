import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { Addtask } from "./components/Addtask";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";  // Import Routes component
import { Allmeetup } from "./pages/Allmeetup";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    fetchtasks();
  }, [toggle]);

  const fetchtasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    console.log(data);
    setTask(data); 
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  return (
    <Routes>
      <Route path='/' element={  // Use element instead of direct children
        <div className='container'>
          <Header showtask={() => setToggle(!toggle)} showadd={toggle} />
          {toggle && <Addtask Addtask={addTask} />}
          {tasks.length > 0 ? <Tasks tasks={tasks} tooglereminder={toggleReminder} deletetask={deleteTask} /> : 'No task todo'}
        </div>
      } />
      <Route path='/all-meetups' element={<Allmeetup />} />
    </Routes>
  );
};

export default App;
