import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Content from "./common/Content";
import "antd/dist/antd.css";
import "./App.css";
import "react-reflex/styles.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/:contentRoute/edit">
            <Suspense fallback={<div>Loading...</div>}>
              <ContentEditor />
            </Suspense>
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
