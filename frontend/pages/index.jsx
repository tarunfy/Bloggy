import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import Article from "../components/Aritcle/Article";
import Option from "../components/Aritcle/Option";
import Sidebar from "../components/Aritcle/Sidebar";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home({ news }) {
  console.log(news);
  const [isLoading, setIsLoading] = useState(false);
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
        <div className="col-span-2 flex items-start flex-col space-y-10">
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
            <div className="flex items-center justify-center w-full">
              <Spinner size="xl" />
            </div>
          ) : (
            <>
              <Article name={filterBy} img={true} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
              <Article name={filterBy} />
            </>
          )}
        </div>
        <div className="overflow-x-hidden w-full">
          <Sidebar news={news} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.API_KEY}`
  );

  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
}
