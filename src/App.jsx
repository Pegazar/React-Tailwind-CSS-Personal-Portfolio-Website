import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
      </BrowserRouter>
    </div>
  );
};

export default App;
