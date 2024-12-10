import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import About2 from './pages/About2';
import Tlsr from './pages/Tlsr';
import Facial from './pages/Facial';
import Contact from './pages/Contact';
// import Gallery from './pages/Gallery';
// import America from './pages/America';
// import California from './pages/California';
// import Korea from './pages/Korea';
// import Mexico from './pages/Mexico';
// import Misc from './pages/Misc';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* To ensure that the page scrolls to the top when navigating between routes */}
      <div id="top" className="App app-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about2" element={<About2 />} />
            <Route path="/tlsr" element={<Tlsr />} />
            <Route path="/facial" element={<Facial />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/gallery" element={<Gallery />} />
            <Route path="/america" element={<America />} />
            <Route path="/california" element={<California />} />
            <Route path="/korea" element={<Korea />} />
            <Route path="/mexico" element={<Mexico />} />
            <Route path="/misc" element={<Misc />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
