import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";
import React from "react";
import { resolve } from "../remote-component.config.js";

const requires = createRequires(resolve);

export const RemoteComponent = createRemoteComponent({ requires });

const url = "/static/js/plugin.js";

const HelloWorld = ({ name }) => <RemoteComponent url={url} name={name} />;

export default function Main() {
  return <HelloWorld />;
}
