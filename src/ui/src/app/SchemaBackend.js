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
  useEffect(() => auth.jwt && schemaHandler.run(), [auth.jwt]);

  const displayLoading =
    schemaHandler.isLoading ||
    (!schemaHandler.error && auth.user && !schemaHandler.result);

  return (
    <>
      {displayLoading && (
        <Center w="100vw" h="100vh">
          <Spinner></Spinner>
        </Center>
      )}
      {!displayLoading && (
        <SchemaContext.Provider
          value={(key = null) =>
            !key
              ? schemaHandler.result
              : schemaHandler.result &&
                schemaHandler.result.find((x) => x.key === key)
          }
        >
          {children}
        </SchemaContext.Provider>
      )}
    </>
  );
}
