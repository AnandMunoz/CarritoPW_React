import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppReact() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<CartContent/>}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default AppReact;