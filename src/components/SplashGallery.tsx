import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";

function SplashGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/featured-images")
      .then((response) => response.json())
      .then((data) =>
        setImages(
          data.map((image: any) => ({
            ...image,
            caption: `Image ID: ${image.id}`, // Example metadata for overlay
            customOverlay: (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
                <div className="text-center">
                  <h3 className="font-semibold text-3xl  fade-in duration-1000">
                    {" "}
                    {image.title}
                  </h3>
                  <p>{`Dimensions: ${image.width}x${image.height}`}</p>
                </div>
              </div>
            ),
          }))
        )
      )
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <Gallery
      images={images}
      enableImageSelection={false}
      rowHeight={300}
      margin={5}
    />
  );
}

export default SplashGallery;
