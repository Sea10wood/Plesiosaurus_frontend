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

const ImageGallery: React.FC = () => {
  return (
    <div>
      <img
        src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
        alt="cute dog"
        width="50vw"
      />
    </div>
  );
};

export default ImageGallery;
