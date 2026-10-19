import SectionTitle from '../common/SectionTitle.jsx';
import './VenueSection.css';

export default function VenueSection() {
  return (
    <section className="venue-section" id="venue">
      <div className="section-container">
        <SectionTitle
          badge="VENUE & LOCATION"
          title="CODISSIA Trade Fair Complex"
          subtitle="South India's premier exhibition and trade fair venue, centrally located in Coimbatore — Tamil Nadu's industrial and engineering capital."
        />

        <div className="venue-layout">
          <div className="venue-map-wrapper">
            <iframe
              title="CODISSIA Trade Fair Complex, Coimbatore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.177!2d76.985!3d11.024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f461b13%3A0x2c12b4b1d5c41f26!2sCODISSIA%20Trade%20Fair%20Complex!5e0!3m2!1sen!2sin!4v1"
              className="venue-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://maps.google.com/maps?q=CODISSIA+Trade+Fair+Complex+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="venue-map-link"
            >
              Open in Google Maps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div className="venue-details">
            <div className="venue-detail-card">
              <div className="venue-detail-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="venue-detail-title">Venue</h3>
                <p className="venue-detail-value">CODISSIA Trade Fair Complex</p>
                <p className="venue-detail-sub">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="venue-detail-card">
              <div className="venue-detail-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <h3 className="venue-detail-title">Dates</h3>
                <p className="venue-detail-value">5 &amp; 6 February 2027</p>
                <p className="venue-detail-sub">Friday &amp; Saturday</p>
              </div>
            </div>

            <div className="venue-detail-card">
              <div className="venue-detail-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h3 className="venue-detail-title">Hours</h3>
                <p className="venue-detail-value">10:00 AM – 08:00 PM IST</p>
                <p className="venue-detail-sub">Both Days</p>
              </div>
            </div>

            <div className="venue-detail-card">
              <div className="venue-detail-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div>
                <h3 className="venue-detail-title">Organizer</h3>
                <p className="venue-detail-value">E-Faws Tech Services Pvt Ltd</p>
                <p className="venue-detail-sub">Your Partner in AI Solutions</p>
              </div>
            </div>

            <a
              href="https://expoverse.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="venue-official-link"
            >
              Visit Official Event Website
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
