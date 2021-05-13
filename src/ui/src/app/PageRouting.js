import { useContext } from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import Login from "../pages/Login";
import { AuthConext } from "./../auth/auth";
import ContentType from "./../components/ContentType";

export default function PageRouting() {
  const auth = useContext(AuthConext);

  return (
    <Switch>
      {!auth.user && <Redirect to="/login" />}
      <Route path="/login" component={Login} />
      <Route path="/content-type/:model" component={ContentType} />
    </Switch>
  );
}
