import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import $ from "jquery";
import AddItems from "./components/AddItems.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  render () {
    return (
    <Router>
    <Navbar/>
    <Route path = "./components/AddItems" exact component={AddItems} />
    </Router>
    )};
}
ReactDOM.render(<App />, document.getElementById("app"));