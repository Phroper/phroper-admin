import React, { useCallback, useEffect, useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import useRequest from "../utils/useRequest";

export const AuthConext = React.createContext({});

export function AuthBackend({ children }) {
  const [authState, setAuthState] = useLocalStorage("auth-state", {
    user: null,
    jwt: null,
  });
  const request = useRequest("/../api/auth", authState.jwt);

  // Validating token data
  const [tokenChecked, setTokenChecked] = useState(false);
  useEffect(() => {
    if (!authState.jwt) return;
    request
      .get("me")
      .then((r) =>
        setAuthState((s) => ({ user: r ? r : null, jwt: r ? s.jwt : null }))
      )
      .catch((e) => setAuthState({ user: null, jwt: null }))
      .then(() => setTokenChecked(true));
    //eslint-disable-next-line
  }, [!!authState.jwt]);

  const logout = useCallback(
    function () {
      setAuthState({ user: null, jwt: null });
    },
    [setAuthState]
  );

  const login = async function (username, password) {
    logout();
    const user = await request.send("login", { username, password }, "POST");
    setAuthState({ user: user.user, jwt: user.jwt });
  };

  const register = async function (data) {
    logout();
    const user = await request.send(
      "register",
      {
        username: data.username,
        password: data.password,
        name: data.name,
        email: data.email,
      },
      "POST"
    );
    setAuthState({ user: user.user, jwt: user.jwt });
  };

  // Token renewal
  /*const tokenExpiration =
    authState.jwt && JSON.parse(atob(authState.jwt.split(".")[1])).exp;
  useEffect(() => {
    const interval = setInterval(async () => {
      if (!tokenExpiration) return;
      if (tokenExpiration < +new Date()) {
        logout();
      } else if (
        tokenExpiration <= +new Date() + 1000 * 120 &&
        tokenExpiration >= +new Date()
      ) {
        try {
          const response = await request.send("renew", null, "GET");
          setAuthState((state) => ({ ...state, jwt: response.jwt }));
        } catch {}
      }
    }, 1000 * 6);
    return () => clearInterval(interval);
  }, [logout, request, setAuthState, tokenExpiration]);*/

  return (
    <AuthConext.Provider
      value={{
        user: authState.user,
        jwt: authState.jwt,
        login,
        logout,
        register,
      }}
    >
      {tokenChecked && children}
    </AuthConext.Provider>
  );
}
