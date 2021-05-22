import { useContext } from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import { AuthConext } from "./../auth/auth";
import ContentType from "./../components/ContentType";
import { PluginContext } from "./plugin-system/PluginContext";

export default function PageRouting() {
  const auth = useContext(AuthConext);
  const plugins = useContext(PluginContext);

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      {!auth.user && (
        <Route>
          <Redirect to="/login" />
        </Route>
      )}
      <Route path="/content-type/:model" component={ContentType} />
      <>
        {plugins.routes.map((r, i) => (
          <Route {...r} key={r.path} />
        ))}
      </>
    </Switch>
  );
}
