import React from "react";

function Cell({ id, onclick, value }) {
  return (
    <div className="cell" id={id} onClick={onclick}>
      {value}
    </div>
  );
}

export default Cell;
