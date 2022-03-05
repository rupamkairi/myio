import {
  Box,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Avatar from "avataaars";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";

export default function LinksLayout() {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={1}>
          <Box
            boxShadow={"sm"}
            margin={2}
            padding={4}
            rounded={4}
            backgroundColor="gray.100"
            _hover={{ bg: "gray.200", boxShadow: "md" }}
            _focus={{ bg: "gray.300", boxShadow: "md" }}
          >
            <Text>Social</Text>
          </Box>
          <Box
            boxShadow={"sm"}
            margin={2}
            padding={4}
            rounded={4}
            backgroundColor="gray.100"
            _hover={{ bg: "gray.200", boxShadow: "md" }}
          >
            <Text>Developer Community</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Heading size={"lg"} marginBottom="4" fontWeight="thin">
            Developer Community
          </Heading>
          <Grid my={8} templateColumns="repeat(3, 1fr)">
            <GridItem colSpan={1}>
              <Avatar
                avatarStyle="Transparent"
                topType="ShortHairShortFlat"
                accessoriesType="Blank"
                hairColor="Black"
                facialHairType="BeardLight"
                facialHairColor="Black"
                clotheType="Hoodie"
                clotheColor="Gray02"
                eyeType="Wink"
                eyebrowType="UpDownNatural"
                mouthType="Smile"
                skinColor="Light"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Box marginTop={16} paddingX={2}>
                <FormLabel fontWeight={"normal"}>Name</FormLabel>
                <Input value={"Developer Community"} />
              </Box>
              <Box marginTop={4} paddingX={2}>
                <FormLabel fontWeight={"normal"}>Link</FormLabel>
                <Input value={"dev-com"} />
                <Box marginY={2}>
                  <Text>https://myio.vercel.app/rupamkairi/dev-com</Text>
                </Box>
              </Box>
            </GridItem>
          </Grid>
          <Box my={2} borderWidth={1} rounded={8} padding={8}>
            <HStack mb={4} alignItems="baseline">
              <FormLabel fontSize={"sm"} fontWeight={"normal"}>
                Label
              </FormLabel>
              <Box>
                <Input value={"GitHub"} />
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Box>
              <Box width={"full"}>
                <Input ml={4} value={"rupamkairi"} />
              </Box>
            </HStack>
          </Box>
          <Box my={2} borderWidth={1} rounded={8} padding={8}>
            <HStack mb={4} alignItems="baseline">
              <FormLabel fontSize={"sm"} fontWeight={"normal"}>
                Label
              </FormLabel>
              <Box>
                <Input value={"Medium"} />
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </Box>
              <Box width={"full"}>
                <Input ml={4} value={"rupamkairi"} />
              </Box>
            </HStack>
          </Box>
          <Box
            my={2}
            borderWidth={1}
            rounded={8}
            padding={8}
            textAlign="center"
          >
            <Text>Create</Text>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}
