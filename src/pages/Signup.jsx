import React, { useState } from "react";
import { signup } from "../lib/pocketbase";

export default function Signup() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = () => {
    if (!username || !password) {
      window.alert("Invalid Login Credentials");
      return;
    }
    signup(username, password);
  };
  return (
    <>
      <h2>Create A New Account </h2>
      <div className="grid gap-6 mt-4 text-base">
        <input
          className="text-input text-base"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="text-input text-base"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md text-base my-4"
        onClick={handleSubmit}
      >
        <div className="flex">
          <p className="text-base">Continue</p>
        </div>
      </button>
    </>
  );
}
