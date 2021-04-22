import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';


const Hats=()=>(
  <div>
  <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
