import { useContext } from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import Login from "../pages/Login";
import { AuthConext } from "./../auth/auth";
import ContentType from "./../components/ContentType";
import { PluginContext } from "./plugin-system/PluginContext";

export default function PageRouting() {
  const auth = useContext(AuthConext);
  const plugins = useContext(PluginContext);

  return (
    <Switch>
      <Route path="/login" component={Login} />
      {!auth.user &&
        plugins.routes
          .filter((r) => r && r.without_login)
          .map((r, i) => <Route {...r} key={r.path} />)}
      {!auth.user && (
        <Route
          path="/"
          render={() => <Redirect path="*" to="/login" />}
        ></Route>
      )}
      {auth.user && (
        <Route path="/content-type/:model" component={ContentType} />
      )}
      {auth.user && plugins.routes.map((r, i) => <Route {...r} key={r.path} />)}
    </Switch>
  );
}
