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
  const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
  return (
    <div>
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
  ];

  return (
    <div>
      {urls.map((url) => {
        return (
          <div key={url} className="circle">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
};
export default Tree;
