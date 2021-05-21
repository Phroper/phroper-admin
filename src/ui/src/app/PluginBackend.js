import { Box } from "@chakra-ui/layout";
import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { resolve } from "../remote-component.config.js";

const requires = createRequires(resolve);
const RemoteComponent = createRemoteComponent({ requires });

export const PluginContext = React.createContext();

function usePluginRegister(plugin) {
  plugin = useMemo(
    () => ({
      routes: plugin.routes || [],
      menus: plugin.menus || [],
      components: plugin.components || [],
    }),
    [plugin]
  );

  const { update } = useContext(PluginContext);

  useEffect(() => {
    console.log(plugin);
    update((v) => ({ ...v, routes: [...v.routes, ...plugin.routes] }));
    update((v) => ({ ...v, menus: [...v.menus, ...plugin.menus] }));
    update((v) => ({
      ...v,
      components: { ...v.components, ...plugin.components },
    }));
    return () => {
      update((v) => ({
        ...v,
        routes: v.routes.filter((r) => !plugin.routes.includes(r)),
      }));
      update((v) => ({
        ...v,
        menus: v.menus.filter((r) => !plugin.menus.includes(r)),
      }));
      update((v) => {
        const components = { ...v.components };
        Object.keys(plugin.components).forEach((k) => delete components[k]);
        return { ...v, components };
      });
    };
  }, [plugin, update]);
}

export default function PluginBackend({ children }) {
  const pluginUrls = ["/static/js/plugin.js"];

  const [state, setState] = useState({
    routes: [],
    menus: [],
    components: {},
  });

  const pluginContextValue = useMemo(
    () => ({ ...state, update: setState }),
    [state, setState]
  );

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
