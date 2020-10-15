import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forum from "./components/forum/forum";
import Topicdetails from "./components/forum/topicDetails";

function App() {
  return (
    // <div>Helo bhai log kaise ho</div>
    <Router>
      <Fragment>
        {/* <Navbar /> */}
        {/* <Route exact path="/" component={Landing} /> */}
        {/* <section className="container"> */}
        {/* <Alert /> */}
        <Switch>
          <Route exact path="/forums" component={Forum} />
          <Route exact path="/forums/:topics" component={Topicdetails} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/profiles" component={Profiles} /> */}
          {/* <Route exact path="/profile/:id" component={Profile} /> */}
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={ProfileForm}
            /> */}
        </Switch>
        {/* </section> */}
      </Fragment>
    </Router>
  );
}

export default App;
