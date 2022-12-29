import React from "react";
import { Link } from "react-router-dom";

const Status = ({ path, onClick, text, color }) => {
  return (
    <>
      <Link
        to={path}
        onClick={onClick}
        className={`btn btn-sm ${color} fs-18 font-w600 btn-rounded`}
      >
        {text}
        <i class="fas fa-chevron-right ms-2"></i>
      </Link>
    </>
  );
};

export default Status;
