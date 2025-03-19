import { Box, Heading, Text, SimpleGrid, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do Projeto 1 com tecnologias utilizadas.",
    image: "/projeto1.png",
    link: "https://github.com/seuusuario/projeto1"
  },
  {
    title: "Projeto 2",
    description: "Descrição do Projeto 2 com tecnologias utilizadas.",
    image: "/projeto2.png",
    link: "https://github.com/seuusuario/projeto2"
  },
  {
    title: "Projeto 3",
    description: "Descrição do Projeto 3 com tecnologias utilizadas.",
    image: "/projeto3.png",
    link: "https://github.com/seuusuario/projeto3"
  }
];

const PortfolioPage = () => {
  return (
    <MotionBox initial="hidden" animate="visible" variants={containerVariants}>
      <Heading as="h2" size="xl" mb={6}>
        Portfólio
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            shadow="md"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.image && (
              <Image src={project.image} alt={project.title} boxSize="100%" objectFit="cover" />
            )}
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={4}>{project.description}</Text>
              <NextLink href={project.link} passHref legacyBehavior>
                <Button as="a" colorScheme="teal" size="sm">
                  Ver Projeto
                </Button>
              </NextLink>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default PortfolioPage;
