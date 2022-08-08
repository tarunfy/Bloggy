import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import FileUpload from "./FileUpload";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const mkdStr = `# Markdown Editor for [React](https://facebook.github.io/react/)

**Hello worldffvfdfvdfv!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

const Edit = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(mkdStr);

  const { colorMode } = useColorMode();

  const handleTextareaSize = (e) => {
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div
      className={`w-[75%] h-[80%] rounded-lg border-[.6px] ${
        colorMode === "light"
          ? "!border-gray-300 !bg-white/50"
          : "!border-gray-50/70 !bg-[#2D3748]/50"
      }`}
    >
      <div className="p-10 w-full space-y-4">
        <FileUpload
          name="Image upload"
          acceptedFileTypes="image/png, image/gif, image/jpeg"
        />
        <textarea
          placeholder="New post title here..."
          className="resize-none w-full border-none focus:border-none bg-transparent text-5xl focus:outline-none h-[60px]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyUp={(e) => handleTextareaSize(e)}
        />
        <div data-color-mode={`${colorMode}`}>
          <MDEditor value={value} onChange={setValue} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
