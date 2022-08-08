import Link from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider,
  useColorMode,
} from "@chakra-ui/react";

const Profile = () => {
  const { colorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton as={"button"} righticon={<ChevronDownIcon />}>
        <Avatar
          size="md"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </MenuButton>
      <MenuList
        className={`${
          colorMode === "light" && "!bg-white/50 !border-gray-300"
        }`}
      >
        <Link href="/profile/tarunfy">
          <a>
            <MenuItem>@tarunfy</MenuItem>
          </a>
        </Link>
        <MenuDivider />
        <Link href="/dashboard">
          <a>
            <MenuItem>Dashboard</MenuItem>
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <MenuItem>Settings</MenuItem>
          </a>
        </Link>
        <MenuDivider />
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
