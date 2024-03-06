"use client";
import React, { useState } from "react";

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle when a file is dropped
  const handleDrop = (event) => {
    event.preventDefault();
    const imageFile = event.dataTransfer.files[0];
    setSelectedImage(imageFile);
  };

  // Function to handle when a file is dragged over the drop area
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Function to handle when a new image is selected
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  return (
    <div>
      <label
        className="w-[100%] h-[461px] bg-[#F5F5F5] border-dashed border-2 border-[#00000038] rounded-[10px] flex flex-col items-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        htmlFor="file-upload"
      >
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <img src="/drop.svg" className="mt-9" />
        <p className="text-[24px] font-[600] family-poppins leading-[36px]">
          Drop or Select File
        </p>
        <span className="text-[20px] text-[#0000007D]">
          Drag files here or Click{" "}
          <strong className="text-[#556EE6]">browse</strong> through your
          machine
        </span>
      </label>
      {selectedImage && (
        <div>
          <h3>Selected Image Preview:</h3>
          <img src={URL.createObjectURL(selectedImage)} alt="Preview" />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
