import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";
import React from "react";
import { resolve } from "../remote-component.config.js";

const requires = createRequires(resolve);

export const RemoteComponent = createRemoteComponent({ requires });

const url = "/static/js/plugin.js";

const HelloWorld = (props) => <RemoteComponent url={url} {...props} />;

export default function Main() {
  return null;
}
