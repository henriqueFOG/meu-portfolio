import { 
  Box, 
  Heading, 
  Text, 
  Link, 
  Flex, 
  HStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const MotionBox = motion(Box);

const ContactPage = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      maxW="800px"
      mx="auto"
      p={4}
      mt={8}
    >
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Minhas Informações de Contato
      </Heading>

      <MotionBox
        bg="gray.100"
        p={6}
        borderRadius="md"
        shadow="md"
        whileHover={{ scale: 1.05 }}
      >

        <Flex direction="column" align="start" gap={4}>
          <HStack>
            <FaLinkedin />
            <Text fontSize="lg" fontWeight="bold">LinkedIn:</Text>
            <Link
              href="https://www.linkedin.com/in/francisco-henrique-oliveira-gon%C3%A7alves-024aa5189/"
              color="blue.600"
              isExternal
              fontSize="lg"
            >
              /in/francisco-henrique-oliveira-gonçalves
            </Link>
          </HStack>

          <HStack>
            <FaEnvelope />
            <Text fontSize="lg" fontWeight="bold">Email:</Text>
            <Text 
              fontSize="lg" 
              wordBreak="break-word" 
              overflowWrap="anywhere"
            >
              henry.francisco31@hotmail.com
            </Text>
          </HStack>

            <HStack>
            <AiOutlineWhatsApp />
            <Text fontSize="lg" fontWeight="bold">WhatsApp:</Text>
            <Text fontSize="lg">24 99311-4824</Text>
          </HStack>

        </Flex>
      </MotionBox>
    </MotionBox>
  );
};

export default ContactPage;
