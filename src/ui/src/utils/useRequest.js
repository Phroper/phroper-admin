import axios from "axios";
import { useContext, useMemo } from "react";
import { AuthConext } from "../auth/auth";
import { LocationContext } from "./../app/LocationBackend";

export default function useRequest(apiUrl, jwt = null) {
  const auth = useContext(AuthConext);
  const basePath = useContext(LocationContext);
  apiUrl = basePath + apiUrl;

  const handler = useMemo(() => {
    const send = async (url, body, method, query, headers) => {
      try {
        const finalQuery = {};
        if (query && typeof query == "object")
          Object.keys(query).forEach((k) => {
            if (typeof query[k] === "boolean") finalQuery[k] = query[k] ? 1 : 0;
            else if (query[k] === null) finalQuery[k + "_null"] = 1;
            else finalQuery[k] = query[k];
          });

        const response = await axios({
          method,
          url,
          data: body,
          params: finalQuery,
          headers:
            jwt || auth?.jwt
              ? { Authorization: "Bearer " + (jwt || auth?.jwt), ...headers }
              : { ...headers },
        });
        return response.data;
      } catch (err) {
        if (err.code === "401") {
          auth.logout();
        }
        if (
          err.response &&
          err.response.data &&
          typeof err.response.data === "object"
        ) {
          throw new Error(err.response.data.message);
        }
        throw new Error("Server is not available.");
      }
    };

    return {
      list: async (query) => send(apiUrl, null, "GET", query),
      get: async (id, query) => send(apiUrl + "/" + id, null, "GET", query),
      create: async (data) => send(apiUrl, data, "POST"),
      update: async (data, id = null) =>
        send(apiUrl + "/" + (id == null ? data.id : id), data, "PUT"),
      delete: async (id) =>
        send(
          apiUrl + "/" + (typeof id === "object" ? id.id : id),
          null,
          "DELETE"
        ),
      send: async (url, data, method = "GET", query = null, headers = {}) =>
        send(apiUrl + "/" + url, data, method, query, headers),
    };
  }, [apiUrl, auth, jwt]);

  return handler;
}
