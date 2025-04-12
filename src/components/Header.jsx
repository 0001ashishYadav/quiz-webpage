import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <section className="h-16 bg-amber-100 fixed inset-x-0 flex justify-between items-center text-amber-800 font-semibold">
      <p className="text-3xl">Quiz</p>

      <nav className="hidden md:flex items-center gap-10">
        <NavLink
          className={({ isActive }) =>
            `text-lg  ${isActive ? "text-amber-800" : "text-gray-400"}`
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `text-lg  ${isActive ? "text-amber-800" : "text-gray-400"}`
          }
          to="/login"
        >
          Login
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `text-lg  ${isActive ? "text-gray-400" : "text-gray-400"}`
          }
          to="/"
        >
          Start Quiz
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `text-lg  ${isActive ? "text-gray-400" : "text-gray-400"}`
          }
          to="/"
        >
          About
        </NavLink>
      </nav>
    </section>
  );
}

export default Header;
