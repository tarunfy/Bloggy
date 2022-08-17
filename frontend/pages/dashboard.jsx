import Navbar from "../components/Navbar";
import BlogCard from "../components/Card/BlogCard";
import Layout from "../components/Layout";

const Dashboard = ({ data }) => {
  return (
    <div>
      <Layout
        title="Dashboard - Bloggy Community"
        description="Dashboard of bloggy community"
      />
      <Navbar />
      <div className="mt-44 max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-semibold mb-5">
          Your Blogs ({data?.blogs?.length})
        </h1>
        <ul className="space-y-5">
          {data?.blogs?.map((blog, index) => (
            <li key={index}>
              <BlogCard blog={blog} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps = async (context) => {
  const token = context.req.headers.cookie.split("=")[1];

  const res = await fetch("http://localhost:4000/api/blogs/user/personal", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
