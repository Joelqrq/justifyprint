import './App.css';
import { Header } from './common/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar } from './common/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './landing/Landing';
import { Footer } from './common/Footer';
import MoneyPacket from './pages/MoneyPacket';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Justify Print</title>
          <meta
            name="title"
            content="Justify Print — Cheapest and most affordable printing solutions"
          />
          <meta
            name="description"
            content="Justify Print brings you the cheapest and most affordable printing solutions in Singapore."
          />
          <link rel="canonical" href="https://justifyprint.com" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://justifyprint.com/" />
          <meta
            property="og:title"
            content="Justify Print — Cheapest and most affordable printing solutions"
          />
          <meta
            property="og:description"
            content="Justify Print brings you the cheapest and most affordable printing solutions in Singapore."
          />
          {/* <meta property="og:image" content="" /> */}

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://justifyprint.com/" />
          <meta
            property="twitter:title"
            content="Justify Print — Cheapest and most affordable printing solutions"
          />
          <meta
            property="twitter:description"
            content="Justify Print brings you the cheapest and most affordable printing solutions in Singapore."
          />
          {/* <meta property="twitter:image" content="" /> */}
        </Helmet>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="pt-16 min-h-[500px] bg-white dark:bg-zinc-900">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="products" element={<Header></Header>} />
              <Route path="moneypacket" element={<MoneyPacket></MoneyPacket>} />
            </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
