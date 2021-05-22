import { Box } from "@chakra-ui/layout";
import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { resolve } from "../remote-component.config.js";

const requires = createRequires(resolve);
const RemoteComponent = createRemoteComponent({ requires });

export const PluginContext = React.createContext();

function usePluginRegister(plugin) {
  const { registerPlugin, unregisterPlugin } = useContext(PluginContext);

  useEffect(() => {
    registerPlugin(plugin);
    return () => unregisterPlugin(plugin);
  }, [plugin, registerPlugin, unregisterPlugin]);
}

export default function PluginBackend({ children }) {
  const pluginUrls = ["/static/js/plugin.js"];

  // plugin storing state
  const [plugins, setPlugins] = useState([]);

  // Function to add plugin to state
  const registerPlugin = useCallback(
    (v) => setPlugins((p) => [...p, v]),
    [setPlugins]
  );

  // Function to remove plugin from state
  const unregisterPlugin = useCallback(
    (v) => setPlugins((p) => p.filter((p) => p !== v)),
    [setPlugins]
  );

  // Final plugin context value based on registered plugins
  const pluginContextValue = useMemo(() => {
    const routes = [];
    const menus = [];
    const components = {};

    plugins.forEach((plugin) => {
      if (plugin.routes) plugin.routes.forEach((r) => routes.push(r));
      if (plugin.menus) plugin.menus.forEach((m) => menus.push(m));
      if (plugin.components)
        Object.keys(plugin.components).forEach(
          (k) => (components[k] = plugin.components[k])
        );
    });

    return {
      routes,
      menus,
      components,
      registerPlugin,
      unregisterPlugin,
    };
  }, [plugins, registerPlugin, unregisterPlugin]);

  return (
    <PluginContext.Provider value={pluginContextValue}>
      <Box display="none">
        {pluginUrls.map((url) => (
          <RemoteComponent
            key={url}
            url={url}
            usePluginRegister={usePluginRegister}
          />
        ))}
      </Box>
      {children}
    </PluginContext.Provider>
  );
}
