import './App.css';
import { Header } from './common/Header';
import { Navbar } from './common/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { Footer } from './common/Footer';
import { ScrollToTop } from './common/ScrollToTop';
import { GoogleAnalyticsProvider } from './providers/GoogleAnalyticsProvider';
import { UpdateTitle } from './common/UpdateTitle';
import { PageTemplate } from './templates/PageTemplate';
import { getProductRoutes } from './configs/products';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

function App() {
  return (
    <GoogleAnalyticsProvider>
      <BrowserRouter>
        <ScrollToTop />
        <UpdateTitle />
        <div className="bg bg-cover">
          <div className="bg-gradient-to-br from-zinc-50/80 from-60% to-zinc-100/50 dark:from-zinc-900 dark:to-zinc-900">
            <Navbar></Navbar>
            <PageTemplate>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="products" element={<Header />} />
                {getProductRoutes()}
              </Routes>
            </PageTemplate>
            <Footer></Footer>
          </div>
        </div>
      </BrowserRouter>
    </GoogleAnalyticsProvider>
  );
}

export default App;
