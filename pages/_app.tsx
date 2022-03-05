import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AppProvider from "../contexts/AppContext";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ChakraProvider>
    </>
  );
}

export default App;

const theme = extendTheme({
  // fonts: {
  //   heading: {
  //     fontFamily: "Georgia, serif",
  //     fontWeight: "900",
  //   },
  // },
});
