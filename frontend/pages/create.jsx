import { Button } from "@chakra-ui/react";
import Edit from "../components/Edit";
import Preview from "../components/Preview";
import Layout from "../components/Layout";
import { useState } from "react";
import CancelModal from "../components/Modals/CancelModal";

const create = () => {
  const [markdown, setMarkdown] = useState(``);
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  return (
    <div>
      <Layout
        title="New Post - Bloggy community"
        description="Create a new blog"
      />
      <div className="w-full absolute top-0 flex items-center justify-end space-x-2 py-[5px] pr-2">
        <Button className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] text-white">
          Publish
        </Button>
        <CancelModal />
      </div>
      <div className="flex items-start justify-start">
        <div className="w-2/4 h-screen overflow-y-scroll">
          <Edit
            title={title}
            setTitle={setTitle}
            markdown={markdown}
            setMarkdown={setMarkdown}
            coverImage={coverImage}
            setCoverImage={setCoverImage}
          />
        </div>
        <div className="w-2/4 overflow-y-scroll h-screen">
          <Preview markdown={markdown} title={title} coverImage={coverImage} />
        </div>
      </div>
    </div>
  );
};

export default create;
