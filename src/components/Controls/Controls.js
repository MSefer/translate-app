import React from "react";

import { FaMicrophone } from "react-icons/fa";
import "./Controls.scss";

function Controls({ error }) {
  return (
    <div className="control-container">
      <button id="start" className="control" disabled={error}>
        <FaMicrophone size={18} color="#5f6368"/>
      </button>
      {error}
    </div>
  );
}

export default Controls;
