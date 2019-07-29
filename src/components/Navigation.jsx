import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <NavLink to="/test">
        <button>Test</button>
      </NavLink>
    </div>
  );
};

export default Navigation;
