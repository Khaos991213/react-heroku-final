import Welcome from './Pages/Welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home'
import react ,{useEffect}from 'react';
import NavBar from './Component/NavBar'
import Detail from './Pages/Detail'
import Search from './Pages/Search'
import Map from './Pages/Map'
import ReactGa from 'react-ga';
function App() {
  useEffect(()=>{
    ReactGa.initialize('UA-193220748-2')
    ReactGa.pageview(window.location.pathname)
  },[])
  return (
    <Router>
     <Switch>
      <Route exact path="/">
        <Welcome/>
      </Route>
      <Route exact path= "/Home">
        <NavBar/>
        <Home/>
      </Route>
      <Route exact path="/Detail/:team">
        <NavBar/>
        <Detail/>
      </Route>
      <Route exact path="/Search">
        <NavBar/>
        <Search/>
      </Route>
      <Route exact path="/Map">
      <NavBar/>
        <Map/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

