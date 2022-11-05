import Header from './header/header.js';
import Main from './main/main.js'
import Counter from './counter/counter.js'
import Mess from './mess/mess.js';
import Order from './order/order.js';
import Footer from './footer/footer.js';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route exact="true" path="/" element={<Main />} />
          <Route path="/counter" element={<Counter />}  relative="path" />
          <Route path="/mess" element={<Mess />} />
          <Route path="/order" element={<Order />} />
      </Routes>      
      <Footer />
    </>
  );
}

export default App;
