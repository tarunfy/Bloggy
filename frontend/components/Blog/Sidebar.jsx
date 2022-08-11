import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ news }) => {
  const [articles, setArticles] = useState(news.articles.slice(0, 5));
  const { colorMode } = useColorMode();

  return (
    <div
      className={`flex max-w-sm items-start flex-col border-[1px] rounded-lg ${
        colorMode === "light"
          ? "!border-gray-300 !bg-white/50"
          : "!border-gray-50/70 !bg-[#2D3748]/50"
      }`}
    >
      <div className="p-2">
        <h1 className="text-xl font-semibold">Latest tech news 👨‍💻</h1>
      </div>
      <ul
        className={`divide-y ${
          colorMode === "light" ? "divide-gray-300" : "divide-gray-100/50"
        }`}
      >
        {articles.map((article, index) => (
          <Link key={index} href={article.url}>
            <li className="px-2 py-4 group cursor-pointer" key={index}>
              <img
                src={article?.urlToImage}
                alt="img"
                className="w-full h-40 object-cover mb-2 rounded-md"
              />
              <a target="_blank">
                <p
                  className={`text-sm ${
                    colorMode === "light"
                      ? "group-hover:!text-[#313CB3]"
                      : "group-hover:!text-[#7f5dde]"
                  }`}
                >
                  {article.title}
                </p>
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
