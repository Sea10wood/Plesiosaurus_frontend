// import React from "react";

// interface ImageGridProps {
//   images: string[];
//   columnsPerRow: number[];
// }

// class ImageGrid extends React.Component<ImageGridProps> {
//   render() {
//     const { images, columnsPerRow } = this.props;

//     let imageIndex = 0;
//     return (
//       <div>
//         {columnsPerRow.map((columns, rowIndex) => {
//           const imagesInThisRow = images.slice(
//             imageIndex,
//             imageIndex + columns
//           );
//           imageIndex += columns;

//           return (
//             <div key={rowIndex}>
//               {imagesInThisRow.map((image, colIndex) => (
//                 <img
//                   key={colIndex}
//                   src={image}
//                   alt={`Image ${imageIndex + colIndex + 1}`}
//                 />
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// const images: string[] = ["logo-universal.png"];

// const columnsPerRow: number[] = [2, 3, 4];

// const Photo: React.FC = () => {
//   return (
//     <div>
//       <h6>ローカルのファイルを取得</h6>
//       <ImageGrid images={images} columnsPerRow={columnsPerRow} />
//     </div>
//   );
// };

// export default Photo;

import React from "react";
import "../ChristmasTree.css";

interface ImageProps {
  src: string;
}

const Image: React.FC<ImageProps> = (props) => {
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
    <div
      style={{
        transform: `scale(${(Math.random() % 0.5) + 0.5})`,
        border: `solid 1.5px ${borderColor}`,
      }}
      className="circle "
    >
      <img src={props.src} alt="cute dog" className="circle" />
    </div>
  );
};

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
            <Image key={url} src={url} />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Tree;
