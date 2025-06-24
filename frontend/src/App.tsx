import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Books from './pages/Books';
import Stats from './pages/Stats';
import Uploads from './pages/Uploads';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/uploads" element={<Uploads />} />
            </Routes>
            <NavBar />
        </Router>
    );
}

export default App;
