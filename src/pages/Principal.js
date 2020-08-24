import React, { useState } from "react";
import StartPresentation from "../components/StartPresentation/StartPresentation";

export default function Principal() {
  const [openPage, setOpenPage] = useState(false);

  function nextPage() {
    setOpenPage(!openPage);
  }
  return (
    <div className="principal">
      <h1>Hey! I'm Veronica and I'm a Web Developer</h1>
      <StartPresentation openPage={openPage} onClick={nextPage} />
    </div>
  );
}
