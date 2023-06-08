import React from "react";
import { Box, Button, ButtonGroup, Center, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header: React.FC = () => {
  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt={6}
      pb={2}
    >
      <Center gap="2" minWidth={{ base: "90%", md: "48em" }}>
        <Spacer />
        <ButtonGroup gap="2">
          <NextLink href="/#about" passHref>
            <Button color="black" variant="link">
              What's Sailed?
            </Button>
          </NextLink>
          <NextLink href="/#faq" passHref>
            <Button color="black" variant="link">
              FAQ
            </Button>
          </NextLink>
        </ButtonGroup>
      </Center>
    </Box>
  );
};
