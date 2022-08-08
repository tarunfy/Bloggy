import { CloseIcon } from "@chakra-ui/icons";
import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Edit from "../components/Edit";
import Layout from "../components/Layout";
import Preview from "../components/Preview";

const create = () => {
  const [mode, setMode] = useState("Edit");

  const { colorMode } = useColorMode();

  return (
    <div className="h-screen">
      <Layout
        title="New Post - Bloggy community"
        description="Create a new blog"
      />
      <div className="w-full flex items-center justify-between py-2 pl-32 pr-10">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <a>
              <Image src="/images/Bloggy.svg" height={50} width={60} />
            </a>
          </Link>
          <p className="text-lg">Create Blog</p>
        </div>
        <div className="flex space-x-3 items-center">
          <Button onClick={() => setMode("Edit")}>Edit</Button>
          <Button onClick={() => setMode("Preview")}>Preview</Button>
        </div>
        <div>
          <IconButton variant="outline" icon={<CloseIcon />} />
        </div>
      </div>
      <div className="px-48 h-full w-full space-y-4">
        {mode === "Edit" ? <Edit /> : <Preview />}
        <Button className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] text-white">
          Publish
        </Button>
      </div>
    </div>
  );
};

export default create;
