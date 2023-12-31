import React from "react";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary m-2 rounded">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold nav-hover" to="/">
            Book Library
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ms-5 ps-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active nav-hover"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Book-List"
                  className="nav-link active nav-hover"
                  aria-current="page"
                >
                  Book-List
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Addbook" className="nav-link active nav-hover">
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
          <div className="me-5">
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <form className="d-flex">
                  <input
                    className="form-control me-5"
                    type="text"
                    placeholder="Author/name search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="btn  btn-dark" disabled>
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
