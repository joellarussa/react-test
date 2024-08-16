import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      align="start"
      spacing={4}
    >
      <Image src={imageSrc} alt={title} borderRadius="lg" />
      <VStack align="start" spacing={2} p={4}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack spacing={2}>
          <Text>View More</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
