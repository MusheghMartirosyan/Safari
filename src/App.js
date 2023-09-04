import './App.css';
import HomePage from './pages/Hompage';
import { Route, Routes } from 'react-router-dom';
import FAQpage from './pages/FAQpage';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='faq' element={<FAQpage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
