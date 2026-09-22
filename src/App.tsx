import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Home,
  Megaphone,
  UserCheck,
  ClipboardList,
  Globe,
  Sparkles,
  ArrowUp,
} from 'lucide-react';
import { ActiveSection } from './types';
import { Header } from './components/Header';
import { NavigationCards } from './components/NavigationCards';
import { OfficialPoster } from './components/OfficialPoster';
import { EligibilityChecker } from './components/EligibilityChecker';
import { RequirementsView } from './components/RequirementsView';
import { ManzaraPortalView } from './components/ManzaraPortalView';
import { ImportantNotice } from './components/ImportantNotice';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSelectSection = (section: ActiveSection) => {
    setActiveSection(section);
    // Smooth scroll down to the detail section
    setTimeout(() => {
      if (section !== 'home' && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleBackToHome = () => {
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to hash changes if parent navigates via anchor
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as ActiveSection;
      if (['announcement', 'eligibility', 'requirements', 'manzara'].includes(hash)) {
        setActiveSection(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-['Tajawal',sans-serif] selection:bg-amber-100 selection:text-amber-900">
      <div>
        {/* Main Official Header */}
        <Header />

        {/* Primary Body Container */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 -mt-4 relative z-20 space-y-10 pb-8">
          {/* Quick 4 Cards Grid - Core Navigation */}
          <section id="navigation-section" aria-label="أقسام الدليل الرئيسية">
            <NavigationCards
              activeSection={activeSection}
              onSelectSection={handleSelectSection}
            />
          </section>

          {/* Kindergarten Official Notice Always Accessible */}
          <section id="important-notice-section" aria-label="تنبيه التمهيدي">
            <ImportantNotice />
          </section>

          {/* Active Detail View Container */}
          <section
            ref={sectionRef}
            id="active-content-section"
            className="pt-2 scroll-mt-6"
            aria-label="محتوى القسم المختار"
          >
            {activeSection !== 'home' && (
              <div className="mb-6 flex items-center justify-between bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="text-xl">
                    {activeSection === 'announcement'
                      ? '📢'
                      : activeSection === 'eligibility'
                      ? '👦'
                      : activeSection === 'requirements'
                      ? '📋'
                      : '🌐'}
                  </span>
                  <span className="font-bold text-slate-800 text-sm sm:text-base font-heading">
                    {activeSection === 'announcement' && 'الإعلان الرسمي لوزارة التعليم'}
                    {activeSection === 'eligibility' && 'فحص أهلية الطفل وسن القبول'}
                    {activeSection === 'requirements' && 'المطلوب وشروط التسجيل وقائمة المستندات'}
                    {activeSection === 'manzara' && 'التقديم عبر منصة منظرة التعليمية'}
                  </span>
                </div>

                <button
                  onClick={handleBackToHome}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Home className="w-3.5 h-3.5 text-slate-600" />
                  <span>الرئيسية</span>
                </button>
              </div>
            )}

            {/* View 1: الإعلان الرسمي */}
            {activeSection === 'announcement' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <OfficialPoster
                  onOpenEligibility={() => handleSelectSection('eligibility')}
                  onOpenManzara={() => handleSelectSection('manzara')}
                />
              </div>
            )}

            {/* View 2: هل طفلي مستحق؟ */}
            {activeSection === 'eligibility' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <EligibilityChecker
                  onGoToRequirements={() => handleSelectSection('requirements')}
                  onGoToManzara={() => handleSelectSection('manzara')}
                />
              </div>
            )}

            {/* View 3: المطلوب وشروط التسجيل */}
            {activeSection === 'requirements' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <RequirementsView
                  onGoToEligibility={() => handleSelectSection('eligibility')}
                  onGoToManzara={() => handleSelectSection('manzara')}
                />
              </div>
            )}

            {/* View 4: منصة منظرة */}
            {activeSection === 'manzara' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <ManzaraPortalView />
              </div>
            )}
          </section>
        </main>
      </div>

      {/* Official Footer with Preparer and School Info */}
      <Footer />
    </div>
  );
}
