import React, { useState } from "react";
import StartPresentation from "../components/StartPresentation/StartPresentation";

export default function Principal() {
  const [openPage, setOpenPage] = useState(false);

  function nextPage() {
    setOpenPage(!openPage);
  }
  return (
    <div className="principal">
      <StartPresentation openPage={openPage} onClick={nextPage} />
    </div>
  );
}
