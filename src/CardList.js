import React, { useState } from "react";
import Card from "./Card";

const CardList = ({ userData }) => {
  return (
    <Card
      name={userData.name}
      street={userData.address.street}
      city={userData.address.city}
      email={userData.email}
    />
  );
};

export default CardList;
