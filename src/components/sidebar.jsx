function Sidebar() {
  return (
    <div className="w-1/3 bg-black h-screen">
      <div className="text-white text-2xl p-10 flex flex-col justify-between space-y-10">
        <a className="text-2xl">Menu</a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/process">Process</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Sidebar;
