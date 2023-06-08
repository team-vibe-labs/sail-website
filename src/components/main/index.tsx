import React from "react";
import {
  Box,
  useTheme,
  Center,
  Heading,
  Text,
  Image,
  Avatar,
  AvatarBadge,
  Flex,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Header } from "@components";
import { SailIcon } from "@components/sailIcon";

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
      <Box
        bgGradient="radial(#CF96F8, white)"
        minW="100vw"
        minH="100vh"
        pb={16}
      >
        <Header />
        <Text
          color="white"
          style={{
            fontSize: theme.fontSizes["6xl"],
            fontWeight: "bold",
            letterSpacing: 1,
          }}
          mt={{ base: 12, md: 2 }}
          mb={1}
        >
          <SailIcon width="2em" aria-label="Sail" />
        </Text>
        <Text
          color="white"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          mb={1}
        >
          Match your friends
        </Text>
        <Box my={8}>
          <Flex mb={2}>
            <Image
              marginLeft="auto"
              marginRight={-5}
              boxSize={{ base: "11em", md: "20em" }}
              borderRadius="full"
              src="https://i.imgur.com/GncFs8u.jpg"
              border="0.25em solid darkred"
            />
            <Image
              marginRight="auto"
              boxSize={{ base: "11em", md: "20em" }}
              borderRadius="full"
              src="https://i.imgur.com/nwrltrp.jpg"
              border="0.25em solid lightblue"
            />
          </Flex>
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/women/28.jpg"
            border="0.1em solid white"
          >
            <AvatarBadge bg="white" boxSize="1.3em">
              👍
            </AvatarBadge>
          </Avatar>
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/men/18.jpg"
            border="0.1em solid gray"
          >
            <AvatarBadge bg="white" boxSize="1.3em">
              ⛵
            </AvatarBadge>
          </Avatar>
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/women/90.jpg"
            border="0.1em solid green"
          >
            <AvatarBadge bg="white" boxSize="1.3em">
              🥰
            </AvatarBadge>
          </Avatar>
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/men/4.jpg"
            border="0.1em solid orange"
          >
            <AvatarBadge bg="white" boxSize="1.3em">
              🙌
            </AvatarBadge>
          </Avatar>
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/men/55.jpg"
            border="0.1em solid black"
          >
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
          >
            So ... What are we? 😳
          </Heading>
          <Text>
            We’re the app that empowers you to take charge of your friends' love
            lives! Our goal is to make matchmaking and dating a delightful and
            effortless experience for you and your inner circle. Wave goodbye to
            those cringe-worthy blind dates and say hello to meaningful
            connections!
          </Text>
          <Text>
            So, how does Sail work? It's a breeze! You start by creating a
            profile for yourself and adding or inviting your friends. Your
            personalized feed will showcase pairs of friends who could be a
            great match. Simply swipe left to dismiss a pair or swipe right to
            show your approval. You also have the option to manually search for
            two friends and match them together. You'll receive a match
            notification whenever a friend of yours swipes right on you and
            another person!
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
          >
            FAQ 🙋‍♂️
          </Heading>
          <Text fontWeight={"bold"}>
            Q: I’m already in a relationship. Can I just be a matchmaker?
          </Text>
          <Text>
            Yes! You can toggle a setting in your profile that prevents you from
            being matched with others.
          </Text>

          <Text fontWeight={"bold"}>Q: Who will I be matched with?</Text>

          <Text>
            You will be matched with people that are approved by your friends.
          </Text>

          <Text fontWeight={"bold"}>
            Q: Can I message or communicate with people I’m matched with?
          </Text>

          <Text>
            Definitely! You can message matches with our built-in chat feature.
          </Text>

          <Text fontWeight={"bold"}>Q: Who can see my profile?</Text>

          <Text>
            Your friends will be able to see your profile at any time. Also,
            friends of your friends will be able to see your profile while
            matchmaking.
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
