import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { AuthBackend } from "../auth/auth";
import Layout from "../layout";
import "./App.css";
import LocationBackend from "./LocationBackend";
import PageRouting from "./PageRouting";
import SchemaBackend from "./SchemaBackend";

export const AppContext = React.createContext();

function App() {
  return (
    <LocationBackend>
      <ChakraProvider>
        <AuthBackend>
          <SchemaBackend>
            <Layout>
              <PageRouting />
            </Layout>
          </SchemaBackend>
        </AuthBackend>
      </ChakraProvider>
    </LocationBackend>
  );
}

export default App;
