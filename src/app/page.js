"use client";
import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import PreviewArea from "@/components/PreviewArea";

export default function Menu() {
  const [previewMode, setPreviewMode] = useState("desktop");
  const [primaryColor, setPrimaryColor] = useState("#E11B0E");
  const [coverImage, setCoverImage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Load saved settings on initial render
  useEffect(() => {
    try {
      const savedColor = localStorage.getItem("selectedColor");
      const savedImage = localStorage.getItem("uploadedImage");

      if (savedColor) setPrimaryColor(savedColor); // Load saved color
      if (savedImage) setCoverImage(savedImage); // Load saved image
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="flex ">
        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        {/* Sidebar */}
        <div className="">
          {isSidebarOpen && (
            <Sidebar
              primaryColor={primaryColor}
              setPrimaryColor={setPrimaryColor}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
            />
          )}
        </div>
        <div className="flex flex-col flex-grow">
          {/* Top Bar */}
          <TopBar
            previewMode={previewMode}
            setPreviewMode={setPreviewMode}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            primaryColor={primaryColor}
          />

          {/* Preview Area */}
          <PreviewArea
            previewMode={previewMode}
            coverImage={coverImage}
            primaryColor={primaryColor}
          />
        </div>
      </div>
    </>
  );
}
