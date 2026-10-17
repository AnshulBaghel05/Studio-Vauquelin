/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { PlanningGuideModal } from './components/PlanningGuideModal';
import { CookieBanner } from './components/CookieBanner';

import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string>('villa-saint-germain');
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    try {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      let animationFrameId: number;

      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
      };
    } catch {
      // Fallback
    }
  }, []);

  const handleNavigate = (tab: string, slug?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (slug) {
      setSelectedProjectSlug(slug);
    }
    setCurrentTab(tab);
  };

  const handleOpenConsultation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentTab('contact');
  };

  return (
    <div className="min-h-screen bg-[#F6F2EC] text-[#1E1B18] flex flex-col font-body selection:bg-[#B08D57]/20 selection:text-[#1E1B18]">
      {/* 1. Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. Top Bar Navigation Contract */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* 3. Main Dynamic Content View */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenGuideModal={() => setIsGuideModalOpen(true)}
          />
        )}

        {currentTab === 'projects' && (
          <PortfolioPage
            onSelectProject={(slug) => handleNavigate('project-detail', slug)}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentTab === 'project-detail' && (
          <ProjectDetailPage
            slug={selectedProjectSlug}
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onOpenConsultation={handleOpenConsultation}
            onOpenGuideModal={() => setIsGuideModalOpen(true)}
          />
        )}

        {currentTab === 'process' && (
          <ProcessPage onOpenConsultation={handleOpenConsultation} />
        )}

        {currentTab === 'about' && (
          <AboutPage onOpenConsultation={handleOpenConsultation} />
        )}

        {currentTab === 'journal' && (
          <JournalPage />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* 4. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
      />

      {/* 5. Floating CTA Button (after 30% scroll) */}
      <FloatingCTA onOpenConsultation={handleOpenConsultation} />

      {/* 6. Lead Magnet Modal: 2025 Planning Guide PDF */}
      <PlanningGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />

      {/* 7. Minimalist Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
