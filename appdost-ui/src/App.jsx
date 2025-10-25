import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import WorkCulture from './components/WorkCulture';
import Contact from './components/Contact';
import OurServices from './components/OurServices';
import DevelopmentProcess from './components/DevelopmentProcess';
import FeaturedProjects from './components/FeaturedProjects';
import Technologies from './components/Technologies';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <WorkCulture />
      <OurServices />
      <DevelopmentProcess />
      <FeaturedProjects />
      <Technologies />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
