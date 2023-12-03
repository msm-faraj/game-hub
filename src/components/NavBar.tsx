import { HStack, Image, Text } from "@chakra-ui/react";
import whatever from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={whatever} boxSize={"50px"}></Image>
      <Text>Destiny</Text>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
