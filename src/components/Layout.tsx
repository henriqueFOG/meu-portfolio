import { ReactNode } from 'react';
import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Contato", href: "/contact" }
  ];

  return (
    <Flex as="nav" bg="teal.500" color="white" py={4} justify="center" shadow="md">
      {links.map((link) => (
        <NextLink key={link.href} href={link.href} passHref legacyBehavior>
          <ChakraLink 
            mx={4} 
            _hover={{ transform: "scale(1.1) translateY(-3px)" }} // animação simples via estilo
          >
            {link.label}
          </ChakraLink>
        </NextLink>
      ))}
    </Flex>
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
