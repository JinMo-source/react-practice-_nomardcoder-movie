import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
