import './App.css';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
