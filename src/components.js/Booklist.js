import React from "react";
import { Link } from "react-router-dom";

function Booklist({ book, setBook, setEditid, tempbook }) {
  function Bookdelete(id) {
    setBook(book.filter((b) => id !== b.id));
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {tempbook.length > 0 ? (
          tempbook.map((b, i) => {
            return (
              <div className="col-lg-3 col-sm-12 m-5" key={i}>
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src={b.image}
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-bold">{b.title}</h6>
                    <p className="card-text"></p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item fw-bold">
                      Author : {b.author}
                    </li>
                    <li className="list-group-item fw-bold ">
                      {" "}
                      <span>Edition : {b.edition}</span>{" "}
                      <span className="ps-5">No of Page : {b.pages}</span>
                    </li>
                    <li className="list-group-item">
                      <Link to="/Editbook">
                        <span
                          className="btn btn-danger  m-5"
                          onClick={() => setEditid(b.id)}
                        >
                          Edit
                        </span>
                      </Link>
                      <Link>
                        <span
                          className="btn btn-primary"
                          onClick={() => {
                            Bookdelete(b.id);
                          }}
                        >
                          Delete
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <input
            className="form-control text-center bg-primary text-white"
            type="text"
            readOnly
            value="Books Not Available"
          />
        )}
      </div>
    </div>
  );
}

export default Booklist;
