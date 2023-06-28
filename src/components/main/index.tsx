import React from "react";
import {
  Box,
  useTheme,
  Center,
  Heading,
  Text,
  Avatar,
  AvatarBadge,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Header } from "@components";
import { SailedIcon } from "@components/sailedIcon";

export const Main: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflowX={"hidden"}
    >
      <Box bgGradient="radial(#991BFC, white)" minW="140vw" minH="100vh">
        <Header />
        <Image pt={{ base: 6, md: 0 }} mx="auto" src="sailed-logo.png" />
        <Text
          color="white"
          style={{
            fontSize: theme.fontSizes["6xl"],
            fontWeight: "bold",
          }}
          my={0}
        >
          <SailedIcon width="4em" aria-label="Sailed" />
        </Text>
        <Text
          color="white"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          mb={1}
        >
          Match your friends
        </Text>
        <Box mb={8}>
          <Flex mb={2}>
            <Image
              marginLeft="auto"
              marginRight={-5}
              boxSize={{ base: "11em", md: "20em" }}
              borderRadius="full"
              src="p1.jpeg"
              border="0.25em solid darkred"
            />
            <Image
              marginRight="auto"
              boxSize={{ base: "11em", md: "20em" }}
              borderRadius="full"
              src="p2.jpeg"
              border="0.25em solid lightblue"
            />
          </Flex>
          <Avatar size="lg" src="r1.png" border="0.1em solid darkcyan">
            <AvatarBadge bg="white" boxSize="1.3em">
              👍
            </AvatarBadge>
          </Avatar>
          <Avatar size="lg" src="r2.png" border="0.1em solid #E1D8DD">
            <AvatarBadge bg="white" boxSize="1.3em">
              ⛵
            </AvatarBadge>
          </Avatar>
          <Avatar size="lg" src="r3.png" border="0.1em solid black">
            <AvatarBadge bg="white" boxSize="1.3em">
              🥰
            </AvatarBadge>
          </Avatar>
          <Avatar size="lg" src="r4.png" border="0.1em solid #6C7B44">
            <AvatarBadge bg="white" boxSize="1.3em">
              🙌
            </AvatarBadge>
          </Avatar>
          <Avatar size="lg" src="r5.png" border="0.1em solid #EA9341">
            <AvatarBadge bg="white" boxSize="1.3em">
              👍
            </AvatarBadge>
          </Avatar>
        </Box>
        <NextLink href="https://tqsyk7a2zho.typeform.com/to/UyMduNcZ">
          <Button width="200px" bgColor="white" variant="solid" size="lg">
            Join Waitlist
          </Button>
        </NextLink>
      </Box>

      <Center
        flexDirection="column"
        display="flex"
        textAlign="left"
        maxWidth="48em"
        padding={5}
        borderRadius={10}
        m={10}
      >
        <Box>
          <Heading
            textAlign="center"
            marginBottom={10}
            id="about"
            fontSize={{ base: 25, md: 36 }}
            color="#991BFC"
          >
            So ... What are we? 😳
          </Heading>
          <Text>
            We’re the app that empowers you to take charge of your friends' love
            lives! Our goal is to make matchmaking and dating a delightful and
            effortless experience for you and your inner circle.
          </Text>
          <Text>
          So, how does Sailed work? It's a breeze!
          Start by creating an account and inviting your friends.
          Then choose a friend to match and start swiping on recommended partners.
          Swipe right to ship someone with your friend and wait to see the reactions from your other friends. 
          If your ship gets enough love, sail the ship!
          </Text>

          <Text>
            Sail away with us today and embark on a voyage of exciting and
            heartwarming love stories.
          </Text>
          <Heading
            textAlign="center"
            marginBottom={10}
            paddingTop={24}
            id="faq"
            fontSize={{ base: 25, md: 36 }}
            color="#991BFC"
          >
            FAQ 🙋‍♂️
          </Heading>
          <Text fontWeight={"bold"}>
            Q: I’m already in a relationship. Can I just be a matchmaker?
          </Text>
          <Text>
            Yes! You can toggle a setting in your profile that prevents you from
            being shipped with others.
          </Text>

          <Text fontWeight={"bold"}>Q: What's a ship? What's a sail?</Text>

          <Text>
            When a friend is matchmaking for another friend and they swipe right on a potential partner,
            we call it a "ship". If the ship is approved by enough friends, then it becomes a match, which we call a "sail".
          </Text>

          <Text fontWeight={"bold"}>Q: What needs to happen for a ship to be sailed?</Text>

          <Text>
            Once a ship is created between two people, it'll be shown to friends of both people.
            The friends can add reactions of approval or disapproval and also add comments. If there
            are enough positive reactions by friends of both people, the ship will be sailed!
          </Text>

          <Text fontWeight={"bold"}>
            Q: Can I message or communicate with people I’m shipped with?
          </Text>

          <Text>
            Definitely! You can message matches with our built-in chat feature.
          </Text>

          <Text fontWeight={"bold"}>
            Q: How old do I need to be to use the app?
          </Text>
          <Text>You must be 18 years or older to use the app.</Text>
        </Box>
      </Center>
    </Box>
  );
};
