import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "../App.css"
import Issues from './issues'

export default function RouterContent() {
  return (
      <>
    <Router>
        <div>
        <div>
            <Link className="link" to="/dummy">Code</Link>
            <Link className="link" to="/issues">Issues (495)</Link>
            <Link className="link" to="/dummy">Pull requests</Link>
            <Link className="link" to="/dummy">Discussion</Link>
            <Link className="link" to="/dummy">Actions</Link>
            <Link className="link" to="/dummy">Projects</Link>
            <Link className="link" to="/dummy">Wiki</Link>
            <Link className="link" to="/dummy">Security</Link>
            <Link className="link" to="/dummy">Insights</Link>
            <Link className="link" to="/dummy">Settings</Link>
        </div>
        <hr />

        <Switch>
          <Route path="/dummy" children={ <Dummy />} />
          <Route exact path="/issues" children={<Issues/>} />
         
        </Switch>
      </div>
    </Router>
    
    </>
  );
}

function Dummy() {
  return (
    <div>
      <h1 align="center">Under Construction...</h1>
    </div>
  );
}

