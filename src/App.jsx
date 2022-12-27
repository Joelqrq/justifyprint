import './App.css';
import { Header } from './common/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar } from './common/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './landing/Landing';
import { Footer } from './common/Footer';
import MoneyPacket from './pages/MoneyPacket/MoneyPacket';
import { BoxCustomization } from './pages/BoxCustomization/BoxCustomization';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Justify Print: Quality and affordable printing solutions</title>
        </Helmet>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="mx-auto pt-6 lg:pt-24 min-h-[500px] bg-white dark:bg-zinc-900">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="products" element={<Header></Header>} />
              <Route path="moneypacket" element={<MoneyPacket></MoneyPacket>} />
              <Route
                path="box-customization"
                element={<BoxCustomization></BoxCustomization>}
              />
            </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
