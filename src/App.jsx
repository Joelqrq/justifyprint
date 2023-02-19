import './App.css';
import { Header } from './common/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar } from './common/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './landing/Landing';
import { Footer } from './common/Footer';
import MoneyPacket from './pages/MoneyPacket/MoneyPacket';
import { CustomBox } from './pages/CustomBox/CustomBox';
import { ScrollToTop } from './common/ScrollToTop';

const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <div className="App">
        <Helmet>
          <title>
            Justify Print: Quality and affordable printing solutions
          </title>
        </Helmet>
        <BrowserRouter>
          <ScrollToTop />
          <div className="bg bg-contain bg-repeat">
            <Navbar></Navbar>
            <div className="mx-auto pt-6 lg:pt-24 min-h-[500px] bg-zinc-50/80 dark:bg-zinc-900">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="products" element={<Header></Header>} />
                <Route
                  path="moneypacket"
                  element={<MoneyPacket></MoneyPacket>}
                />
                <Route path="custombox" element={<CustomBox></CustomBox>} />
              </Routes>
            </div>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
