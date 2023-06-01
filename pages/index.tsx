import React from "react";
import { Flex } from "@chakra-ui/react";

import { Main, Footer } from "@components";

const Home: React.FC = () => {
  return (
    <Flex direction="column" minH="100vh" maxW="100vw">
      <Main />
      <Footer />
    </Flex>
  );
};

export default Home;
