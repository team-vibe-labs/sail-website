import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Avatar,
  AvatarBadge,
  Flex,
  Button,
  Spacer,
  Show,
  Spinner,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";

import { Footer, Header } from "@components";

export const Main: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const MotionText = motion(Text);
  const MotionImage = motion(Image);
  const MotionAvatar = motion(Avatar);
  const MotionButton = motion(Button);
  const MotionCenter = motion(Center);
  const MotionSpinner = motion(Spinner);

  const avatarVariant = useBreakpointValue({
    base: "lg",
    "3xl": "xl",
  });

  useEffect(() => {
    if (isLoading && imageRef.current?.complete) {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <MotionCenter
        minH="100vh"
        animate={{ backgroundColor: ["#E893CF", "#FFFFFF", "#E893CF"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MotionSpinner
          animate={{ color: ["#FFFFFF", "#E893CF", "#FFFFFF"] }}
          transition={{ duration: 2, repeat: Infinity }}
          size="xl"
          thickness="0.4em"
        />
        <Image
          ref={imageRef}
          display="none"
          onLoad={() => setIsLoading(false)}
          src="https://d1zzqqpsok2fq2.cloudfront.net/p1.jpg"
        />
      </MotionCenter>
    );
  }

  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxW={"100%"}
      overflowX="hidden"
    >
      <MotionImage
        animate={{ x: [-25, 10, 0], y: [-25, 10, 0] }}
        mx="auto"
        position="absolute"
        w={{ base: "600px", md: "690px", "3xl": "900px" }}
        top={{ base: "-201", md: "-251" }}
        left={{ base: "-280", md: "-380" }}
        src="https://d1zzqqpsok2fq2.cloudfront.net/blob2.png"
        zIndex={-1000}
      />
      <Box minW="140vw" minH="100vh" position="relative">
        <Header />
        <MotionImage
          pt={{ base: 6, md: 0 }}
          animate={{ y: [-50, 10, 0] }}
          mx="auto"
          w={{ base: "454px", "3xl": "681px" }}
          h={{ base: "162px", "3xl": "243px" }}
          src="https://d1zzqqpsok2fq2.cloudfront.net/sailed-logo.png"
        />
        <MotionText
          mt={-4}
          color="black"
          fontSize={{ base: "4xl", md: "5xl", "3xl": "6xl" }}
          fontWeight="bold"
          animate={{ y: [-50, 10, 0] }}
          mb={0}
        >
          Match your friends
        </MotionText>
        <Box mb={8}>
          <Flex>
            <MotionImage
              marginLeft="auto"
              animate={{ x: [-100, 25, 0], opacity: [0, 1] }}
              marginRight={-5}
              boxSize={{ base: "11em", md: "20em", "3xl": "30em" }}
              borderRadius="full"
              src="https://d1zzqqpsok2fq2.cloudfront.net/p1.jpg"
              border="0.25em solid"
            />
            <MotionImage
              marginRight="auto"
              animate={{ x: [100, -25, 0], opacity: [0, 1] }}
              boxSize={{ base: "11em", md: "20em", "3xl": "30em" }}
              borderRadius="full"
              src="https://d1zzqqpsok2fq2.cloudfront.net/p2.png"
              border="0.25em solid"
            />
          </Flex>
          <MotionImage
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            mt="-2em"
            mx="auto"
            height={{ base: "4em", md: "6em", "3xl": "8em" }}
            src="https://d1zzqqpsok2fq2.cloudfront.net/heart.png"
          />
          <Show breakpoint="(min-width: 1150px)">
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "50vh" }}
              left={{ base: "0px", md: "35vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r1.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                👍
              </AvatarBadge>
            </MotionAvatar>
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "73vh" }}
              left={{ base: "0px", md: "42vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r2.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                ⛵
              </AvatarBadge>
            </MotionAvatar>
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "65vh" }}
              left={{ base: "0px", md: "27vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r6.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                👿
              </AvatarBadge>
            </MotionAvatar>
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "47vh" }}
              left={{ base: "0px", md: "24vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r7.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                🍵
              </AvatarBadge>
            </MotionAvatar>
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "34vh" }}
              left={{ base: "0px", md: "39vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r8.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                💀
              </AvatarBadge>
            </MotionAvatar>
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "52vh" }}
              right={{ base: "0px", md: "38vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r3.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                🥰
              </AvatarBadge>
            </MotionAvatar>
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "30vh" }}
              right={{ base: "0px", md: "40vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r4.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                🙌
              </AvatarBadge>
            </MotionAvatar>
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "38vh" }}
              right={{ base: "0px", md: "30vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r5.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                👍
              </AvatarBadge>
            </MotionAvatar>
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "21vh" }}
              right={{ base: "0px", md: "25vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r10.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                💖
              </AvatarBadge>
            </MotionAvatar>
            <MotionAvatar
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 3 }}
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "65vh" }}
              right={{ base: "0px", md: "33vw" }}
              zIndex={{ base: 0, md: -999 }}
              size={avatarVariant}
              src="https://d1zzqqpsok2fq2.cloudfront.net/r9.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                🚩
              </AvatarBadge>
            </MotionAvatar>
          </Show>
        </Box>
        <Flex
          mt={{ base: "-3em", md: "-5em", "3xl": "-4em" }}
          mx="auto"
          width="22rem"
        >
          <Spacer />
          <MotionImage
            animate={{ y: [-5, 5, -5] }}
            transition={{
              from: 0,
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            w={{ base: "67px", md: "67px" }}
            src="https://d1zzqqpsok2fq2.cloudfront.net/new-doodle.png"
          />
        </Flex>
        <NextLink href="https://forms.gle/j4jbtYBMprtgEyDm6">
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            width={{ base: "17.5rem", "3xl": "26.25rem" }}
            height={{ base: "4.25rem", "3xl": "6.37rem" }}
            bgColor="#9B51E0"
            _hover={{ bg: "#E893CF" }}
            _active={{ bg: "#E893CF" }}
            color="white"
            variant="solid"
            borderRadius="20px"
            border="4px solid black"
            fontWeight="bold"
            fontSize={{ base: "1.5rem", "3xl": "2.25rem" }}
          >
            Join Waitlist
          </MotionButton>
        </NextLink>
        <MotionImage
          animate={{ x: [25, -10, 0] }}
          overflowX="hidden"
          mx="auto"
          position="absolute"
          w={{ base: "500px", md: "654px" }}
          top={{ base: "451", md: "251" }}
          right={{ base: "-260", md: "-200" }}
          src="https://d1zzqqpsok2fq2.cloudfront.net/blob.png"
          zIndex={-1000}
        />
      </Box>
      <Center
        flexDirection="column"
        display="flex"
        position="relative"
        textAlign="left"
        maxWidth="48em"
        padding={5}
        borderRadius={10}
        m={10}
      >
        <Box>
          <MotionImage
            animate={{ rotate: 360 }}
            transition={{
              from: 0,
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            overflowX="hidden"
            mx="auto"
            position="absolute"
            w={{ base: "264px", md: "264px" }}
            top="0"
            left="-390"
            src="https://d1zzqqpsok2fq2.cloudfront.net/star.png"
            zIndex={-1000}
          />
          <Heading
            textAlign="center"
            marginBottom={10}
            id="about"
            fontSize={{ base: 25, md: 36 }}
          >
            So ... What are we?
          </Heading>
          <Text>
            We’re the app that empowers you to take charge of your friends' love
            lives! Our goal is to make matchmaking and dating a delightful and
            effortless experience for you and your inner circle.
          </Text>
          <Text>
            So, how does Sailed work? It's a breeze! Start by creating an
            account and inviting your friends. Then choose a friend to match and
            start swiping on recommended partners. Swipe right to ship someone
            with your friend and wait to see the reactions from your other
            friends. If your ship gets enough love, sail the ship!
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
            FAQ
          </Heading>
          <MotionImage
            animate={{ rotate: 0 }}
            transition={{
              from: 360,
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            overflowX="hidden"
            mx="auto"
            position="absolute"
            w={{ base: "225px", md: "225px" }}
            top="293"
            right="-320"
            src="https://d1zzqqpsok2fq2.cloudfront.net/asterisk.png"
            zIndex={-1000}
          />
          <Image
            position="absolute"
            w={{ base: "512px", md: "512px" }}
            left="-620"
            src="https://d1zzqqpsok2fq2.cloudfront.net/blob3.png"
            zIndex={-1000}
          />
          <Text fontWeight={"bold"}>
            Q: I’m already in a relationship. Can I just be a matchmaker?
          </Text>
          <Text>
            Yes! You can toggle a setting in your profile that prevents you from
            being shipped with others.
          </Text>

          <Text fontWeight={"bold"}>Q: What's a ship? What's a sail?</Text>

          <Text>
            When a friend is matchmaking for another friend and they swipe right
            on a potential partner, we call it a "ship". If the ship is approved
            by enough friends, then it becomes a match, which we call a "sail".
          </Text>

          <Text fontWeight={"bold"}>
            Q: What needs to happen for a ship to be sailed?
          </Text>

          <Text>
            Once a ship is created between two people, it'll be shown to friends
            of both people. The friends can add reactions of approval or
            disapproval and also add comments. If there are enough positive
            reactions by friends of both people, the ship will be sailed!
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
      <Footer />
    </Box>
  );
};
