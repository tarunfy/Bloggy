import { Avatar, Button, useColorMode } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";

const Profile = () => {
  //Change layout title to current user's name.

  const { colorMode } = useColorMode();
  return (
    <div>
      <Layout
        title="Tarun Sharma - Bloggy Community"
        description="Tarun sharma's profile page"
      />
      <Navbar />

      <div
        className={`max-w-[900px] p-10 rounded-lg relative mx-auto bg-red-50 mt-52 ${
          colorMode === "light"
            ? "!border-gray-300 !bg-white/50"
            : "!border-gray-50/70 !bg-[#2D3748]/50"
        }`}
      >
        <div
          className={`rounded-full p-1 absolute -top-10 left-2/4 -translate-x-[50%] ${
            colorMode === "light" ? "bg-[#fafbfb]" : "bg-[#283040]"
          }`}
        >
          <Avatar
            size="xl"
            name="Tarun Sharma"
            src="https://bit.ly/dan-abramov"
          />
        </div>
        <div className="w-full flex justify-end">
          <Button className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] text-white">
            Edit profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
