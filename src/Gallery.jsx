import React from "react";
import galleryImage from "./assets/image.png"; // Adjust the path as per your folder structure

const Gallery = () => {
  return (
    <div style={{ color: "#C6318B", textAlign: "center", marginTop: "20px" }}>
      <h1>GALLERY</h1>
      <img
        src={galleryImage}
        alt="Gallery"
        style={{
          width: "80%",
          height: "auto",
          margin: "0 auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default Gallery;
