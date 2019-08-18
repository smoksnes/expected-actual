import Header from "./header";
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../themes";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

class Layout extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div style={layoutStyle}>
          <Header />
          {this.props.children}
        </div>

        {/* <script src="https://www.gstatic.com/firebasejs/6.4.0/firebase-app.js"></script> */}
        {/* <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
          apiKey: "AIzaSyAL-gtXNqEXHqW4asWYHMDwTGiuCDVLvA0",
          authDomain: "expected-actual.firebaseapp.com",
          databaseURL: "https://expected-actual.firebaseio.com",
          projectId: "expected-actual",
          storageBucket: "",
          messagingSenderId: "167205523492",
          appId: "1:167205523492:web:2ba0aa40e3b201e6"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
      </script> */}
      </ThemeProvider>
    );
  }
}

export default Layout;
