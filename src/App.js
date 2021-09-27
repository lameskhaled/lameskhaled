import "./index.css";

import MyContent from "./New_Project";
import OrderPage from "./Order";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Box from "./Box";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MyContent />
          </Route>
          <Route path="/Order">
            <OrderPage />
          </Route>
          <Route path="/Box">
            <Box />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
