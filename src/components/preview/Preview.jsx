import { useState } from "react";

export const Preview = ({ userimage }) => {
  const [preview, setPreview] = useState(null);

  const readerFile = new FileReader();
  readerFile.readAsDataURL(userimage);
  readerFile.onload = () => {
    setPreview(readerFile.result);
  };
  return (
    <div>
      {preview ? (
        <img src={preview} alt="profile" height="30px" width="100px" />
      ) : (
        "image loading..."
      )}
    </div>
  );
};
