import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import theme from "@/styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence initial={false}>
          <motion.div>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
