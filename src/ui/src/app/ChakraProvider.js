import { ChakraProvider as _ChakraProvider } from "@chakra-ui/react";
import React, { useContext } from "react";
import { PluginContext } from "./plugin-system/PluginContext";

export default function ChakraProvider({ children }) {
  const plugins = useContext(PluginContext);
  const Component =
    plugins.components["Layout::ChakraProvider"] || _ChakraProvider;
  return <Component>{children}</Component>;
}
