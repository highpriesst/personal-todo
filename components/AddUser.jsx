import React from "react";

function AddUser() {
  return (
    <div className="flex justify-center items-center w-sceen bg-gray-200 p-10 gap-2 border border-b-1 border-b-gray-700">
      <input
        type="text"
        placeholder="name"
        className="border border-gray-300 p-2 rounded-lg"
      />
      <input
        type="text"
        placeholder="username"
        className="border border-gray-300 p-2 rounded-lg"
      />
      <button className="bg-gray-300 rounded-lg p-2">Search</button>
    </div>
  );
}

export default AddUser;
