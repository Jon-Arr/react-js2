import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartProvider from "./Context/CartProvider"
import ThemeProvider from "./Context/ThemeProvider"

function App() {


  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos a la tienda Pokemon" />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart/' element={<Cart />} />

          </Routes>
        </CartProvider>
      </ThemeProvider>

    </BrowserRouter>
  )
}

export default App;
