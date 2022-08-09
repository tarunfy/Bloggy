import { useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/Card/BlogCard";
import Layout from "../components/Layout";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([1, 2, 3]);
  return (
    <div>
      <Layout
        title="Dashboard - Bloggy Community"
        description="Dashboard of bloggy community"
      />
      <Navbar />
      <div className="mt-44 max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-semibold mb-5">
          Your Blogs ({blogs.length})
        </h1>
        <ul className="space-y-5">
          {blogs.map((item, index) => (
            <li key={index}>
              <BlogCard />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
