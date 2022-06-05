import './App.css';
import { ProductsPage } from './pages/ProductsPage';
import { NavBar } from './shared/NavBar';
import { Route, Routes } from "react-router-dom";
import {DetailsProducts} from './pages/DetailsProducts'

function App() {
  return (
    <div>
      <NavBar />
      <div>
      <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path='/detail-Product' element={<DetailsProducts />} />
        </Routes>
      </div>   
    </div>
  );
}
export default App;
