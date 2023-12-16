import React, { useState } from "react";

function DogCard({}) {
  const [url, setUrl] = useState();

  setInterval(() => {
    setUrl((window as any).dog);
  }, 100);

  return (
    <div
      className="preview"
      style={{
        position: "absolute",
        right: "100%",
        marginLeft: "10px",
        width: "100px",
      }}
    >
      <img src={url} alt="Preview" width="100px" />
    </div>
  );
}

export default DogCard;
