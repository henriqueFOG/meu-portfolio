import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const AboutPage = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <Heading as="h2" size="xl" mb={6}>
        Sobre Mim
      </Heading>
      <Text fontSize="lg" mb={4}>
        Com mais de 6 anos de experiência em tecnologia e formação em Sistemas de Informação,
        sou especialista em desenvolver interfaces web responsivas. Trabalho junto com equipes
        de UX/UI e back-end para criar soluções elegantes e eficientes.
      </Text>

      <Heading as="h3" size="lg" mt={8} mb={4}>
        Principais Habilidades
      </Heading>
      <SimpleGrid columns={[1, 2]} gap={4}>
        {[
          "React.js",
          "Next.js",
          "TypeScript",
          "Chakra UI",
          "Angular",
          "Jest",
          "SQL Server",
          "CI/CD"
        ].map((skill) => (
          <MotionBox 
            key={skill} 
            p={4} 
            shadow="md" 
            borderWidth="1px" 
            borderRadius="md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skill}
          </MotionBox>
        ))}
      </SimpleGrid>

      <Heading as="h3" size="lg" mt={8} mb={4}>
        Experiência
      </Heading>
      <MotionBox 
        mb={4} 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Heading as="h4" size="md">IBM</Heading>
        <Text>Desenvolvedor de Aplicações (dezembro de 2023 - Presente)</Text>
        <Text>
          Desenvolvimento de aplicações front-end utilizando React, Next.js, TypeScript, CSS e HTML.
          Implementação de testes unitários com Jest e integração com equipes de design e back-end.
        </Text>
      </MotionBox>
      <MotionBox 
        mb={4} 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Heading as="h4" size="md">UNIFASE</Heading>
        <Text>Administrador de Sistema (agosto de 2023 - dezembro de 2023)</Text>
      </MotionBox>
      <MotionBox 
        mb={4} 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Heading as="h4" size="md">Advice Compliance Solutions</Heading>
        <Text>Analista de Desenvolvimento de Sistemas (dezembro de 2022 - agosto de 2023)</Text>
      </MotionBox>

      <Heading as="h3" size="lg" mt={8} mb={4}>
        Certificações e Formação
      </Heading>
      <MotionBox 
        mb={2} 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Text>
          Certificações: Javascript I - Lógica de programação, IBM Delivery Central Platform
          Foundations, Enterprise Design Thinking Practitioner, IBM Generative AI Foundations,
          ISO 27001.
        </Text>
      </MotionBox>
      <MotionBox 
        mb={2} 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Text>
          Formação: Bacharelado em Sistema de Informação - Estácio; Técnico em Informática - Faeterj
          Petrópolis.
        </Text>
      </MotionBox>
    </MotionBox>
  );
};

export default AboutPage;
