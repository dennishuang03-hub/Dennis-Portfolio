import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import About from './sections/about';
import Project from './sections/project';
import Stack from './sections/stack';
import Contact from './sections/contact';
import Homes from './sections/home';
import Timeline from './sections/timeline';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Homes />
      <About />
      <Project />
      <Stack />
      <Timeline />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
