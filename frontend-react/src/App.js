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
import LoginPage from './Pages/Login/Login';
import RegisterPage from './Pages/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/:productType' element={<ProductsPage/>}></Route>
            <Route path='/:product/details' element={< ViewProductsPage/>}></Route>
            <Route path='/search' element={<SearchedProductsPage />} />
            <Route path='/cart' element={<CartPage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/register' element={<RegisterPage/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
          </Routes> 
        <Footer className="Footer"/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;