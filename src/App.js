import './App.css';
import Home from './Screens/home'
import Experience from './Screens/experience';
import Work from './Screens/work';
import Skills from './Screens/skills';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main_app_container">
        <Switch>
          <Route path={"/experience"} name="Experience" component={Experience}/>
          <Route path={"/work"} name="Work" component={Work}/>
          <Route path={"/skills"} name="Skills" component={Skills}/>
          <Route path="/"> 
            <Home /> 
          </Route>
        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
