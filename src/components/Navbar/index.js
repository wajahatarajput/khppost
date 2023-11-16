import React from "react";
import Links from "../Links/index";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Links link={"/"} title={"Home"} />
            </li>
            <li className="nav-item">
              <Links link={"/RegisterPage"} title={"Sign Up"} />
            </li>
            <li className="nav-item">
              <Links link={"/LoginPage"} title={"Login"} />
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
