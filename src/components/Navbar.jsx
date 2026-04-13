import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">

        {/* LOGO + NOME */}
        <Link className="navbar-brand fw-bold text-danger" to="/">
          🏗️ Alpha Costruzioni
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/chi-siamo">
                Chi siamo
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/progetti">
                Progetti
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-danger fw-bold" to="/contatti">
                Contatti
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}