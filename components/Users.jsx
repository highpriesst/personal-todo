import React from "react";

import User from "./User";

function Users() {
  return (
    <div className="flex justify-center pt-10 flex-col gap-4 items-center">
      <User />
      <User />
      <User />
    </div>
  );
}

export default Users;
