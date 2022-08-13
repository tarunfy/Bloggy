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
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Profile = () => {
  const logout = useLogout();
  const { user } = useAuthContext();
  const { colorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton as={"button"} righticon={<ChevronDownIcon />}>
        <Avatar size="md" name={user.fullname} src={user?.profileImage} />
      </MenuButton>
      <MenuList
        className={`${
          colorMode === "light" && "!bg-white/50 !border-gray-300"
        }`}
      >
        <Link href={`/${user.username}`}>
          <a>
            <MenuItem>@{user.username}</MenuItem>
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
        <MenuItem onClick={logout}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
