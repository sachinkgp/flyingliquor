import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import MyOrders from './components/Myorders';
import Allorders from './components/Allorders';
import Placeorders from './components/placeorder';
import Myfforders from './components/Myfforderes';
import Aboutus from './components/abouus';

const Routing = ()=>{
  return (
    <Routes>
          <Route path="/allorders" element={<Allorders />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/placeorder" element={<Placeorders />} />
          <Route path="/myfforder" element={<Myfforders />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
  )
}


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routing />
    </BrowserRouter>
  );
}

export default App;
