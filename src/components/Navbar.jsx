import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mycontext } from "../contexts/ContextElement";

const Navbar = () => {
  const { theme, setTheme } = useContext(Mycontext);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="navbar max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#4A00FF">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-secondary md:font-semibold"
                    : "font-semibold"
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltouristspot"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-secondary md:font-semibold"
                    : "font-semibold"
                }>
                All Tourist Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addtouristspot"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-secondary md:font-semibold"
                    : "font-semibold"
                }>
                Add Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mylist"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-secondary md:font-semibold"
                    : "font-semibold"
                }>
                My List
              </NavLink>
            </li>
            <li>
              <div>
                <h2>Theme :</h2>
                <label className="flex cursor-pointer gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input
                    onChange={handleToggle}
                    type="checkbox"
                    checked={theme === "dark" ? true : false}
                    className="toggle theme-controller"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-3xl">
          <span className="text-secondary">Dream</span>
          <span className="animate-bounce text-primary">/</span> Venture
        </a>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="bg-primary hover:bg-violet-600 p-2 rounded-lg text-white font-semibold">
            LogIn
          </button>
        </Link>
        <Link>
          <button className="bg-secondary hover:bg-purple-500 p-2 rounded-lg text-white font-semibold ml-3">
            Register
          </button>
        </Link>

        {/* Navbar end */}
      </div>
    </div>
  );
};

export default Navbar;
