import { Avatar, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";

const Blog = ({ name, img }) => {
  //check if the index is 0 of this element and if it is then show banner img if there is one.
  const [firstElement, setFirstElement] = useState(true);
  const { colorMode } = useColorMode();

  return (
    <div
      className={`w-full rounded-lg border-[1px] cursor-pointer ${
        colorMode === "light"
          ? "!border-gray-300 !bg-white/50"
          : "!border-gray-50/70 !bg-[#2D3748]/50"
      }`}
    >
      {firstElement && img && (
        <>
          <img
            src="/images/test.webp"
            alt="Banner img"
            className="object-cover bg-[#DDDDDD] h-60 !w-full rounded-tr-lg rounded-tl-lg"
          />
        </>
      )}

      <div className="flex items-start justify-start space-x-2 p-4">
        <Avatar
          size="md"
          name="Tarun Sharma"
          src="https://bit.ly/dan-abramov"
        />

        <div>
          <h5>Tarun Sharma</h5>
          <p className="text-xs">2 days ago</p>
          <h2
            className={`text-[1.7rem] max-w-xl font-bold mt-3 ${
              colorMode === "light"
                ? "hover:!text-[#313CB3]"
                : "hover:!text-[#aa91f1]"
            }`}
          >
            How to connect your flask application to AWS RDS with a CI/CD
            pipeline
          </h2>
          <div className="flex items-center space-x-2 mt-3">
            <div
              className={`flex  p-2 rounded-lg items-center space-x-2  text-lg ${
                colorMode === "light"
                  ? "hover:bg-gray-200/70"
                  : " hover:bg-gray-200/5"
              }`}
              variant="ghost"
            >
              <BsSuitHeart />
              <p>20 Likes</p>
            </div>
            <div
              className={`flex  p-2 rounded-lg items-center space-x-2  text-lg ${
                colorMode === "light"
                  ? "hover:bg-gray-200/70"
                  : "hover:bg-gray-200/5"
              }`}
              variant="ghost"
            >
              <AiOutlineComment />
              <p>12 Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
