import { ReactNode } from 'react';
import { Box, Flex, Link as ChakraLink, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const MotionFlex = motion(Flex);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const links = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Contato", href: "/contact" }
  ];

  return (
    <MotionFlex
      as="nav"
      bgGradient="linear(to-r, teal.500, blue.500)"
      color="white"
      py={4}
      justify="center"
      align="center"
      shadow="md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {links.map((link) => (
        <NextLink key={link.href} href={link.href} passHref legacyBehavior>
          <ChakraLink mx={4} _hover={{ transform: "scale(1.1) translateY(-3px)" }}>
            {link.label}
          </ChakraLink>
        </NextLink>
      ))}
      <IconButton
        aria-label="Alternar tema"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        variant="ghost"
        color="currentColor"
        onClick={toggleColorMode}
        ml={2}
      />
    </MotionFlex>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box maxW="1200px" mx="auto" p={4}>
        {children}
      </Box>
      <Box as="footer" bg="gray.100" py={4} textAlign="center" mt={8}>
        © {new Date().getFullYear()} Francisco Henrique Oliveira Gonçalves. Todos os direitos reservados.
      </Box>
    </>
  );
};

export default Layout;
