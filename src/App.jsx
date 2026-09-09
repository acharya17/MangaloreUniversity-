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
  Quote,
  Star
} from 'lucide-react';

export default function App() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Background Carousel State & Slide Data
  const [heroSlide, setHeroSlide] = useState(0);
  const heroSlides = [
    {
      image: "/hero-campus.jpg",
      title: "Verdant 353-Acre Mangalagangothri Hilltop Campus",
      subtitle: "Scenic coastal hilltops fostering frontier multidisciplinary education since 1980"
    },
    {
      image: "/news-thumb-4.jpg",
      title: "Central Library & Digital Research Learning Resource Centre",
      subtitle: "Over 2.5 lakh volumes, e-journals, and high-speed digital research archives"
    },
    {
      image: "/news-thumb-2.jpg",
      title: "Advanced Laboratories & Microtron Atomic Research Facility",
      subtitle: "Nationally recognized collaborative radiation physics and materials research"
    },
    {
      image: "/news-featured.jpg",
      title: "Annual Convocation, Academic Honours & Cultural Heritage",
      subtitle: "Celebrating four decades of scholarly achievement and regional leadership"
    },
    {
      image: "/news-thumb-3.jpg",
      title: "Mangala Stadium, Sports Complex & Athletic Excellence",
      subtitle: "400m international synthetic track, indoor arenas, and championship sports"
    },
    {
      image: "/why-campus.jpg",
      title: "Vibrant Student Community & Residential Campus Life",
      subtitle: "Spacious modern hostels, active student societies, and inclusive campus life"
    },
    {
      image: "/coastal-campus.jpg",
      title: "CAREER Marine Research & Coastal Ecological Sanctuaries",
      subtitle: "Direct Arabian Sea field stations, estuarine biodiversity, and coastal science"
    }
  ];

  // Auto-play hero image carousel with subtle smooth crossfade
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(heroTimer);
  }, [heroSlides.length]);

  // Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animated Stats Counter State & Values
  const [statsVisible, setStatsVisible] = useState(false);
  const [statCounts, setStatCounts] = useState({
    years: 0,
    pgDepts: 0,
    colleges: 0,
    acres: 0,
    autonomous: 0
  });
  const statsRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  // Scroll listener for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for stats band & smooth count-up animation
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setStatCounts({
        years: 45,
        pgDepts: 26,
        colleges: 204,
        acres: 353,
        autonomous: 5
      });
      setStatsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setStatsVisible(true);

          const duration = 1800; // 1.8 seconds smooth count-up
          const startTime = performance.now();

          // Smooth exponential ease-out
          const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

          const targets = {
            years: 45,
            pgDepts: 26,
            colleges: 204,
            acres: 353,
            autonomous: 5
          };

          const frame = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);

            setStatCounts({
              years: Math.round(targets.years * eased),
              pgDepts: Math.round(targets.pgDepts * eased),
              colleges: Math.round(targets.colleges * eased),
              acres: Math.round(targets.acres * eased),
              autonomous: Math.round(targets.autonomous * eased)
            });

            if (progress < 1) {
              requestAnimationFrame(frame);
            } else {
              setStatCounts(targets);
            }
          };

          requestAnimationFrame(frame);
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Testimonials Data (5 Student/Alumni Perspectives)
  const testimonials = [
    {
      id: "t1",
      quote:
        "The proximity to the Arabian Sea and the dedicated marine research stations provided field exposure that few institutions in the country can match.",
      name: "Pooja Hegde",
      role: "M.Sc. Marine Geology",
      batch: "Batch of 2023",
      rating: 5,
      avatar: "PH"
    },
    {
      id: "t2",
      quote:
        "Mangalagangothri gave me both the critical perspective and practical studio training to transition directly into investigative broadcast media.",
      name: "Karthik Rao",
      role: "M.A. Journalism & Mass Comm",
      batch: "Batch of 2022",
      rating: 5,
      avatar: "KR"
    },
    {
      id: "t3",
      quote:
        "Interdisciplinary faculty mentorship in materials science shaped my research methodology and secured a doctoral fellowship at BARC.",
      name: "Dr. Ananya Shenoy",
      role: "Ph.D in Materials Science",
      batch: "Doctoral Fellow",
      rating: 5,
      avatar: "AS"
    },
    {
      id: "t4",
      quote:
        "The central library archives, high-speed computing labs, and corporate placement drives paved my way to a top multinational fintech career.",
      name: "Naveen D'Souza",
      role: "Master of Business Admin (MBA)",
      batch: "Batch of 2024",
      rating: 5,
      avatar: "ND"
    },
    {
      id: "t5",
      quote:
        "World-class athletics synthetic track and specialized sports science faculties enabled me to represent Karnataka at national university games.",
      name: "Sahana Acharya",
      role: "Master of Physical Education",
      batch: "Batch of 2023",
      rating: 5,
      avatar: "SA"
    }
  ];

  // Academic Faculties Data for Horizontal Scrollable Showcase
  const faculties = [
    {
      id: "arts",
      title: "Faculty of Arts",
      category: "HUMANITIES & SOCIAL SCIENCES",
      deptCount: "8 Departments",
      image: "/faculty-arts.jpg",
      color: "#6B3E26", // Warm terracotta / mahogany
      badgeBg: "rgba(107, 62, 38, 0.9)",
      desc: "Nurturing critical inquiry, literary traditions, regional historiography, and contemporary socio-cultural dialogues.",
      link: "#faculty-arts",
      programmes: [
        "English Language & Literature",
        "Kannada & Regional Heritage",
        "History & Archaeology",
        "Economics & Development Studies",
        "Mass Communication & Journalism",
        "Sociology & Social Work (MSW)"
      ]
    },
    {
      id: "science",
      title: "Science & Technology",
      category: "PHYSICAL & LIFE SCIENCES",
      deptCount: "17 Departments",
      image: "/faculty-science.jpg",
      color: "#0F4C81", // Deep Cobalt
      badgeBg: "rgba(15, 76, 129, 0.9)",
      desc: "Pioneering frontier laboratory research in materials science, biosciences, atomic energy, and computing algorithms.",
      link: "#faculty-science",
      programmes: [
        "Physics & Materials Science",
        "Applied Chemistry & Biochemistry",
        "Biosciences & Biotechnology",
        "Computer Science (M.Sc. & MCA)",
        "Mathematics & Statistics",
        "Electronics & Applied Physics"
      ]
    },
    {
      id: "commerce",
      title: "Faculty of Commerce",
      category: "MANAGEMENT & CORPORATE STUDIES",
      deptCount: "2 Departments",
      image: "/faculty-commerce.jpg",
      color: "#1E5F74", // Slate Teal
      badgeBg: "rgba(30, 95, 116, 0.9)",
      desc: "Cultivating ethical business leadership, strategic managerial competence, and modern fintech expertise.",
      link: "#faculty-commerce",
      programmes: [
        "Master of Commerce (M.Com)",
        "Master of Business Admin (MBA)",
        "Finance & Banking Technology",
        "International Trade & Logistics",
        "Human Resource Management",
        "Doctoral Research in Commerce"
      ]
    },
    {
      id: "education",
      title: "Faculty of Education",
      category: "PEDAGOGY & SPORTS SCIENCE",
      deptCount: "2 Departments",
      image: "/faculty-education.jpg",
      color: "#7D4E57", // Rosewood Plum
      badgeBg: "rgba(125, 78, 87, 0.9)",
      desc: "Advancing pedagogical methodologies, educational psychology, physical education, and athletic performance sciences.",
      link: "#faculty-education",
      programmes: [
        "Master of Education (M.Ed)",
        "Physical Education (M.P.Ed)",
        "Sports Science & Biomechanics",
        "Curriculum Design & Evaluation",
        "Educational Technology Lab",
        "Athletic Performance Centre"
      ]
    },
    {
      id: "marine",
      title: "Marine & Coastal Studies",
      category: "OCEANOGRAPHY & EARTH SCIENCES",
      deptCount: "3 Research Units",
      image: "/faculty-marine.jpg",
      color: "#0E5A6A", // Marine Cyan / Deep Aqua
      badgeBg: "rgba(14, 90, 106, 0.9)",
      desc: "Leveraging coastal Karnataka's shoreline for frontier oceanographic explorations, marine geology, and coastal ecosystem preservation.",
      link: "#faculty-marine",
      programmes: [
        "Marine Geology & Oceanography",
        "Coastal Geomorphology & Sediments",
        "Marine Geophysics & Bathymetry",
        "Arabian Sea Ecology Station",
        "Coastal Zone Monitoring Unit"
      ]
    }
  ];

  // Featured News & Official Circulars Data
  const featuredStory = {
    category: "CONVOCATION & DISTINCTION",
    date: "SEP 18, 2026",
    title: "44th Annual Grand Convocation Ceremony Announced at Mangalagangothri",
    desc: "Hon'ble Chancellor and eminent scholars will confer doctoral degrees, academic gold medals, and honorary doctorates to distinguished achievers across 26 departments.",
    image: "/news-featured.jpg",
    link: "#convocation-2026"
  };

  const secondaryNews = [
    {
      id: "news-1",
      date: "SEP 15, 2026",
      category: "Admissions",
      title: "Ph.D Entrance Examination 2026 Notification & Syllabus Matrix",
      desc: "Detailed schedule, vacancy matrix across 26 PG departments, and syllabus guidelines.",
      image: "/news-thumb-1.jpg",
      link: "#phd-admission"
    },
    {
      id: "news-2",
      date: "SEP 11, 2026",
      category: "Research",
      title: "BRNS & DAE Grant ₹4.8 Cr Sanctioned for Microtron Radiation Facility",
      desc: "Advanced electron accelerator laboratory to expand research in materials modification and polymer physics.",
      image: "/news-thumb-2.jpg",
      link: "#microtron-grant"
    },
    {
      id: "news-3",
      date: "SEP 08, 2026",
      category: "Examinations",
      title: "Postgraduate Common Entrance (PGCET) Calendar & Verification",
      desc: "Revised schedule for centralized university counseling and mandatory document verification.",
      image: "/news-thumb-1.jpg",
      link: "#pgcet-schedule"
    },
    {
      id: "news-4",
      date: "SEP 02, 2026",
      category: "Sports & Athletics",
      title: "All India Inter-University Athletics Championship Selection Trials",
      desc: "Mangalore University athletic contingent trials to be held at the 400m synthetic track stadium.",
      image: "/news-thumb-3.jpg",
      link: "#athletics-trials"
    },
    {
      id: "news-5",
      date: "AUG 28, 2026",
      category: "Academic Library",
      title: "e-ShodhSindhu & INFLIBNET Digital Journal Portal Expanded for Scholars",
      desc: "Access to over 15,000+ peer-reviewed international journals enabled across campus Wi-Fi network.",
      image: "/news-thumb-4.jpg",
      link: "#library-portal"
    },
    {
      id: "news-6",
      date: "AUG 14, 2026",
      category: "Official Circular",
      title: "University Prospectus & Academic Calendar 2026–2027 Handbook Released",
      desc: "Comprehensive handbook detailing CBCS curriculum regulations, term dates, and examination statutes.",
      image: "/campus-heritage.jpg",
      link: "#academic-handbook"
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
          SECTION 03: Hero / Introduction (Refined Compact Carousel with Lower-Left Alignment)
          ========================================================================= */}
      <section className="mu-hero-fullscreen" aria-label="Mangalore University Campus Showcase">
        {/* Full-Screen Photographic Carousel Background with Smooth Crossfade */}
        <div className="mu-hero-carousel-bg">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.image}
              className={`mu-hero-carousel-slide ${idx === heroSlide ? 'mu-hero-slide-active' : ''}`}
              aria-hidden={idx !== heroSlide}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="mu-hero-carousel-img"
              />
            </div>
          ))}
          {/* Refined Gradient Overlay: Left & Bottom dark navy for crystal-clear readability */}
          <div className="mu-hero-fullscreen-overlay"></div>
        </div>

        {/* Compact, Refined Text Block Vertically Aligned Toward Lower-Left Bottom */}
        <div className="mu-container mu-hero-fullscreen-content">
          <div className="mu-hero-text-panel">
            <div className="mu-hero-badge-row">
              <span className="mu-hero-pill-tag">ACCREDITED GRADE 'A' BY NAAC</span>
              <span className="mu-hero-pill-divider">•</span>
              <span className="mu-hero-pill-estd">ESTD. 1980</span>
            </div>

            <h1 className="mu-hero-fullscreen-headline">
              Excellence in Higher Learning &amp; Coastal Research
            </h1>

            <p className="mu-hero-fullscreen-subtext">
              Chartered across 353 hilltop acres, fostering 26 postgraduate departments and frontier atomic research facilities.
            </p>
          </div>
        </div>

        {/* =========================================================================
            FLASH NEWS TICKER (Embedded at the Bottom of Hero Section)
            ========================================================================= */}
        <div className="mu-ticker-band">
          <div className="mu-container mu-ticker-container">
            <div className="mu-ticker-badge">
              <span className="mu-ticker-dot"></span>
              <span className="mu-ticker-badge-text">FLASH NEWS</span>
            </div>
            <div className="mu-ticker-track">
              <div className="mu-ticker-content">
                <a href="#news" className="mu-ticker-item">
                  <span className="mu-ticker-date">NEW</span>
                  Ph.D Entrance Examination 2026–27 notification and center guidelines published.
                </a>
                <span className="mu-ticker-sep">•</span>
                <a href="#news" className="mu-ticker-item">
                  <span className="mu-ticker-date">ANNOUNCEMENT</span>
                  Postgraduate Common Entrance Test (PGCET) centralized counselling schedule updated.
                </a>
                <span className="mu-ticker-sep">•</span>
                <a href="#news" className="mu-ticker-item">
                  <span className="mu-ticker-date">EXAM</span>
                  Last date for submission of revaluation forms for Even Semester extended.
                </a>
                <span className="mu-ticker-sep">•</span>
                <a href="#news" className="mu-ticker-item">
                  <span className="mu-ticker-date">ACADEMIC</span>
                  Official University Prospectus & CBCS Calendar 2026–2027 released.
                </a>
                <span className="mu-ticker-sep">•</span>
                <a href="#news" className="mu-ticker-item">
                  <span className="mu-ticker-date">ADMISSION</span>
                  Karnataka UUCMS Portal open for 1st Semester PG/UG applications.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: About Mangalore University
          ========================================================================= */}
      <section id="about" className="mu-section mu-bg-paper">
        <div className="mu-container">
          <div className="mu-about-grid">
            {/* Left Narrative */}
            <div className="mu-about-text">
              <span className="mu-eyebrow">ABOUT THE UNIVERSITY</span>
              <h2 className="mu-heading">From a postgraduate centre to a premier coastal institution</h2>
              <p className="mu-about-p">
                Mangalore University was established in 1980, growing out of a modest postgraduate centre of the University of Mysore at Konaje which originally commenced with just three departments.
              </p>
              <p className="mu-about-p">
                Today, the university encompasses 26 postgraduate departments on its main campus, offering advanced interdisciplinary research, frontier laboratory infrastructure, and comprehensive academic jurisdiction across Dakshina Kannada, Udupi, and Kodagu districts.
              </p>

              <a href="#history" className="mu-link-arrow" style={{ marginTop: '8px' }}>
                Read our full history & vision <ArrowRight size={15} />
              </a>
            </div>

            {/* Right Media */}
            <div className="mu-about-media">
              <div className="mu-about-image-wrapper">
                <img
                  src="/campus-heritage.jpg"
                  alt="Mangalore University Heritage & Academic Library"
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
          SECTION 04B: Vice-Chancellor's Message (Minimalist Editorial Two-Column)
          ========================================================================= */}
      <section id="vc-message" className="mu-vc-editorial-section">
        <div className="mu-container">
          <div className="mu-vc-editorial-grid">
            {/* Left Column: Portrait Cutout with Soft Bottom Fade + Name & Designation */}
            <div className="mu-vc-portrait-col">
              <div className="mu-vc-cutout-frame">
                <img
                  src="/vc-portrait.png"
                  alt="Prof. P. L. Dharma, Vice-Chancellor of Mangalore University"
                  className="mu-vc-cutout-img"
                />
                <div className="mu-vc-cutout-bottom-fade"></div>
              </div>

              <div className="mu-vc-signoff-block">
                <h4 className="mu-vc-signoff-name">Prof. P. L. Dharma</h4>
                <span className="mu-vc-signoff-title">Vice-Chancellor</span>
                <span className="mu-vc-signoff-inst">Mangalore University</span>
              </div>
            </div>

            {/* Right Column: Eyebrow, Gold Quotation Mark & Message Content */}
            <div className="mu-vc-message-col">
              <div className="mu-vc-header-row">
                <span className="mu-eyebrow mu-vc-eyebrow-accent">VICE-CHANCELLOR'S MESSAGE</span>
                <Quote size={32} className="mu-vc-editorial-quote-mark" />
              </div>

              <h3 className="mu-vc-editorial-lead">
                “Fostering global academic competence anchored in cultural heritage, ethical rigor, and frontier scientific discovery.”
              </h3>

              <div className="mu-vc-editorial-body">
                <p>
                  Mangalore University stands at the confluence of rich coastal intellectual traditions and modern research innovation. Over four decades, our scholars and faculty have driven impactful advancements across sciences, humanities, management, and oceanography.
                </p>
                <p>
                  We are committed to nurturing an inclusive, forward-looking academic ecosystem where curious minds explore multidisciplinary boundaries, pioneer sustainable solutions, and contribute meaningfully to society and the nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: At a Glance (Stats Band with Smooth Count-Up)
          ========================================================================= */}
      <section ref={statsRef} className="mu-section-tight mu-bg-mist mu-stats-section">
        <div className="mu-container">
          <div className="mu-stats-grid">
            <div className="mu-stat-card">
              <div className="mu-stat-number">{statCounts.years}+</div>
              <div className="mu-stat-label">Years of Academic Excellence</div>
            </div>
            <div className="mu-stat-card">
              <div className="mu-stat-number">{statCounts.pgDepts}</div>
              <div className="mu-stat-label">Postgraduate Departments</div>
            </div>
            <div className="mu-stat-card">
              <div className="mu-stat-number">{statCounts.colleges}</div>
              <div className="mu-stat-label">Affiliated Colleges</div>
            </div>
            <div className="mu-stat-card">
              <div className="mu-stat-number">{statCounts.acres}</div>
              <div className="mu-stat-label">Acres of Verdant Campus</div>
            </div>
            <div className="mu-stat-card mu-stat-card-last">
              <div className="mu-stat-number">{statCounts.autonomous}</div>
              <div className="mu-stat-label">Autonomous Colleges</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: Academics & Degrees (Screen-Fit Modern Card Grid)
          ========================================================================= */}
      <section id="academics" className="mu-section mu-bg-paper mu-faculty-section">
        <div className="mu-container">
          <div className="mu-section-header">
            <div>
              <span className="mu-eyebrow">ACADEMIC EXCELLENCE</span>
              <h2 className="mu-heading">Academics, Faculties & Degrees</h2>
            </div>
          </div>

          <div className="mu-faculty-grid">
            {faculties.map((fac) => (
              <div key={fac.id} className="mu-faculty-hcard" style={{ '--accent-color': fac.color }}>
                {/* Default State: Large Image + Category Badge + Title + Description */}
                <div className="mu-hcard-image-wrap">
                  <img src={fac.image} alt={fac.title} className="mu-hcard-img" />
                  <div className="mu-hcard-top-gradient"></div>
                  <span className="mu-hcard-badge" style={{ backgroundColor: fac.badgeBg }}>
                    {fac.deptCount}
                  </span>
                </div>

                <div className="mu-hcard-content">
                  <span className="mu-hcard-category">{fac.category}</span>
                  <h3 className="mu-hcard-title">{fac.title}</h3>
                  <p className="mu-hcard-desc">{fac.desc}</p>
                </div>

                {/* Hover State: Deep Navy / Dark Overlay with Detailed Programme List */}
                <div className="mu-hcard-hover-overlay">
                  <div className="mu-hcard-hover-header">
                    <span className="mu-hcard-hover-category">{fac.category}</span>
                    <h3 className="mu-hcard-hover-title">{fac.title}</h3>
                  </div>

                  <p className="mu-hcard-hover-desc">{fac.desc}</p>

                  <div className="mu-hcard-hover-progs">
                    <span className="mu-hcard-prog-label">Key Departments & Programmes:</span>
                    <ul className="mu-hcard-prog-list">
                      {fac.programmes.map((prog, idx) => (
                        <li key={idx}>
                          <span className="mu-hcard-prog-bullet">•</span>
                          {prog}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={fac.link} className="mu-hcard-hover-link">
                    Explore Programmes <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: Why Study at Mangalore University (Asymmetrical Editorial Visual Grid)
          ========================================================================= */}
      <section className="mu-section mu-bg-mist mu-why-study-section">
        <div className="mu-container">
          <div className="mu-section-header-center">
            <span className="mu-eyebrow">INSTITUTIONAL DISTINCTION</span>
            <h2 className="mu-heading">Why Study at Mangalore University</h2>
          </div>

          <div className="mu-why-asym-grid">
            {/* Block 1: Academic Excellence (Tall Hero Card on Left) */}
            <div className="mu-why-card mu-why-card-tall">
              <div className="mu-why-image-wrapper">
                <img
                  src="/why-academic.jpg"
                  alt="Academic Excellence & Choice Based Credit System at Mangalore University"
                  className="mu-why-img"
                />
                <div className="mu-why-gradient"></div>
              </div>
              <div className="mu-why-content-panel">
                <span className="mu-why-eyebrow">CURRICULUM & PEDAGOGY</span>
                <h3 className="mu-why-title">Academic Excellence & CBCS Flexibility</h3>
                <p className="mu-why-desc">
                  Dynamic Choice Based Credit System offering flexibility across disciplines, industry-relevant syllabi, and interdisciplinary electives mentored by senior scholars.
                </p>
              </div>
              {/* Hover Detail Overlay */}
              <div className="mu-why-hover-overlay">
                <span className="mu-why-hover-badge">ACADEMIC RIGOR</span>
                <h3 className="mu-why-hover-title">Academic Excellence & CBCS Flexibility</h3>
                <p className="mu-why-hover-desc">
                  With 26 postgraduate departments and 204 affiliated institutions, Mangalore University pairs time-tested academic foundations with cutting-edge semester choice credits, seminars, and comprehensive continuous assessment.
                </p>
                <div className="mu-why-hover-metric">
                  <span className="mu-why-metric-val">26 PG Departments</span>
                  <span className="mu-why-metric-lbl">Under CBCS Framework</span>
                </div>
              </div>
            </div>

            {/* Right Column: Two stacked blocks with varied rhythm */}
            <div className="mu-why-right-stack">
              {/* Block 2: Frontier Research (Wide Horizontal Aspect) */}
              <div className="mu-why-card mu-why-card-wide">
                <div className="mu-why-image-wrapper">
                  <img
                    src="/why-research.jpg"
                    alt="Frontier Radiation & Marine Research Facilities"
                    className="mu-why-img"
                  />
                  <div className="mu-why-gradient"></div>
                </div>
                <div className="mu-why-content-panel">
                  <span className="mu-why-eyebrow">DISCOVERY & INNOVATION</span>
                  <h3 className="mu-why-title">Frontier Research & National Centres</h3>
                  <p className="mu-why-desc">
                    High-impact scientific research funded by DST, DBT, BRNS, and AERB with dedicated Microtron particle accelerator, CARRT, and marine laboratories.
                  </p>
                </div>
                {/* Hover Detail Overlay */}
                <div className="mu-why-hover-overlay">
                  <span className="mu-why-hover-badge">NATIONAL IMPACT</span>
                  <h3 className="mu-why-hover-title">Frontier Research & National Centres</h3>
                  <p className="mu-why-hover-desc">
                    Home to pioneering nuclear research installations, radiation technology applications, and coastal oceanographic stations conducting sponsored investigations.
                  </p>
                  <div className="mu-why-hover-metric">
                    <span className="mu-why-metric-val">₹40+ Cr Grants</span>
                    <span className="mu-why-metric-lbl">From DST, BRNS & UGC</span>
                  </div>
                </div>
              </div>

              {/* Block 3: Campus Life & Belonging (Balanced Coastal Atmosphere) */}
              <div className="mu-why-card mu-why-card-wide">
                <div className="mu-why-image-wrapper">
                  <img
                    src="/why-campus.jpg"
                    alt="Student Belonging & Coastal Hilltop Campus Life"
                    className="mu-why-img"
                  />
                  <div className="mu-why-gradient"></div>
                </div>
                <div className="mu-why-content-panel">
                  <span className="mu-why-eyebrow">CAMPUS & ECOSYSTEM</span>
                  <h3 className="mu-why-title">Vibrant Coastal Hilltop Community</h3>
                  <p className="mu-why-desc">
                    A secure 353-acre hilltop campus with panoramic vistas of the Western Ghats and Arabian Sea, active cultural societies, and athletic sports pavilions.
                  </p>
                </div>
                {/* Hover Detail Overlay */}
                <div className="mu-why-hover-overlay">
                  <span className="mu-why-hover-badge">STUDENT LIFE</span>
                  <h3 className="mu-why-hover-title">Vibrant Coastal Hilltop Community</h3>
                  <p className="mu-why-hover-desc">
                    An inspiring environment where academic life intersects with botanical gardens, Olympic-standard athletics, modernized residential hostels, and student welfare councils.
                  </p>
                  <div className="mu-why-hover-metric">
                    <span className="mu-why-metric-val">353 Acres</span>
                    <span className="mu-why-metric-lbl">Verdant Hilltop Canopy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: Campus & Infrastructure (Single-Screen Editorial Bento Grid)
          ========================================================================= */}
      <section id="infrastructure" className="mu-section-compact mu-bg-paper mu-infra-editorial-section">
        <div className="mu-container">
          <div className="mu-infra-header-row">
            <div>
              <span className="mu-eyebrow">WORLD-CLASS AMENITIES</span>
              <h2 className="mu-heading-tight">Campus & Infrastructure</h2>
            </div>
            <span className="mu-infra-tagline">
              State-of-the-art facilities designed for academic excellence, athletics, and vibrant student living.
            </span>
          </div>

          <div className="mu-infra-bento-grid">
            {/* Block 1: Central Library (Dominant Hero Feature on Left) */}
            <div className="mu-infra-bento-card mu-infra-bento-hero">
              <div className="mu-infra-img-wrap">
                <img
                  src="/news-thumb-4.jpg"
                  alt="Central Library & Knowledge Hub"
                  className="mu-infra-img"
                />
                <div className="mu-infra-gradient-base"></div>
              </div>

              {/* Default Content */}
              <div className="mu-infra-content">
                <div className="mu-infra-tag-row">
                  <span className="mu-infra-badge">CAMPUS HEART</span>
                  <Library size={16} className="mu-infra-badge-icon" />
                </div>
                <h3 className="mu-infra-title">Central Library & Knowledge Hub</h3>
                <p className="mu-infra-desc">
                  250,000+ volumes, 300+ print journals, INFLIBNET access, and 24/7 digital reading halls.
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="mu-infra-hover-panel">
                <span className="mu-infra-hover-badge">ACADEMIC RESOURCE</span>
                <h3 className="mu-infra-hover-title">Central Library & Digital Hub</h3>
                <p className="mu-infra-hover-desc">
                  RFID automation, centralized OPAC search, doctoral research cubicles, and national library network access.
                </p>
                <div className="mu-infra-hover-metric">
                  <span className="mu-infra-metric-val">250K+ Volumes</span>
                  <span className="mu-infra-metric-lbl">24/7 Scholar Access</span>
                </div>
              </div>
            </div>

            {/* Right 5-Grid Mosaic Container */}
            <div className="mu-infra-bento-right">
              {/* Row 1: Sports Complex (wide) + Hostels (compact) */}
              <div className="mu-infra-bento-card mu-infra-card-sports">
                <div className="mu-infra-img-wrap">
                  <img
                    src="/news-thumb-3.jpg"
                    alt="Sports Complex & Olympic Stadium"
                    className="mu-infra-img"
                  />
                  <div className="mu-infra-gradient-base"></div>
                </div>

                <div className="mu-infra-content">
                  <div className="mu-infra-tag-row">
                    <span className="mu-infra-badge">ATHLETICS</span>
                    <Trophy size={15} className="mu-infra-badge-icon" />
                  </div>
                  <h3 className="mu-infra-title">Sports Complex & Stadium</h3>
                  <p className="mu-infra-desc">
                    400m synthetic athletic track, indoor pavilion, gymnasium, and tennis courts.
                  </p>
                </div>

                <div className="mu-infra-hover-panel">
                  <span className="mu-infra-hover-badge">OLYMPIC STANDARD</span>
                  <h3 className="mu-infra-hover-title">Sports Complex & Stadium</h3>
                  <p className="mu-infra-hover-desc">
                    Home to national champion athletes, equipped with synthetic tracks and floodlit arenas.
                  </p>
                  <div className="mu-infra-hover-metric">
                    <span className="mu-infra-metric-val">400m Synthetic</span>
                    <span className="mu-infra-metric-lbl">Multi-Sport Pavilion</span>
                  </div>
                </div>
              </div>

              <div className="mu-infra-bento-card mu-infra-card-hostels">
                <div className="mu-infra-img-wrap">
                  <img
                    src="/faculty-arts.jpg"
                    alt="Hostels & Residential Life"
                    className="mu-infra-img"
                  />
                  <div className="mu-infra-gradient-base"></div>
                </div>

                <div className="mu-infra-content">
                  <div className="mu-infra-tag-row">
                    <span className="mu-infra-badge">RESIDENTIAL</span>
                    <Home size={15} className="mu-infra-badge-icon" />
                  </div>
                  <h3 className="mu-infra-title">Hostels & Living</h3>
                  <p className="mu-infra-desc">
                    Separate halls for men, women, and research scholars with Wi-Fi.
                  </p>
                </div>

                <div className="mu-infra-hover-panel">
                  <span className="mu-infra-hover-badge">STUDENT LIVING</span>
                  <h3 className="mu-infra-hover-title">Hostels & Living</h3>
                  <p className="mu-infra-hover-desc">
                    Hygienic dining halls, solar water heating, recreation rooms, and 24/7 security.
                  </p>
                  <div className="mu-infra-hover-metric">
                    <span className="mu-infra-metric-val">6 Halls</span>
                    <span className="mu-infra-metric-lbl">24/7 Wi-Fi & Security</span>
                  </div>
                </div>
              </div>

              {/* Row 2: 3 Compact Columns (ICT, Health Centre, Botanical Garden) */}
              <div className="mu-infra-bento-card mu-infra-card-ict">
                <div className="mu-infra-img-wrap">
                  <img
                    src="/news-thumb-1.jpg"
                    alt="ICT & Computing Centre"
                    className="mu-infra-img"
                  />
                  <div className="mu-infra-gradient-base"></div>
                </div>

                <div className="mu-infra-content">
                  <div className="mu-infra-tag-row">
                    <span className="mu-infra-badge">TECH</span>
                    <Laptop size={15} className="mu-infra-badge-icon" />
                  </div>
                  <h3 className="mu-infra-title">ICT Centre</h3>
                  <p className="mu-infra-desc">
                    Campus optical fiber and HPC data facilities.
                  </p>
                </div>

                <div className="mu-infra-hover-panel">
                  <span className="mu-infra-hover-badge">DATA & NETWORKS</span>
                  <h3 className="mu-infra-hover-title">ICT & Computing Centre</h3>
                  <p className="mu-infra-hover-desc">
                    1 Gbps dedicated NKN optical connectivity powering smart laboratories and campus servers.
                  </p>
                  <div className="mu-infra-hover-metric">
                    <span className="mu-infra-metric-val">1 Gbps NKN</span>
                    <span className="mu-infra-metric-lbl">HPC Data Core</span>
                  </div>
                </div>
              </div>

              <div className="mu-infra-bento-card mu-infra-card-health">
                <div className="mu-infra-img-wrap">
                  <img
                    src="/faculty-science.jpg"
                    alt="University Health Centre"
                    className="mu-infra-img"
                  />
                  <div className="mu-infra-gradient-base"></div>
                </div>

                <div className="mu-infra-content">
                  <div className="mu-infra-tag-row">
                    <span className="mu-infra-badge">WELLNESS</span>
                    <HeartPulse size={15} className="mu-infra-badge-icon" />
                  </div>
                  <h3 className="mu-infra-title">Health Centre</h3>
                  <p className="mu-infra-desc">
                    Primary care, 24/7 emergency, and diagnostics.
                  </p>
                </div>

                <div className="mu-infra-hover-panel">
                  <span className="mu-infra-hover-badge">24/7 HEALTHCARE</span>
                  <h3 className="mu-infra-hover-title">Health Centre</h3>
                  <p className="mu-infra-hover-desc">
                    Resident medical officers, diagnostic labs, pharmacy, and ambulance service.
                  </p>
                  <div className="mu-infra-hover-metric">
                    <span className="mu-infra-metric-val">24/7 Care</span>
                    <span className="mu-infra-metric-lbl">Emergency & Pharmacy</span>
                  </div>
                </div>
              </div>

              <div className="mu-infra-bento-card mu-infra-card-botanical">
                <div className="mu-infra-img-wrap">
                  <img
                    src="/why-campus.jpg"
                    alt="Botanical Garden & Arboretum"
                    className="mu-infra-img"
                  />
                  <div className="mu-infra-gradient-base"></div>
                </div>

                <div className="mu-infra-content">
                  <div className="mu-infra-tag-row">
                    <span className="mu-infra-badge">FLORA</span>
                    <Compass size={15} className="mu-infra-badge-icon" />
                  </div>
                  <h3 className="mu-infra-title">Botanical Garden</h3>
                  <p className="mu-infra-desc">
                    Western Ghats flora, arboretum, and solar park.
                  </p>
                </div>

                <div className="mu-infra-hover-panel">
                  <span className="mu-infra-hover-badge">BIODIVERSITY</span>
                  <h3 className="mu-infra-hover-title">Botanical Garden</h3>
                  <p className="mu-infra-hover-desc">
                    Living repository conserving endemic Western Ghats flora and medicinal plants.
                  </p>
                  <div className="mu-infra-hover-metric">
                    <span className="mu-infra-metric-val">353 Acres</span>
                    <span className="mu-infra-metric-lbl">Green Canopy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: Nationally Recognized Research Centres (Image-Led Editorial Cards)
          ========================================================================= */}
      <section id="research" className="mu-section mu-bg-mist mu-research-section">
        <div className="mu-container">
          <div className="mu-section-header">
            <div>
              <span className="mu-eyebrow">PIONEERING DISCOVERY</span>
              <h2 className="mu-heading">Nationally Recognized Research Centres</h2>
            </div>
          </div>

          <div className="mu-research-scroll-wrapper">
            <div className="mu-research-card-grid">
              {/* Card 1: Microtron Centre */}
              <div className="mu-research-image-card">
                <div className="mu-res-img-wrap">
                  <img
                    src="/news-thumb-2.jpg"
                    alt="Microtron Centre — Advanced Electron Accelerator"
                    className="mu-res-img"
                  />
                  <div className="mu-res-gradient-base"></div>
                </div>

                {/* Default Content */}
                <div className="mu-res-content">
                  <div className="mu-res-meta">
                    <span className="mu-res-badge">DAE / BRNS RECOGNIZED</span>
                    <div className="mu-res-icon-pill"><Radiation size={15} /></div>
                  </div>
                  <h3 className="mu-res-title">Microtron Centre</h3>
                  <p className="mu-res-desc">
                    Advanced electron accelerator facility for radiation physics, polymer modification, and nuclear research.
                  </p>
                </div>

                {/* Hover Reveal Panel */}
                <div className="mu-res-hover-panel">
                  <span className="mu-res-hover-badge">PARTICLE ACCELERATOR</span>
                  <h3 className="mu-res-hover-title">Microtron Centre</h3>
                  <p className="mu-res-hover-desc">
                    Established in collaboration with RRCAT and BARC, conducting frontier research in electron beam technology, radiation physics, and polymer modification.
                  </p>
                  <div className="mu-res-hover-footer">
                    <span className="mu-res-footer-label">Key Research Domains:</span>
                    <span className="mu-res-footer-tags">Radiation Physics • Polymers • Electron Beam Tech</span>
                  </div>
                </div>
              </div>

              {/* Card 2: CARRT */}
              <div className="mu-research-image-card">
                <div className="mu-res-img-wrap">
                  <img
                    src="/why-research.jpg"
                    alt="CARRT — Centre for Application of Radioisotopes"
                    className="mu-res-img"
                  />
                  <div className="mu-res-gradient-base"></div>
                </div>

                <div className="mu-res-content">
                  <div className="mu-res-meta">
                    <span className="mu-res-badge">CENTRE OF EXCELLENCE</span>
                    <div className="mu-res-icon-pill"><Atom size={15} /></div>
                  </div>
                  <h3 className="mu-res-title">CARRT</h3>
                  <p className="mu-res-desc">
                    Frontier applications of radioisotopes in medical physics, nuclear diagnostics, and radiation biology.
                  </p>
                </div>

                <div className="mu-res-hover-panel">
                  <span className="mu-res-hover-badge">RADIOISOTOPE APPLICATIONS</span>
                  <h3 className="mu-res-hover-title">CARRT (Centre for Radiation Tech)</h3>
                  <p className="mu-res-hover-desc">
                    National Centre of Excellence partnered with BRNS and AERB for radiopharmaceutical innovations, radiation sterilization, and agricultural food irradiation.
                  </p>
                  <div className="mu-res-hover-footer">
                    <span className="mu-res-footer-label">Key Research Domains:</span>
                    <span className="mu-res-footer-tags">Radiopharmacy • Food Preservation • Nuclear Medicine</span>
                  </div>
                </div>
              </div>

              {/* Card 3: CAREER & Marine Research Station */}
              <div className="mu-research-image-card">
                <div className="mu-res-img-wrap">
                  <img
                    src="/faculty-marine.jpg"
                    alt="CAREER & Marine Oceanographic Research Station"
                    className="mu-res-img"
                  />
                  <div className="mu-res-gradient-base"></div>
                </div>

                <div className="mu-res-content">
                  <div className="mu-res-meta">
                    <span className="mu-res-badge">COASTAL & OCEANOGRAPHIC</span>
                    <div className="mu-res-icon-pill"><Dna size={15} /></div>
                  </div>
                  <h3 className="mu-res-title">CAREER & Marine Station</h3>
                  <p className="mu-res-desc">
                    Monitoring Arabian Sea sedimentary dynamics, coastal ecology, and marine environmental radioactivity.
                  </p>
                </div>

                <div className="mu-res-hover-panel">
                  <span className="mu-res-hover-badge">COASTAL OCEANOGRAPHY</span>
                  <h3 className="mu-res-hover-title">CAREER & Marine Station</h3>
                  <p className="mu-res-hover-desc">
                    Centre for Advanced Research in Environmental Radioactivity monitoring coastal geomorphology, marine biodiversity conservation, and shoreline oceanography.
                  </p>
                  <div className="mu-res-hover-footer">
                    <span className="mu-res-footer-label">Key Research Domains:</span>
                    <span className="mu-res-footer-tags">Marine Geology • Oceanography • Coastal Ecology</span>
                  </div>
                </div>
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
          SECTION 11: Placement & Career Ecosystem (Split Editorial Visual Layout)
          ========================================================================= */}
      <section id="placement" className="mu-section mu-bg-paper mu-placement-editorial-section">
        <div className="mu-container">
          <div className="mu-placement-split-grid">
            {/* Left Column: Heading, Concise Intro, Stats Row & Primary CTA */}
            <div className="mu-placement-content-left">
              <span className="mu-eyebrow">CAREER & STUDENT SUCCESS</span>
              <h2 className="mu-heading">Placement & Career Ecosystem</h2>
              <p className="mu-placement-p">
                The University Employment Information & Guidance Bureau serves as a career catalyst—coordinating corporate recruitments, competitive examination coaching, industry internships, and international academic fellowships.
              </p>

              {/* Compact Career-Service Detail Cards Grid (4 Cards) */}
              <div className="mu-placement-cards-grid">
                <div className="mu-placement-card">
                  <div className="mu-pcard-body">
                    <h4 className="mu-pcard-title">Campus Recruitment</h4>
                    <p className="mu-pcard-desc">Industry-led hiring drives, corporate interfaces, and active recruiter engagement.</p>
                  </div>
                </div>

                <div className="mu-placement-card">
                  <div className="mu-pcard-body">
                    <h4 className="mu-pcard-title">Career Guidance</h4>
                    <p className="mu-pcard-desc">Individual counselling, alumni mentorship, and competitive-exam preparation.</p>
                  </div>
                </div>

                <div className="mu-placement-card">
                  <div className="mu-pcard-body">
                    <h4 className="mu-pcard-title">Internships & Industry Exposure</h4>
                    <p className="mu-pcard-desc">Practical learning through summer internships and research-corporate partnerships.</p>
                  </div>
                </div>

                <div className="mu-placement-card">
                  <div className="mu-pcard-body">
                    <h4 className="mu-pcard-title">Higher Studies & Fellowships</h4>
                    <p className="mu-pcard-desc">Guidance for doctoral admissions, international fellowships, and national grants.</p>
                  </div>
                </div>
              </div>

              {/* Single Primary CTA */}
              <div className="mu-placement-cta-wrapper">
                <a href="#placement-cell" className="mu-btn mu-btn-gold">
                  Explore Career Services <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Right Column: Large Realistic Student/Career Image with Soft Geometric Framing */}
            <div className="mu-placement-visual-right">
              <div className="mu-placement-visual-frame">
                <div className="mu-placement-glow-backdrop"></div>
                <div className="mu-placement-img-container">
                  <img
                    src="/why-academic.jpg"
                    alt="Mangalore University Students in Career & Academic Progression"
                    className="mu-placement-main-img"
                  />
                  <div className="mu-placement-img-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: News, Events & Official Circulars (Editorial 2-Column Split)
          ========================================================================= */}
      <section id="news" className="mu-section mu-bg-mist mu-news-editorial-section">
        <div className="mu-container">
          <div className="mu-news-top-bar">
            <div>
              <span className="mu-eyebrow">NOTICES & CIRCULARS</span>
              <h2 className="mu-heading">News, Events & Official Circulars</h2>
            </div>
            <a href="#all-notifications" className="mu-news-view-all">
              View All Notifications <ArrowRight size={15} />
            </a>
          </div>

          <div className="mu-news-editorial-grid">
            {/* Left Column: Featured Large Image Card (55-60% width) */}
            <div className="mu-news-featured-col">
              <a href={featuredStory.link} className="mu-news-featured-card">
                <div className="mu-featured-img-wrap">
                  <img
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    className="mu-featured-img"
                  />
                  <div className="mu-featured-gradient-overlay"></div>
                </div>

                <div className="mu-featured-content">
                  <div className="mu-featured-meta">
                    <span className="mu-featured-badge">{featuredStory.category}</span>
                    <span className="mu-featured-date">
                      <Calendar size={13} /> {featuredStory.date}
                    </span>
                  </div>

                  <h3 className="mu-featured-title">{featuredStory.title}</h3>
                  <p className="mu-featured-desc">{featuredStory.desc}</p>

                  <div className="mu-featured-link-action">
                    <span>Read Full Coverage</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </a>
            </div>

            {/* Right Column: Vertically Scrollable List of Secondary Updates (40-45% width) */}
            <div className="mu-news-list-col">
              <div className="mu-news-scroll-container">
                {secondaryNews.map((item) => (
                  <a key={item.id} href={item.link} className="mu-news-compact-item">
                    <div className="mu-item-thumb-wrap">
                      <img src={item.image} alt={item.title} className="mu-item-thumb" />
                    </div>

                    <div className="mu-item-details">
                      <div className="mu-item-meta-row">
                        <span className="mu-item-category">{item.category}</span>
                        <span className="mu-item-date">{item.date}</span>
                      </div>

                      <h4 className="mu-item-title">{item.title}</h4>
                      <p className="mu-item-desc">{item.desc}</p>

                      <div className="mu-item-readmore">
                        <span>Read More</span>
                        <ArrowUpRight size={14} className="mu-item-arrow" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: Student & Alumni Testimonials (Compact 3-Card Carousel)
          ========================================================================= */}
      <section id="testimonials" className="mu-section-compact mu-bg-paper mu-testimonial-section">
        <div className="mu-container">
          {/* Section Header */}
          <div className="mu-section-header mu-text-center" style={{ marginBottom: '32px' }}>
            <span className="mu-eyebrow">VOICES OF MANGALAGANGOTHRI</span>
            <h2 className="mu-heading">Student & Alumni Perspectives</h2>
          </div>

          {/* 3-Card Interactive Carousel Container */}
          <div className="mu-t-carousel-wrapper">
            <div className="mu-t-cards-row">
              {[-1, 0, 1].map((offset) => {
                const index = (activeTestimonial + offset + testimonials.length) % testimonials.length;
                const item = testimonials[index];
                const isCenter = offset === 0;

                return (
                  <div
                    key={`${item.id}-${offset}`}
                    onClick={() => {
                      if (offset === -1) {
                        setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
                      } else if (offset === 1) {
                        setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
                      }
                    }}
                    className={`mu-t-card ${isCenter ? 'mu-t-card-center' : 'mu-t-card-side'}`}
                    role="group"
                    aria-label={`Testimonial by ${item.name}`}
                  >
                    {/* Star Rating */}
                    <div className="mu-t-card-rating">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className={isCenter ? 'mu-star-gold' : 'mu-star-navy'}
                          fill={isCenter ? '#E8A317' : '#0B2A4A'}
                        />
                      ))}
                    </div>

                    {/* Short Testimonial Quote */}
                    <p className="mu-t-card-quote">“{item.quote}”</p>

                    {/* Compact Profile with Name and Programme */}
                    <div className="mu-t-card-profile">
                      <div className={`mu-t-avatar ${isCenter ? 'mu-avatar-center' : 'mu-avatar-side'}`}>
                        {item.avatar}
                      </div>
                      <div className="mu-t-meta">
                        <h4 className="mu-t-name">{item.name}</h4>
                        <span className="mu-t-role">{item.role}</span>
                        <span className="mu-t-batch">{item.batch}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Previous/Next Navigation Arrows & Progress Dots */}
            <div className="mu-t-controls-bar">
              <button
                type="button"
                className="mu-t-arrow-btn"
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                }
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="mu-t-dots-container">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`mu-t-dot-pill ${activeTestimonial === idx ? 'mu-t-dot-pill-active' : ''}`}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="mu-t-arrow-btn"
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                }
                aria-label="Next Testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: Admissions CTA Strip (Compact Horizontal Promotional Banner)
          ========================================================================= */}
      <section id="admissions" className="mu-cta-banner-strip">
        <div className="mu-container">
          <div className="mu-cta-card-wrapper">
            {/* Blended Background Gradient & Campus Texture */}
            <div className="mu-cta-bg-layer">
              <img
                src="/campus-heritage.jpg"
                alt="Mangalore University Campus Background"
                className="mu-cta-bg-img"
              />
              <div className="mu-cta-bg-overlay"></div>
            </div>

            <div className="mu-cta-inner">
              {/* Left Column: Text Content */}
              <div className="mu-cta-left">
                <div className="mu-cta-text-group">
                  <span className="mu-cta-eyebrow">ADMISSIONS 2026–2027</span>
                  <h3 className="mu-cta-title">Begin your journey at Mangalagangothri</h3>
                  <p className="mu-cta-subtitle">
                    Postgraduate, doctoral, and diploma admissions are open via Karnataka UUCMS portal.
                  </p>
                </div>
              </div>

              {/* Right Column: Compact Actions */}
              <div className="mu-cta-actions-right">
                <a href="#uucms-apply" className="mu-btn mu-btn-gold mu-btn-cta-compact">
                  Apply Now <ArrowRight size={14} />
                </a>
                <a href="#download-prospectus" className="mu-btn mu-btn-outline-white mu-btn-cta-compact">
                  <Download size={14} /> Prospectus (PDF)
                </a>
              </div>
            </div>
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
        .mu-page {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          position: relative;
        }

        /* Utility Bar */
        .mu-utility-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1010;
          background: #071D33;
          color: rgba(255, 255, 255, 0.85);
          font-size: 13px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.3s ease, opacity 0.3s ease;
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
          color: rgba(255, 255, 255, 0.85);
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
          color: rgba(255, 255, 255, 0.25);
        }
        .mu-utility-socials {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .mu-social-icon {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s;
        }
        .mu-social-icon:hover {
          color: var(--gold);
        }

        /* Main Header — Fully Seamless Transparent Overlay at Top, Soft Sticky Deep-Navy on Scroll */
        .mu-header {
          position: fixed;
          top: 36px;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: transparent;
          border: none;
          box-shadow: none;
          transition: top 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
          padding: 12px 0;
        }
        .mu-header-scrolled {
          top: 0;
          background-color: rgba(7, 29, 51, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 12px 0;
        }
        .mu-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }
        .mu-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 2px 0;
          margin-right: 24px;
        }
        .mu-brand-logo-img {
          height: 60px;
          width: auto;
          max-width: 420px;
          object-fit: contain;
          display: block;
          filter: none;
          transition: height 0.3s ease;
        }
        .mu-header-scrolled .mu-brand-logo-img {
          height: 52px;
        }
        .mu-footer-brand-wrapper {
          margin-bottom: 24px;
        }
        .mu-footer-logo-img {
          height: 68px;
          width: auto;
          max-width: 400px;
          object-fit: contain;
          display: block;
          filter: none;
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
          color: rgba(255, 255, 255, 0.92);
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
          border-top: 1px solid rgba(255, 255, 255, 0.08);
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

        /* Hero Section (Full Viewport Length 100vh, Lower-Left Aligned with Full-Screen Carousel) */
        .mu-hero-fullscreen {
          position: relative;
          width: 100%;
          min-height: 100vh;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background-color: var(--teal-deep);
          padding-top: 110px;
          padding-bottom: 0;
        }
        .mu-hero-carousel-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .mu-hero-carousel-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(1.03);
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease-out;
          pointer-events: none;
        }
        .mu-hero-carousel-slide.mu-hero-slide-active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }
        .mu-hero-carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 36%;
          display: block;
        }
        /* Refined Readability Gradient: Left & Bottom dark navy for high text contrast */
        .mu-hero-fullscreen-overlay {
          position: absolute;
          inset: 0;
          background: 
            /* Top subtle vignette for lightweight transparent navbar */
            linear-gradient(
              to bottom,
              rgba(7, 29, 51, 0.72) 0%,
              rgba(7, 29, 51, 0.35) 15%,
              transparent 35%
            ),
            /* Left editorial text readability backdrop */
            linear-gradient(
              to right,
              rgba(7, 29, 51, 0.94) 0%,
              rgba(7, 29, 51, 0.85) 35%,
              rgba(7, 29, 51, 0.5) 58%,
              rgba(7, 29, 51, 0.12) 80%,
              transparent 100%
            ),
            /* Soft continuous bottom dissolve into the Flash News background (#071D33) */
            linear-gradient(
              to bottom,
              transparent 0%,
              transparent 50%,
              rgba(7, 29, 51, 0.45) 72%,
              rgba(7, 29, 51, 0.88) 90%,
              #071D33 100%
            );
        }
        .mu-hero-fullscreen-content {
          position: relative;
          z-index: 2;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 32px;
        }
        .mu-hero-text-panel {
          max-width: 600px;
          margin-bottom: 0;
        }
        .mu-hero-badge-row {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          background: rgba(7, 29, 51, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 163, 23, 0.35);
          border-radius: 20px;
          margin-bottom: 14px;
        }
        .mu-hero-pill-tag {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .mu-hero-pill-divider {
          color: rgba(255, 255, 255, 0.35);
          font-size: 10px;
        }
        .mu-hero-pill-estd {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.06em;
        }
        .mu-hero-fullscreen-headline {
          font-family: var(--font-heading);
          font-size: clamp(30px, 3.4vw, 44px);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.18;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          max-width: 580px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
        }
        .mu-hero-fullscreen-subtext {
          font-size: 15px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 0;
          max-width: 520px;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
        }

        /* Flash News Ticker — Emerging seamlessly from the Hero Dissolve */
        .mu-ticker-band {
          width: 100%;
          height: 54px;
          background-color: #071D33;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }
        .mu-ticker-container {
          display: flex;
          align-items: center;
          height: 100%;
          gap: 20px;
        }
        .mu-ticker-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #D92525;
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: var(--radius);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          flex-shrink: 0;
          z-index: 2;
        }
        .mu-ticker-dot {
          width: 7px;
          height: 7px;
          background-color: #FFFFFF;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        .mu-ticker-track {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }
        .mu-ticker-content {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          animation: tickerScroll 32s linear infinite;
        }
        .mu-ticker-track:hover .mu-ticker-content {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .mu-ticker-item {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
        }
        .mu-ticker-item:hover {
          color: var(--gold);
        }
        .mu-ticker-date {
          background-color: rgba(255, 255, 255, 0.12);
          color: var(--gold);
          font-size: 10.5px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 2px;
          letter-spacing: 0.04em;
        }
        .mu-ticker-sep {
          color: rgba(255, 255, 255, 0.3);
          font-size: 14px;
        }

        /* About Section */
        .mu-about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 72px;
          align-items: center;
        }
        .mu-about-image-wrapper {
          position: relative;
        }
        .mu-about-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: var(--radius);
          border: 1px solid var(--line);
        }
        .mu-about-milestone {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background-color: var(--teal);
          color: #FFFFFF;
          padding: 18px 24px;
          border-radius: var(--radius);
          border-left: 3.5px solid var(--gold);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        .mu-milestone-year {
          display: block;
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 600;
          color: var(--gold);
        }
        .mu-milestone-text {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.85);
        }
        .mu-about-p {
          font-size: 16.5px;
          color: var(--ink-soft);
          margin-bottom: 18px;
          line-height: 1.65;
          max-width: 660px;
        }
        /* =========================================================================
           SECTION 04B: Vice-Chancellor's Message (Minimalist Editorial Layout)
           ========================================================================= */
        .mu-vc-editorial-section {
          padding: 68px 0 76px 0;
          background-color: var(--paper);
          border-top: 1px solid var(--line-soft);
          width: 100%;
        }
        .mu-vc-editorial-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1120px;
          margin: 0 auto;
        }

        /* Left Portrait Cutout Column */
        .mu-vc-portrait-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .mu-vc-cutout-frame {
          position: relative;
          width: 220px;
          height: 250px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          margin-bottom: 16px;
        }
        .mu-vc-cutout-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
          display: block;
          filter: drop-shadow(0 10px 20px rgba(11, 42, 74, 0.12));
          /* Mask image for seamless bottom dissolve blend into background */
          -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        }
        .mu-vc-cutout-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 36px;
          background: linear-gradient(to bottom, transparent, var(--paper));
          pointer-events: none;
        }
        .mu-vc-signoff-block {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mu-vc-signoff-name {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 700;
          color: var(--teal);
          margin: 0 0 3px 0;
          line-height: 1.25;
        }
        .mu-vc-signoff-title {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: var(--gold-deep);
          margin-bottom: 1px;
        }
        .mu-vc-signoff-inst {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--ink-soft);
        }

        /* Right Message Content Column */
        .mu-vc-message-col {
          display: flex;
          flex-direction: column;
        }
        .mu-vc-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .mu-vc-eyebrow-accent {
          margin-bottom: 0 !important;
          color: var(--blue) !important;
        }
        .mu-vc-editorial-quote-mark {
          color: var(--gold);
          opacity: 0.9;
          stroke-width: 1.5;
        }
        .mu-vc-editorial-lead {
          font-family: var(--font-quote, 'Fraunces', Georgia, serif);
          font-size: clamp(20px, 2.1vw, 25px);
          font-style: italic;
          font-weight: 400;
          color: var(--teal);
          line-height: 1.45;
          margin: 0 0 18px 0;
          letter-spacing: -0.01em;
        }
        .mu-vc-editorial-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 680px;
        }
        .mu-vc-editorial-body p {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--ink-soft);
          margin: 0;
        }

        @media (max-width: 860px) {
          .mu-vc-editorial-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
          }
          .mu-vc-portrait-col {
            margin: 0 auto;
          }
          .mu-vc-header-row {
            justify-content: center;
            gap: 16px;
          }
          .mu-vc-editorial-body {
            margin: 0 auto;
          }
        }
        .mu-link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--blue);
          font-weight: 600;
          font-size: 15px;
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
          padding: 24px 28px;
          border-right: 1px solid var(--line);
          text-align: center;
        }
        .mu-stat-card-last {
          border-right: none;
        }
        .mu-stat-number {
          font-family: var(--font-serif);
          font-size: clamp(38px, 3.8vw, 54px);
          font-weight: 500;
          color: var(--teal);
          margin-bottom: 8px;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .mu-stat-label {
          font-size: 14px;
          color: var(--ink-soft);
          font-weight: 500;
          line-height: 1.4;
        }

        /* Why Study Section (Asymmetrical Editorial Visual Grid) */
        .mu-section-header-center {
          text-align: center;
          margin-bottom: 48px;
        }

        .mu-why-asym-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
          width: 100%;
        }

        /* Base Card Styling */
        .mu-why-card {
          position: relative;
          background: #FFFFFF;
          border-radius: var(--radius);
          border: 1px solid var(--line);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(7, 29, 51, 0.04);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          cursor: pointer;
        }
        .mu-why-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(7, 29, 51, 0.12);
          border-color: var(--blue);
        }

        /* Left Hero Card (Tall Portrait Structure) */
        .mu-why-card-tall {
          height: 560px;
        }
        .mu-why-card-tall .mu-why-image-wrapper {
          height: 380px;
        }
        .mu-why-card-tall .mu-why-content-panel {
          padding: 24px 28px 26px;
        }

        /* Right Column (Stacked Rhythm) */
        .mu-why-right-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
          height: 560px;
        }
        .mu-why-card-wide {
          flex: 1;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          overflow: hidden;
        }
        .mu-why-card-wide .mu-why-image-wrapper {
          height: 100%;
          min-height: 100%;
        }
        .mu-why-card-wide .mu-why-content-panel {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Image & Overlays */
        .mu-why-image-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: var(--navy);
        }
        .mu-why-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }
        .mu-why-card:hover .mu-why-img {
          transform: scale(1.05);
          filter: brightness(0.6);
        }
        .mu-why-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7, 29, 51, 0.1) 0%, rgba(7, 29, 51, 0.4) 100%);
          pointer-events: none;
        }

        /* Content Panels */
        .mu-why-content-panel {
          background: #FFFFFF;
          border-top: 2px solid rgba(11, 42, 74, 0.08);
        }
        .mu-why-card-wide .mu-why-content-panel {
          border-top: none;
          border-left: 2px solid rgba(11, 42, 74, 0.08);
        }
        .mu-why-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--blue);
          display: block;
          margin-bottom: 6px;
        }
        .mu-why-title {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: 600;
          color: var(--teal);
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .mu-why-desc {
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.55;
          margin: 0;
        }

        /* Hover Reveal State */
        .mu-why-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(7, 29, 51, 0.96) 0%, rgba(11, 42, 74, 0.98) 100%);
          color: #FFFFFF;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s;
          z-index: 10;
          border-top: 4px solid var(--gold);
        }
        .mu-why-card:hover .mu-why-hover-overlay {
          opacity: 1;
          visibility: visible;
        }
        .mu-why-hover-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 6px;
        }
        .mu-why-hover-title {
          font-family: var(--font-serif);
          font-size: 21px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 10px 0;
          line-height: 1.25;
        }
        .mu-why-hover-desc {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.55;
          margin: 0 0 16px 0;
          flex: 1;
        }
        .mu-why-hover-metric {
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mu-why-metric-val {
          font-family: var(--font-serif);
          font-size: 18px;
          font-weight: 600;
          color: var(--gold);
        }
        .mu-why-metric-lbl {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Faculties Section (Horizontal Scrollable Card Showcase) */
        .mu-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 44px;
          gap: 32px;
        }
        .mu-faculty-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
          max-width: 520px;
        }
        .mu-faculty-header-right .mu-body-lead {
          margin-bottom: 0;
          text-align: right;
        }
        /* Faculties Section (Screen-Fit Modern Card Grid) */
        .mu-faculty-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          padding: 8px 0 16px 0;
          width: 100%;
        }

        .mu-faculty-hcard {
          width: 100%;
          position: relative;
          background: #FFFFFF;
          border-radius: var(--radius);
          border: 1px solid var(--line);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 440px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          cursor: pointer;
        }
        .mu-faculty-hcard:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(7, 29, 51, 0.16);
          border-color: var(--accent-color, var(--blue));
        }

        /* Default Image Section */
        .mu-hcard-image-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background-color: var(--navy);
        }
        .mu-hcard-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease, filter 0.5s ease;
        }
        .mu-faculty-hcard:hover .mu-hcard-img {
          transform: scale(1.06);
          filter: brightness(0.65);
        }
        .mu-hcard-top-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.5) 100%);
          pointer-events: none;
        }
        .mu-hcard-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
          backdrop-filter: blur(4px);
        }

        /* Default Content Section */
        .mu-hcard-content {
          padding: 22px 20px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background: #FFFFFF;
          border-top: 3px solid var(--accent-color, var(--blue));
        }
        .mu-hcard-category {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-color, var(--blue));
          margin-bottom: 6px;
          display: block;
        }
        .mu-hcard-title {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: 600;
          color: var(--teal);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .mu-hcard-desc {
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.55;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hover Overlay State: Deep Navy Smooth Transition */
        .mu-hcard-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(7, 29, 51, 0.96) 0%, rgba(11, 42, 74, 0.98) 100%);
          color: #FFFFFF;
          padding: 26px 22px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s;
          z-index: 10;
          border-top: 4px solid var(--gold);
        }
        .mu-faculty-hcard:hover .mu-hcard-hover-overlay {
          opacity: 1;
          visibility: visible;
        }
        .mu-hcard-hover-category {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 6px;
        }
        .mu-hcard-hover-title {
          font-family: var(--font-serif);
          font-size: 21px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 10px 0;
          line-height: 1.25;
        }
        .mu-hcard-hover-desc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin: 0 0 14px 0;
        }
        .mu-hcard-hover-progs {
          flex: 1;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 12px;
          margin-bottom: 14px;
        }
        .mu-hcard-prog-label {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 8px;
        }
        .mu-hcard-prog-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .mu-hcard-prog-list li {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.92);
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1.35;
        }
        .mu-hcard-prog-bullet {
          color: var(--gold);
          font-size: 14px;
        }
        .mu-hcard-hover-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background-color: var(--gold);
          color: var(--teal);
          font-size: 13px;
          font-weight: 700;
          padding: 10px 16px;
          border-radius: 3px;
          text-decoration: none;
          transition: background-color 0.2s, transform 0.2s;
        }
        .mu-hcard-hover-link:hover {
          background-color: #FFC038;
          transform: translateY(-1px);
        }

        /* =========================================================================
           SECTION 08: Campus & Infrastructure (Single-Screen Editorial Bento Grid)
           ========================================================================= */
        .mu-infra-editorial-section {
          padding: 56px 0 64px 0;
          background-color: var(--paper);
        }
        .mu-infra-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
          gap: 24px;
        }
        .mu-heading-tight {
          font-family: var(--font-heading);
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 700;
          color: var(--teal);
          line-height: 1.2;
          margin: 0;
        }
        .mu-infra-tagline {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 14px;
          color: var(--ink-soft);
          max-width: 520px;
          text-align: right;
          line-height: 1.45;
        }

        /* Bento Grid: 40% Hero on Left, 60% 5-Tile Mosaic on Right */
        .mu-infra-bento-grid {
          display: grid;
          grid-template-columns: 42% 58%;
          gap: 16px;
          height: 520px;
        }

        /* Generic Bento Card */
        .mu-infra-bento-card {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          background-color: var(--teal-deep);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 14px rgba(11, 42, 74, 0.08);
        }
        .mu-infra-bento-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(11, 42, 74, 0.16);
        }

        /* Left Hero Card: Spans full 520px height */
        .mu-infra-bento-hero {
          height: 100%;
        }

        /* Right 5-Tile Nested Container */
        .mu-infra-bento-right {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: 1fr 1fr;
          gap: 16px;
          height: 100%;
        }

        /* Row 1 Tiles */
        .mu-infra-card-sports {
          grid-column: span 4;
        }
        .mu-infra-card-hostels {
          grid-column: span 2;
        }

        /* Row 2 Tiles (3 equal 2-col cards) */
        .mu-infra-card-ict {
          grid-column: span 2;
        }
        .mu-infra-card-health {
          grid-column: span 2;
        }
        .mu-infra-card-botanical {
          grid-column: span 2;
        }

        /* Image & Gradients */
        .mu-infra-img-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .mu-infra-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-infra-bento-card:hover .mu-infra-img {
          transform: scale(1.05);
        }
        .mu-infra-gradient-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(7, 29, 51, 0.04) 0%,
            rgba(7, 29, 51, 0.35) 40%,
            rgba(7, 29, 51, 0.82) 72%,
            rgba(7, 29, 51, 0.96) 100%
          );
        }

        /* Default Content State */
        .mu-infra-content {
          position: relative;
          z-index: 2;
          padding: 16px 20px 18px 20px;
          color: #FFFFFF;
          pointer-events: none;
        }
        .mu-infra-bento-hero .mu-infra-content {
          padding: 24px 26px 26px 26px;
        }
        .mu-infra-tag-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }
        .mu-infra-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background-color: var(--gold);
          color: var(--teal-deep);
          padding: 2px 7px;
          border-radius: 3px;
        }
        .mu-infra-badge-icon {
          color: var(--gold);
        }
        .mu-infra-title {
          font-family: var(--font-heading);
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 4px 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .mu-infra-bento-hero .mu-infra-title {
          font-size: clamp(19px, 1.9vw, 24px);
          margin-bottom: 8px;
        }
        .mu-infra-desc {
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-infra-bento-hero .mu-infra-desc {
          font-size: 14px;
          line-height: 1.55;
          -webkit-line-clamp: 3;
        }

        /* Hover Reveal Panel */
        .mu-infra-hover-panel {
          position: absolute;
          inset: 0;
          z-index: 4;
          background: rgba(7, 29, 51, 0.95);
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-infra-bento-hero .mu-infra-hover-panel {
          padding: 32px 28px;
        }
        .mu-infra-bento-card:hover .mu-infra-hover-panel {
          opacity: 1;
          pointer-events: auto;
        }
        .mu-infra-hover-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          display: inline-block;
          margin-bottom: 6px;
        }
        .mu-infra-hover-title {
          font-family: var(--font-heading);
          font-size: clamp(15px, 1.5vw, 19px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }
        .mu-infra-bento-hero .mu-infra-hover-title {
          font-size: clamp(20px, 2vw, 24px);
          margin-bottom: 10px;
        }
        .mu-infra-hover-desc {
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 10px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-infra-bento-hero .mu-infra-hover-desc {
          font-size: 14px;
          line-height: 1.55;
          -webkit-line-clamp: 4;
          margin-bottom: 16px;
        }
        .mu-infra-hover-metric {
          display: flex;
          align-items: baseline;
          gap: 8px;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        .mu-infra-metric-val {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          color: var(--gold);
        }
        .mu-infra-metric-lbl {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 500;
        }

        /* =========================================================================
           SECTION 09: Nationally Recognized Research Centres (Image-Led Editorial)
           ========================================================================= */
        .mu-research-section {
          padding: 88px 0;
        }
        .mu-research-scroll-wrapper {
          width: 100%;
        }
        .mu-research-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .mu-research-image-card {
          position: relative;
          height: 420px;
          border-radius: 6px;
          overflow: hidden;
          background-color: var(--teal-deep);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          box-shadow: 0 4px 18px rgba(11, 42, 74, 0.09);
        }
        .mu-research-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(11, 42, 74, 0.2);
        }

        /* Image & Gradients */
        .mu-res-img-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .mu-res-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-research-image-card:hover .mu-res-img {
          transform: scale(1.06);
        }
        .mu-res-gradient-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(7, 29, 51, 0.08) 0%,
            rgba(7, 29, 51, 0.4) 40%,
            rgba(7, 29, 51, 0.85) 72%,
            rgba(7, 29, 51, 0.98) 100%
          );
        }

        /* Default Content State */
        .mu-res-content {
          position: relative;
          z-index: 2;
          padding: 24px 24px 26px 24px;
          color: #FFFFFF;
          pointer-events: none;
        }
        .mu-res-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .mu-res-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background-color: var(--gold);
          color: var(--teal-deep);
          padding: 3px 8px;
          border-radius: 3px;
        }
        .mu-res-icon-pill {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.16);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mu-res-title {
          font-family: var(--font-heading);
          font-size: clamp(19px, 1.8vw, 23px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }
        .mu-res-desc {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hover Reveal Panel */
        .mu-res-hover-panel {
          position: absolute;
          inset: 0;
          z-index: 4;
          background: rgba(7, 29, 51, 0.95);
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-research-image-card:hover .mu-res-hover-panel {
          opacity: 1;
          pointer-events: auto;
        }
        .mu-res-hover-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          display: inline-block;
          margin-bottom: 8px;
        }
        .mu-res-hover-title {
          font-family: var(--font-heading);
          font-size: clamp(19px, 1.9vw, 23px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 10px 0;
          line-height: 1.25;
        }
        .mu-res-hover-desc {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 16px 0;
        }
        .mu-res-hover-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 12px;
        }
        .mu-res-footer-label {
          display: block;
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          font-weight: 700;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .mu-res-footer-tags {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.4;
        }

        /* Campus Full-Bleed Section */
        .mu-campus-break {
          position: relative;
          min-height: 580px;
          background: #071D33 url('/coastal-campus.jpg') center/cover no-repeat;
          display: flex;
          align-items: flex-end;
          padding: 96px 0;
          width: 100%;
        }
        .mu-campus-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(7, 29, 51, 0.94) 0%, rgba(7, 29, 51, 0.65) 50%, rgba(7, 29, 51, 0.2) 100%);
        }
        .mu-campus-content {
          position: relative;
          z-index: 2;
        }
        .mu-campus-text-card {
          max-width: 720px;
        }
        .mu-campus-heading {
          color: #FFFFFF;
          font-size: clamp(32px, 4vw, 48px);
          margin-bottom: 18px;
        }
        .mu-campus-desc {
          color: rgba(255, 255, 255, 0.88);
          font-size: 17px;
          line-height: 1.65;
          margin-bottom: 32px;
        }

        /* =========================================================================
           SECTION 11: Placement & Career Ecosystem (Split Editorial Visual Layout)
           ========================================================================= */
        .mu-placement-editorial-section {
          padding: 84px 0;
          background-color: var(--paper);
        }
        .mu-placement-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }
        .mu-placement-content-left {
          display: flex;
          flex-direction: column;
        }
        .mu-placement-p {
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 28px;
          max-width: 580px;
        }

        /* Compact Career-Service Detail Cards Grid (4 Cards) */
        .mu-placement-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        .mu-placement-card {
          padding: 16px;
          background: #FFFFFF;
          border: 1px solid rgba(11, 42, 74, 0.08);
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(11, 42, 74, 0.03);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .mu-placement-card:hover {
          transform: translateY(-2px);
          border-color: rgba(232, 163, 23, 0.4);
          box-shadow: 0 6px 16px rgba(11, 42, 74, 0.07);
        }
        .mu-pcard-body {
          width: 100%;
        }
        .mu-pcard-title {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--teal);
          margin: 0 0 4px 0;
          line-height: 1.3;
        }
        .mu-pcard-desc {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0;
        }

        .mu-placement-cta-wrapper {
          display: flex;
          align-items: center;
        }

        /* Right Visual: Soft Geometric Frame with Floating Badges */
        .mu-placement-visual-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mu-placement-visual-frame {
          position: relative;
          width: 100%;
          max-width: 440px;
        }
        .mu-placement-glow-backdrop {
          position: absolute;
          inset: -14px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(232, 163, 23, 0.12) 0%, rgba(11, 42, 74, 0.08) 100%);
          z-index: 1;
        }
        .mu-placement-img-container {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 380px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(11, 42, 74, 0.14);
          border: 2px solid #FFFFFF;
        }
        .mu-placement-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-placement-visual-frame:hover .mu-placement-main-img {
          transform: scale(1.04);
        }
        .mu-placement-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(7, 29, 51, 0.45) 100%);
          pointer-events: none;
        }

        @media (max-width: 991px) {
          .mu-placement-split-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .mu-placement-visual-frame {
            max-width: 480px;
          }
          .mu-placement-img-container {
            height: 340px;
          }
        }
        @media (max-width: 640px) {
          .mu-placement-cards-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .mu-placement-img-container {
            height: 280px;
          }
        }

        /* =========================================================================
           SECTION 12: News, Events & Official Circulars (Editorial 2-Column Split)
           ========================================================================= */
        .mu-news-editorial-section {
          padding: 88px 0;
        }
        .mu-news-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 36px;
        }
        .mu-news-view-all {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: var(--blue);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
          padding: 6px 12px;
          border-radius: 4px;
          background: rgba(30, 78, 121, 0.06);
        }
        .mu-news-view-all:hover {
          color: var(--teal);
          background: rgba(30, 78, 121, 0.12);
          transform: translateX(3px);
        }

        /* 2-Column Grid: 58% Featured / 42% Scrollable List */
        .mu-news-editorial-grid {
          display: grid;
          grid-template-columns: 58% 42%;
          gap: 32px;
          align-items: stretch;
        }

        /* Left Column: Featured Card */
        .mu-news-featured-col {
          display: flex;
        }
        .mu-news-featured-card {
          position: relative;
          width: 100%;
          min-height: 520px;
          border-radius: 6px;
          overflow: hidden;
          background-color: var(--teal-deep);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-shadow: 0 4px 20px rgba(11, 42, 74, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mu-news-featured-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(11, 42, 74, 0.16);
        }
        .mu-featured-img-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .mu-featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-news-featured-card:hover .mu-featured-img {
          transform: scale(1.03);
        }
        .mu-featured-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(7, 29, 51, 0.1) 0%,
            rgba(7, 29, 51, 0.45) 45%,
            rgba(7, 29, 51, 0.88) 75%,
            rgba(7, 29, 51, 0.98) 100%
          );
        }
        .mu-featured-content {
          position: relative;
          z-index: 2;
          padding: 32px 36px 36px 36px;
          color: #FFFFFF;
        }
        .mu-featured-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .mu-featured-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background-color: var(--gold);
          color: var(--teal-deep);
          padding: 4px 10px;
          border-radius: 3px;
        }
        .mu-featured-date {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .mu-featured-title {
          font-family: var(--font-quote, 'Fraunces', Georgia, serif);
          font-size: clamp(22px, 2.2vw, 29px);
          font-weight: 500;
          line-height: 1.3;
          color: #FFFFFF;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .mu-featured-desc {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 14.5px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-featured-link-action {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--gold);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.02em;
          transition: gap 0.2s ease;
        }
        .mu-news-featured-card:hover .mu-featured-link-action {
          gap: 10px;
        }

        /* Right Column: Vertically Scrollable List */
        .mu-news-list-col {
          display: flex;
          flex-direction: column;
        }
        .mu-news-scroll-container {
          height: 520px;
          overflow-y: auto;
          padding-right: 10px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          scrollbar-width: thin;
          scrollbar-color: rgba(11, 42, 74, 0.25) transparent;
        }
        .mu-news-scroll-container::-webkit-scrollbar {
          width: 5px;
        }
        .mu-news-scroll-container::-webkit-scrollbar-track {
          background: rgba(11, 42, 74, 0.04);
          border-radius: 4px;
        }
        .mu-news-scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(11, 42, 74, 0.25);
          border-radius: 4px;
        }
        .mu-news-scroll-container::-webkit-scrollbar-thumb:hover {
          background-color: var(--blue);
        }

        /* Compact Item */
        .mu-news-compact-item {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 16px;
          background: #FFFFFF;
          border: 1px solid rgba(11, 42, 74, 0.08);
          border-radius: 5px;
          padding: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .mu-news-compact-item:hover {
          border-color: rgba(11, 42, 74, 0.22);
          box-shadow: 0 4px 14px rgba(11, 42, 74, 0.07);
          transform: translateX(4px);
        }
        .mu-item-thumb-wrap {
          width: 110px;
          height: 88px;
          border-radius: 4px;
          overflow: hidden;
          background-color: var(--mist);
          flex-shrink: 0;
        }
        .mu-item-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .mu-news-compact-item:hover .mu-item-thumb {
          transform: scale(1.06);
        }
        .mu-item-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 0;
        }
        .mu-item-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 4px;
        }
        .mu-item-category {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--blue);
          letter-spacing: 0.04em;
        }
        .mu-item-date {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          font-weight: 500;
          color: var(--ink-soft);
        }
        .mu-item-title {
          font-family: var(--font-quote, 'Fraunces', Georgia, serif);
          font-size: 15px;
          font-weight: 500;
          line-height: 1.35;
          color: var(--teal);
          margin: 0 0 4px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-news-compact-item:hover .mu-item-title {
          color: var(--blue);
        }
        .mu-item-desc {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 12.5px;
          line-height: 1.45;
          color: var(--ink-soft);
          margin: 0 0 6px 0;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-item-readmore {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 12px;
          font-weight: 600;
          color: var(--teal);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }
        .mu-news-compact-item:hover .mu-item-readmore {
          color: var(--gold-deep);
          gap: 6px;
        }
        .mu-item-arrow {
          transition: transform 0.2s ease;
        }
        .mu-news-compact-item:hover .mu-item-arrow {
          transform: translate(2px, -2px);
        }

        /* =========================================================================
           SECTION 13: Student & Alumni Testimonials (Compact 3-Card Carousel)
           ========================================================================= */
        .mu-testimonial-section {
          padding: 72px 0;
          background-color: var(--mist);
          border-top: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
          width: 100%;
        }
        .mu-t-carousel-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }
        .mu-t-cards-row {
          display: grid;
          grid-template-columns: 1fr 1.15fr 1fr;
          gap: 22px;
          align-items: center;
          width: 100%;
          margin-bottom: 32px;
        }

        /* Testimonial Card Base */
        .mu-t-card {
          border-radius: 8px;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.35s ease;
          cursor: pointer;
        }

        /* Center Card: Deep Navy Highlight */
        .mu-t-card-center {
          background-color: #071D33;
          color: #FFFFFF;
          border: 1px solid rgba(232, 163, 23, 0.35);
          box-shadow: 0 12px 36px rgba(7, 29, 51, 0.22);
          transform: scale(1.04);
          z-index: 2;
        }
        .mu-t-card-center:hover {
          transform: scale(1.06) translateY(-2px);
          box-shadow: 0 16px 42px rgba(7, 29, 51, 0.28);
        }

        /* Side Cards: White / Soft Light-Blue */
        .mu-t-card-side {
          background-color: #FFFFFF;
          color: var(--ink);
          border: 1px solid rgba(11, 42, 74, 0.08);
          box-shadow: 0 4px 16px rgba(11, 42, 74, 0.06);
          opacity: 0.88;
        }
        .mu-t-card-side:hover {
          opacity: 1;
          transform: translateY(-2px);
          border-color: rgba(11, 42, 74, 0.18);
        }

        /* Rating Stars */
        .mu-t-card-rating {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-bottom: 12px;
        }
        .mu-star-gold {
          color: var(--gold);
        }
        .mu-star-navy {
          color: var(--teal);
        }

        /* Quote Text */
        .mu-t-card-quote {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0 0 18px 0;
          flex: 1;
        }
        .mu-t-card-center .mu-t-card-quote {
          color: rgba(255, 255, 255, 0.92);
        }
        .mu-t-card-side .mu-t-card-quote {
          color: var(--ink-soft);
        }

        /* Profile Block */
        .mu-t-card-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .mu-t-card-side .mu-t-card-profile {
          border-top: 1px solid var(--line-soft);
        }
        .mu-t-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .mu-avatar-center {
          background-color: var(--gold);
          color: var(--teal-deep);
        }
        .mu-avatar-side {
          background-color: var(--mist);
          color: var(--teal);
          border: 1px solid rgba(11, 42, 74, 0.1);
        }
        .mu-t-meta {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .mu-t-name {
          font-family: var(--font-heading);
          font-size: 13.5px;
          font-weight: 700;
          margin: 0 0 1px 0;
          line-height: 1.25;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mu-t-card-center .mu-t-name {
          color: #FFFFFF;
        }
        .mu-t-card-side .mu-t-name {
          color: var(--teal);
        }
        .mu-t-role {
          font-family: var(--font-body);
          font-size: 11.5px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mu-t-card-center .mu-t-role {
          color: var(--gold);
        }
        .mu-t-card-side .mu-t-role {
          color: var(--blue);
        }
        .mu-t-batch {
          font-family: var(--font-body);
          font-size: 10.5px;
          color: rgba(255, 255, 255, 0.6);
        }
        .mu-t-card-side .mu-t-batch {
          color: var(--ink-soft);
        }

        /* Carousel Controls Bar (Arrows & Dots) */
        .mu-t-controls-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .mu-t-arrow-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--line-soft);
          background: #FFFFFF;
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(11, 42, 74, 0.06);
          transition: all 0.2s ease;
        }
        .mu-t-arrow-btn:hover {
          border-color: var(--gold);
          background-color: var(--teal);
          color: #FFFFFF;
          transform: scale(1.05);
        }
        .mu-t-dots-container {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mu-t-dot-pill {
          width: 8px;
          height: 6px;
          border-radius: 3px;
          background-color: rgba(11, 42, 74, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }
        .mu-t-dot-pill-active {
          background-color: var(--gold);
          width: 22px;
        }

        @media (max-width: 900px) {
          .mu-t-cards-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .mu-t-card-side {
            display: none;
          }
          .mu-t-card-center {
            transform: none;
          }
          .mu-t-card-center:hover {
            transform: none;
          }
        }

        /* =========================================================================
           SECTION 14: Admissions CTA Strip (Compact Horizontal Promotional Banner)
           ========================================================================= */
        .mu-cta-banner-strip {
          padding: 36px 0;
          background-color: var(--paper);
          width: 100%;
        }
        .mu-cta-card-wrapper {
          position: relative;
          width: 100%;
          min-height: 128px;
          border-radius: 10px;
          overflow: hidden;
          background-color: #071D33;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 30px rgba(7, 29, 51, 0.16);
          display: flex;
          align-items: center;
        }
        .mu-cta-bg-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .mu-cta-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          opacity: 0.18;
          filter: grayscale(40%);
        }
        .mu-cta-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(7, 29, 51, 0.98) 0%,
            rgba(7, 29, 51, 0.94) 50%,
            rgba(7, 29, 51, 0.78) 100%
          );
        }
        .mu-cta-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 24px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }
        .mu-cta-left {
          display: flex;
          align-items: center;
          flex: 1;
        }
        .mu-cta-text-group {
          display: flex;
          flex-direction: column;
        }
        .mu-cta-eyebrow {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }
        .mu-cta-title {
          font-family: var(--font-heading);
          font-size: clamp(18px, 1.8vw, 22px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 3px 0;
          line-height: 1.25;
        }
        .mu-cta-subtitle {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.4;
        }
        .mu-cta-actions-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .mu-btn-cta-compact {
          padding: 9px 18px !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          border-radius: 4px !important;
        }

        @media (max-width: 900px) {
          .mu-cta-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            padding: 24px;
          }
          .mu-cta-actions-right {
            width: 100%;
            justify-content: flex-start;
          }
        }
        @media (max-width: 560px) {
          .mu-cta-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .mu-cta-actions-right {
            flex-direction: column;
            width: 100%;
          }
          .mu-cta-actions-right .mu-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Footer */
        .mu-footer {
          background-color: var(--teal-deep);
          color: rgba(255, 255, 255, 0.7);
          padding: 80px 0 36px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
        }
        .mu-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 56px;
          margin-bottom: 60px;
        }
        .mu-footer-brand-wrapper {
          margin-bottom: 20px;
        }
        .mu-footer-address {
          font-size: 14.5px;
          line-height: 1.65;
          margin-bottom: 18px;
          max-width: 320px;
        }
        .mu-footer-contact p {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          margin-bottom: 8px;
        }
        .mu-footer-col-title {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          margin-bottom: 22px;
        }
        .mu-footer-links {
          list-style: none;
        }
        .mu-footer-links li {
          margin-bottom: 12px;
        }
        .mu-footer-links a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 14.5px;
          transition: color 0.2s;
        }
        .mu-footer-links a:hover {
          color: var(--gold);
        }
        .mu-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13.5px;
        }
        .mu-footer-legal {
          display: flex;
          align-items: center;
          gap: 14px;
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
        @media (max-width: 1200px) {
          .mu-faculty-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .mu-infra-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 960px) {
          .mu-header {
            top: 36px;
          }
          .mu-nav-desktop {
            display: none;
          }
          .mu-mobile-toggle {
            display: block;
          }
          .mu-hero-fullscreen {
            min-height: 80vh;
            padding-top: 100px;
          }
          .mu-faculty-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .mu-about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .mu-about-milestone {
            right: 12px;
            bottom: -12px;
          }
          .mu-why-asym-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .mu-why-card-tall {
            height: auto;
          }
          .mu-why-card-tall .mu-why-image-wrapper {
            height: 280px;
          }
          .mu-why-right-stack {
            height: auto;
            gap: 24px;
          }
          .mu-why-card-wide {
            grid-template-columns: 1fr;
            height: auto;
          }
          .mu-why-card-wide .mu-why-image-wrapper {
            height: 220px;
          }
          .mu-why-card-wide .mu-why-content-panel {
            border-left: none;
            border-top: 2px solid rgba(11, 42, 74, 0.08);
          }
          .mu-careers-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .mu-infra-bento-grid {
            grid-template-columns: 1fr;
            height: auto;
            gap: 16px;
          }
          .mu-infra-bento-hero {
            height: 320px;
          }
          .mu-infra-bento-right {
            height: auto;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 16px;
          }
          .mu-infra-card-sports {
            grid-column: span 2;
            height: 220px;
          }
          .mu-infra-card-hostels,
          .mu-infra-card-ict,
          .mu-infra-card-health,
          .mu-infra-card-botanical {
            grid-column: span 1;
            height: 200px;
          }
          .mu-news-editorial-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .mu-news-featured-card {
            min-height: 440px;
          }
          .mu-news-scroll-container {
            height: auto;
            max-height: 520px;
          }
          .mu-research-scroll-wrapper {
            overflow-x: auto;
            padding-bottom: 16px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
            scrollbar-color: rgba(11, 42, 74, 0.25) transparent;
          }
          .mu-research-card-grid {
            grid-template-columns: repeat(3, 310px);
            gap: 18px;
            width: max-content;
          }
          .mu-research-image-card {
            height: 380px;
          }
          .mu-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 860px) {
          .mu-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mu-stat-card {
            border-right: none;
            border-bottom: 1px solid var(--line);
            padding: 20px 12px;
          }
        }

        @media (max-width: 720px) {
          .mu-utility-bar {
            display: none;
          }
          .mu-header {
            top: 0;
            padding: 10px 0;
          }
          .mu-brand-logo-img {
            height: 48px;
          }
          .mu-hero-fullscreen {
            min-height: 75vh;
            padding-top: 80px;
            padding-bottom: 40px;
          }
          .mu-ticker-band {
            height: 48px;
          }
          .mu-ticker-badge {
            padding: 4px 10px;
            font-size: 11px;
          }
          .mu-ticker-item {
            font-size: 13px;
          }
          .mu-section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .mu-infra-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .mu-infra-tagline {
            text-align: left;
            font-size: 13px;
          }
          .mu-infra-bento-hero {
            height: 260px;
          }
          .mu-infra-bento-right {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .mu-infra-card-sports,
          .mu-infra-card-hostels,
          .mu-infra-card-ict,
          .mu-infra-card-health,
          .mu-infra-card-botanical {
            grid-column: span 1;
            height: 180px;
          }
          .mu-research-scroll-wrapper {
            overflow-x: auto;
            padding-bottom: 12px;
            margin: 0 -20px;
            padding-left: 20px;
            padding-right: 20px;
          }
          .mu-research-card-grid {
            grid-template-columns: repeat(3, 275px);
            gap: 14px;
          }
          .mu-research-image-card {
            height: 350px;
          }
          .mu-news-top-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .mu-news-featured-card {
            min-height: 380px;
          }
          .mu-featured-content {
            padding: 24px 20px 24px 20px;
          }
          .mu-news-compact-item {
            grid-template-columns: 90px 1fr;
            gap: 12px;
            padding: 10px;
          }
          .mu-item-thumb-wrap {
            width: 90px;
            height: 80px;
          }
          .mu-footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }

        @media (max-width: 560px) {
          .mu-faculty-grid {
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
