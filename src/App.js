import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhiteLogoText from "./Components/svg/WhiteLogoText";

import Start from "./Components/Start";

function App() {
  return (
    <div className="max-w-lg overflow-hidden">
      <Router>
        <Switch>
          <Route exact path="/">
            <WhiteLogoText />
          </Route>
          <Route path="/start">
            <Start />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
