import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">

      <div className="container">

        {/* LOGO */}
        <NavLink className="navbar-brand fw-bold text-danger" to="/">
          Alpha Costruzioni
        </NavLink>

        {/* MENU */}
        <div className="navbar-nav ms-auto gap-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link text-danger fw-bold" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/chi-siamo"
            className={({ isActive }) =>
              isActive ? "nav-link text-danger fw-bold" : "nav-link"
            }
          >
            Chi Siamo
          </NavLink>

          <NavLink
            to="/progetti"
            className={({ isActive }) =>
              isActive ? "nav-link text-danger fw-bold" : "nav-link"
            }
          >
            Progetti
          </NavLink>

        </div>

      </div>
    </nav>
  );
}