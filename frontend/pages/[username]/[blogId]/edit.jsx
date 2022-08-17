import { Button, IconButton } from "@chakra-ui/react";
import Editor from "../../../components/Edit";
import Preview from "../../../components/Preview";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Edit = () => {
  const [markdown, setMarkdown] = useState(``);
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const router = useRouter();

  useEffect(() => {
    async function getBlogData() {
      const res = await fetch(`/api/blogs/${router.query.blogId}`);

      const data = await res.json();

      if (res.ok) {
        setCoverImage(data.blog.coverImage);
        setMarkdown(data.blog.markdown);
        setTitle(data.blog.blogTitle);
      } else {
        return;
      }
    }
    getBlogData();
  }, []);

  return (
    <div>
      <Layout
        title="New Post - Bloggy community"
        description="Create a new blog"
      />
      <div className="w-full absolute top-0 flex items-center justify-end space-x-2 py-[5px] pr-2">
        <Button className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] text-white">
          Save Changes
        </Button>
        <Link href="/">
          <IconButton variant="outline" icon={<CloseIcon />} />
        </Link>
      </div>
      <div className="flex items-start justify-start">
        <div className="w-2/4 h-screen overflow-y-scroll">
          <Editor
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

export default Edit;
