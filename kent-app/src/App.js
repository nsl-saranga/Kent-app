import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/categories/:productId' element={<HomePage/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
          </Routes> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;