import logo from './logo.svg';
import './App.css';
import Hedar from './Component/Hedar/Hedar';
import Footer from './Component/Footer/Footer';
import Home from './Cunteinar/Home/Home';
import Detail from './Cunteinar/Detail/Detail';
import Contact from './Cunteinar/Contact/Contact';
import Checkout from './Cunteinar/Checkout/Checkout';
import Cart from './Cunteinar/Cart/Cart';
import Counter from './Cunteinar/counter/Counter';
import { Route, Switch } from 'react-router-dom';
import Layout from './Admin/Componets/Layout';
import Shop from './Admin/Conteinars/Shop';

function App() {
  return (
    <>
    {/* <Hedar />
    <Switch>
      <Route exact path={"/"}component={Home}/>
      <Route exact path={"/Detail"}component={Detail}/>
      <Route exact path={"/Contact"}component={Contact}/>
      <Route exact path={"/Checkout"}component={Checkout}/>
      <Route exact path={"/Cart"}component={Cart}/>
    
    </Switch>
    
     <Footer /> */}

   <Layout>
      <Switch>
      <Route exact path={"/"}component={Shop}/>
      </Switch>
   </Layout>
    </>
  );
}

export default App;
