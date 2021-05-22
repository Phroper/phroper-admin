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
  // plugin registering states
  const [pluginIds, setPluginIds] = useState(null);
  const [plugins, setPlugins] = useState([basePlugin]);

  // listing available plugin ids
  const request = useRequest("/plugin-handler");
  useEffect(() => {
    request
      .list()
      .then((r) => setPluginIds(r))
      .catch((e) => setPluginIds([]));
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
      pluginIds,
    };
  }, [plugins, registerPlugin, pluginIds, unregisterPlugin]);

  // Manage plugin loading states
  const [errors, setErrors] = useState(null);
  const [loadedPlugins, setLoadedPlugins] = useState({});
  const allPluginLoaded =
    pluginIds &&
    pluginIds.reduce((prev, key) => prev && loadedPlugins[key], true);

  // Store rendered plugins
  const pluginRender = useMemo(
    () =>
      pluginIds &&
      pluginIds.map((id) => (
        <RemoteComponent
          key={id}
          url={basePath + "/plugin-handler/" + id}
          render={({ err, Component }) => {
            if (err) {
              console.error("Plugin loading error", id, err);
              setTimeout(() => {
                setErrors((errors) => ({ ...(errors || {}), [id]: err }));
              }, 0);
              return null;
            }
            setTimeout(() => {
              setLoadedPlugins((lp) => (lp[id] ? lp : { ...lp, [id]: true }));
            }, 0);
            return <Component id={id} />;
          }}
        />
      )),
    [pluginIds, basePath]
  );

  return (
    <PluginContext.Provider value={pluginContextValue}>
      <Box display="none">{pluginRender}</Box>
      {errors && (
        <>
          <h1>Plugin loading errors</h1>
          {Object.keys(errors).map((k) => (
            <React.Fragment key={k}>
              <h2>[{k}]</h2>
              <pre>{errors[k].stack}</pre>
            </React.Fragment>
          ))}
        </>
      )}
      {allPluginLoaded && !errors && children}
    </PluginContext.Provider>
  );
}
