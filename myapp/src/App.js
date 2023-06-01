
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import{ Home }from './pages/home.js'
import {Contact} from './pages/contact'
import {Login} from './pages/login'
import {Signup} from './pages/signup'
function App() {
  return (
<div className='App'>
  <Route path='/' component={Home} ></Route>
  <Route path='/login' component={Login}></Route>
  <Route path='/signup' component={Signup} ></Route>
  <Route path='/contact' component={Contact}></Route>
</div>
  );
}

export default App;
