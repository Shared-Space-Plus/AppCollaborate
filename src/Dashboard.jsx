import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Dashboard.css";
import Master from "./Master";
import IndexDashboard from "./IndexDashboard";
import NotFound from "./404";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          
          <li>
            <Link to={`${match.path}/master`}>Master</Link>
          </li>
          
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
        <main role="main">
          <div className="main">
            <Switch>
              <Route path={`${match.path}/master`}>
                <Master />
              </Route>
              
              <Route exact path={`${match.path}`}>
                <IndexDashboard />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Dashboard);
