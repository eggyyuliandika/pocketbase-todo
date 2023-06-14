// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { deleteTask, getTasks, toggleTask } from "../lib/pocketbase";
import { Link } from "react-router-dom";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTasks().then((res) => {
      setTasks(res);
      setLoading(false);
    });
  }, []);
  if (!tasks) {
    setLoading(true);
  }

  return (
    <>
      {loading ? (
        <h1 className="mb-4">Loading...</h1>
      ) : (
        tasks.map((task) => (
          <div key={task.id}>
            <div className="flex">
              <input
                className="h-6 w-6 my-auto"
                type="checkbox"
                name="completed"
                defaultChecked={task.completed}
                onChange={() => {
                  setCompleted(!completed);
                  toggleTask(task.id, task.title, completed);
                }}
              />
              <h4 className="text-2xl ml-4">{task.title}</h4>
              <div className="ml-auto">
                <Link to={`edit/${task.id}`}>
                  <button className="p-[10px] bg-gray-500 rounded-md text-white hover:bg-gray-600">
                    <p className="text-base">Edit</p>
                  </button>
                </Link>
                <button
                  className="p-[10px] bg-red-500 rounded-md text-white ml-2 hover:bg-red-600"
                  onClick={() => deleteTask(task.id)}
                >
                  <p className="text-base">Delete</p>
                </button>
              </div>
            </div>
            <p className="text-xl text-gray-400 my-1">{task.description}</p>
            <hr className="border border-gray-400 mb-4" />
          </div>
        ))
      )}

      <Link to="create">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md text-base my-4">
          <div className="flex my-auto">
            <p>New Task</p>
          </div>
        </button>
      </Link>
    </>
  );
}
