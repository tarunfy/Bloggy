import { Button, Input, useColorMode } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Signup = () => {
  const [error, setError] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <div>
      <Layout title="Bloggy || Signup" description="Bloggy signup page" />
      <div className="flex justify-center items-center h-screen">
        <form
          className={`${
            colorMode === "light"
              ? "!border-gray-300 !bg-white/50"
              : "!border-gray-50/70 !bg-[#2D3748]/50"
          } border-[1px] py-10 px-16 rounded-lg space-y-3`}
        >
          <div className="flex items-center mb-5 justify-center">
            <Link href="/">
              <a>
                <Image src="/images/BloggyText.svg" height={100} width={400} />
              </a>
            </Link>
          </div>

          <Input
            type="email"
            width="md"
            variant="outline"
            placeholder="Email"
            display="block"
          />

          <Input
            type="text"
            width="md"
            variant="outline"
            placeholder="Fullname"
            display="block"
            required
          />

          <Input
            type="text"
            width="md"
            variant="outline"
            placeholder="Username"
            display="block"
            required
          />

          <Input
            type="password"
            width="md"
            variant="outline"
            placeholder="Password"
            display="block"
            required
          />

          <Button className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] !w-full text-white">
            Sign up
          </Button>
          <p className="text-center">
            Already have an account?{" "}
            <span className="font-medium text-[#5d2ee0]">
              <Link href="/login">Log in</Link>
            </span>
          </p>
          {error && (
            <p className="text-red-500 text-center">
              Username is already taken, try something different.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
