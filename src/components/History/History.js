import React from "react";

import "./History.scss";
import { FaHistory } from "react-icons/fa";

function History({ history }) {
  return (
    <div className="history-container">
      {history?.length > 0 &&
        <>
          <h3><FaHistory /> Geçmiş Aramalar</h3>
          <ul>
            {history.map((item, key) => {
              return (
                <li key={key}>
                  <span className="text">{item.text}</span>
                  <span className="translatedText">{item.translatedText}</span>
                </li>
              )
            })}
          </ul>
        </>
      }
    </div>
  );
}

export default History;
