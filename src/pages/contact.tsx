import { 
  Box, 
  Heading, 
  Text, 
  Link, 
  VStack 
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
        whileHover={{ scale: 1.01 }}
      >
        <VStack spacing={4} align="start">
          {/* LinkedIn */}
          <Text fontSize="lg" fontWeight="bold">
            <FaLinkedin style={{ display: 'inline-block', marginRight: '8px' }} />
            LinkedIn:
            <Link 
              href="https://www.linkedin.com/in/francisco-henrique-oliveira-gon%C3%A7alves-024aa5189/"
              ml={2}
              color="blue.600"
              isExternal
            >
              /in/francisco-henrique-oliveira-gonçalves
            </Link>
          </Text>

          {/* WhatsApp */}
          <Text fontSize="lg" fontWeight="bold">
            <AiOutlineWhatsApp style={{ display: 'inline-block', marginRight: '8px' }} />
            WhatsApp:
            <Text as="span" ml={2}>
              24 99311-4824
            </Text>
          </Text>

          {/* Email */}
          <Text fontSize="lg" fontWeight="bold">
            <FaEnvelope style={{ display: 'inline-block', marginRight: '8px' }} />
            Email:
            <Text as="span" ml={2}>
              henry.francisco31@hotmail.com
            </Text>
          </Text>
        </VStack>
      </MotionBox>
    </MotionBox>
  );
};

export default ContactPage;
