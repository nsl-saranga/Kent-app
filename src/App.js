import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ProductsPage from './Pages/ProductPage/ProductPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import SearchedProductsPage from './Pages/SearchedProductsPage/SearchedProductsPage'
import ViewProductsPage from './Pages/ViewProductPage/ViewProductPage'
import CartPage from './Pages/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/:productId' element={<ProductsPage/>}></Route>
            <Route path='/:category/:product' element={< ViewProductsPage/>}></Route>
            <Route path='/search' element={<SearchedProductsPage />} />
            <Route path='/cart' element={<CartPage/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
          </Routes> 
        <Footer className="Footer"/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;