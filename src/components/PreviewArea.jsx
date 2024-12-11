"use client";

import menuData from "@/data/menuData";
import Image from "next/image";
import { useState } from "react";

export default function PreviewArea({ previewMode, primaryColor, coverImage }) {
  const [order, setOrder] = useState(false);

  const handelOrder = () => {
    setOrder(!order);
  };

  return (
    <div
      className={` mt-0 overflow-y-auto ${
        previewMode === "desktop" ? "h-screen" : "h-[700px] w-[600px] mx-auto"
      } bg-white mt-4`}
    >
      {/* Logo */}
      <div className="flex justify-center">
        <Image src="/logo.png" width={159} height={130} alt="logo" />
      </div>
      {/* Cover Img */}
      {coverImage ? (
        <div className="flex justify-center">
          <Image src={coverImage} alt="default" width={1269} height={47} />
        </div>
      ) : (
        <div className="flex justify-center">
          <Image src="/default.jpeg" alt="default" width={1269} height={47} />
        </div>
      )}
      <div className="w-3/5 p-2 m-auto font-light text-center">
        <h1
          className="w-16 text-white rounded"
          style={{ backgroundColor: primaryColor }}
        >
          العروض
        </h1>
      </div>
      <div className="flex flex-col items-center w-full p-2 m-auto lg:w-3/5">
        {menuData.map((item) => (
          <div
            onClick={handelOrder}
            key={item.id}
            className="flex items-center justify-between p-4 mb-4 rounded shadow sm:h-48 h-28 sm:p-8"
          >
            {/* Item Details */}

            <div className="flex flex-col gap-2 sm:w-full">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600 text-md">{item.description}</p>
              <p className="flex items-center w-20 text-sm font-semibold text-red-500 bg-gray-200 rounded justify-evenly">
                <span>SAR</span>
                <span>{item.price}</span>
              </p>
            </div>

            {/* Item Image */}
            <div>
              <Image
                width={100}
                height={100}
                src={item.image}
                alt={item.title}
                className="mr-4 rounded w-30 h-30"
              />
            </div>
          </div>
        ))}
        {order && (
          <>
            {menuData.map((item) => (
              <div
                key={item.id}
                className={`${
                  previewMode === "desktop"
                    ? `w-2/5 bottom-1`
                    : "w-1/5 bottom-36"
                } flex items-center justify-around  absolute   h-20  rounded-md bg-red-700 text-white text-xl`}
                style={{ backgroundColor: primaryColor }}
              >
                <h1>تنفيذ الطلب</h1>
                <span className="flex gap-1">
                  <span>SAR</span>
                  {item.price}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
