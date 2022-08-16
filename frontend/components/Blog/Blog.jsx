import { Avatar, useColorMode } from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import Link from "next/link";
import moment from "moment";

const Blog = ({ blog, index }) => {
  //check if the index is 0 of this element and if it is then show banner img if there is one.
  const { colorMode } = useColorMode();

  return (
    <>
      <Link href={`/details/${blog._id}`}>
        <div
          className={`w-full rounded-lg border-[1px] cursor-pointer ${
            colorMode === "light"
              ? "!border-gray-300 !bg-white/50"
              : "!border-gray-50/70 !bg-[#2D3748]/50"
          }`}
        >
          {index === 0 && blog.coverImage && (
            <>
              <img
                src={blog.coverImage}
                alt="Blog banner"
                className="object-cover bg-[#DDDDDD] h-60 !w-full rounded-tr-lg rounded-tl-lg"
              />
            </>
          )}

          <div className="flex items-start justify-start space-x-2 p-4">
            <Avatar
              size="md"
              name={blog?.userInfo?.name}
              src={blog?.userInfo?.profileImage}
            />

            <div>
              <h5>{blog?.userInfo?.name}</h5>
              <p className="text-xs">
                {moment(blog?.createdAt).startOf("ss").fromNow()}
              </p>
              <a
                className={`text-[1.7rem] max-w-xl font-bold mt-3 ${
                  colorMode === "light"
                    ? "hover:!text-[#313CB3]"
                    : "hover:!text-[#7f5dde]"
                }`}
              >
                {blog.blogTitle}
              </a>
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
                  <p>
                    {!blog.likes || blog.likes?.length === 0
                      ? 0
                      : blog.likes.length}{" "}
                    likes
                  </p>
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
                  <p>
                    {" "}
                    {!blog.comments || blog.comments?.length === 0
                      ? 0
                      : blog.comments.length}{" "}
                    comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Blog;
