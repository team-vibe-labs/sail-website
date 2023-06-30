import React from "react";
import { Center, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Center py={8}>
      <Text
        pt={8}
        fontSize={{ base: 12, md: 16 }}
        color="black"
        fontWeight="bold"
      >
        © Copyright 2023 Vibe Labs. All Rights Reserved.
      </Text>
    </Center>
  );
};
