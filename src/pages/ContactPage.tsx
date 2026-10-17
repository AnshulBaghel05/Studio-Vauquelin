import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Building,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Form State
  const [formData, setFormData] = useState({
    projectType: 'Private Residence (Apartment / Townhouse)',
    location: '',
    area: '',
    budget: '€150,000 – €300,000',
    timeline: 'Within 3 to 6 months',
    name: '',
    email: '',
    phone: '',
    message: '',
    selectedDate: '2026-10-24',
    selectedTimeSlot: '14:30 CET (Paris Studio)'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form');

  const budgetOptions = [
    '€75,000 – €150,000 (Targeted renovation)',
    '€150,000 – €300,000 (Comprehensive apartment)',
    '€300,000 – €600,000 (Grand residence / Hôtel particulier)',
    '€600,000 – €1,500,000+ (Turnkey estate / Coastal villa)'
  ];

  const timelineOptions = [
    'Immediately (Site acquired / Under contract)',
    'Within 3 to 6 months',
    'Within 6 to 12 months',
    'Exploratory feasibility phase'
  ];

  const timeSlots = [
    '10:00 CET (Paris Studio)',
    '11:30 CET (Paris Studio)',
    '14:30 CET (Paris Studio)',
    '16:00 CET (Paris Studio / Virtual)',
    '18:30 CET (Virtual Video Call)'
  ];

  const handleNext = () => {
    if (currentStep === 2 && !formData.location) {
      alert('Please specify the approximate location or city of your property.');
      return;
    }
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please provide your name and email address so our directors can contact you.');
      return;
    }

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B08D57', '#E7DDD0', '#1E1B18']
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-4 max-w-3xl mb-12">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
          Consultation & Inquiries
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#1E1B18] tracking-tight">
          Initiate Your Spatial Commission
        </h1>
        <p className="text-sm md:text-base text-[#5A4636] font-light leading-relaxed">
          We welcome inquiries for private residences, luxury coastal estates, and boutique hospitality projects. Complete our confidential project brief below or select an exploratory calendar slot.
        </p>
      </div>

      {/* Switcher: Multi-Step Brief vs Instant Calendar Embed */}
      <div className="flex items-center gap-4 mb-12 border-b border-[#E5DDD2] pb-4">
        <button
          onClick={() => setActiveTab('form')}
          className={`text-xs uppercase tracking-widest font-medium pb-2 border-b-2 transition-colors ${
            activeTab === 'form'
              ? 'border-[#B08D57] text-[#1E1B18]'
              : 'border-transparent text-[#8E867E] hover:text-[#1E1B18]'
          }`}
        >
          Confidential Project Brief (5 Steps)
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`text-xs uppercase tracking-widest font-medium pb-2 border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === 'calendar'
              ? 'border-[#B08D57] text-[#1E1B18]'
              : 'border-transparent text-[#8E867E] hover:text-[#1E1B18]'
          }`}
        >
          <CalendarIcon className="w-3.5 h-3.5 text-[#B08D57]" />
          <span>Instant Director Calendar (Cal.com)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Left Form / Calendar Pane */}
        <div className="lg:col-span-8 bg-[#FAF8F5] border border-[#E5DDD2] p-8 md:p-12 shadow-sm">
          {activeTab === 'form' && (
            <>
              {!isSubmitted ? (
                <div className="space-y-8">
                  {/* Progress Indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-mono tracking-widest text-[#8E867E] uppercase">
                      <span>Step {currentStep} of {totalSteps}</span>
                      <span>
                        {currentStep === 1 && 'Property Typology'}
                        {currentStep === 2 && 'Location & Spatial Area'}
                        {currentStep === 3 && 'Investment Budget Range'}
                        {currentStep === 4 && 'Target Timeline'}
                        {currentStep === 5 && 'Contact & Project Vision'}
                      </span>
                    </div>
                    <div className="w-full h-1 bg-[#E5DDD2] overflow-hidden">
                      <div
                        className="h-full bg-[#B08D57] transition-all duration-300 ease-out"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* STEP 1: Project Type */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-fadeIn">
                        <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1E1B18]">
                          What type of space are you planning to transform?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            'Private Residence (Apartment / Townhouse)',
                            'Luxury Villa / Coastal Estate',
                            'Boutique Hospitality / Restaurant / Lounge',
                            'Commercial Atelier / Private Office'
                          ].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, projectType: type })}
                              className={`p-4 text-left border text-xs leading-relaxed transition-all ${
                                formData.projectType === type
                                  ? 'border-[#B08D57] bg-[#FAF8F5] text-[#1E1B18] shadow-sm font-medium'
                                  : 'border-[#E5DDD2] bg-[#FFFFFF] text-[#5A4636] hover:border-[#B8A99A]'
                              }`}
                            >
                              <div className="font-semibold text-sm mb-1 text-[#1E1B18]">
                                {type.split('(')[0]}
                              </div>
                              <div className="text-[11px] text-[#8E867E]">
                                {type.includes('(') ? `(${type.split('(')[1]}` : 'Custom spatial commission'}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Location & Area */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-fadeIn">
                        <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1E1B18]">
                          Where is the property situated, and what is the approximate area?
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#5A4636] mb-1.5">
                              Property Location (City / Neighborhood / Country) *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                              placeholder="e.g. Paris 7th, Côte d'Antibes, New York Tribeca, London Mayfair"
                              className="w-full bg-[#FFFFFF] border border-[#E5DDD2] px-4 py-3 text-sm text-[#1E1B18] focus:outline-none focus:border-[#B08D57]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#5A4636] mb-1.5">
                              Estimated Surface Area (m² or sq ft)
                            </label>
                            <input
                              type="text"
                              value={formData.area}
                              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                              placeholder="e.g. 350 m² / 3,800 sq ft"
                              className="w-full bg-[#FFFFFF] border border-[#E5DDD2] px-4 py-3 text-sm text-[#1E1B18] focus:outline-none focus:border-[#B08D57]"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Budget Range */}
                    {currentStep === 3 && (
                      <div className="space-y-6 animate-fadeIn">
                        <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1E1B18]">
                          What is your projected construction and furnishing investment?
                        </h2>
                        <p className="text-xs text-[#5A4636]">
                          Clear expectations enable our partners to propose the appropriate scope and artisan fabrication methods.
                        </p>
                        <div className="space-y-3">
                          {budgetOptions.map((opt) => (
                            <label
                              key={opt}
                              className={`flex items-center gap-3 p-4 border text-xs cursor-pointer transition-colors ${
                                formData.budget === opt
                                  ? 'border-[#B08D57] bg-[#F6F2EC] text-[#1E1B18] font-medium'
                                  : 'border-[#E5DDD2] bg-[#FFFFFF] text-[#5A4636] hover:border-[#B8A99A]'
                              }`}
                            >
                              <input
                                type="radio"
                                name="budget"
                                checked={formData.budget === opt}
                                onChange={() => setFormData({ ...formData, budget: opt })}
                                className="accent-[#B08D57]"
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Timeline */}
                    {currentStep === 4 && (
                      <div className="space-y-6 animate-fadeIn">
                        <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1E1B18]">
                          What is your target completion or commencement timeline?
                        </h2>
                        <div className="space-y-3">
                          {timelineOptions.map((tOpt) => (
                            <label
                              key={tOpt}
                              className={`flex items-center gap-3 p-4 border text-xs cursor-pointer transition-colors ${
                                formData.timeline === tOpt
                                  ? 'border-[#B08D57] bg-[#F6F2EC] text-[#1E1B18] font-medium'
                                  : 'border-[#E5DDD2] bg-[#FFFFFF] text-[#5A4636] hover:border-[#B8A99A]'
                              }`}
                            >
                              <input
                                type="radio"
                                name="timeline"
                                checked={formData.timeline === tOpt}
                                onChange={() => setFormData({ ...formData, timeline: tOpt })}
                                className="accent-[#B08D57]"
                              />
                              <span>{tOpt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 5: Contact Details */}
                    {currentStep === 5 && (
                      <div className="space-y-6 animate-fadeIn">
                        <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1E1B18]">
                          Where may our creative directors reach you?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#5A4636] mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Hélène de Montfort"
                              className="w-full bg-[#FFFFFF] border border-[#E5DDD2] px-4 py-2.5 text-sm text-[#1E1B18] focus:outline-none focus:border-[#B08D57]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#5A4636] mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="montfort@domain.com"
                              className="w-full bg-[#FFFFFF] border border-[#E5DDD2] px-4 py-2.5 text-sm text-[#1E1B18] focus:outline-none focus:border-[#B08D57]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#5A4636] mb-1">
                            Phone / WhatsApp (Optional, for urgent briefs)
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+33 6 12 34 56 78"
                            className="w-full bg-[#FFFFFF] border border-[#E5DDD2] px-4 py-2.5 text-sm text-[#1E1B18] focus:outline-none focus:border-[#B08D57]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#5A4636] mb-1">
                            Brief Spatial Vision or Specific Requirements
                          </label>
                          <textarea
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Share key details: historic building status, desire for monolithic stone kitchen island, acoustic isolation, specific dates..."
                            className="w-full bg-[#FFFFFF] border border-[#E5DDD2] px-4 py-2.5 text-sm text-[#1E1B18] focus:outline-none focus:border-[#B08D57]"
                          />
                        </div>

                        <div className="flex items-center gap-2 text-xs text-[#8E867E]">
                          <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
                          <span>Strict client confidentiality guaranteed. Never shared.</span>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="pt-6 border-t border-[#E5DDD2] flex items-center justify-between">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-6 py-3 border border-[#E5DDD2] text-xs uppercase tracking-widest text-[#5A4636] hover:text-[#1E1B18] transition-colors flex items-center gap-1.5"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Previous</span>
                        </button>
                      ) : (
                        <div />
                      )}

                      {currentStep < totalSteps ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3.5 bg-[#1E1B18] text-[#F6F2EC] hover:bg-[#5A4636] text-xs uppercase tracking-widest font-medium transition-colors flex items-center gap-2"
                        >
                          <span>Continue</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#B08D57]" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="px-8 py-3.5 bg-[#B08D57] text-[#1E1B18] hover:bg-[#1E1B18] hover:text-white text-xs uppercase tracking-widest font-medium transition-colors flex items-center gap-2 shadow-md"
                        >
                          <span>Submit Project Brief</span>
                          <Sparkles className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              ) : (
                /* Submission Success State */
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF8F5] border-2 border-[#B08D57] flex items-center justify-center text-[#B08D57]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif text-3xl font-light text-[#1E1B18]">
                    Brief Successfully Received
                  </h3>

                  <p className="text-sm text-[#5A4636] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1E1B18]">{formData.name}</strong>. Our partner studio has received your architectural brief for your property in <strong className="text-[#1E1B18]">{formData.location || 'Paris'}</strong>.
                  </p>

                  <div className="bg-[#FFFFFF] p-6 max-w-md mx-auto border border-[#E5DDD2] text-left text-xs space-y-2 text-[#5A4636]">
                    <div className="font-mono text-[#B08D57] text-[10px] uppercase tracking-widest">
                      WHAT TO EXPECT NEXT:
                    </div>
                    <div>1. Feasibility audit by Creative Director Hélène Vauquelin within 24 hours.</div>
                    <div>2. Direct correspondence to {formData.email} to confirm exploratory discovery call.</div>
                    <div>3. Preliminary spatial moodboard and zoning checklist.</div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-6 py-2.5 border border-[#E5DDD2] text-xs uppercase tracking-widest text-[#5A4636] hover:text-[#1E1B18]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Cal.com / Calendly Embed Placeholder Tab */}
          {activeTab === 'calendar' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
                  Direct Partner Availability
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-[#1E1B18]">
                  Schedule an Exploratory 30-Minute Video Consultation
                </h3>
                <p className="text-xs text-[#5A4636]">
                  Select your preferred time slot below with Senior Partner Alexandre Roche or Creative Director Hélène Vauquelin.
                </p>
              </div>

              <div className="p-6 bg-[#FFFFFF] border border-[#E5DDD2] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E867E]">
                  <span>DATE: OCTOBER 2026</span>
                  <span>TIMEZONE: CET (PARIS)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {timeSlots.map((slot, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => {
                        alert(`Selected consultation slot: ${slot} on Friday, Oct 24. We have routed your calendar invitation.`);
                      }}
                      className="p-3 text-left border border-[#E5DDD2] hover:border-[#B08D57] text-xs text-[#1E1B18] transition-colors flex items-center justify-between group"
                    >
                      <span>{slot}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B08D57] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-[#8E867E] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>All video consultations are hosted on encrypted high-definition stream.</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Studio Information & Interactive Styled Map */}
        <div className="lg:col-span-4 space-y-8">
          <div className="p-8 bg-[#1E1B18] text-[#F6F2EC] border border-[#38332E] space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57]">
              Headquarters
            </span>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-normal text-[#FAF8F5]">Paris Atelier</h3>
                <p className="text-[#B8A99A] leading-relaxed">
                  18 Rue de l’Université<br />
                  75007 Paris, France (Saint-Germain)<br />
                  Mon – Fri: 09:00 – 18:30 CET
                </p>
              </div>

              <div className="space-y-1 pt-3 border-t border-[#38332E]">
                <h3 className="font-serif text-xl font-normal text-[#FAF8F5]">New York Studio</h3>
                <p className="text-[#B8A99A] leading-relaxed">
                  64 White Street, 4th Floor<br />
                  Tribeca, New York, NY 10013<br />
                  Mon – Fri: 09:30 – 18:00 EST
                </p>
              </div>

              <div className="pt-3 border-t border-[#38332E] space-y-2">
                <div className="flex items-center gap-2 text-[#B8A99A]">
                  <Mail className="w-3.5 h-3.5 text-[#B08D57]" />
                  <a href="mailto:atelier@studiovauquelin.com" className="hover:text-white">
                    atelier@studiovauquelin.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#B8A99A]">
                  <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>+33 1 42 68 55 00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Styled Architectural Map */}
          <div className="p-6 bg-[#FAF8F5] border border-[#E5DDD2] space-y-4">
            <div className="flex items-center justify-between text-xs text-[#5A4636]">
              <span className="uppercase tracking-wider font-semibold">Atelier Coordinates</span>
              <span className="font-mono text-[#8E867E]">48.8575° N, 2.3312° E</span>
            </div>

            {/* Stylized Architectural Map Graphic */}
            <div className="relative aspect-[4/3] bg-[#E7DDD0] overflow-hidden border border-[#D9CFC2] flex items-center justify-center p-4">
              {/* Architectural Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#B8A99A_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              <div className="relative z-10 text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#1E1B18] text-[#B08D57] flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="font-serif text-sm font-medium text-[#1E1B18]">
                  Rue de l'Université, Paris 7e
                </div>
                <p className="text-[10px] text-[#5A4636]">
                  200m from Musée d'Orsay & Seine Riverbanks
                </p>
              </div>
            </div>

            <p className="text-[11px] text-[#8E867E] leading-relaxed">
              Private courtyard parking available upon advance request for atelier appointments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
