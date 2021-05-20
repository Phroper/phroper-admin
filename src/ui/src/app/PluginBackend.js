import { Box } from "@chakra-ui/layout";
import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { resolve } from "../remote-component.config.js";

const requires = createRequires(resolve);
const RemoteComponent = createRemoteComponent({ requires });

export const PluginContext = React.createContext();

export default function PluginBackend({ children }) {
  const pluginUrls = ["/static/js/plugin.js"];

  const [state, _setState] = useState({
    routes: [],
    menus: [],
    components: [],
  });
  const stateUpdateRef = useRef(null);

  const setState = useCallback(
    (s) => {
      if (stateUpdateRef.current == null) {
        stateUpdateRef.current = [];
        setTimeout(() => {
          stateUpdateRef.current.forEach((u) => _setState(u));
          stateUpdateRef.current = null;
        }, 0);
      }
      stateUpdateRef.current.push(s);
    },
    [_setState, stateUpdateRef]
  );

  const setRoutes = useCallback(
    (v) =>
      setState((s) => ({
        ...s,
        routes: typeof v === "function" ? v(s.routes) : v,
      })),
    [setState]
  );
  const setMenus = useCallback(
    (v) =>
      setState((s) => ({
        ...s,
        menus: typeof v === "function" ? v(s.menus) : v,
      })),
    [setState]
  );
  const setComponents = useCallback(
    (v) =>
      setState((s) => ({
        ...s,
        components: typeof v === "function" ? v(s.components) : v,
      })),
    [setState]
  );

  const pluginHandler = useMemo(
    () => ({
      registerRoute: (p) => setRoutes((r) => [...r, p]),
      registerMenu: (...p) => setMenus((r) => [...r, p]),
      registerComponent: (...p) => setComponents((r) => [...r, p]),
    }),
    [setRoutes, setMenus, setComponents]
  );

  return (
    <PluginContext.Provider value={state}>
      <Box display="none">
        {pluginUrls.map((url) => (
          <RemoteComponent key={url} url={url} pluginHandler={pluginHandler} />
        ))}
      </Box>
      {children}
    </PluginContext.Provider>
  );
}
