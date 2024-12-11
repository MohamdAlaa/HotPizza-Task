import Image from "next/image";

export default function Sidebar({
  primaryColor,
  setPrimaryColor,
  setCoverImage,
  coverImage,
}) {
  // const handleFileUpload = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setCoverImage(e.target.result); // Set image as base64 string
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target.result); // Set image as base64 string
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSaveChanges = () => {
    localStorage.setItem("selectedColor", primaryColor); // Save color
    localStorage.setItem("uploadedImage", coverImage); // Save image (base64 string)
    alert("Changes saved!");
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setPrimaryColor(color);
  };

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col justify-between w-64 h-full p-4 bg-gray-200 rounded">
      <div className="flex flex-col gap-10 mt-32">
        {/* File Upload */}
        <div className="flex flex-col gap-10">
          {/* Cover Img */}
          {coverImage ? (
            <div className="flex justify-center ">
              <Image
                className="rounded"
                src={coverImage}
                alt="default"
                width={200}
                height={200}
              />
            </div>
          ) : (
            <div className="flex justify-center">
              <Image
                className="rounded"
                src="/default.jpeg"
                alt="default"
                width={300}
                height={300}
              />
            </div>
          )}

          <input
            type="file"
            onChange={handleFileUpload}
            accept="image/*"
            className="block w-full"
          />
        </div>

        {/* Color Picker */}
        <div className="flex items-center gap-2">
          <label className="block font-semibold">Primary Color :</label>
          <input
            type="color"
            value={primaryColor}
            onChange={handleColorChange}
            className="w-10 h-10 border rounded"
          />
        </div>
      </div>

      <button
        onClick={handleSaveChanges}
        className="px-4 py-2 text-white bg-green-500 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
