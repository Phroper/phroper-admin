import { Avatar, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PluginContext } from "../app/plugin-system/PluginContext";
import { AuthConext } from "../auth/auth";
import { SchemaContext } from "./../app/SchemaBackend";

export default function Layout({ children }) {
  const auth = useContext(AuthConext);
  const plugins = useContext(PluginContext);
  const schemas = useContext(SchemaContext)();

  return (
    <Box bg="gray.100" minH="100%" minW="100%" w="fit-content">
      <Box
        position="fixed"
        left={0}
        px={3}
        w="250px"
        top={0}
        h="100%"
        bg="brand.600"
        color="white"
        overflow="auto"
        zIndex={100}
        shadow="md"
      >
        <Box fontSize={40} mb={6} w="100%" textAlign="center">
          <Link to="/">{plugins.components["Layout::title"]}</Link>
        </Box>

        {!auth.user && (
          <HStack mb={6}>
            <Avatar mr={4} />
            <VStack flex={1} alignItems="flex-start">
              <Button
                as={Link}
                to="/login"
                variant="link"
                colorScheme="white"
                onClick={auth.logout}
              >
                login
              </Button>
            </VStack>
          </HStack>
        )}
        {auth.user && (
          <>
            <HStack mb={6}>
              <Avatar mr={4} />
              <VStack flex={1} alignItems="flex-start">
                <Text fontSize={20}>{auth.user.username}</Text>
                <Button
                  variant="link"
                  colorScheme="white"
                  onClick={auth.logout}
                >
                  logout
                </Button>
              </VStack>
            </HStack>

            {schemas && (
              <>
                <Text fontSize={24} mb={2}>
                  Content types
                </Text>
                <VStack pl={4} mb={2} alignItems="flex-start">
                  {schemas
                    ?.filter((model) => model.visible)
                    .map((model) => (
                      <Link key={model.key} to={`/content-type/${model.key}`}>
                        {model.name}
                      </Link>
                    ))}
                </VStack>
              </>
            )}
            {plugins.menus && plugins.menus.length > 0 && (
              <>
                <Text fontSize={24} mb={2}>
                  Plugins
                </Text>
                <VStack pl={4} mb={2} alignItems="flex-start">
                  {plugins.menus.map((menu) => (
                    <Link key={menu.to} to={`${menu.to}`}>
                      {menu.text}
                    </Link>
                  ))}
                </VStack>
              </>
            )}
          </>
        )}
      </Box>
      <Box ml={250} px={4}>
        {children}
      </Box>
    </Box>
  );
}
