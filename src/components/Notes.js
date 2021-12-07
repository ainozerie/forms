import React from "react";

const Notes = ({ firstname, lastname, role, phonenumber, message }) => {
  return (
    <div className="notes">
      <p>{firstname} {lastname} - <em>{role}</em> - {phonenumber} </p>
      <strong> {message} </strong>
    </div>
  );
};

export default Notes;