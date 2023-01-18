import React from "react";

function User() {
  return (
    <div>
      <div className="border border-gray-700 rounded-lg p-2 w-[500px]">
        <div className=" flex p-2 [&>*]:bg-gray-200 [&>*]:p-2 flex-col items-center">
          <p className="text-2xl">Name</p>
          <p className="text-xl">username</p>
        </div>
        <div className=" flex p-2 gap-2">
          <input
            type="text"
            placeholder="Update Username"
            className="border border-gray-300 p-2 rounded-lg"
          />
          <button className="border border-gray-300 p-2 rounded-lg">
            Update Username
          </button>
          <button className="border border-gray-300 p-2 rounded-lg">
            Delete Username
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
