import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <>
      <div class="loading-container">
        <p class="spinner-text">loading...</p>
        <div class="spinner"></div>
      </div>
    </>
  );
};

export default Loader;
