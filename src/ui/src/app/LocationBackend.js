import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const LocationContext = React.createContext();

export default function LocationBackend({ children }) {
  let basename = "";
  if (window) {
    let pn = window.location.pathname;
    if (!pn.endsWith("/")) pn = pn + "/";

    if (pn.includes("/admin/")) basename = pn.split("/admin/")[0];
  }
  basename += "/admin";

  console.log("LocationBackend", basename);

  return (
    <LocationContext.Provider value={basename}>
      <Router basename={basename}>{children}</Router>
    </LocationContext.Provider>
  );
}
