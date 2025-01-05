import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  //   console.log(tags);

  return (
    <div className="overflow-hidden rounded shadow-lg ">
      <img src={image.webformatURL} alt="random_image" />
      <div className="px-6 py-4">
        <div className="text-xl font-bold text-purple-500">
          Photo by {image.user}
        </div>
        <ul>
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
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
