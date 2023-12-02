import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 85 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize={15} paddingX={3} borderRadius={4}>
      {score}
    </Badge>
  );
};
