import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Componends/Home';
import { EditUser } from './Componends/EditUser';
import { Context } from './Context/Context';
import { AddUser } from "./Componends/AddUser.js";

function App()
{
  return (
    <Context>
      {/* <div className="App"> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/adduser" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
      {/* </div> */}
    </Context>
  );
}

export default App;
