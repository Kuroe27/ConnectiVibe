import React from "react";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <h2>ConnectiVibe</h2>
        <form action="" className="form">
          <input
            type="text"
            className="searchInput"
            placeholder="Search..."
          ></input>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
