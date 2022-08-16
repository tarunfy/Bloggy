import {
  Avatar,
  Button,
  Center,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Link from "next/link";
import { RiCake2Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useAuthContext } from "../hooks/useAuthContext";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile = () => {
  const { user } = useAuthContext();
  const { colorMode } = useColorMode();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  if (!user) {
    return (
      <Center w="100vw" h="100vh">
        <Spinner size="lg" />
      </Center>
    );
  }

  return (
    <div>
      <Layout
        title={`${user?.fullname} - Bloggy Community`}
        description={`${user?.fullname}'s profile page`}
      />
      <Navbar />

      <div
        className={`max-w-[1000px] border p-10 rounded-lg relative mx-auto bg-red-50 mt-52 ${
          colorMode === "light"
            ? "!border-gray-300 !bg-white/50"
            : "!border-gray-50/70 !bg-[#2D3748]/50"
        }`}
      >
        <div
          className={`rounded-full p-1 absolute -top-12 left-2/4 -translate-x-[50%] ${
            colorMode === "light" ? " !bg-[#d8dadb80] " : " !bg-[#1A202C]"
          }`}
        >
          <Avatar size="xl" name={user?.fullname} src={user?.profileImage} />
        </div>
        <div className="w-full flex justify-end">
          <Link href="/settings">
            <a>
              <Button className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] text-white">
                Edit profile
              </Button>
            </a>
          </Link>
        </div>
        <div className="text-center mt-5 space-y-6 px-10">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl">{user?.fullname}</h1>
            <p className="text-lg">{user?.bio}</p>
          </div>
          <div className="flex items-center justify-between w-full space-x-3">
            <div className="flex items-center space-x-2">
              <RiCake2Line />
              <p>{`Joined on ${moment(user?.createdAt).date()} ${moment(
                user?.createdAt
              ).format("MMMM")} ${moment(user?.createdAt).format("YYYY")}`}</p>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail />
              <a href={`mailto:${user?.email}`}>{`${user?.email}`}</a>
            </div>
            {user?.websiteUrl && (
              <div className="flex items-center space-x-2">
                <BsGlobe />
                <a href={`${user?.websiteUrl}`} target="_blank">
                  {user?.websiteUrl}
                </a>
              </div>
            )}

            {user?.github && (
              <div className="flex items-center text-xl">
                <a href={`https://github.com/${user?.github}`} target="_blank">
                  <FaGithub />
                </a>
              </div>
            )}
            {user?.twitter && (
              <div className="flex items-center text-xl">
                <a href={`https://github.com/${user?.twitter}`} target="_blank">
                  <FaTwitter />
                </a>
              </div>
            )}
          </div>
          <div className="flex items-center justify-evenly">
            {user?.education && (
              <div>
                <h4
                  className={`text-sm ${
                    colorMode === "dark" ? "text-white/50" : "text-black/50"
                  }`}
                >
                  Education
                </h4>
                <p>{user?.education}</p>
              </div>
            )}
            {user?.work && (
              <div>
                <h4
                  className={`text-sm ${
                    colorMode === "dark" ? "text-white/50" : "text-black/50"
                  }`}
                >
                  Work
                </h4>
                <p>{user?.work}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;