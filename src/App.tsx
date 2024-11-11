import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Home from './pages/Home'; // Import Home component
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
