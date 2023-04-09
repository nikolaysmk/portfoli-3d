import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Expression,
  Feedback,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Expression />
        <Works />
        <Feedback />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};
