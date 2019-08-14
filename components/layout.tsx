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
      </ThemeProvider>
    );
  }
}

export default Layout;
