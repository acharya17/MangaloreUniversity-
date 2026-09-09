import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  BookOpen,
  Microscope,
  Compass,
  Award,
  Trees,
  ArrowRight,
  ArrowUpRight,
  Download,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  FileText,
  Building2,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animated Stats Counter State
  const [statsCounted, setStatsCounted] = useState(false);
  const statsRef = useRef(null);

  // Scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for stats band
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsCounted(true);
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Testimonials data
  const testimonials = [
    {
      quote:
        "The proximity to the Arabian Sea and the university's dedicated marine research stations provided field exposure that few institutions in the country can match.",
      name: "Pooja Hegde",
      role: "M.Sc. Marine Geology (Batch of 2023)",
      field: "Oceanographic Research"
    },
    {
      quote:
        "Mangalagangothri gave me both the critical perspective and the practical studio training necessary to transition directly into investigative broadcast media.",
      name: "Karthik Rao",
      role: "M.A. Journalism & Mass Communication (Batch of 2022)",
      field: "Media & Communications"
    },
    {
      quote:
        "The interdisciplinary encouragement and mentorship from senior faculty shaped my research methodology and opened doors to prestigious national doctoral fellowships.",
      name: "Ananya Shenoy",
      role: "Ph.D Scholar in Economics",
      field: "Development Economics"
    }
  ];

  // News data
  const newsItems = [
    {
      date: "SEP 15, 2026",
      category: "Admissions",
      title: "Ph.D Entrance Examination 2026 Notification & Guidelines",
      desc: "Detailed schedule, eligibility criteria, syllabus, and examination center guidelines for doctoral admissions."
    },
    {
      date: "SEP 08, 2026",
      category: "Examinations",
      title: "Postgraduate Common Entrance Test (PGCET) Calendar",
      desc: "Revised schedule for centralized counseling, seat allocation, and mandatory document verification."
    },
    {
      date: "AUG 28, 2026",
      category: "Results",
      title: "Revaluation & Result Scrutiny Applications — Even Semester",
      desc: "Last date for submission of revaluation forms extended for undergraduate and postgraduate courses."
    },
    {
      date: "AUG 14, 2026",
      category: "General",
      title: "Official Release of University Prospectus & Academic Calendar 2026–2027",
      desc: "Comprehensive handbook detailing CBCS curriculum, academic terms, institutional calendar, and student regulations."
    }
  ];

  return (
    <div className="mu-page">
      {/* =========================================================================
          PHASE 01: Top Utility Bar & Main Header Navigation
          ========================================================================= */}
      
      {/* Top Utility Bar */}
      <div className="mu-utility-bar">
        <div className="mu-container mu-utility-content">
          <div className="mu-utility-links">
            <a href="#admissions" className="mu-utility-link">Apply Online</a>
            <span className="mu-utility-divider">|</span>
            <a href="#portal" className="mu-utility-link">Student Portal (UUCMS)</a>
            <span className="mu-utility-divider">|</span>
            <a href="#alumni" className="mu-utility-link">Alumni Network</a>
            <span className="mu-utility-divider">|</span>
            <a href="#mail" className="mu-utility-link">Webmail Server</a>
          </div>
          <div className="mu-utility-socials">
            <a href="https://facebook.com" aria-label="Facebook" className="mu-social-icon"><Facebook size={14} /></a>
            <a href="https://twitter.com" aria-label="X Twitter" className="mu-social-icon"><Twitter size={14} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="mu-social-icon"><Linkedin size={14} /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="mu-social-icon"><Youtube size={14} /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="mu-social-icon"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`mu-header ${isScrolled ? 'mu-header-scrolled' : ''}`}>
        <div className="mu-container mu-header-content">
          {/* Brand Crest & Wordmark */}
          <a href="#" className="mu-brand">
            <div className="mu-brand-crest">
              <GraduationCap size={24} className="mu-crest-icon" />
            </div>
            <div className="mu-brand-text">
              <span className="mu-brand-title">Mangalore University</span>
              <span className="mu-brand-sub">Mangalagangothri, Karnataka</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="mu-nav-desktop" aria-label="Main Navigation">
            <a href="#about" className="mu-nav-link">About</a>
            <a href="#academics" className="mu-nav-link">Academics</a>
            <a href="#research" className="mu-nav-link">Research</a>
            <a href="#campus" className="mu-nav-link">Campus</a>
            <a href="#careers" className="mu-nav-link">Careers</a>
            <a href="#news" className="mu-nav-link">Notices</a>
            <a href="#admissions" className="mu-btn mu-btn-nav">Apply Now</a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mu-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mu-mobile-drawer">
            <div className="mu-container mu-mobile-drawer-content">
              <a href="#about" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>About the University</a>
              <a href="#academics" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>Faculties & Programmes</a>
              <a href="#research" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>Research & Innovation</a>
              <a href="#campus" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>Campus Sanctuary</a>
              <a href="#careers" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>Careers & Guidance</a>
              <a href="#news" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>Latest Announcements</a>
              <div className="mu-mobile-drawer-actions">
                <a href="#admissions" className="mu-btn mu-btn-gold" style={{ width: '100%' }} onClick={() => setMobileMenuOpen(false)}>
                  Apply for Admission <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          PHASE 02: Hero Section
          ========================================================================= */}
      <section className="mu-hero-section">
        <div className="mu-container mu-hero-grid">
          {/* Hero Left Column */}
          <div className="mu-hero-content">
            <div className="mu-fade-in-1">
              <span className="mu-eyebrow">ESTD. 1980 • MANGALAGANGOTHRI</span>
              <h1 className="mu-hero-headline">
                Four decades of learning where the river meets the sea.
              </h1>
            </div>
            
            <p className="mu-hero-subtext mu-fade-in-2">
              Spanning 353 acres at the confluence of the Nethravathi river and Arabian Sea, Mangalore University is home to 26 postgraduate departments and over 200 affiliated colleges across coastal Karnataka.
            </p>

            <div className="mu-hero-actions mu-fade-in-3">
              <a href="#admissions" className="mu-btn mu-btn-gold">
                Apply for admission <ArrowRight size={16} />
              </a>
              <a href="#academics" className="mu-btn mu-btn-outline">
                View programmes
              </a>
            </div>
          </div>

          {/* Hero Right Framed Media */}
          <div className="mu-hero-media-wrapper mu-fade-in-3">
            <div className="mu-hero-frame-border"></div>
            <div className="mu-hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                alt="Mangalore University Campus Architecture"
                className="mu-hero-img"
              />
              <div className="mu-hero-badge">
                <Award size={18} className="mu-badge-icon" />
                <div>
                  <strong>A++ NAAC Accredited</strong>
                  <span>353-Acre Green Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 03: About Section
          ========================================================================= */}
      <section id="about" className="mu-section mu-bg-paper">
        <div className="mu-container mu-about-grid">
          {/* Left Media */}
          <div className="mu-about-media">
            <div className="mu-about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
                alt="University Library and Heritage"
                className="mu-about-img"
              />
              <div className="mu-about-milestone">
                <span className="mu-milestone-year">1980</span>
                <span className="mu-milestone-text">Autonomous University Established</span>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="mu-about-text">
            <span className="mu-eyebrow">ABOUT THE UNIVERSITY</span>
            <h2 className="mu-heading">From a postgraduate centre to a premier coastal institution</h2>
            <p className="mu-about-p">
              Mangalore University grew out of a modest postgraduate centre of the University of Mysore at Konaje, which originally commenced with just three departments. In 1980, it was formally chartered as an independent, self-governing university.
            </p>
            <p className="mu-about-p">
              Today, the university encompasses 26 postgraduate teaching and research departments on its main campus, offering advanced interdisciplinary degrees, cutting-edge laboratory infrastructure, and comprehensive academic jurisdiction across Dakshina Kannada, Udupi, and Kodagu districts.
            </p>

            <blockquote className="mu-pullquote">
              "Fostering academic excellence, innovative research, and ethical leadership in a dynamic global environment."
            </blockquote>

            <a href="#history" className="mu-link-arrow">
              Read our full history <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 04: At a Glance (Stats Band)
          ========================================================================= */}
      <section ref={statsRef} className="mu-section-tight mu-bg-mist mu-stats-section">
        <div className="mu-container">
          <div className="mu-stats-grid">
            <div className="mu-stat-card">
              <div className="mu-stat-number">{statsCounted ? '45+' : '0+'}</div>
              <div className="mu-stat-label">Years of Academic Excellence</div>
            </div>
            <div className="mu-stat-card">
              <div className="mu-stat-number">{statsCounted ? '26' : '0'}</div>
              <div className="mu-stat-label">Postgraduate Departments</div>
            </div>
            <div className="mu-stat-card">
              <div className="mu-stat-number">{statsCounted ? '204' : '0'}</div>
              <div className="mu-stat-label">Affiliated Colleges</div>
            </div>
            <div className="mu-stat-card">
              <div className="mu-stat-number">{statsCounted ? '353' : '0'}</div>
              <div className="mu-stat-label">Acres of Verdant Campus</div>
            </div>
            <div className="mu-stat-card mu-stat-card-last">
              <div className="mu-stat-number">{statsCounted ? '5' : '0'}</div>
              <div className="mu-stat-label">Autonomous Colleges</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 05: Why Choose Mangalore University (Pillars)
          ========================================================================= */}
      <section className="mu-section mu-bg-paper">
        <div className="mu-container">
          <div className="mu-section-header-center">
            <span className="mu-eyebrow">INSTITUTIONAL DISTINCTION</span>
            <h2 className="mu-heading">Why Choose Mangalore University</h2>
            <p className="mu-body-lead" style={{ margin: '0 auto' }}>
              A confluence of traditional scholarly rigor, modern frontier research, and an inspiring coastal living environment.
            </p>
          </div>

          <div className="mu-pillars-grid">
            {/* Pillar 1 */}
            <div className="mu-pillar-card">
              <div className="mu-pillar-icon-badge">
                <GraduationCap size={24} />
              </div>
              <h3 className="mu-pillar-title">Academic Depth & Flexibility</h3>
              <p className="mu-pillar-desc">
                Comprehensive Choice Based Credit System (CBCS) curriculum across 26 disciplines, allowing scholars to design interdisciplinary academic pathways tailored to evolving industry demands.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="mu-pillar-card">
              <div className="mu-pillar-icon-badge">
                <Microscope size={24} />
              </div>
              <h3 className="mu-pillar-title">Coastal & Frontier Research</h3>
              <p className="mu-pillar-desc">
                Pioneering specialized national research laboratories including the Microtron radiation facility, Marine Geology marine stations, and Coastal Biosciences centers of excellence.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="mu-pillar-card">
              <div className="mu-pillar-icon-badge">
                <Trees size={24} />
              </div>
              <h3 className="mu-pillar-title">A Campus Built for Belonging</h3>
              <p className="mu-pillar-desc">
                A scenic 353-acre sanctuary on the hilltops of Konaje, featuring a state-of-the-art central library, sports complex, research hostels, and vibrant cultural student societies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 06: Academic Programmes (Faculties Grid)
          ========================================================================= */}
      <section id="academics" className="mu-section mu-bg-mist">
        <div className="mu-container">
          <div className="mu-section-header">
            <div>
              <span className="mu-eyebrow">ACADEMIC ARCHITECTURE</span>
              <h2 className="mu-heading">Faculties & Postgraduate Programmes</h2>
            </div>
            <p className="mu-body-lead">
              Structured into four core faculties offering Master's, Doctoral, and Postgraduate Diploma qualifications.
            </p>
          </div>

          <div className="mu-faculties-grid">
            {/* Faculty of Arts */}
            <div className="mu-faculty-card">
              <div className="mu-faculty-header">
                <span className="mu-faculty-count">8 Departments</span>
                <h3 className="mu-faculty-title">Faculty of Arts</h3>
              </div>
              <ul className="mu-dept-list">
                <li>English Language & Literature</li>
                <li>Kannada & Regional Studies</li>
                <li>History & Archaeology</li>
                <li>Economics & Development</li>
                <li>Mass Communication & Journalism</li>
                <li>Sociology & Social Work</li>
              </ul>
              <a href="#faculty-arts" className="mu-faculty-link">
                Explore Faculty of Arts <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Faculty of Science & Tech */}
            <div className="mu-faculty-card">
              <div className="mu-faculty-header">
                <span className="mu-faculty-count">17 Departments</span>
                <h3 className="mu-faculty-title">Science & Technology</h3>
              </div>
              <ul className="mu-dept-list">
                <li>Physics & Materials Science</li>
                <li>Chemistry & Applied Chemistry</li>
                <li>Marine Geology & Oceanography</li>
                <li>Biosciences & Biotechnology</li>
                <li>Computer Science & Applications</li>
                <li>Mathematics & Statistics</li>
              </ul>
              <a href="#faculty-science" className="mu-faculty-link">
                Explore Faculty of Science <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Faculty of Commerce */}
            <div className="mu-faculty-card">
              <div className="mu-faculty-header">
                <span className="mu-faculty-count">2 Departments</span>
                <h3 className="mu-faculty-title">Faculty of Commerce</h3>
              </div>
              <ul className="mu-dept-list">
                <li>Master of Commerce (M.Com)</li>
                <li>Master of Business Admin (MBA)</li>
                <li>Financial Management & Banking</li>
                <li>International Business Studies</li>
                <li>Corporate Governance Cell</li>
                <li>Doctoral Research in Commerce</li>
              </ul>
              <a href="#faculty-commerce" className="mu-faculty-link">
                Explore Faculty of Commerce <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Faculty of Education */}
            <div className="mu-faculty-card">
              <div className="mu-faculty-header">
                <span className="mu-faculty-count">2 Departments</span>
                <h3 className="mu-faculty-title">Faculty of Education</h3>
              </div>
              <ul className="mu-dept-list">
                <li>Master of Education (M.Ed)</li>
                <li>Physical Education (M.P.Ed)</li>
                <li>Sports Science & Biomechanics</li>
                <li>Educational Technology & Policy</li>
                <li>Teacher Training Research</li>
                <li>Athletic Performance Lab</li>
              </ul>
              <a href="#faculty-education" className="mu-faculty-link">
                Explore Faculty of Education <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 07: Campus Life (Full-Bleed Visual Break)
          ========================================================================= */}
      <section id="campus" className="mu-campus-break">
        <div className="mu-campus-overlay"></div>
        <div className="mu-container mu-campus-content">
          <div className="mu-campus-text-card">
            <span className="mu-eyebrow mu-eyebrow-gold">MANGALAGANGOTHRI • COASTAL SANCTUARY</span>
            <h2 className="mu-campus-heading">
              Where the Western Ghats meet the Arabian Sea
            </h2>
            <p className="mu-campus-desc">
              Perched atop a scenic hillock overlooking the Nethravathi river basin, our 353-acre verdant campus provides an inspiring sanctuary for scholarly inquiry, artistic expression, and athletic achievement.
            </p>
            <a href="#campus-tour" className="mu-btn mu-btn-outline-white">
              Discover Campus Facilities <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 08: Careers & Placement Guidance Bureau
          ========================================================================= */}
      <section id="careers" className="mu-section mu-bg-paper">
        <div className="mu-container mu-careers-grid">
          {/* Left Narrative */}
          <div className="mu-careers-intro">
            <span className="mu-eyebrow">CAREER & STUDENT SUPPORT</span>
            <h2 className="mu-heading">University Employment Information & Guidance Bureau</h2>
            <p className="mu-careers-p">
              The Bureau functions as a vital bridge between academic attainment and career fulfillment, organizing on-campus recruitments, soft skills training, civil service guidance, and overseas scholarship counseling.
            </p>
            <a href="#placement" className="mu-link-arrow">
              Connect with Placement Cell <ArrowRight size={15} />
            </a>
          </div>

          {/* Right Services List */}
          <div className="mu-careers-services">
            <div className="mu-service-item">
              <div className="mu-service-dot"></div>
              <div>
                <h4 className="mu-service-title">Campus Placement & Corporate Recruitment</h4>
                <p className="mu-service-desc">Facilitating top-tier recruitment drives in collaboration with multinational corporations and research organizations.</p>
              </div>
            </div>

            <div className="mu-service-item">
              <div className="mu-service-dot"></div>
              <div>
                <h4 className="mu-service-title">UPSC, KPSC, NET & SLET Coaching</h4>
                <p className="mu-service-desc">Comprehensive specialized mentorship and coaching for national and state civil services and lectureship eligibility exams.</p>
              </div>
            </div>

            <div className="mu-service-item">
              <div className="mu-service-dot"></div>
              <div>
                <h4 className="mu-service-title">Higher Education & Overseas Fellowships</h4>
                <p className="mu-service-desc">Dedicated advisory and application support for prestigious international research grants and doctoral fellowships.</p>
              </div>
            </div>

            <div className="mu-service-item">
              <div className="mu-service-dot"></div>
              <div>
                <h4 className="mu-service-title">Skill Enhancement & Industry Internship Linkages</h4>
                <p className="mu-service-desc">Curriculum-aligned corporate internships, technical certification programs, and professional communication workshops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 09: Latest News & Announcements
          ========================================================================= */}
      <section id="news" className="mu-section mu-bg-mist">
        <div className="mu-container">
          <div className="mu-news-header">
            <div>
              <span className="mu-eyebrow">NOTICES & CIRCULARS</span>
              <h2 className="mu-heading">Latest University Announcements</h2>
            </div>
            <a href="#all-news" className="mu-link-arrow">
              View all notifications <ArrowRight size={15} />
            </a>
          </div>

          <div className="mu-news-list">
            {newsItems.map((item, index) => (
              <a key={index} href={`#notice-${index}`} className="mu-news-row">
                <div className="mu-news-date-col">
                  <span className="mu-news-date">{item.date}</span>
                  <span className="mu-news-category">{item.category}</span>
                </div>
                <div className="mu-news-content-col">
                  <h3 className="mu-news-title">{item.title}</h3>
                  <p className="mu-news-desc">{item.desc}</p>
                </div>
                <div className="mu-news-action-col">
                  <ArrowUpRight size={20} className="mu-news-arrow" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 10: Student & Alumni Testimonials Carousel
          ========================================================================= */}
      <section className="mu-section mu-bg-navy">
        <div className="mu-container">
          <div className="mu-testimonial-wrapper">
            <div className="mu-quote-glyph">“</div>
            
            <div className="mu-testimonial-card">
              <p className="mu-testimonial-text">
                {testimonials[activeTestimonial].quote}
              </p>
              <div className="mu-testimonial-author">
                <span className="mu-author-name">{testimonials[activeTestimonial].name}</span>
                <span className="mu-author-role">{testimonials[activeTestimonial].role}</span>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mu-carousel-controls">
              <button
                className="mu-carousel-btn"
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                }
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="mu-carousel-dots">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`mu-dot ${activeTestimonial === idx ? 'mu-dot-active' : ''}`}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                className="mu-carousel-btn"
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                }
                aria-label="Next Testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 11: Admissions Call to Action Banner
          ========================================================================= */}
      <section id="admissions" className="mu-cta-banner">
        <div className="mu-container mu-cta-content">
          <span className="mu-eyebrow mu-eyebrow-gold">ADMISSIONS 2026–2027</span>
          <h2 className="mu-cta-heading">Begin your journey at Mangalagangothri</h2>
          <p className="mu-cta-desc">
            Applications for postgraduate, diploma, and doctoral programmes are now open through the Karnataka Unified University & College Management System (UUCMS).
          </p>
          <div className="mu-cta-actions">
            <a href="#uucms-apply" className="mu-btn mu-btn-gold">
              Apply Now <ArrowRight size={16} />
            </a>
            <a href="#download-prospectus" className="mu-btn mu-btn-outline-white">
              <Download size={16} /> Download Prospectus (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 12: Institutional Footer & Statutory Disclosures
          ========================================================================= */}
      <footer className="mu-footer">
        <div className="mu-container">
          <div className="mu-footer-grid">
            {/* Column 1: Identity & Address */}
            <div className="mu-footer-col">
              <div className="mu-brand mu-footer-brand">
                <div className="mu-brand-crest">
                  <GraduationCap size={24} className="mu-crest-icon" />
                </div>
                <div className="mu-brand-text">
                  <span className="mu-brand-title" style={{ color: '#FFFFFF' }}>Mangalore University</span>
                  <span className="mu-brand-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Mangalagangothri - 574 199</span>
                </div>
              </div>
              <p className="mu-footer-address">
                Dakshina Kannada District, Karnataka State, India.
              </p>
              <div className="mu-footer-contact">
                <p><Phone size={14} /> +91 824 2287276 / 2287347</p>
                <p><Mail size={14} /> contact@mangaloreuniversity.ac.in</p>
              </div>
            </div>

            {/* Column 2: Academics */}
            <div className="mu-footer-col">
              <h4 className="mu-footer-col-title">Academics</h4>
              <ul className="mu-footer-links">
                <li><a href="#faculty-arts">Faculty of Arts</a></li>
                <li><a href="#faculty-science">Faculty of Science & Tech</a></li>
                <li><a href="#faculty-commerce">Faculty of Commerce</a></li>
                <li><a href="#faculty-education">Faculty of Education</a></li>
                <li><a href="#research-labs">Research Centres & Labs</a></li>
                <li><a href="#calendar">Academic Calendar 2026</a></li>
              </ul>
            </div>

            {/* Column 3: Examinations & Governance */}
            <div className="mu-footer-col">
              <h4 className="mu-footer-col-title">Examinations & Governance</h4>
              <ul className="mu-footer-links">
                <li><a href="#results">Examination Results Portal</a></li>
                <li><a href="#reval">Revaluation Applications</a></li>
                <li><a href="#statutes">University Statutes & Acts</a></li>
                <li><a href="#rti">Right to Information (RTI)</a></li>
                <li><a href="#iqac">Internal Quality Assurance Cell (IQAC)</a></li>
                <li><a href="#naac">NAAC Self Study Report</a></li>
              </ul>
            </div>

            {/* Column 4: Quick Links & Welfare */}
            <div className="mu-footer-col">
              <h4 className="mu-footer-col-title">Student Welfare</h4>
              <ul className="mu-footer-links">
                <li><a href="#anti-ragging">Anti-Ragging Squad & Cell</a></li>
                <li><a href="#grievance">Women's Grievance Redressal</a></li>
                <li><a href="#scst">SC / ST Special Cell</a></li>
                <li><a href="#library">Central Library Catalog</a></li>
                <li><a href="#nirf">NIRF Disclosures</a></li>
                <li><a href="#uucms">Karnataka UUCMS Portal</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mu-footer-bottom">
            <p>© 2026 Mangalore University, Mangalagangothri. All Rights Reserved.</p>
            <div className="mu-footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span className="mu-utility-divider">|</span>
              <a href="#terms">Terms of Use</a>
              <span className="mu-utility-divider">|</span>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          STYLES (Self-Contained Inline Layout & Component Rules)
          ========================================================================= */}
      <style>{`
        /* Header & Utility Bar */
        .mu-utility-bar {
          background-color: var(--teal-deep);
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .mu-utility-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mu-utility-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mu-utility-link {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.2s;
        }
        .mu-utility-link:hover {
          color: var(--gold);
        }
        .mu-utility-divider {
          color: rgba(255, 255, 255, 0.2);
        }
        .mu-utility-socials {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .mu-social-icon {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .mu-social-icon:hover {
          color: var(--gold);
        }

        /* Main Header */
        .mu-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: transparent;
          transition: all 0.3s ease;
          padding: 16px 0;
        }
        .mu-header-scrolled {
          background-color: rgba(11, 42, 74, 0.96);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          padding: 12px 0;
        }
        .mu-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mu-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .mu-brand-crest {
          width: 42px;
          height: 42px;
          background-color: var(--teal);
          border: 1px solid var(--gold);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
        }
        .mu-brand-text {
          display: flex;
          flex-direction: column;
        }
        .mu-brand-title {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: 600;
          color: var(--teal);
          line-height: 1.1;
          transition: color 0.3s;
        }
        .mu-header-scrolled .mu-brand-title {
          color: #FFFFFF;
        }
        .mu-brand-sub {
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--blue);
          transition: color 0.3s;
        }
        .mu-header-scrolled .mu-brand-sub {
          color: rgba(255, 255, 255, 0.7);
        }

        /* Nav Links */
        .mu-nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .mu-nav-link {
          font-size: 14.5px;
          font-weight: 500;
          color: var(--teal);
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .mu-header-scrolled .mu-nav-link {
          color: #FFFFFF;
        }
        .mu-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--gold);
          transition: width 0.25s ease;
        }
        .mu-nav-link:hover::after {
          width: 100%;
        }
        .mu-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--teal);
          cursor: pointer;
        }
        .mu-header-scrolled .mu-mobile-toggle {
          color: #FFFFFF;
        }

        /* Mobile Drawer */
        .mu-mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--teal-deep);
          padding: 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .mu-mobile-drawer-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mu-mobile-link {
          color: #FFFFFF;
          text-decoration: none;
          font-size: 16px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .mu-mobile-drawer-actions {
          margin-top: 8px;
        }

        /* Hero Section */
        .mu-hero-section {
          padding: 48px 0 88px 0;
          background-color: var(--paper);
        }
        .mu-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .mu-hero-headline {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 500;
          color: var(--teal);
          line-height: 1.14;
          margin-bottom: 20px;
        }
        .mu-hero-subtext {
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink-soft);
          margin-bottom: 32px;
          max-width: 520px;
        }
        .mu-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .mu-hero-media-wrapper {
          position: relative;
        }
        .mu-hero-frame-border {
          position: absolute;
          top: -12px;
          right: -12px;
          bottom: 12px;
          left: 12px;
          border: 1px solid var(--gold);
          border-radius: var(--radius);
          z-index: 1;
        }
        .mu-hero-image-card {
          position: relative;
          z-index: 2;
          border-radius: var(--radius);
          overflow: hidden;
          background-color: #E2E8F0;
        }
        .mu-hero-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
        }
        .mu-hero-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background-color: rgba(11, 42, 74, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 163, 23, 0.4);
          color: #FFFFFF;
          padding: 12px 18px;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mu-badge-icon {
          color: var(--gold);
        }
        .mu-hero-badge strong {
          display: block;
          font-size: 13.5px;
        }
        .mu-hero-badge span {
          display: block;
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.75);
        }

        /* About Section */
        .mu-about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: center;
        }
        .mu-about-image-wrapper {
          position: relative;
        }
        .mu-about-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: var(--radius);
          border: 1px solid var(--line);
        }
        .mu-about-milestone {
          position: absolute;
          bottom: -16px;
          right: -16px;
          background-color: var(--teal);
          color: #FFFFFF;
          padding: 16px 20px;
          border-radius: var(--radius);
          border-left: 3px solid var(--gold);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }
        .mu-milestone-year {
          display: block;
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 600;
          color: var(--gold);
        }
        .mu-milestone-text {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.85);
        }
        .mu-about-p {
          font-size: 16px;
          color: var(--ink-soft);
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .mu-pullquote {
          margin: 24px 0;
          padding: 16px 20px;
          background-color: var(--mist);
          border-left: 3px solid var(--gold);
          font-family: var(--font-serif);
          font-size: 18px;
          font-style: italic;
          color: var(--teal);
          line-height: 1.45;
        }
        .mu-link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--blue);
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .mu-link-arrow:hover {
          gap: 10px;
        }

        /* Stats Section */
        .mu-stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        .mu-stat-card {
          padding: 16px 24px;
          border-right: 1px solid var(--line);
          text-align: center;
        }
        .mu-stat-card-last {
          border-right: none;
        }
        .mu-stat-number {
          font-family: var(--font-serif);
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 500;
          color: var(--teal);
          margin-bottom: 6px;
          line-height: 1;
        }
        .mu-stat-label {
          font-size: 13.5px;
          color: var(--ink-soft);
          font-weight: 500;
        }

        /* Pillars Section */
        .mu-section-header-center {
          text-align: center;
          margin-bottom: 56px;
        }
        .mu-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 44px;
        }
        .mu-pillar-card {
          background-color: #FFFFFF;
          padding: 36px 30px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
        }
        .mu-pillar-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--mist);
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .mu-pillar-title {
          font-size: 20px;
          margin-bottom: 12px;
          color: var(--teal);
        }
        .mu-pillar-desc {
          font-size: 15px;
          color: var(--ink-soft);
          line-height: 1.6;
        }

        /* Faculties Section */
        .mu-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
          gap: 24px;
        }
        .mu-faculties-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .mu-faculty-card {
          background-color: #FFFFFF;
          padding: 32px 26px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .mu-faculty-card:hover {
          border-color: var(--blue);
          transform: translateY(-2px);
        }
        .mu-faculty-count {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--blue);
          display: block;
          margin-bottom: 6px;
        }
        .mu-faculty-title {
          font-size: 20px;
          margin-bottom: 18px;
        }
        .mu-dept-list {
          list-style: none;
          margin-bottom: 24px;
        }
        .mu-dept-list li {
          font-size: 14px;
          color: var(--ink-soft);
          padding: 6px 0;
          border-bottom: 1px solid var(--line-soft);
        }
        .mu-faculty-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--teal);
          text-decoration: none;
          margin-top: auto;
        }
        .mu-faculty-link:hover {
          color: var(--blue);
        }

        /* Campus Full-Bleed Section */
        .mu-campus-break {
          position: relative;
          min-height: 540px;
          background: url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80') center/cover no-repeat;
          display: flex;
          align-items: flex-end;
          padding: 80px 0;
        }
        .mu-campus-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(7, 29, 51, 0.92) 0%, rgba(7, 29, 51, 0.65) 50%, rgba(7, 29, 51, 0.2) 100%);
        }
        .mu-campus-content {
          position: relative;
          z-index: 2;
        }
        .mu-campus-text-card {
          max-width: 620px;
        }
        .mu-campus-heading {
          color: #FFFFFF;
          font-size: clamp(30px, 3.8vw, 44px);
          margin-bottom: 16px;
        }
        .mu-campus-desc {
          color: rgba(255, 255, 255, 0.85);
          font-size: 16.5px;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        /* Careers Section */
        .mu-careers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .mu-careers-p {
          font-size: 16px;
          color: var(--ink-soft);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .mu-careers-services {
          display: flex;
          flex-direction: column;
        }
        .mu-service-item {
          display: flex;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }
        .mu-service-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--gold);
          margin-top: 8px;
          flex-shrink: 0;
        }
        .mu-service-title {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 600;
          color: var(--teal);
          margin-bottom: 4px;
        }
        .mu-service-desc {
          font-size: 14px;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        /* News Section */
        .mu-news-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
        }
        .mu-news-list {
          border-top: 1px solid var(--line);
        }
        .mu-news-row {
          display: grid;
          grid-template-columns: 160px 1fr 40px;
          align-items: center;
          padding: 22px 12px;
          border-bottom: 1px solid var(--line);
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        .mu-news-row:hover {
          background-color: rgba(255, 255, 255, 0.6);
        }
        .mu-news-row:hover .mu-news-arrow {
          transform: translate(3px, -3px);
          color: var(--blue);
        }
        .mu-news-date {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--teal);
        }
        .mu-news-category {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--blue);
          margin-top: 4px;
        }
        .mu-news-title {
          font-family: var(--font-serif);
          font-size: 18px;
          color: var(--teal);
          margin-bottom: 4px;
        }
        .mu-news-desc {
          font-size: 14px;
          color: var(--ink-soft);
        }
        .mu-news-arrow {
          color: var(--ink-soft);
          transition: all 0.2s ease;
        }

        /* Testimonials Section */
        .mu-testimonial-wrapper {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        .mu-quote-glyph {
          font-family: var(--font-serif);
          font-size: 84px;
          color: var(--gold);
          line-height: 0.6;
          margin-bottom: 24px;
          opacity: 0.8;
        }
        .mu-testimonial-text {
          font-family: var(--font-serif);
          font-size: clamp(20px, 2.6vw, 26px);
          font-style: italic;
          color: #FFFFFF;
          line-height: 1.5;
          margin-bottom: 28px;
        }
        .mu-author-name {
          display: block;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 16px;
          color: #FFFFFF;
        }
        .mu-author-role {
          display: block;
          font-size: 13.5px;
          color: var(--gold);
          margin-top: 4px;
        }
        .mu-carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }
        .mu-carousel-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mu-carousel-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
        }
        .mu-carousel-dots {
          display: flex;
          gap: 8px;
        }
        .mu-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.25);
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .mu-dot-active {
          background-color: var(--gold);
          width: 20px;
          border-radius: 4px;
        }

        /* Admissions CTA Banner */
        .mu-cta-banner {
          background-color: var(--teal-deep);
          color: #FFFFFF;
          padding: 84px 32px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .mu-cta-content {
          max-width: 680px;
          margin: 0 auto;
        }
        .mu-cta-heading {
          color: #FFFFFF;
          font-size: clamp(30px, 4vw, 44px);
          margin-bottom: 16px;
        }
        .mu-cta-desc {
          font-size: 16.5px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .mu-cta-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Footer */
        .mu-footer {
          background-color: var(--teal-deep);
          color: rgba(255, 255, 255, 0.7);
          padding: 72px 0 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .mu-footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
        }
        .mu-footer-brand {
          margin-bottom: 16px;
        }
        .mu-footer-address {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .mu-footer-contact p {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          margin-bottom: 6px;
        }
        .mu-footer-col-title {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          margin-bottom: 20px;
        }
        .mu-footer-links {
          list-style: none;
        }
        .mu-footer-links li {
          margin-bottom: 10px;
        }
        .mu-footer-links a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .mu-footer-links a:hover {
          color: var(--gold);
        }
        .mu-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13px;
        }
        .mu-footer-legal {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mu-footer-legal a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
        }
        .mu-footer-legal a:hover {
          color: var(--gold);
        }

        /* =========================================================================
           Responsive Breakpoints
           ========================================================================= */
        @media (max-width: 920px) {
          .mu-nav-desktop {
            display: none;
          }
          .mu-mobile-toggle {
            display: block;
          }
          .mu-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .mu-faculties-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 860px) {
          .mu-about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .mu-about-milestone {
            right: 12px;
            bottom: -12px;
          }
          .mu-pillars-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .mu-careers-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .mu-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mu-stat-card {
            border-right: none;
            border-bottom: 1px solid var(--line);
            padding: 20px 12px;
          }
          .mu-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 720px) {
          .mu-utility-links {
            display: none;
          }
          .mu-utility-content {
            justify-content: flex-end;
          }
          .mu-section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .mu-news-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .mu-news-action-col {
            display: none;
          }
          .mu-footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }

        @media (max-width: 560px) {
          .mu-faculties-grid {
            grid-template-columns: 1fr;
          }
          .mu-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
