import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container px-4 pb-6 mx-auto sm:px-6 lg:px-8">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="mx-auto mt-32 text-6xl text-center text-dark">
          No Images Found!
        </h1>
      )}
      {isLoading ? (
        <h1 className="mx-auto mt-32 text-6xl text-center text-dark">
          Loading...
        </h1>
      ) : (
        <div className="masonry">
          {images.map((image) => (
            <div key={image.id} className="masonry-item">
              <ImageCard image={image} onImageClick={handleImageClick} />
            </div>
          ))}
        </div>
      )}

      {/* Modal for displaying the clicked image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl p-2 mx-4 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-[90vh]"
            />
            <button
              className="absolute flex items-center justify-center w-10 h-10 font-extrabold text-white transition-transform transform rounded-full shadow-lg bold top-4 right-4 bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:scale-90"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
