import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  HStack,
  Link, 
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MotionBox = motion(Box);

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function HomePage() {
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      textAlign="center"
      mt={10}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.3 } },
      }}
      p={4}
    >
      <MotionBox custom={0} variants={textVariants} mb={6}>
        <Box mb={4}>
          <Image
            src="foto.jpg"
            alt="Minha Foto"
            borderRadius="full"
            boxSize="120px"
            mx="auto"
          />
        </Box>
        <Heading as="h1" size="2xl" mb={2}>
          Francisco Henrique Oliveira Gonçalves
        </Heading>
        <Text fontSize="xl" maxW="600px" mx="auto">
          Desenvolvedor de Aplicações | Next.js | React.js | Angular | TypeScript
          <br />
          Focado em Redux, Context API e testes unitários
        </Text>
      </MotionBox>

      <MotionBox custom={1} variants={textVariants} mb={8}>
        <HStack justify="center" spacing={4}>
          <NextLink href="/about" passHref legacyBehavior>
            <Button as="a" colorScheme="teal" size="lg">
              Saiba Mais Sobre Mim
            </Button>
          </NextLink>
          <NextLink href="/portfolio" passHref legacyBehavior>
            <Button as="a" colorScheme="blue" size="lg">
              Meus Projetos
            </Button>
          </NextLink>
        </HStack>
      </MotionBox>

      <MotionBox
        custom={2}
        variants={textVariants}
        bg={bgColor}
        p={4}
        borderRadius="md"
        display="inline-block"
      >
        <Text fontSize="lg" mb={2} fontWeight="bold">
          Siga-me nas redes:
        </Text>
        <HStack spacing={4} justify="center">
          <Link href="https://github.com/seu-github" isExternal>
            <Button leftIcon={<FaGithub />} variant="outline">
              GitHub
            </Button>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/francisco-henrique-oliveira-gon%C3%A7alves-024aa5189/" 
            isExternal
          >
            <Button leftIcon={<FaLinkedin />} variant="outline">
              LinkedIn
            </Button>
          </Link>
        </HStack>
      </MotionBox>
    </MotionBox>
  );
}
