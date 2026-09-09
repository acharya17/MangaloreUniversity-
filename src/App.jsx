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
  CheckCircle2,
  Atom,
  Radiation,
  Dna,
  Library,
  Trophy,
  Home,
  HeartPulse,
  Laptop,
  Briefcase,
  Users,
  Target,
  Sparkles,
  Search,
  Globe2,
  Quote
} from 'lucide-react';

export default function App() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Tab for Academics / Faculties
  const [activeFacultyTab, setActiveFacultyTab] = useState('science');

  // Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animated Stats Counter State
  const [statsCounted, setStatsCounted] = useState(false);
  const statsRef = useRef(null);

  // Scroll listener for sticky navbar
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

  // Testimonials Data
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

  // Official News & Circulars Data
  const newsItems = [
    {
      date: "SEP 15, 2026",
      category: "Admissions",
      title: "Ph.D Entrance Examination 2026 Notification & Syllabus Guidelines",
      desc: "Detailed schedule, eligibility criteria, vacancy matrix across 26 PG departments, and examination centre guidelines."
    },
    {
      date: "SEP 08, 2026",
      category: "Examinations",
      title: "Postgraduate Common Entrance Test (PGCET) Calendar & Verification",
      desc: "Revised schedule for centralized university counseling, merit list publication, and mandatory document verification."
    },
    {
      date: "AUG 28, 2026",
      category: "Results",
      title: "Revaluation & Result Scrutiny Applications — Even Semester 2026",
      desc: "Last date for online submission of revaluation requests extended for undergraduate and postgraduate courses."
    },
    {
      date: "AUG 14, 2026",
      category: "General",
      title: "Official Release of University Prospectus & Academic Calendar 2026–2027",
      desc: "Comprehensive handbook detailing CBCS curriculum regulations, term dates, fee structures, and campus statutes."
    }
  ];

  return (
    <div className="mu-page">
      {/* =========================================================================
          SECTION 01: Top Utility Bar
          ========================================================================= */}
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
            <span className="mu-utility-divider">|</span>
            <span className="mu-utility-lang">ಕನ್ನಡ</span>
          </div>
          <div className="mu-utility-socials">
            <a href="https://facebook.com" aria-label="Facebook" className="mu-social-icon"><Facebook size={13} /></a>
            <a href="https://twitter.com" aria-label="Twitter/X" className="mu-social-icon"><Twitter size={13} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="mu-social-icon"><Linkedin size={13} /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="mu-social-icon"><Youtube size={13} /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="mu-social-icon"><Instagram size={13} /></a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 02: Main Header & Sticky Navigation
          ========================================================================= */}
      <header className={`mu-header ${isScrolled ? 'mu-header-scrolled' : ''}`}>
        <div className="mu-container mu-header-content">
          {/* Exact Official Mangalore University Bilingual Logo */}
          <a href="#" className="mu-brand" aria-label="Mangalore University Home">
            <img
              src="/mu-logo.png"
              alt="Mangalore University — ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾನಿಲಯ"
              className="mu-brand-logo-img"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="mu-nav-desktop" aria-label="Main Navigation">
            <a href="#about" className="mu-nav-link">About</a>
            <a href="#academics" className="mu-nav-link">Academics</a>
            <a href="#infrastructure" className="mu-nav-link">Campus</a>
            <a href="#research" className="mu-nav-link">Research Centres</a>
            <a href="#placement" className="mu-nav-link">Placements</a>
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
              <a href="#about" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>About & VC Message</a>
              <a href="#academics" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>Academics & Degrees</a>
              <a href="#infrastructure" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>Campus & Infrastructure</a>
              <a href="#research" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>National Research Centres</a>
              <a href="#coastal" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>Coastal Identity</a>
              <a href="#placement" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>Placement & Career Ecosystem</a>
              <a href="#news" className="mu-mobile-link" onClick={() => setMobileMenuOpen(false)}>News & Circulars</a>
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
          SECTION 03: Hero / Introduction
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
              Spanning 353 acres atop the scenic Konaje hillocks, Mangalore University is a NAAC A++ accredited premier state institution with 26 postgraduate departments, internationally recognized nuclear research centres, and 204 affiliated colleges across coastal Karnataka.
            </p>

            <div className="mu-hero-actions mu-fade-in-3">
              <a href="#admissions" className="mu-btn mu-btn-gold">
                Apply for Admission <ArrowRight size={16} />
              </a>
              <a href="#academics" className="mu-btn mu-btn-outline">
                View Programmes
              </a>
            </div>
          </div>

          {/* Hero Right Framed Media */}
          <div className="mu-hero-media-wrapper mu-fade-in-3">
            <div className="mu-hero-frame-border"></div>
            <div className="mu-hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                alt="Mangalore University Main Administrative Complex"
                className="mu-hero-img"
              />
              <div className="mu-hero-badge">
                <Award size={20} className="mu-badge-icon" />
                <div>
                  <strong>NAAC A++ Accredited</strong>
                  <span>353-Acre Verdant Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: About Mangalore University & Vice-Chancellor's Message
          ========================================================================= */}
      <section id="about" className="mu-section mu-bg-paper">
        <div className="mu-container">
          <div className="mu-about-grid">
            {/* Left Narrative & VC Card */}
            <div className="mu-about-text">
              <span className="mu-eyebrow">ABOUT THE UNIVERSITY</span>
              <h2 className="mu-heading">From a postgraduate centre to a premier coastal institution</h2>
              <p className="mu-about-p">
                Mangalore University was established in 1980, growing out of a modest postgraduate centre of the University of Mysore at Konaje which originally commenced with just three departments.
              </p>
              <p className="mu-about-p">
                Today, the university encompasses 26 postgraduate departments on its main campus, offering advanced interdisciplinary research, frontier laboratory infrastructure, and comprehensive academic jurisdiction across Dakshina Kannada, Udupi, and Kodagu districts.
              </p>

              <div className="mu-about-vc-card">
                <div className="mu-vc-header">
                  <div className="mu-vc-avatar">
                    <Building2 size={24} color="var(--gold)" />
                  </div>
                  <div>
                    <h4 className="mu-vc-title">Vice-Chancellor's Message</h4>
                    <span className="mu-vc-sub">Prof. P. L. Dharma, Vice-Chancellor</span>
                  </div>
                </div>
                <p className="mu-vc-quote">
                  "Our vision is to evolve as a centre of academic excellence and holistic human development, nurturing global competence anchored in ethics, cultural heritage, and frontier research."
                </p>
              </div>

              <a href="#history" className="mu-link-arrow" style={{ marginTop: '16px' }}>
                Read our full history & vision <ArrowRight size={15} />
              </a>
            </div>

            {/* Right Media */}
            <div className="mu-about-media">
              <div className="mu-about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
                  alt="University Library and Heritage"
                  className="mu-about-img"
                />
                <div className="mu-about-milestone">
                  <span className="mu-milestone-year">1980</span>
                  <span className="mu-milestone-text">Chartered Independent University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: At a Glance (Stats Band)
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
          SECTION 06: Academics & Degrees
          ========================================================================= */}
      <section id="academics" className="mu-section mu-bg-paper">
        <div className="mu-container">
          <div className="mu-section-header">
            <div>
              <span className="mu-eyebrow">ACADEMIC EXCELLENCE</span>
              <h2 className="mu-heading">Academics, Faculties & Degrees</h2>
            </div>
            <p className="mu-body-lead">
              Offering Master's (M.A., M.Sc., M.Com, M.Ed, MBA, MCA), Doctoral (Ph.D), and Postgraduate Diploma programmes under the Choice Based Credit System (CBCS).
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
                <li>Kannada & Regional Heritage</li>
                <li>History & Archaeology</li>
                <li>Economics & Development Studies</li>
                <li>Mass Communication & Journalism</li>
                <li>Sociology & Social Work (MSW)</li>
              </ul>
              <a href="#faculty-arts" className="mu-faculty-link">
                Explore Arts Programmes <ArrowUpRight size={16} />
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
                <li>Applied Chemistry & Biochemistry</li>
                <li>Marine Geology & Oceanography</li>
                <li>Biosciences & Biotechnology</li>
                <li>Computer Science (M.Sc. & MCA)</li>
                <li>Mathematics & Statistics</li>
              </ul>
              <a href="#faculty-science" className="mu-faculty-link">
                Explore Science Programmes <ArrowUpRight size={16} />
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
                <li>Finance & Banking Technology</li>
                <li>International Trade & Logistics</li>
                <li>Human Resource Management</li>
                <li>Doctoral Research in Commerce</li>
              </ul>
              <a href="#faculty-commerce" className="mu-faculty-link">
                Explore Commerce Programmes <ArrowUpRight size={16} />
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
                <li>Curriculum Design & Evaluation</li>
                <li>Educational Technology Lab</li>
                <li>Athletic Performance Centre</li>
              </ul>
              <a href="#faculty-education" className="mu-faculty-link">
                Explore Education Programmes <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: Why Study at Mangalore University (Pillars)
          ========================================================================= */}
      <section className="mu-section mu-bg-mist">
        <div className="mu-container">
          <div className="mu-section-header-center">
            <span className="mu-eyebrow">INSTITUTIONAL DISTINCTION</span>
            <h2 className="mu-heading">Why Study at Mangalore University</h2>
            <p className="mu-body-lead" style={{ margin: '0 auto' }}>
              A confluence of traditional scholarly rigor, national-grade research infrastructure, and holistic student growth.
            </p>
          </div>

          <div className="mu-pillars-grid">
            {/* Pillar 1 */}
            <div className="mu-pillar-card">
              <div className="mu-pillar-icon-badge">
                <GraduationCap size={24} />
              </div>
              <h3 className="mu-pillar-title">Academic Excellence & CBCS</h3>
              <p className="mu-pillar-desc">
                Dynamic Choice Based Credit System offering flexibility across disciplines, industry-relevant syllabi, continuous internal assessment, and interdisciplinary electives.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="mu-pillar-card">
              <div className="mu-pillar-icon-badge">
                <Microscope size={24} />
              </div>
              <h3 className="mu-pillar-title">Frontier Research & Heritage</h3>
              <p className="mu-pillar-desc">
                High-impact scientific research funded by DST, DBT, BRNS, and UGC with dedicated radiation, marine, and bio-science research centres.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="mu-pillar-card">
              <div className="mu-pillar-icon-badge">
                <Trees size={24} />
              </div>
              <h3 className="mu-pillar-title">Student Belonging & Community</h3>
              <p className="mu-pillar-desc">
                An inclusive, secure 353-acre hilltop environment with active cultural societies, national sports championships, subsidized hostels, and student welfare councils.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: Campus & Infrastructure
          ========================================================================= */}
      <section id="infrastructure" className="mu-section mu-bg-paper">
        <div className="mu-container">
          <div className="mu-section-header">
            <div>
              <span className="mu-eyebrow">WORLD-CLASS AMENITIES</span>
              <h2 className="mu-heading">Campus & Infrastructure</h2>
            </div>
            <p className="mu-body-lead">
              State-of-the-art facilities designed to foster holistic academic, research, athletic, and residential life.
            </p>
          </div>

          <div className="mu-infra-grid">
            {/* Infra Card 1 */}
            <div className="mu-infra-card">
              <div className="mu-infra-icon-box"><Library size={22} /></div>
              <h3 className="mu-infra-title">Central Library</h3>
              <p className="mu-infra-desc">Over 250,000 volumes, 300+ print journals, INFLIBNET access, e-ShodhSindhu portal, and 24/7 digital reading halls.</p>
            </div>

            {/* Infra Card 2 */}
            <div className="mu-infra-card">
              <div className="mu-infra-icon-box"><Trophy size={22} /></div>
              <h3 className="mu-infra-title">Sports Complex & Stadium</h3>
              <p className="mu-infra-desc">400m synthetic athletic track, indoor sports pavilion, gymnasium, basketball & tennis courts supporting national athletes.</p>
            </div>

            {/* Infra Card 3 */}
            <div className="mu-infra-card">
              <div className="mu-infra-icon-box"><Home size={22} /></div>
              <h3 className="mu-infra-title">Hostels & Residential Life</h3>
              <p className="mu-infra-desc">Modern separate hostels for men, women, and research scholars with Wi-Fi, hygienic dining halls, and 24/7 security.</p>
            </div>

            {/* Infra Card 4 */}
            <div className="mu-infra-card">
              <div className="mu-infra-icon-box"><Laptop size={22} /></div>
              <h3 className="mu-infra-title">ICT & Computing Centre</h3>
              <p className="mu-infra-desc">Campus-wide optical fiber network, high-performance computing clusters, smart classrooms, and centralized data facilities.</p>
            </div>

            {/* Infra Card 5 */}
            <div className="mu-infra-card">
              <div className="mu-infra-icon-box"><HeartPulse size={22} /></div>
              <h3 className="mu-infra-title">University Health Centre</h3>
              <p className="mu-infra-desc">Dedicated medical facility providing primary healthcare, 24/7 emergency response, pharmacy, and diagnostic services for students and staff.</p>
            </div>

            {/* Infra Card 6 */}
            <div className="mu-infra-card">
              <div className="mu-infra-icon-box"><Compass size={22} /></div>
              <h3 className="mu-infra-title">Botanical Garden & Arboretum</h3>
              <p className="mu-infra-desc">Sprawling arboretum conserving endemic Western Ghats flora, medicinal plant gardens, and green energy solar installations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: Nationally Recognized Research Centres
          ========================================================================= */}
      <section id="research" className="mu-section mu-bg-mist">
        <div className="mu-container">
          <div className="mu-section-header">
            <div>
              <span className="mu-eyebrow">PIONEERING DISCOVERY</span>
              <h2 className="mu-heading">Nationally Recognized Research Centres</h2>
            </div>
            <p className="mu-body-lead">
              Hosting prestigious national research facilities funded by DAE, DST, BRNS, and international research collaborations.
            </p>
          </div>

          <div className="mu-research-grid">
            {/* Research Card 1 */}
            <div className="mu-research-card">
              <div className="mu-research-header">
                <div className="mu-research-icon"><Radiation size={24} /></div>
                <span className="mu-research-badge">DAE / BRNS Recognized</span>
              </div>
              <h3 className="mu-research-title">Microtron Centre</h3>
              <p className="mu-research-desc">
                An advanced electron accelerator facility established in collaboration with Raja Ramanna Centre for Advanced Technology (RRCAT) and Bhabha Atomic Research Centre (BARC) for radiation physics, materials modification, and polymer research.
              </p>
              <div className="mu-research-footer">
                <span>Key Areas: Radiation Physics, Polymers, Electron Beam Tech</span>
              </div>
            </div>

            {/* Research Card 2 */}
            <div className="mu-research-card">
              <div className="mu-research-header">
                <div className="mu-research-icon"><Atom size={24} /></div>
                <span className="mu-research-badge">National Centre of Excellence</span>
              </div>
              <h3 className="mu-research-title">CARRT</h3>
              <p className="mu-research-desc">
                Centre for Application of Radioisotopes and Radiation Technology (CARRT) — conducting frontier research in medical physics, nuclear diagnostics, food irradiation, and radiation biology in partnership with BRNS and AERB.
              </p>
              <div className="mu-research-footer">
                <span>Key Areas: Radiopharmacy, Food Preservation, Nuclear Medicine</span>
              </div>
            </div>

            {/* Research Card 3 */}
            <div className="mu-research-card">
              <div className="mu-research-header">
                <div className="mu-research-icon"><Dna size={24} /></div>
                <span className="mu-research-badge">Coastal Ecology & Marine</span>
              </div>
              <h3 className="mu-research-title">CAREER & Marine Research Station</h3>
              <p className="mu-research-desc">
                Centre for Advanced Research in Environmental Radioactivity (CAREER) and Oceanographic stations monitoring coastal ecology, Arabian Sea sedimentary dynamics, and marine biodiversity conservation.
              </p>
              <div className="mu-research-footer">
                <span>Key Areas: Marine Geology, Coastal Geomorphology, Oceanography</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: Campus / Coastal Identity (Full-Bleed Visual Break)
          ========================================================================= */}
      <section id="coastal" className="mu-campus-break">
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
          SECTION 11: Placement & Career Ecosystem
          ========================================================================= */}
      <section id="placement" className="mu-section mu-bg-paper">
        <div className="mu-container mu-careers-grid">
          {/* Left Narrative */}
          <div className="mu-careers-intro">
            <span className="mu-eyebrow">CAREER & STUDENT SUCCESS</span>
            <h2 className="mu-heading">Placement & Career Ecosystem</h2>
            <p className="mu-careers-p">
              The University Employment Information & Guidance Bureau functions as a vital career springboard, coordinating campus recruitments, competitive civil services mentorship, corporate internship pipelines, and international higher education pathways.
            </p>
            <div className="mu-placement-stats-mini">
              <div className="mu-mini-stat">
                <strong>85%+</strong>
                <span>Placement Assistance</span>
              </div>
              <div className="mu-mini-stat">
                <strong>120+</strong>
                <span>Recruitment Partners</span>
              </div>
              <div className="mu-mini-stat">
                <strong>₹14 LPA</strong>
                <span>Highest Package</span>
              </div>
            </div>
            <a href="#placement-cell" className="mu-link-arrow">
              Connect with Placement Cell <ArrowRight size={15} />
            </a>
          </div>

          {/* Right Services List */}
          <div className="mu-careers-services">
            <div className="mu-service-item">
              <div className="mu-service-dot"></div>
              <div>
                <h4 className="mu-service-title">Campus Placement & Corporate Recruitment</h4>
                <p className="mu-service-desc">Facilitating top-tier recruitment drives with IT, banking, pharmaceutical, manufacturing, and research conglomerates.</p>
              </div>
            </div>

            <div className="mu-service-item">
              <div className="mu-service-dot"></div>
              <div>
                <h4 className="mu-service-title">UPSC, KPSC, NET & SLET Coaching</h4>
                <p className="mu-service-desc">Comprehensive mentorship programs for national/state civil services, administrative examinations, and UGC lectureship eligibility.</p>
              </div>
            </div>

            <div className="mu-service-item">
              <div className="mu-service-dot"></div>
              <div>
                <h4 className="mu-service-title">Higher Education & Overseas Fellowships</h4>
                <p className="mu-service-desc">Dedicated advisory and application mentorship for prestigious international research grants and doctoral fellowships.</p>
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
          SECTION 12: News, Events & Official Circulars
          ========================================================================= */}
      <section id="news" className="mu-section mu-bg-mist">
        <div className="mu-container">
          <div className="mu-news-header">
            <div>
              <span className="mu-eyebrow">NOTICES & CIRCULARS</span>
              <h2 className="mu-heading">News, Events & Official Circulars</h2>
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
          SECTION 13: Student & Alumni Testimonials
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
          SECTION 14: Admissions CTA Banner
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
          SECTION 15: Institutional Footer
          ========================================================================= */}
      <footer className="mu-footer">
        <div className="mu-container">
          <div className="mu-footer-grid">
            {/* Column 1: Identity & Address */}
            <div className="mu-footer-col">
              <div className="mu-footer-brand-wrapper">
                <img
                  src="/mu-logo.png"
                  alt="Mangalore University — ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾನಿಲಯ"
                  className="mu-footer-logo-img"
                />
              </div>
              <p className="mu-footer-address">
                Mangalagangothri - 574 199, Dakshina Kannada District, Karnataka State, India.
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
                <li><a href="#research">Microtron & CARRT Centres</a></li>
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
                <li><a href="#infrastructure">Central Library Catalog</a></li>
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
        .mu-utility-lang {
          color: var(--gold);
          font-weight: 600;
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
          background-color: var(--teal);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          padding: 12px 0;
        }
        .mu-header-scrolled {
          background-color: rgba(7, 29, 51, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
          padding: 10px 0;
        }
        .mu-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mu-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .mu-brand-logo-img {
          height: 60px;
          width: auto;
          max-width: 380px;
          object-fit: contain;
          display: block;
          transition: height 0.3s ease;
        }
        .mu-header-scrolled .mu-brand-logo-img {
          height: 52px;
        }
        .mu-footer-brand-wrapper {
          margin-bottom: 20px;
        }
        .mu-footer-logo-img {
          height: 68px;
          width: auto;
          max-width: 380px;
          object-fit: contain;
          display: block;
        }

        /* Nav Links */
        .mu-nav-desktop {
          display: flex;
          align-items: center;
          gap: 26px;
        }
        .mu-nav-link {
          font-size: 14.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.88);
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .mu-nav-link:hover {
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
          color: #FFFFFF;
          cursor: pointer;
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
          grid-template-columns: 1.15fr 0.85fr;
          gap: 64px;
          align-items: center;
        }
        .mu-about-image-wrapper {
          position: relative;
        }
        .mu-about-img {
          width: 100%;
          height: 440px;
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
        .mu-about-vc-card {
          margin: 20px 0;
          padding: 20px 24px;
          background-color: var(--mist);
          border-left: 3px solid var(--teal);
          border-radius: var(--radius);
        }
        .mu-vc-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .mu-vc-avatar {
          width: 38px;
          height: 38px;
          background-color: var(--teal);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mu-vc-title {
          font-family: var(--font-serif);
          font-size: 16px;
          color: var(--teal);
          margin-bottom: 2px;
        }
        .mu-vc-sub {
          font-size: 12.5px;
          color: var(--blue);
          font-weight: 600;
        }
        .mu-vc-quote {
          font-family: var(--font-serif);
          font-size: 15.5px;
          font-style: italic;
          color: var(--ink);
          line-height: 1.5;
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

        /* Infrastructure Section */
        .mu-infra-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .mu-infra-card {
          background-color: #FFFFFF;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 30px 26px;
          transition: border-color 0.2s;
        }
        .mu-infra-card:hover {
          border-color: var(--teal);
        }
        .mu-infra-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius);
          background-color: var(--mist);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .mu-infra-title {
          font-size: 18px;
          margin-bottom: 10px;
          color: var(--teal);
        }
        .mu-infra-desc {
          font-size: 14.5px;
          color: var(--ink-soft);
          line-height: 1.55;
        }

        /* Research Centres Section */
        .mu-research-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .mu-research-card {
          background-color: #FFFFFF;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .mu-research-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .mu-research-icon {
          width: 46px;
          height: 46px;
          background-color: var(--teal);
          color: var(--gold);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mu-research-badge {
          font-size: 11.5px;
          font-weight: 600;
          text-transform: uppercase;
          background-color: var(--mist);
          color: var(--blue);
          padding: 4px 10px;
          border-radius: var(--radius);
        }
        .mu-research-title {
          font-size: 20px;
          color: var(--teal);
          margin-bottom: 14px;
        }
        .mu-research-desc {
          font-size: 14.5px;
          color: var(--ink-soft);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .mu-research-footer {
          font-size: 12.5px;
          color: var(--blue);
          font-weight: 600;
          border-top: 1px solid var(--line-soft);
          padding-top: 14px;
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

        /* Careers & Placement Section */
        .mu-careers-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .mu-careers-p {
          font-size: 16px;
          color: var(--ink-soft);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .mu-placement-stats-mini {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
          padding: 16px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .mu-mini-stat strong {
          display: block;
          font-family: var(--font-serif);
          font-size: 24px;
          color: var(--teal);
        }
        .mu-mini-stat span {
          font-size: 12px;
          color: var(--ink-soft);
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
          .mu-infra-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mu-research-grid {
            grid-template-columns: 1fr;
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
          .mu-infra-grid {
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
