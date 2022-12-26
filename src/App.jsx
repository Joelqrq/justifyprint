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
          <meta
            name="title"
            content="Justify Print: Quality and affordable printing solutions"
          />
          <meta
            name="description"
            content="Justify Print brings you the quality and affordable printing solutions in Singapore."
          />
          <link rel="canonical" href="https://justifyprint.com" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://justifyprint.com/" />
          <meta
            property="og:title"
            content="Justify Print: Quality and affordable printing solutions"
          />
          <meta
            property="og:description"
            content="Justify Print brings you the quality and affordable printing solutions in Singapore."
          />
          <meta property="og:image" content="https://justifyprint.com/favicon.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://justifyprint.com/" />
          <meta
            property="twitter:title"
            content="Justify Print: Quality and affordable printing solutions"
          />
          <meta
            property="twitter:description"
            content="Justify Print brings you the quality and affordable printing solutions in Singapore."
          />
          <meta property="twitter:image" content="https://justifyprint.com/favicon.png" />
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
