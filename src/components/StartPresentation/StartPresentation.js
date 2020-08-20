import React from "react";

import ShowImagePrincipal from "./ShowImagePrincipal";

export default function StartPresentation({ onClick, openPage }) {
  return (
    <div className="start-click">
      {openPage ? "" : <ShowImagePrincipal onClick={onClick} />}
    </div>
  );
}

// className={openPage ? "open-next-page" : "start-click"}
