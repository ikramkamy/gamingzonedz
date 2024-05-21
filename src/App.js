import './style.css'
import Home from './components/home';
import Products from './components/Products';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="bg-black text-white ">
           
  <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/products' Component={Products}/>
  </Routes>

     
     
    
    </div>
  );
}

export default App;
