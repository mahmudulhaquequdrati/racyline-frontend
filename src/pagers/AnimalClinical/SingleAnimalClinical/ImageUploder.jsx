import React, { useState, useEffect } from "react";
import axios from "axios";
import { notifyError } from "../../../components/common/Toast/Toast";

const API_KEY = "c8818fe821c0aee81ebf0b77344f0e2b";

const ImageUploader = ({
  note,
  setNote,
  selectedImages,
  setSelectedImages,
}) => {
  useEffect(() => {
    const uploadImages = async () => {
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
          selectedImage: [...prev?.selectedImage, image.name],
        }));
      }

      try {
      } catch (error) {
        console.error(error);
      }
    };

    uploadImages(); // Upload only when multiple images are selected
  }, [selectedImages]); // Update the dependency array when selectedImages change

  const handleImageSelect = (event) => {
    const newSelectedImages = event.target.files;
    if (newSelectedImages.length <= 3) {
      // Check the size of each selected image
      const isValidSize = Array.from(newSelectedImages).every(
        (file) => file.size <= 5 * 1024 * 1024 // 5 MB in bytes
      );

      if (isValidSize) {
        setSelectedImages(newSelectedImages);
      } else {
        // Handle case where at least one file exceeds 5 MB
        notifyError("Please make sure all selected images are within 5 MB.");
      }
    } else {
      // Handle case where the number of selected images is not between 3 and 5
      notifyError("Please select maximum 3 images.");
    }
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
