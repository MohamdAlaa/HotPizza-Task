import Image from "next/image";

export default function TopBar({
  previewMode,
  setPreviewMode,
  primaryColor,
  isSidebarOpen,
  setIsSidebarOpen,
  setCoverImage,
}) {
  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCoverImage(event.target.files[0]);
    }
  };

  return (
    <div
      className="flex items-center justify-around p-4 bg-red-500 shadow-md"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`px-4 py-2 rounded bg-white `}
      >
        <Image src="/bars.svg" alt="bars" width={25} height={20} />
      </button>
      {/* Desktop Preview Button */}
      <div className="flex gap-4 space-x-2">
        <button
          onClick={() => setPreviewMode("desktop")}
          className={`px-4 py-2 rounded ${
            previewMode === "desktop" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Desktop Preview
        </button>
        {/* Mobile Preview Button */}
        <button
          onClick={() => setPreviewMode("mobile")}
          className={`px-4 py-2 rounded ${
            previewMode === "mobile" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Mobile Preview
        </button>
      </div>
    </div>
  );
}
