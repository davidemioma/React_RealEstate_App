import React, { useState } from "react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={classes.container}>
      <nav className={classes.navBar}>
        <Link className={classes.logo} to="/">
          Realtor
        </Link>

        <div
          className={classes.toggler}
          onClick={() => setModalOpen((prev) => !prev)}
        >
          <FcMenu />
        </div>
      </nav>

      {modalOpen && (
        <div className={classes.modal}>
          <Link to="/">
            <FcHome />
            Home
          </Link>

          <Link to="/search">
            <BsSearch />
            Search
          </Link>

          <Link to="/search?purpose=for-sale">
            <FcAbout />
            Buy Property
          </Link>

          <Link to="/search?purpose=for-rent">
            <FiKey />
            Rent Property
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
