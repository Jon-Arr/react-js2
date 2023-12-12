import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartProvider from "./Context/CartProvider"
import ThemeProvider from "./Context/ThemeProvider"
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBEiYYgFqLXgfjIlkjOaVaONnXxLZ8_Ea4",
    authDomain: "coderhouse-ecommerce-b00aa.firebaseapp.com",
    projectId: "coderhouse-ecommerce-b00aa",
    storageBucket: "coderhouse-ecommerce-b00aa.appspot.com",
    messagingSenderId: "229360568317",
    appId: "1:229360568317:web:3f09039cc6c6c5f08fbb94"
  };

  const app = initializeApp(firebaseConfig);

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
