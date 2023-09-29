import './MainRouter.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import ProductDetails from '../../pages/ProductDetails/ProductDetails';

const MainRouter = () => (
  <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
  </main>
);

export default MainRouter;
