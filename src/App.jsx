import Header from './components/Header/Header';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import EventIntro from './components/home/EventIntro';
import AboutSection from './components/home/AboutSection';
import HighlightsSection from './components/home/HighlightsSection';
import TracksSection from './components/home/TracksSection';
import CTASection from './components/common/CTASection';
import SpeakersSection from './components/sections/SpeakersSection';
import ExhibitorsSection from './components/sections/ExhibitorsSection';
import ScheduleSection from './components/sections/ScheduleSection';
import RegistrationSection from './components/sections/RegistrationSection';
import VenueSection from './components/sections/VenueSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <HeroCarousel />
        <EventIntro />
        <AboutSection />
        <HighlightsSection />
        <TracksSection />
        <CTASection />
        <SpeakersSection />
        <ExhibitorsSection />
        <ScheduleSection />
        <RegistrationSection />
        <VenueSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
