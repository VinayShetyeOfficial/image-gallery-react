import React from "react";

const ImageCard = ({ image, onImageClick }) => {
  const tags = image.tags.split(",");

  return (
    <div
      className="cursor-pointer card-3d"
      onClick={() => onImageClick(image.largeImageURL)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg group">
        {/* Image */}
        <img
          src={image.webformatURL}
          alt="random_image"
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 pointer-events-none group-hover:opacity-100"></div>
      </div>

      {/* Card Info */}
      <div className="px-4 py-4">
        <div className="text-lg font-bold text-primary">
          Photo by {image.user}
        </div>
        <ul className="mt-2 text-sm text-dark">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="px-4 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="mb-2 mr-2 tag-3d">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
