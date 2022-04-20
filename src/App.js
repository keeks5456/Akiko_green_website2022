import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
