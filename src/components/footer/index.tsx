import React from "react";
import { Center, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Center py={8} bgGradient="linear(to-t, #CF96F8, white)">
      <Text
        pt={8}
        fontSize={{ base: 12, md: 16 }}
        color="white"
        fontWeight="bold"
      >
        © Copyright 2023 Vibe Labs. All Rights Reserved.
      </Text>
    </Center>
  );
};
