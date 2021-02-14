import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import { BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand">React CRUD Operation</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/create'} className="nav-link">Create</Link>
            </li>
            <li className="nav-item">
              <Link to={'/index'} className="nav-link">Index</Link>
            </li>
          </ul>
        </div>
        </nav>
        <br/>
        <h3> Welcome To React CRUD Operations</h3>
        <Switch>
          <Route exact path='/create' component={Create} />
          <Route exact path='/edit/:id' component={Edit} />
          <Route exact path='/index' component={Index} />
        </Switch>
      </div>
      </Router>
    )

  }
}
export default App;
