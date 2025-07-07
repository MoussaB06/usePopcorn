import { useState } from "react";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        color="blue"
        maxRating={5}
        handleMovieRating={setMovieRating}
      />
      <p>this movie was rated {movieRating} stars </p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
