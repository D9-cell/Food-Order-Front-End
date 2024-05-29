import './App.css';
import { darkTheme } from './Theme/DarkTheme';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Restaurantdetails from './components/Restaurant/Restaurantdetails';
import { Navbar } from './components/navbar/Navbar';
import {CssBaseline,ThemeProvider} from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
     <CssBaseline/>
     <Navbar/> 
     {/* <Home/> */}
     {/* <Restaurantdetails/> */}
     <Cart/>
    </ThemeProvider>
  );
}

export default App;
