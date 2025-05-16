import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import AppLayOut from './AppLayOut/AppLayOut';
import Products from './Products/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayOut />}>
            <Route index element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
