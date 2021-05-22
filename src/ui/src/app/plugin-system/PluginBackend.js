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
import { resolve } from "../../remote-component.config.js";
import { LocationContext } from "../LocationBackend.js";
import useRequest from "./../../utils/useRequest";
import { basePlugin } from "./basePlugin.js";
import { PluginContext } from "./PluginContext";

const requires = createRequires(resolve);
const RemoteComponent = createRemoteComponent({ requires });

export default function PluginBackend({ children }) {
  // plugin storing state
  const [pluginIds, setPluginIds] = useState([]);
  const [plugins, setPlugins] = useState([basePlugin]);

  console.log(pluginIds);
  // listing available plugin ids
  const request = useRequest("/plugin-handler");
  useEffect(() => {
    request
      .list()
      .then((r) => setPluginIds(r))
      .catch((e) => {});
    //eslint-disable-next-line
  }, []);
  const basePath = useContext(LocationContext);

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
        {pluginIds.map((id) => (
          <RemoteComponent
            key={id}
            url={basePath + "/plugin-handler/" + id}
            id={id}
          />
        ))}
      </Box>
      {children}
    </PluginContext.Provider>
  );
}
