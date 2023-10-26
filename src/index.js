import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

let books = [
  {
    id: 1,
    title: "Think and Grow Rich",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNEOLNdo8yFvrpwo_cM_C3fOdi6wKaPXRTg&usqp=CAU",
    author: "Napoleon Hill",
    edition: 1,
    pages: "210",
  },
  {
    id: 2,
    title: "Think like a Monk",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0GrFBWlmgySUpWWUzyxf0wrPS_1-GlBuHQ&usqp=CAU",
    author: "jay Shetty",
    edition: 1,
    pages: "200",
  },
  {
    id: 3,
    title: "Man Search for Meaning",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0ngQDmPTBU38654GI-wnqlfspgvB5uo3AQ&usqp=CAU",
    author: "Victor Franklyn",
    edition: 1,
    pages: "330",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App books={books} />
);
