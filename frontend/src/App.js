import { Route, Routes } from 'react-router-dom';
import { Haircare } from './components/haircare';
import { Moisturizers } from './components/moisturizers';
import { ProductDescription } from './components/productdesc';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Moisturizers" element={<Moisturizers />} ></Route>
        <Route path="/productdesc/:productId" element={<ProductDescription />} ></Route>
        <Route path="/haircare" element={<Haircare />} ></Route>
      </Routes> 

    </div>
  );
}

export default App;
