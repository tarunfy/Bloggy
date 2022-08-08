import { SearchIcon } from "@chakra-ui/icons";
import {
  color,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const Searchbar = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <InputGroup>
        <InputRightElement
          children={
            <SearchIcon
              color={`${colorMode === "light" ? "gray.700" : "gray.100"}`}
            />
          }
          className="!cursor-pointer !text-xl "
        />
        <Input
          type="text"
          placeholder="Search..."
          className={`!border-[.5px] !text-lg !p-5  !w-[30rem]  ${
            colorMode === "light"
              ? "!border-gray-400  text-black"
              : "text-white/90 !border-gray-50"
          }`}
        />
      </InputGroup>
    </div>
  );
};

export default Searchbar;
