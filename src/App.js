import Header from './components/Header';
import { Route,Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetailPage from './pages/ProductDetailPage';
import AllProducts from './pages/AllProducts';


function App() {
  return (
    <div className="app">
       <Header/>
       <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/category/:categoryname?" element={<ProductListing />}/>
          <Route path="/products/:id" element={<ProductDetailPage/>}/>
          <Route path="/products/" element={<AllProducts/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
       </div>

        
    </div>
  );
}

export default App;
