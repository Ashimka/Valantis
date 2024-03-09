import React from "react";

const LoadingProducts = () => {
  return (
    <div className="loading">
      <div className="loading-header"> Loading ...</div>
      <div className="loading-main">
        <div className="loading-item"></div>
        <div className="loading-item"></div>
        <div className="loading-item"></div>
        <div className="loading-item"></div>
        <div className="loading-item"></div>
        <div className="loading-item"></div>
      </div>
    </div>
  );
};

export default LoadingProducts;
