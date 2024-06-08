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
import Affiliate from '../src/components/Affiliate';
import Tournement from '../src/components/Tournement';
import TournementPage from '../src/components/Tournement/TournementPage';
import ShopingCart from '../src/components/ShopingCart';
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
    <Route exact path ={`/affiliate`} Component={Affiliate}/>
    <Route exact path ={`/tournement`} Component={Tournement}/>
    <Route exact path ={`/tournementpage/:id`} Component={TournementPage}/>
    <Route exact path ={`/shopingcart`} Component={ShopingCart}/>
  </Routes>

     
     
    
    </div>
  );
}

export default App;
