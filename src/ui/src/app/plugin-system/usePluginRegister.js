import { useContext, useEffect } from "react";
import { PluginContext } from "./PluginContext";

export function usePluginRegister(plugin) {
  const { registerPlugin, unregisterPlugin } = useContext(PluginContext);

  useEffect(() => {
    registerPlugin(plugin);
    return () => unregisterPlugin(plugin);
  }, [plugin, registerPlugin, unregisterPlugin]);
}
