import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import Option from "../components/Blog/Option";
import Sidebar from "../components/Blog/Sidebar/index";
import Blog from "../components/Blog/Blog";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import BlogCardSkeleton from "../skeletons/BlogCardSkeleton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [filterBy, setFilterBy] = useState("Relevant");
  return (
    <div>
      <Layout
        title="Bloggy Community ✍️ ✍️"
        description="Blogging platform for creative coding community."
      />
      <Navbar />
      {/* Main */}
      <div className="max-w-[1100px] mx-auto mt-28 grid gap-x-20 grid-cols-3">
        <div className="col-span-2 w-full flex items-start flex-col space-y-10">
          <div className="flex items-center justify-start space-x-10 text-2xl">
            <Option
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              name="Relevant"
            />
            <Option
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              name="Latest"
            />
            <Option filterBy={filterBy} setFilterBy={setFilterBy} name="Top" />
          </div>
          {isLoading ? (
            <div className="w-full space-y-2">
              <BlogCardSkeleton banner={true} />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </div>
          ) : (
            <div className="w-full space-y-2">
              <Blog img={true} />
              <Blog />
            </div>
          )}
        </div>
        <div className="overflow-x-hidden w-full">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
