import React, { useContext } from "react";
import { UserContext } from "../../App";

export const Component3 = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Component3</h2>
      {user && <div>Қолданушы: {user.name}</div>}
    </div>
  );
};
