import tenshi from "../assets/images/tenshi.png";
import next from "../assets/images/next.png";
import { useState } from "react";
import Image from "./photo";
import DogCard from "./DogCard";
const Tree = () => {
  const urls = [
    "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
  ];
  const splitUrls = [urls.slice(0, 3), urls.slice(3, 8), urls.slice(8, 15)];

  const [isMovingUp, setMovingUp] = useState(false);

  const handleMoveUp = () => {
    setMovingUp(true);
  };
  (window as any).dog = "";
  console.log((window as any).dog);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {splitUrls.map((urls) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {urls.map((url) => (
            <Image key={url} id={url} src={url} isMovingUp={isMovingUp} />
          ))}
        </div>
      ))}
      <div>
        <DogCard></DogCard>
        <div style={{ marginTop: "30px" }}>
          <div className="balloon1">削除</div>
          <img
            src={tenshi}
            alt="天使"
            className="tenshi"
            onClick={handleMoveUp}
          />
        </div>
        <div style={{ marginLeft: "200px" }}>
          <div className="balloon1" style={{ marginTop: "-100px" }}>
            スキップ
          </div>
          <img src={next} alt="next" className="next" />
        </div>
      </div>
    </div>
  );
};
export default Tree;
