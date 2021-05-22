import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { AuthBackend } from "../auth/auth";
import Layout from "../layout";
import LocationBackend from "./LocationBackend";
import PageRouting from "./PageRouting";
import PluginBackend from "./plugin-system/PluginBackend";
import SchemaBackend from "./SchemaBackend";

export const AppContext = React.createContext();

function App() {
  return (
    <LocationBackend>
      <PluginBackend>
        <ChakraProvider>
          <AuthBackend>
            <SchemaBackend>
              <Layout>
                <PageRouting />
              </Layout>
            </SchemaBackend>
          </AuthBackend>
        </ChakraProvider>
      </PluginBackend>
    </LocationBackend>
  );
}

export default App;
