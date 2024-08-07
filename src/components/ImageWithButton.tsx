// components/ImageWithButton.tsx

import React from "react";

const ImageWithButton: React.FC = () => {
  return (
    <div className="relative max-w-xs mx-auto">
      <img src="/path/to/your/image.jpg" alt="Sample" className="rounded-lg" />
      <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
        <div className="bg-customGreen p-2 rounded-full">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-4.596-2.65A1 1 0 009 9.405v5.19a1 1 0 001.156.987l4.596-2.65a1 1 0 000-1.744z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ImageWithButton;
