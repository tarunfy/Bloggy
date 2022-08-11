import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import Comment from "../../components/Comment";
import DOMPurify from "isomorphic-dompurify";
import { Avatar, Button, useColorMode } from "@chakra-ui/react";
import styles from "../../components/Preview/Preview.module.css";
import * as Showdown from "showdown";
import AddComment from "../../components/Modals/AddComment";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const s =
  "# A demo of `react-markdown`\n\n`react-markdown` is a markdown component for React.\n\n👉 Changes are re-rendered as you type.\n\n👈 Try writing some markdown on the left.\n\n## Overview\n\n* Follows [CommonMark](https://commonmark.org)\n* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)\n* Renders actual React elements instead of using `dangerouslySetInnerHTML`\n* Lets you define your own components (to render `MyHeading` instead of `h1`)\n* Has a lot of plugins\n\n## Table of cont...";

const text = converter.makeHtml(s);

const Details = () => {
  const { colorMode } = useColorMode();

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
      <div className="max-w-[800px] mx-auto mt-5 mb-3 flex items-center justify-between">
        <h1 className="text-2xl font-medium">All comments</h1>
        <AddComment />
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
