import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Main, Footer } from "@components";

const Home: React.FC = () => {
  return (
    <Box minH="100vh" maxW="100vw">
      <Main />
    </Box>
  );
};

export default Home;
