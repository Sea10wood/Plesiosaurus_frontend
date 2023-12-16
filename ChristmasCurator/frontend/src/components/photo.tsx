import React, { useState } from "react";
import "../ChristmasTree.css";
interface ImageProps {
  src: string;
}

const Image = ({
  isMovingUp,
  src,
  id,
}: {
  isMovingUp: boolean;
  src: string;
  id: string;
}) => {
  const imageUrl = id;

  
  const [isPreviewVisible, setPreviewVisible] = useState(false);

  const [isMouseOver, setMouseOver] = useState(false);

  const showPreview = () => {
    setPreviewVisible(true);
  };

  const hidePreview = () => {
    if (!isMouseOver) {
      setPreviewVisible(false);
    }
  };
  const handleMouseOver = () => {
    setMouseOver(true);
    (window as any).dog = imageUrl;
    console.log((window as any).dog);
  };
  const handleMouseOut = () => {
    setMouseOver(false);
    hidePreview();
  };

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const baseColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return `linear-gradient(135deg, ${baseColor} 0%, ${lightenColor(
      baseColor,
      20
    )} 100%)`;
  };
  const borderColor = getRandomColor();
  const lightenColor = (color: string, percent: number) => {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const B = ((num >> 8) & 0x00ff) + amt;
    const G = (num & 0x0000ff) + amt;

    return `#${((1 << 24) | (R << 16) | (B << 8) | G).toString(16).slice(1)}`;
  };
  return (
    <div>
      <div
        style={{
          transform: `scale(${(Math.random() % 0.5) + 0.5})`,
          border: `solid 1.5px ${borderColor}`,
        }}
        className="circle "
        onMouseEnter={showPreview}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={src} alt="cute dog" className="circle" />
      </div>

    
    </div>
  );
};
export default Image;
