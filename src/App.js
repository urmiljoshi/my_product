import logo from './logo.svg';
import './App.css';
import Hedar from './Component/Hedar/Hedar';
import Footer from './Component/Footer/Footer';
import Home from './Cunteinar/Home/Home';
import Detail from './Cunteinar/Detail/Detail';
import Contact from './Cunteinar/Contact/Contact';
import Checkout from './Cunteinar/Checkout/Checkout';
import Cart from './Cunteinar/Cart/Cart';

function App() {
  return (
    <>
    <Hedar />
    {/* <Home /> */}
    {/* <Detail /> */}
    {/* <Contact /> */}
    {/* <Checkout /> */}
    <Cart />
    <Footer />
    </>
  );
}

export default App;
