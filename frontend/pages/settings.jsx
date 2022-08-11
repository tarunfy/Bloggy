import { CloseIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  IconButton,
  Input,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import FileUpload from "../components/FileUpload";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const Settings = () => {
  const { colorMode } = useColorMode();
  const [profileImage, setProfileImage] = useState("");
  return (
    <div>
      <Layout
        title="Settings - Bloggy Community"
        description="Settings page of bloggy community"
      />
      <Navbar />
      <div className="mt-24 max-w-[1000px] mx-auto">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Settings for{" "}
            <span
              className={`${
                colorMode === "light" ? "text-[#313CB3]" : "text-[#7f5dde]"
              }`}
            >
              @taunfy
            </span>
          </h1>
          <Button className="fixed hover:!bg-[#4A18D7] !bg-[#5d2ee0] text-white">
            Save
          </Button>
        </div>

        {/* USER */}
        <div
          className={`mx-32 mt-10 border rounded-md px-5 py-10 space-y-5 mb-5 ${
            colorMode === "light"
              ? "!border-gray-300 !bg-white/50"
              : "!border-gray-50/70 !bg-[#2D3748]/50"
          }`}
        >
          <h1 className="text-3xl font-bold">User</h1>
          <div className="space-y-1">
            <label>Name</label>
            <Input type="text" variant="outline" display="block" required />
          </div>
          <div className="space-y-1">
            <label>Email</label>
            <Input type="email" variant="outline" display="block" required />
          </div>
          <div className="space-y-1">
            <label>Username</label>
            <Input type="text" variant="outline" display="block" required />
          </div>
          <div className="space-y-1">
            <label>Profile image</label>
            <div className="flex items-center space-x-2">
              <Avatar name="Tarun Sharma" src={profileImage} />
              {!profileImage ? (
                <FileUpload
                  text="Select image"
                  setCoverImage={setProfileImage}
                  name="Image upload"
                  acceptedFileTypes="image/png, image/gif, image/jpeg"
                />
              ) : (
                <div className="flex items-center space-x-4">
                  <FileUpload
                    text="Change image"
                    setCoverImage={setProfileImage}
                    name="Image upload"
                    acceptedFileTypes="image/png, image/gif, image/jpeg"
                  />
                  <IconButton
                    variant="ghost"
                    icon={<CloseIcon className="!text-red-500" />}
                    onClick={() => setProfileImage("")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BASIC */}
        <div
          className={`mx-32 mt-10 border rounded-md px-5 py-10 space-y-5 mb-5 ${
            colorMode === "light"
              ? "!border-gray-300 !bg-white/50"
              : "!border-gray-50/70 !bg-[#2D3748]/50"
          }`}
        >
          <h1 className="text-3xl font-bold">Basic</h1>
          <div className="space-y-1">
            <label>Website Url</label>
            <Input type="text" variant="outline" display="block" required />
          </div>
          <div className="space-y-1">
            <label>Bio</label>
            <Textarea type="text" variant="outline" display="block" required />
          </div>
        </div>

        {/* WORK */}
        <div
          className={`mx-32 mt-10 border rounded-md px-5 py-10 space-y-5 mb-5 ${
            colorMode === "light"
              ? "!border-gray-300 !bg-white/50"
              : "!border-gray-50/70 !bg-[#2D3748]/50"
          }`}
        >
          <h1 className="text-3xl font-bold">Work</h1>
          <div className="space-y-1">
            <label>Work</label>
            <Input type="text" variant="outline" display="block" required />
          </div>
          <div className="space-y-1">
            <label>Education</label>
            <Input type="text" variant="outline" display="block" required />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
