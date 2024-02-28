import React, { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open); // Toggle the state of open
  };

  return (
    <>
      {open ? (
        /* if open, display the sidebar 1/3 */
        <div className="w-[30vw] bg-black h-screen">
          <div className="text-white text-2xl p-10 flex flex-col justify-between space-y-10">
            <a className="text-2xl">Menu</a>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/process">Process</a>
            <a href="/contact">Contact</a>
            <h1 className="p-10" onClick={toggle}>
              X
            </h1>
          </div>
        </div>
      ) : (
        /* if not open, display the sidebar 1/6 */
        <div className="w-[10vw] bg-black h-screen">
          <div className="text-white text-2xl p-10 flex flex-col justify-between space-y-10">
            <a className="text-2xl">Menu</a>
            <h1 onClick={toggle}>X</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
