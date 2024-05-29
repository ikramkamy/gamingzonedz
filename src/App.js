import './style.css'
import Home from './components/home';
import Products from './components/Products';
import {Routes, Route} from 'react-router-dom';
import ViewProductPage from '../src/components/Products/ViewProductPage';
import PrebuiltComputers from '../src/components/PredesignedComputers';
import BlogPage from '../src/components/Blog';
import PartnersPage from '../src/components/PartnersPage';
import Login from '../src/components/Login';
import ContactUs from '../src/components/Contact';
import FAQ from '../src/components/FAQ';
function App() {
  return (
    <div className="bg-black text-white ">
           
  <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/products' Component={Products}/>
    <Route exat path={`/configurations`} Component={PrebuiltComputers}/>
    <Route exat path={`/viewproduct/:id`} Component={ViewProductPage}/>
    <Route exat path={`/blog`} Component={BlogPage}/>
    <Route exat path={`/partners`} Component={PartnersPage}/>
    <Route exat path={`/login`} Component={Login}/>
    <Route exat path={`/faq`} Component={FAQ}/>

  </Routes>

     
     
    
    </div>
  );
}

export default App;
