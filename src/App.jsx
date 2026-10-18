import Header from './components/Header/Header.jsx';
import HeroCarousel from './components/HeroCarousel/HeroCarousel.jsx';
import EventIntro from './components/home/EventIntro.jsx';
import HighlightsSection from './components/home/HighlightsSection.jsx';
import TracksSection from './components/home/TracksSection.jsx';
import AboutSection from './components/home/AboutSection.jsx';
import ExhibitionsDemosSection from './components/home/ExhibitionsDemosSection.jsx';
import WorkshopsCompetitionsSection from './components/home/WorkshopsCompetitionsSection.jsx';
import KnowledgeSessionsSection from './components/home/KnowledgeSessionsSection.jsx';
import SpeakersSection from './components/home/SpeakersSection.jsx';
import ExhibitorsSection from './components/home/ExhibitorsSection.jsx';
import WhyAttendSection from './components/home/WhyAttendSection.jsx';
import VenueScheduleSection from './components/home/VenueScheduleSection.jsx';
import RegistrationCTASection from './components/home/RegistrationCTASection.jsx';
import ContactSection from './components/home/ContactSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      {/* Primary Site Header & Navigation */}
      <Header />

      <main className="main-content">
        {/* Existing Three-Image Hero Carousel */}
        <HeroCarousel />

        {/* 1. Event Introduction */}
        <EventIntro />

        {/* 2. Event Highlights */}
        <HighlightsSection />

        {/* 3. AI and Robotics Technology Tracks */}
        <TracksSection />

        {/* 4. About the Event */}
        <AboutSection />

        {/* 5. Exhibitions and Live Demonstrations */}
        <ExhibitionsDemosSection />

        {/* 6. Workshops and Competitions */}
        <WorkshopsCompetitionsSection />

        {/* 7. Knowledge Sessions */}
        <KnowledgeSessionsSection />

        {/* 8. Speakers Section with Coming Soon */}
        <SpeakersSection />

        {/* 9. Exhibitors & Participants with Coming Soon */}
        <ExhibitorsSection />

        {/* 10. Why Attend Section */}
        <WhyAttendSection />

        {/* 11. Event Date, Time, and Venue Section */}
        <VenueScheduleSection />

        {/* 12. Registration Call-to-Action */}
        <RegistrationCTASection />

        {/* 13. Contact Section */}
        <ContactSection />
      </main>

      {/* 14. Professional Footer */}
      <Footer />
    </div>
  );
}

export default App;
