import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Moisturizers } from './components/moisturizers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Moisturizers" element={<Moisturizers />} ></Route>
      </Routes> 

    </div>
  );
}

export default App;
