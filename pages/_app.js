import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import '../styles/globals.css';

// This is the main application
const Application = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default Application;
