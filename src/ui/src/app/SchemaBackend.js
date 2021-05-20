import { Center, Spinner } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { AuthConext } from "./../auth/auth";
import useRequest from "./../utils/useRequest";
import useRequestRunner from "./../utils/useRequestRunner";

export const SchemaContext = React.createContext();

export default function SchemaBackend({ children }) {
  const schemaApi = useRequest(`/content-schema/models`);
  const schemaHandler = useRequestRunner(schemaApi.list, null);
  const auth = useContext(AuthConext);
  //eslint-disable-next-line
  useEffect(schemaHandler.run, [auth.user]);

  return (
    <>
      {schemaHandler.isLoading && (
        <Center w="100vw" h="100vh">
          <Spinner></Spinner>
        </Center>
      )}
      {!schemaHandler.isLoading && (
        <SchemaContext.Provider
          value={(key) =>
            schemaHandler.result &&
            schemaHandler.result.find((x) => x.key === key)
          }
        >
          {children}
        </SchemaContext.Provider>
      )}
    </>
  );
}
