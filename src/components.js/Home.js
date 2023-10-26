import React from "react";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row bg-dark rounded">
        <div className="col-lg-4 col-sm-12 p-3">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
            alt="book"
            width="90%"
          />
        </div>
        <div className="col-lg-8 col-sm-12 p-5  text-start">
          <p className="text-white p-5">
            <q className="fw-bold fs-1">
              The man who does not read good books is no better than the man who
              can’t
            </q>
            <p className="text-end">.....Mark Twain</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
