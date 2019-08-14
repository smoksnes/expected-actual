import Header from "./header";
import React from "react";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

class Layout extends React.Component {
  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
/*
const Layout = props => (

);
*/

export default Layout;
