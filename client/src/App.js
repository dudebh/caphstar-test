import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import AddPage from './pages/AddPage'
import EditPage from './pages/EditPage'
import Navbar from "./components/Navbar";
import EditDocument from "./pages/EditDocument";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container mt-2">
        <Switch>
          <Route path="/add">
            <AddPage />
          </Route>
          <Route path="/edit/:id">
            <EditPage />
          </Route>
          <Route path="/edit_document">
            <EditDocument />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
