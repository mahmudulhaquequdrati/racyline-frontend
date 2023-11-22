import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "c8818fe821c0aee81ebf0b77344f0e2b";

const ImageUploader = ({
  note,
  setNote,
  selectedImages,
  setSelectedImages,
}) => {
  useEffect(() => {
    const uploadImages = async () => {
      if (selectedImages.length > 1) {
        // Check if multiple images are selected
        const formData = new FormData();
        for (const image of selectedImages) {
          formData.append("image", image);
          const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${API_KEY}`,
            formData
          );
          const imageUrls = response.data.data.url;
          setNote((prev) => ({
            ...prev,
            report_file: [...prev?.report_file, imageUrls],
          }));
        }

        try {
        } catch (error) {
          console.error(error);
        }
      }
    };

    uploadImages(); // Upload only when multiple images are selected
  }, [selectedImages]); // Update the dependency array when selectedImages change

  const handleImageSelect = (event) => {
    const newSelectedImages = event.target.files;
    setSelectedImages(newSelectedImages);
    setNote((prev) => ({
      ...prev,
      selectedImage: newSelectedImages,
    }));
  };

  return (
    <div>
      <input
        className="hidden"
        type="file"
        id="multipleImg"
        multiple
        onChange={handleImageSelect}
      />
    </div>
  );
};

export default ImageUploader;
