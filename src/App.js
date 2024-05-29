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
import PredesignedPC from '../src/components/PredesignedPC';
function App() {
  return (
    <div className="bg-black text-white ">
           
  <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/products' Component={Products}/>
    <Route exact path={`/configurations`} Component={PrebuiltComputers}/>
    <Route exact path={`/viewproduct/:id`} Component={ViewProductPage}/>
    <Route exact path={`/blog`} Component={BlogPage}/>
    <Route exact path={`/partners`} Component={PartnersPage}/>
    <Route exact path={`/login`} Component={Login}/>
    <Route exact path={`/faq`} Component={FAQ}/>
    <Route exact path={`/contact`} Component={ContactUs}/>
    <Route exact path ={`/predesignedpc`} Component={PredesignedPC}/>
  </Routes>

     
     
    
    </div>
  );
}

export default App;
