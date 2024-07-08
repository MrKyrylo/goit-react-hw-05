import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import clsx from "clsx";

const getClassName = ({ isActive }) => {
  return clsx(css.linkElement, isActive && css.isActive);
};

export default function NavBar() {
  return (
    <nav className={css.navPlace}>
      <NavLink to="/" className={getClassName}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getClassName}>
        Movies
      </NavLink>
    </nav>
  );
}