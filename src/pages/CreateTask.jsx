import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../lib/pocketbase";

export default function CreateTask() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!title) {
      window.alert("Please enter a title");
      return;
    }
    createTask(title, description);
    navigate("..");
  };
  return (
    <>
      <h2>Create Task</h2>
      <div className="grid gap-6 mt-4 text-base">
        <input
          className="text-input text-base"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="text-input text-base"
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md text-base my-4"
        onClick={handleSubmit}
      >
        <div className="flex">
          <p className="text-base">Save</p>
        </div>
      </button>
    </>
  );
}
