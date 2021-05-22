import {
  ChakraProvider as _ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { PluginContext } from "./plugin-system/PluginContext";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
  },
});

export default function ChakraProvider({ children }) {
  const plugins = useContext(PluginContext);
  const Component =
    plugins.components["Layout::ChakraProvider"] || _ChakraProvider;
  return <Component theme={theme}>{children}</Component>;
}
