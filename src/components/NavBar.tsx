import { HStack, Image, Text } from "@chakra-ui/react";
import whatever from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={whatever} boxSize={"50px"}></Image>
      <Text>Destiny</Text>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
