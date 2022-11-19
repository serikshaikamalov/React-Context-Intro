import React from "react";
import { Component2 } from "../Component2/Component1";

export const Component1 = ({ user }) => {
  return (
    <div>
      <h1>Component1</h1>
      <Component2></Component2>
    </div>
  );
};
