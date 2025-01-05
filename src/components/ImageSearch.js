import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="flex justify-center my-10">
      <form
        onSubmit={onSubmit}
        className="flex items-center w-full max-w-lg overflow-hidden bg-white rounded-lg shadow-md"
      >
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          placeholder="Search images..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 text-white transition-colors duration-200 bg-teal-500 hover:bg-teal-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
