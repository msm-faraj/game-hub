import { HStack, Image, Text } from "@chakra-ui/react";
import whatever from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={whatever} boxSize={"50px"}></Image>
      <Text>Destiny</Text>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
