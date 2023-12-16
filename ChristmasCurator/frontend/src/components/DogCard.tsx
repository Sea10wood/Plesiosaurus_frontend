import React, { useState } from "react";
import "../components/animate.css";

interface DogCardProps {
  slideDistance: number;
}

function DogCard({ slideDistance }: DogCardProps) {
  const [url, setUrl] = useState();
  setInterval(() => {
    setUrl((window as any).dog);
  }, 100);

  return (
    <div
      className="preview"
      style={{
        position: "absolute",
        right: `${slideDistance}px`,
        marginLeft: "10px",
        width: "100px",
        transition: "right 0.5s ease",
      }}
    >
      <img src={url} alt="Preview" width="100px" />
    </div>
  );
}

export default DogCard;
