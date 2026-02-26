import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Activity, Terminal } from 'lucide-react';
import gsap from 'gsap';

const EstimateSection = () => {
  const { t } = useTranslation();
  const [investment, setInvestment] = useState(250);
  const [isRecalculating, setIsRecalculating] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate projected ROI based on investment tier
  const getProjectedROI = (val: number) => {
    if (val < 100) return "1.2x - 1.8x";
    if (val < 250) return "1.5x - 2.5x";
    if (val < 500) return "2.0x - 3.5x";
    return "3.0x - 5.0x+";
  };

  const getRecommendation = (val: number) => {
    if (val < 100) return "Phase 1: Foundation Assessment & Architecture Audit";
    if (val < 250) return "Phase 2: Partial Sovereign Integration & Data Security";
    if (val < 500) return "Phase 3: Comprehensive Enterprise Transformation";
    return "Phase 4: Full GCC-Compliant Digital Ecosystem Deploy";
  };

  useEffect(() => {
    // Animate counter when investment changes
    if (counterRef.current) {
      const currentVal = parseFloat(counterRef.current.innerText.replace(/,/g, '')) || 0;

      gsap.to(counterRef.current, {
        innerHTML: investment,
        duration: 0.8,
        snap: { innerHTML: 1 },
        ease: "power2.out",
        onUpdate: function () {
          if (counterRef.current) {
            counterRef.current.innerText = Math.round(Number(this.targets()[0].innerHTML)).toLocaleString();
          }
        }
      });
    }

    // Handle recalculating state
    setIsRecalculating(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsRecalculating(false);
    }, 600);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [investment]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestment(Number(e.target.value));
  };

  return (
    <section className="relative overflow-hidden bg-[#070D14] py-10 md:py-16 font-sans border-t border-[#1F2937]">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-tight relative z-10">

        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-3 bg-[#111F2E]/60 border border-brand-blue/20 px-4 py-2 rounded-full">
              <Calculator className="w-4 h-4 text-brand-blue" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-brand-blue uppercase font-mono">
                Digital Board Instrument
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Projected Enterprise <span className="text-slate-500">Yield.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t('calculator.subtitle', 'Configure your required transformation scale to estimate sovereign infrastructure requirements and projected ROI.')}
            </p>
          </div>

          {/* The Instrument Interface */}
          <div className="relative bg-[#0B1623]/80 backdrop-blur-xl border border-brand-blue/10 rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden group">

            <div className="absolute top-0 left-0 w-full h-1 bg-[#1F2937]">
              <div
                className="h-full bg-brand-blue transition-all duration-300 ease-out shadow-[0_0_15px_rgba(47,107,255,0.6)]"
                style={{ width: `${(investment / 1000) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Input Column */}
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between items-end mb-6">
                    <label htmlFor="investment-slider" className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500">
                      Capital Allocation (k$)
                    </label>
                    <div className="text-4xl font-bold text-white font-mono flex items-center min-w-[140px] justify-end">
                      <span className="text-slate-500 mr-2">$</span>
                      <span ref={counterRef}>250</span>
                      <span className="text-slate-500 ml-1 font-sans">k</span>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      id="investment-slider"
                      type="range"
                      min="50"
                      max="1000"
                      step="50"
                      value={investment}
                      onChange={handleSliderChange}
                      className="w-full h-2 bg-[#1F2937] rounded-lg appearance-none cursor-pointer outline-none slider-thumb-brand hover:slider-thumb-brand-glow focus:slider-thumb-brand-glow transition-all"
                      style={{
                        background: `linear-gradient(to right, #2F6BFF 0%, #2F6BFF ${(investment / 1000) * 100}%, #1F2937 ${(investment / 1000) * 100}%, #1F2937 100%)`
                      }}
                    />
                    <div className="absolute -inset-2 bg-brand-blue/20 rounded-full blur-xl opacity-0 transition-opacity peer-active:opacity-100 pointer-events-none" />
                  </div>

                  <div className="flex justify-between text-[10px] uppercase font-mono tracking-widest text-slate-600 mt-4">
                    <span>$50k</span>
                    <span>$1M+</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-[0.2em] text-slate-500 border-b border-white/5 pb-2">
                    <Activity className="w-4 h-4 text-accent-cyan" />
                    Strategic Intelligence
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-mono min-h-[60px] flex items-center">
                    {getRecommendation(investment)}
                  </p>
                </div>
              </div>

              {/* Output Column Container */}
              <div className="relative h-full flex flex-col justify-center bg-[#111F2E]/50 rounded-xl p-8 border border-white/5 min-h-[300px]">
                {/* Recalculating overlay overlay */}
                <div className={`absolute inset-0 bg-[#0B1623]/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center transition-opacity duration-300 rounded-xl ${isRecalculating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <Terminal className="w-8 h-8 text-brand-blue mb-4 animate-pulse" />
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-brand-blue animate-pulse">
                    Recalculating Matrix...
                  </span>
                </div>

                <div className="space-y-8 relative z-0">
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-slate-500 mb-2">
                      Projected 3-Year ROI
                    </div>
                    <div className="text-5xl font-bold text-white tracking-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                      {getProjectedROI(investment)}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <Link
                      to="/contact"
                      className="group relative inline-flex items-center justify-center w-full bg-brand-blue/10 border border-brand-blue/30 px-8 py-5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-brand-blue hover:border-brand-blue hover:shadow-[0_0_20px_-5px_rgba(47,107,255,0.4)]"
                    >
                      <span className="relative z-10 flex items-center">
                        {t('calculator.cta', 'Secure Transformation Scope')}
                        <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #F9FAFB;
                    cursor: pointer;
                    border: 2px solid #2F6BFF;
                    box-shadow: 0 0 10px rgba(47, 107, 255, 0.5);
                    transition: all 0.2s ease;
                }
                input[type=range]::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 20px rgba(47, 107, 255, 0.8);
                }
                input[type=range]::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #F9FAFB;
                    cursor: pointer;
                    border: 2px solid #2F6BFF;
                    box-shadow: 0 0 10px rgba(47, 107, 255, 0.5);
                    transition: all 0.2s ease;
                }
                input[type=range]::-moz-range-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 20px rgba(47, 107, 255, 0.8);
                }
            `}</style>
    </section>
  );
};

export default EstimateSection;
