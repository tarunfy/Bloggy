import { Button, Input, useColorMode } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);

  const { colorMode } = useColorMode();

  return (
    <div>
      <Layout title="Bloggy || Login" description="Bloggy login page" />
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
            type="password"
            width="md"
            variant="outline"
            placeholder="Password"
            display="block"
          />

          <Button className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] !w-full text-white">
            Log in
          </Button>
          <p className="text-center">
            Don't have an account?{" "}
            <span className="font-medium text-[#5d2ee0]">
              <Link href="/signup">Sign up</Link>
            </span>
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
