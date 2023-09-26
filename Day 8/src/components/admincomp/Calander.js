import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ScheduleCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    if (selectedDate && newTask.trim() !== '') {
      setTasks([...tasks, { date: selectedDate, task: newTask }]);
      setNewTask('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div style={{ maxWidth: '800px' }}>
        <h1 className="text-3xl font-semibold mb-4 text-center">Schedule Calendar</h1>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <Calendar onChange={handleDateChange} value={selectedDate} />
          {selectedDate && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Selected Date:</h2>
              <p>Date: {selectedDate.toDateString()}</p>
              <div className="mt-4">
                <label className="block font-semibold">Add Task:</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md mr-2"
                    placeholder="Enter task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={handleAddTask}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {tasks.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Tasks for Selected Date:</h2>
            <ul>
              {tasks
                .filter((task) => task.date.toDateString() === selectedDate.toDateString())
                .map((task, index) => (
                  <li key={index}>{task.task}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleCalendar;
