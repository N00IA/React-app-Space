import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Astros from './components/astros/Astros';
import APOD from './components/apod/APOD';
import About from './components/about/About';
import './App.css';

function App() {
    const links = [
        { id: 1, href: "/", text: "Home" },
        { id: 2, href: "/astros", text: "Astros" },
        { id: 3, href: "/apod", text: "APOD" },
        { id: 4, href: "/about", text: "About" },
    ];

    return (
        <>
            <Navbar links={links} />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/astros" element={<Astros />} />
                    <Route path="/apod" element={<APOD />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
