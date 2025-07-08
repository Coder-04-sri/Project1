import {  Routes, Route  } from 'react-router-dom';



import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5'; // Burger
import Page6 from './pages/page6'; // Grill
import Page11 from './pages/page11'; // FFries
import Page8 from './pages/page8'; // Crispy
import Page9 from './pages/page9'; // Mojito
import Page7 from './pages/page7'; // Coke
import CartPage from './pages/CartPage';
import PaymentProcessingPage from './pages/PaymentProcessing';

function App() {
  return (
    
     
        <Routes>
          <Route index element={<Page1 />} />
          <Route path="main" element={<Page1 />} />
          <Route path="items" element={<Page2 />} />
          <Route path="contact" element={<Page3 />} />
          <Route path="login" element={<Page4 />} />
          <Route path="Burger" element={<Page5 />} />
          <Route path="Grill" element={<Page6 />} />
          <Route path="FFries" element={<Page11 />} />
          <Route path="Crispy" element={<Page8 />} />
          <Route path="Mojito" element={<Page9 />} />
          <Route path="Coke" element={<Page7 />} />
          <Route path="cart" element={<CartPage />} /> 
          <Route path="/payment" element={<PaymentProcessingPage />} />
        </Routes>
    
   
  );
}

export default App;
