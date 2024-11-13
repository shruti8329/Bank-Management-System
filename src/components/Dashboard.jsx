// components/Dashboard.js

import { useState } from "react";

const Dashboard = () => {
  const [open, setopen] = useState(false);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } h-screen bg-dark-purple relative`}
      >
        <img
          className="absolute cursor-pointer-right-3 top-9 w-7 border-2 border-dark-purple rounded-full "
          src="https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/control.png?raw=true"
          alt=""
        />
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Homepage</h1>
      </div>
    </div>
  );
};

export default Dashboard;
