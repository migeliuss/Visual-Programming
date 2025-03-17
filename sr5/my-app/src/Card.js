import React from "react";

const Card = ({ person }) => {
  return (
    <div className="card">
      <p><strong>id:</strong> {person.id}</p>
      <p><strong>Full Name:</strong> {person.fullName}</p>
      <p><strong>Name:</strong></p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>First Name:</strong> {person.name.firstName}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Last Name:</strong> {person.name.lastName}</p>
      <p><strong>Address:</strong></p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Line:</strong> {person.address.line1}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Town:</strong> {person.address.town}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>County:</strong> {person.address.county}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Country:</strong> {person.address.country}</p>
      <p><strong>Email:</strong> {person.email}</p>
    </div>
  );
};

export default Card;
