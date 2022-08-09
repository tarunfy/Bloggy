import { Button, useColorMode } from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import Link from "next/link";

const BlogCard = () => {
  const { colorMode } = useColorMode();
  return (
    <div
      className={`w-full p-5 border flex items-center justify-between rounded-lg relative mx-auto bg-red-50 ${
        colorMode === "light"
          ? "!border-gray-300 !bg-white/50"
          : "!border-gray-50/70 !bg-[#2D3748]/50"
      }`}
    >
      <div>
        <Link href="/articles/4344344342">
          <a>
            <h1
              className={`text-lg max-w-md font-bold ${
                colorMode === "light" ? "text-[#313CB3]" : "text-[#aa91f1]"
              }`}
            >
              How to connect your flask application to AWS RDS with a CI/CD
              pipeline
            </h1>
          </a>
        </Link>
        <div className="flex items-center space-x-3 text-sm">
          <p>Published: 6 Jan</p>
          <p>Edited: 9 Aug</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-base">
          <BsSuitHeart />
          <p>8</p>
        </div>
        <div className="flex items-center space-x-2 text-base">
          <AiOutlineComment />
          <p>14</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] text-white">
          Edit
        </Button>
        <Button colorScheme="red">Delete</Button>
      </div>
    </div>
  );
};

export default BlogCard;
