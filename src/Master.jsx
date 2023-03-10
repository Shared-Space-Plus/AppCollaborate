import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./404";
import { withRouter } from "react-router";

class Master extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <h2>Master Item</h2>
        <div className="container">
          <Switch>
            
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Master);
