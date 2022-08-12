import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import Comment from "../../components/Comment";
import DOMPurify from "isomorphic-dompurify";
import { Avatar, Button, useColorMode } from "@chakra-ui/react";
import styles from "../../components/Preview/Preview.module.css";
import * as Showdown from "showdown";
import AddComment from "../../components/Modals/AddComment";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { useState } from "react";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const s =
  "# A demo of `react-markdown`\n\n`react-markdown` is a markdown component for React.\n\n👉 Changes are re-rendered as you type.\n\n👈 Try writing some markdown on the left.\n\n## Overview\n\n* Follows [CommonMark](https://commonmark.org)\n* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)\n* Renders actual React elements instead of using `dangerouslySetInnerHTML`\n* Lets you define your own components (to render `MyHeading` instead of `h1`)\n* Has a lot of plugins\n\n## Table of contents\nHere is an example of a plugin in action\n\n([`remark-toc`](https://github.com/remarkjs/remark-toc))\nThis section is replaced by an actual table of contents.\n\n## Syntax highlighting\nHere is an example of a plugin to highlight code:\n[`rehype-highlight`](https://github.com/rehypejs/rehype-highlight).\n```js\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport ReactMarkdown from 'react-markdown'\nimport rehypeHighlight from 'rehype-highlight'\nReactDOM.render(\n<ReactMarkdown rehypePlugins={[rehypeHighlight]}>\n{'# Your markdown here'}\n</ReactMarkdown>\ndocument.querySelector('#content'))\n```\n\nPretty neat, eh?\n\n## GitHub flavored markdown (GFM)\n\nFor GFM, you can *also* use a plugin:[`remark-gfm`](https://github.com/remarkjs/react-markdown#use).It adds support for GitHub-specific extensions to the language:tables, strikethrough, tasklists, and literal URLs.\n\nThese features **do not work by default**.👆 Use the toggle above to add the plugin.| Feature    | Support              |\n| ---------: | :------------------- |\n| CommonMark | 100%                 |\n| GFM        | 100% w/ `remark-gfm` |\n\n~~strikethrough~~\n\n* [ ] task list\n* [x] checked item\n\nhttps://example.com\n## HTML in markdown";

const text = converter.makeHtml(s);

const Details = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(2);
  const { colorMode } = useColorMode();

  const handleLike = () => {
    setLiked(!liked);

    setLikes(liked ? likes - 1 : likes + 1);
  };

  //check if we have any banner img then only disply it.

  return (
    <div>
      <Layout
        title="How to connect your flask application to AWS RDS with a CI/CD pipeline"
        description="Blog details page of bloggy community"
      />
      <Navbar />
      <div
        className={`max-w-[800px] border mx-auto mt-20 mb-3 rounded-lg ${
          colorMode === "light"
            ? "!border-gray-300 !bg-white/50"
            : "!border-gray-50/70 !bg-[#2D3748]/50"
        }`}
      >
        <img
          src="/images/test.webp"
          alt="Banner img"
          className="object-cover bg-[#DDDDDD] h-[20rem] !w-full rounded-tr-lg rounded-tl-lg"
        />
        <div className="py-4 px-14">
          <div className="flex space-x-2">
            <Avatar
              size="md"
              name="Tarun Sharma"
              src="https://bit.ly/dan-abramov"
            />
            <div>
              <h4 className="font-semibold">Tarun Sharma</h4>
              <p className="text-xs">Posted on 10 Aug</p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <h1 className="text-5xl font-bold leading-[60px]">
              How to connect your flask application to AWS RDS with a CI/CD
              pipeline
            </h1>
            <div
              className={`${styles.custommdLight}`}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[800px]  mx-auto flex items-center justify-end space-x-2">
        <Button
          variant="outline"
          onClick={handleLike}
          className="!flex !items-center !space-x-1"
        >
          {liked ? <BsSuitHeartFill fill="red" /> : <BsSuitHeart />}{" "}
          <p> {likes}</p>
        </Button>

        <AddComment />
      </div>
      <div className="max-w-[800px] mx-auto mt-5 mb-3 flex items-center justify-between">
        <h1 className="text-2xl font-medium">All comments</h1>
      </div>
      <div
        className={`max-w-[800px] border mx-auto mb-3 py-4 px-14 rounded-lg ${
          colorMode === "light"
            ? "!border-gray-300 !bg-white/50"
            : "!border-gray-50/70 !bg-[#2D3748]/50"
        }`}
      >
        <ul className="space-y-3 divide-y">
          <Comment />
        </ul>
        {/*<p className="text-center">No comments yet...</p>*/}
      </div>
    </div>
  );
};

export default Details;
