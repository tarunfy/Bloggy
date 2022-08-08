import { useColorMode } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import styles from "./Preview.module.css";

const Preview = ({ markdown, title, coverImage }) => {
  const { colorMode } = useColorMode();

  return (
    <div
      className={`${
        styles.custommdLight
      } h-screen overflow-y-scroll p-12 pt-14 border-[.6px] space-y-6 ${
        colorMode === "light"
          ? "!border-gray-300 !bg-white/50"
          : `${styles.custommdDark} !border-gray-50/70 !bg-[#2D3748]/50 dark `
      }`}
    >
      {coverImage && (
        <img
          src={coverImage}
          alt="cover image"
          className="h-[100px] w-full object-cover"
        />
      )}
      <h1 className="!text-4xl">{title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown.trim()}
      </ReactMarkdown>
    </div>
  );
};

export default Preview;
