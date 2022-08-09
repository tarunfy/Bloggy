import React from "react";

const Option = ({ filterBy, setFilterBy, name }) => {
  return (
    <>
      <h3
        className={`${
          filterBy === name ? "font-bold" : "font-normal"
        } hover:text-[#4A18D7] text-xl transition cursor-pointer`}
        onClick={() => setFilterBy(name)}
      >
        {name}
      </h3>
    </>
  );
};

export default Option;
