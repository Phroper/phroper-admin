/**
 * Dependencies for Remote Components
 */
module.exports = {
  resolve: {
    react: require("react"),
    axios: require("axios"),
    formik: require("formik"),
    moment: require("moment"),
    yup: require("yup"),
    "phroper-admin": require("./app/plugin-system/PluginImports"),
    "framer-motion": require("framer-motion"),
    "react-datepicker": require("react-datepicker"),
    "react-dom": require("react-dom"),
    "react-router-dom": require("react-router-dom"),
    "@chakra-ui/react": require("@chakra-ui/react"),
    "@chakra-ui/icons": require("@chakra-ui/icons"),
    "@emotion/react": require("@emotion/react"),
    "@emotion/styled": require("@emotion/styled"),
  },
};
