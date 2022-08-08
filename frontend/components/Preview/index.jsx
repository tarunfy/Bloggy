import { useColorMode } from "@chakra-ui/react";

const Preview = () => {
  const { colorMode } = useColorMode();

  return (
    <div
      className={`w-[75%] h-[80%] rounded-lg border-[.6px] ${
        colorMode === "light"
          ? "!border-gray-300 !bg-white/50"
          : "!border-gray-50/70 !bg-[#2D3748]/50"
      }`}
    >
      Preview
    </div>
  );
};

export default Preview;
