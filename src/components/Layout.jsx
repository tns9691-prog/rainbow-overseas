import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyButtons from './StickyButtons';

// ── Marquee content ──────────────────────────────────────────
const MARQUEE_ITEMS = [
  '🎓 Study Abroad',
  '✈️ Travel & Holidays',
  '💱 Forex Services',
  '🛡️ Insurance',
  '98% Visa Success',
  '1000+ Students Placed',
  '10+ Years Experience',
  '6+ Countries',
];

function MarqueeStrip() {
  // Double the items so the seamless loop works
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Layout() {
  const { pathname } = useLocation();
  const progressRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // ── Scroll progress bar ──────────────────────────────────
    const bar = progressRef.current;
    const onScroll = () => {
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── IntersectionObserver for ALL reveal classes ──────────
    const SELECTORS = [
      '.section',
      '.reveal',
      '.reveal-up',
      '.reveal-left',
      '.reveal-right',
      '.reveal-scale',
      '.reveal-clip',
      '.stagger-children',
      '.title-reveal-wrap',
    ].join(', ');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible', 'in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );

    const register = () => {
      document.querySelectorAll(SELECTORS).forEach(el => {
        el.classList.remove('is-visible', 'in-view');
        observer.observe(el);
      });
    };

    const timeoutId = setTimeout(register, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  return (
    <div className="app-container">
      {/* Scroll progress */}
      <div className="scroll-progress-bar" ref={progressRef} />

      <Navbar />
      <MarqueeStrip />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}

export default Layout;
