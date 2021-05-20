import logo from './logo.svg';
import './App.css';
import Home from './Screens/home'
import About from './Screens/about';
import Work from './Screens/work';
import Contact from './Screens/contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main_app_container">
        {/* 
          home - basics much
          about - basics + skills + experience
          work - office + personal => projects
          contact
        */}
        <Switch>
          <Route path={"/about"} name="About" component={About}/>
          <Route path={"/work"} name="Work" component={Work}/>
          <Route path={"/contact-me"} name="Contact" component={Contact}/>
          <Route path="/"> 
            <Home /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
