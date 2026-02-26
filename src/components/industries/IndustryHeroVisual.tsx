import { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BarChart, TrendingUp, Activity, PieChart, Box, Truck, Stethoscope, Briefcase, GraduationCap, ShieldCheck, HeartPulse, Home, Users, ShoppingCart, CreditCard, Navigation, Map, Target, Megaphone, FileText, FileCheck, Lock, Shirt, Ticket } from 'lucide-react';

interface IndustryHeroVisualProps {
    slug: string;
}

// ---------------------------------------------------------
// 1. Finance Visual
// ---------------------------------------------------------
const FinanceVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.finance-main', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            })
                .from('.finance-bar', {
                    scaleY: 0,
                    transformOrigin: "bottom",
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "back.out(1.5)"
                }, "-=0.4")
                .from('.finance-floating-element', {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out"
                });

            // Continuous subtle float
            gsap.to('.finance-floating-element', {
                y: -8,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            {/* Main Application Window */}
            <div className="finance-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col z-10">
                <div className="h-12 border-b border-slate-100 flex items-center px-6 gap-2 bg-slate-50/50">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-200"></div>
                    </div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-end gap-2 relative">
                    <div className="absolute top-8 left-8 right-8 h-px bg-slate-100"></div>
                    <div className="absolute top-1/3 left-8 right-8 h-px bg-slate-100"></div>
                    <div className="absolute top-2/3 left-8 right-8 h-px bg-slate-100"></div>

                    <div className="flex items-end justify-between gap-2 h-48 relative z-10 w-full px-2">
                        {[40, 60, 45, 85, 70, 95].map((height, i) => (
                            <div key={i} className="w-[12%] flex justify-center group relative">
                                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] py-1 px-2 rounded font-bold">
                                    {height}%
                                </div>
                                <div
                                    className="finance-bar w-full bg-brand-blue rounded-t-lg transition-colors group-hover:bg-blue-500 cursor-pointer"
                                    style={{ height: `${height}%` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating UI Elements */}
            <div className="finance-floating-element finance-card absolute -left-8 top-16 bg-white rounded-2xl p-5 border border-slate-200 shadow-xl w-64 z-20">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                        <BarChart className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                        +124%
                    </div>
                </div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Execution Velocity</div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">10&times; Output</div>
            </div>

            <div className="finance-card finance-floating-element absolute -right-4 bottom-24 bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-2xl w-64 z-30" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-brand-blue/30 rounded-full animate-ping"></div>
                        <div className="w-4 h-4 rounded-full bg-brand-blue"></div>
                    </div>
                    <div>
                        <div className="text-white text-sm font-bold">Systems Synchronized</div>
                        <div className="text-brand-blue text-[10px] font-bold tracking-widest uppercase mt-0.5">Active & Secure</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 2. Healthcare Visual
// ---------------------------------------------------------
const HealthcareVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.health-main', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            })
                .from('.health-line', {
                    scaleX: 0,
                    transformOrigin: "left",
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.4")
                .from('.health-float', {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out"
                });

            gsap.to('.health-float', {
                y: -6,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Heartbeat pulse
            gsap.to('.heart-pulse', {
                scale: 1.15,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            {/* Main Application Window */}
            <div className="health-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col z-10">
                <div className="h-12 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Patient Portal</div>
                </div>

                <div className="flex-1 p-8 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden">
                            <img src="https://i.pravatar.cc/150?img=32" alt="Patient" className="w-full h-full object-cover grayscale opacity-80" />
                        </div>
                        <div>
                            <div className="text-lg font-bold text-slate-900">Sarah Jenkins</div>
                            <div className="text-sm font-medium text-slate-500">ID: #8849-MRN</div>
                        </div>
                    </div>

                    <div className="space-y-4 mt-4">
                        <div className="flex justify-between items-center text-sm font-bold">
                            <span className="text-slate-600">Recovery Trajectory</span>
                            <span className="text-brand-blue">94%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div className="health-line h-full w-[94%] bg-brand-blue rounded-full"></div>
                        </div>

                        <div className="flex justify-between items-center text-sm font-bold pt-2">
                            <span className="text-slate-600">Treatment Adherence</span>
                            <span className="text-emerald-500">Optimum</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div className="health-line h-full w-[88%] bg-emerald-400 rounded-full" style={{ transitionDelay: '0.1s' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Top Left */}
            <div className="health-float health-card absolute -left-10 top-24 bg-white rounded-2xl p-4 border border-slate-200 shadow-xl w-56 z-20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center heart-pulse">
                        <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Vitals Sync</div>
                        <div className="text-base font-black text-slate-900 tracking-tight">Active Stream</div>
                    </div>
                </div>
            </div>

            {/* Floating Bottom Right */}
            <div className="health-card health-float absolute -right-6 bottom-24 bg-[#0B1521] rounded-2xl p-5 border border-slate-700 shadow-2xl w-64 z-30" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-between mb-4">
                    <Stethoscope className="w-6 h-6 text-brand-blue" />
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                </div>
                <div className="text-white text-sm font-bold mb-1">Telemedicine Node</div>
                <div className="text-slate-400 text-xs font-medium">Physician Connected via Secure EHR Bridge.</div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 3. Education Visual
// ---------------------------------------------------------
const EducationVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.edu-main', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            })
                .from('.edu-progress', {
                    strokeDashoffset: 100, // Assuming 100 for percentage
                    duration: 1.5,
                    ease: "power2.out"
                }, "-=0.2")
                .from('.edu-float', {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out"
                });

            gsap.to('.edu-float', {
                y: -6,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Subtle pulse for active student indicator
            gsap.to('.edu-pulse', {
                scale: 1.1,
                opacity: 0.6,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            {/* Main Application Window */}
            <div className="edu-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col z-10">
                <div className="h-12 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                </div>

                <div className="flex-1 p-8 flex flex-col items-center justify-center gap-6">
                    {/* Radial Progress Chart */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path
                                className="text-slate-100"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                            />
                            <path
                                className="edu-progress text-brand-blue"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeDasharray="100, 100"
                                strokeDashoffset="24" /* 76% */
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-black text-slate-900">76%</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Completion</span>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <div className="text-xs font-bold text-slate-400 mb-1">Total Students</div>
                            <div className="text-xl font-bold text-slate-900">4,289</div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <div className="text-xs font-bold text-slate-400 mb-1">Avg Score</div>
                            <div className="text-xl font-bold text-emerald-600">88.5%</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Top Left */}
            <div className="edu-float edu-card absolute -left-8 top-16 bg-white rounded-2xl p-5 border border-slate-200 shadow-xl w-60 z-20">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center relative shadow-inner">
                        <GraduationCap className="w-6 h-6 text-brand-blue relative z-10" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 mt-1">LMS Sync</div>
                        <div className="text-lg font-black text-slate-900 leading-tight">Active Classrooms</div>
                    </div>
                </div>
            </div>

            {/* Floating Bottom Right */}
            <div className="edu-card edu-float absolute -right-6 bottom-32 bg-slate-800 rounded-2xl p-4 border border-slate-700 shadow-2xl w-56 z-30" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-amber-400" />
                        </div>
                        <div className="edu-pulse absolute -inset-1 rounded-full border border-amber-400/30"></div>
                    </div>
                    <div>
                        <div className="text-white text-sm font-bold">Live Lecture</div>
                        <div className="text-amber-400 text-[10px] font-bold tracking-wider mt-0.5">342 ENGAGED</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 4. Real Estate Visual
// ---------------------------------------------------------
const RealEstateVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.re-main', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            })
                .from('.re-bar', {
                    scaleX: 0,
                    transformOrigin: "left",
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out"
                }, "-=0.4")
                .from('.re-float', {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out"
                });

            gsap.to('.re-float', {
                y: -8,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Ping effect for listings
            gsap.to('.re-ping', {
                scale: 1.5,
                opacity: 0,
                duration: 1.5,
                repeat: -1,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            {/* Main Application Window */}
            <div className="re-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col z-10">
                <div className="h-12 border-b border-slate-100 flex items-center px-6 gap-2 bg-slate-50/50">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                </div>

                <div className="flex-1 p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Portfolio Valuation</div>
                            <div className="text-3xl font-black text-slate-900">$284.5M</div>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded-md text-xs font-bold">
                            <TrendingUp className="w-3.5 h-3.5" /> +12.4%
                        </div>
                    </div>

                    {/* Pipeline Mockup */}
                    <div className="space-y-3 mt-4">
                        {[
                            { label: "Luxury Villas", val: "85%", col: "bg-brand-blue" },
                            { label: "Commercial Hubs", val: "62%", col: "bg-indigo-500" },
                            { label: "Retail Spaces", val: "40%", col: "bg-emerald-400" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-1.5">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-slate-600">{item.label}</span>
                                </div>
                                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`re-bar h-full rounded-full ${item.col}`} style={{ width: item.val }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Top Right */}
            <div className="re-float re-card absolute -right-6 top-16 bg-[#0B1521] rounded-2xl p-4 border border-slate-700 shadow-2xl w-56 z-20">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center">
                            <Home className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="re-ping absolute inset-0 rounded-full border-2 border-emerald-400/50"></div>
                    </div>
                    <div>
                        <div className="text-emerald-400 text-xs font-bold">New Listing</div>
                        <div className="text-white text-sm font-medium mt-0.5">Al Hamra Tower Sec</div>
                    </div>
                </div>
            </div>

            {/* Floating Bottom Left */}
            <div className="re-card re-float absolute -left-8 bottom-32 bg-white rounded-2xl p-5 border border-slate-200 shadow-xl w-60 z-30" style={{ animationDelay: '0.4s' }}>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">Live Virtual Tour</div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-brand-blue border-b-[6px] border-b-transparent ml-1"></div>
                    </div>
                    <div>
                        <div className="text-lg font-black text-slate-900">42 Viewers</div>
                        <div className="text-xs font-bold text-emerald-500">High Engagement</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 5. Retail Visual
// ---------------------------------------------------------
const RetailVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.retail-main', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" })
                .from('.retail-bar', { scaleY: 0, transformOrigin: "bottom", duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.2")
                .from('.retail-float', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });

            gsap.to('.retail-float', { y: -8, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            <div className="retail-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col z-10">
                <div className="h-12 border-b border-slate-100 flex items-center px-6 bg-slate-50/50">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Omnichannel Dashboard</div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-end gap-2 relative">
                    <div className="absolute top-8 left-8 right-8 h-px bg-slate-100"></div>
                    <div className="absolute top-1/3 left-8 right-8 h-px bg-slate-100"></div>
                    <div className="absolute top-2/3 left-8 right-8 h-px bg-slate-100"></div>
                    <div className="flex items-end justify-between gap-3 h-48 relative z-10 w-full px-4">
                        {[50, 65, 40, 90, 75].map((height, i) => (
                            <div key={i} className="w-[15%] retail-bar bg-gradient-to-t from-brand-blue to-cyan-400 rounded-t-lg opacity-90" style={{ height: `${height}%` }}></div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Top Left Floating */}
            <div className="retail-float retail-card absolute -left-8 top-16 bg-white rounded-2xl p-4 border border-slate-200 shadow-xl w-56 z-20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Live Checkout</div>
                        <div className="text-xl font-black text-slate-900">2,481<span className="text-xs text-slate-400 font-medium ml-1">Orders/hr</span></div>
                    </div>
                </div>
            </div>
            {/* Bottom Right Floating */}
            <div className="retail-card retail-float absolute -right-6 bottom-32 bg-[#0B1521] rounded-2xl p-4 border border-slate-700 shadow-2xl w-56 z-30" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-between mb-3 border-b border-slate-700 pb-3">
                    <div className="flex items-center gap-2 text-white text-sm font-bold"><CreditCard className="w-4 h-4 text-emerald-400" /> Smart POS</div>
                    <div className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Inventory Sync</span>
                    <span className="text-brand-blue font-bold">100% Active</span>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 6. Supply Chain Visual
// ---------------------------------------------------------
const SupplyChainVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.sc-main', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" })
                .from('.sc-node', { scale: 0, duration: 0.5, stagger: 0.1, ease: "back.out(2)" }, "-=0.2")
                .from('.sc-float', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
            gsap.to('.sc-float', { y: -8, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to('.sc-path', { strokeDashoffset: 0, duration: 2, repeat: -1, ease: "linear" });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            <div className="sc-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl p-6 flex flex-col z-10">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Global Node Network</div>
                {/* Node Map Mockup */}
                <div className="flex-1 relative border border-slate-100 rounded-xl bg-slate-50/50 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" style={{ strokeDasharray: '4,4' }}>
                        <path className="sc-path" d="M 50,200 Q 150,50 250,150 T 400,100" fill="none" stroke="#60A5FA" strokeWidth="2" strokeDashoffset="24" />
                    </svg>
                    <div className="sc-node absolute top-[190px] left-[40px] w-5 h-5 bg-brand-blue rounded-full border-[4px] border-white shadow-md"></div>
                    <div className="sc-node absolute top-[140px] left-[240px] w-6 h-6 bg-indigo-500 rounded-full border-[4px] border-white shadow-md"></div>
                    <div className="sc-node absolute top-[90px] left-[390px] w-5 h-5 bg-emerald-400 rounded-full border-[4px] border-white shadow-md"></div>
                </div>
            </div>
            <div className="sc-float sc-card absolute -right-6 top-16 bg-slate-800 rounded-2xl p-4 border border-slate-700 shadow-2xl w-56 z-20">
                <div className="flex items-center gap-3 mb-2">
                    <Box className="w-5 h-5 text-indigo-400" />
                    <span className="text-white text-sm font-bold">RFID Scan Rate</span>
                </div>
                <div className="text-2xl font-black text-white">99.8% <span className="text-[10px] text-emerald-400 font-bold ml-1 uppercase tracking-widest">Accuracy</span></div>
            </div>
            <div className="sc-card sc-float absolute -left-8 bottom-24 bg-white rounded-2xl p-4 border border-slate-200 shadow-xl w-56 z-30" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                        <Truck className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Fulfilled Today</div>
                        <div className="text-xl font-black text-slate-900">14,204</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 7. Transportation Visual
// ---------------------------------------------------------
const TransportationVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.tr-main', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" })
                .from('.tr-float', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
            gsap.to('.tr-float', { y: -6, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });

            gsap.to('.tr-radar', { scale: 2, opacity: 0, duration: 2, repeat: -1, ease: "power1.out" });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            <div className="tr-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10">
                {/* Map Background Mockup */}
                <div className="absolute inset-0 bg-[#E8F0FE] opacity-40"></div>
                <div className="absolute top-[30%] left-[20%] w-[60%] h-[40%] border-4 border-slate-300 rounded-full opacity-20"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-brand-blue rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                                <Navigation className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div className="tr-radar absolute inset-0 border border-brand-blue rounded-full"></div>
                    </div>
                </div>

                <div className="absolute top-6 left-6 right-6 flex justify-between">
                    <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-200 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Fleet Active
                    </div>
                    <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
                        248 Vehicles
                    </div>
                </div>
            </div>
            <div className="tr-float tr-card absolute -left-6 bottom-32 bg-[#0B1521] rounded-2xl p-5 border border-slate-700 shadow-2xl w-64 z-20">
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">AI Route Optimization</div>
                <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-white font-medium">Fuel Saved</span>
                    <span className="text-emerald-400 font-bold">22.4%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[77%] rounded-full"></div>
                </div>
            </div>
            <div className="tr-card tr-float absolute -right-4 top-24 bg-white rounded-xl p-3 border border-slate-200 shadow-lg w-48 z-30 flex items-center gap-3" style={{ animationDelay: '0.5s' }}>
                <Map className="w-8 h-8 text-brand-blue" />
                <div>
                    <div className="text-slate-900 text-sm font-bold leading-tight">Telematics</div>
                    <div className="text-brand-blue text-[10px] font-bold uppercase tracking-widest">Locked/Secure</div>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 8. Marketing Visual
// ---------------------------------------------------------
const MarketingVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.mkt-main', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" })
                .from('.mkt-funnel', { scaleX: 0, transformOrigin: "center", duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.4")
                .from('.mkt-float', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
            gsap.to('.mkt-float', { y: -8, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            <div className="mkt-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl p-8 flex flex-col items-center justify-center z-10">
                <div className="w-full flex justify-between items-center mb-6">
                    <div className="text-sm font-bold text-slate-800 uppercase tracking-widest">Conversion Funnel</div>
                    <Target className="w-5 h-5 text-brand-blue" />
                </div>

                <div className="w-full flex flex-col items-center gap-2">
                    <div className="mkt-funnel w-full h-8 bg-brand-blue/90 rounded-t-lg flex items-center justify-center text-white text-xs font-bold">Impressions: 1.2M</div>
                    <div className="mkt-funnel w-[80%] h-8 bg-brand-blue/80 flex items-center justify-center text-white text-xs font-bold">Clicks: 340K</div>
                    <div className="mkt-funnel w-[60%] h-8 bg-indigo-500/80 flex items-center justify-center text-white text-xs font-bold">Leads: 85K</div>
                    <div className="mkt-funnel w-[40%] h-8 bg-cyan-500/80 rounded-b-lg flex items-center justify-center text-white text-xs font-bold">Sales: 12K</div>
                </div>
            </div>

            <div className="mkt-float mkt-card absolute -left-8 top-20 bg-slate-800 rounded-2xl p-4 border border-slate-700 shadow-2xl w-52 z-20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Avg ROAS</div>
                        <div className="text-xl font-black text-white">4.8x</div>
                    </div>
                </div>
            </div>

            <div className="mkt-card mkt-float absolute -right-6 bottom-24 bg-white rounded-2xl p-4 border border-slate-200 shadow-xl w-56 z-30" style={{ animationDelay: '0.4s' }}>
                <div className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 inline-block rounded uppercase tracking-widest mb-2">Active Channels</div>
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                    <div className="w-2 h-2 rounded-full bg-brand-blue"></div> Social Media
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mt-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div> Search Ads
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 9. Insurance Visual
// ---------------------------------------------------------
const InsuranceVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.ins-main', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" })
                .from('.ins-shield', { scale: 0, rotation: -45, duration: 0.8, ease: "back.out(2)" }, "-=0.2")
                .from('.ins-float', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
            gsap.to('.ins-float', { y: -8, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });

            // Scanning line effect
            gsap.to('.ins-scan', { y: 150, duration: 2, repeat: -1, yoyo: true, ease: "linear" });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            <div className="ins-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col z-10">
                <div className="h-12 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
                    <div className="flex gap-1.5 border border-slate-200 rounded-full px-2 py-1 items-center bg-white shadow-sm text-[9px] font-bold text-slate-500 uppercase tracking-widest"><ShieldCheck className="w-3 h-3 text-brand-blue" /> Claim Vault</div>
                </div>
                <div className="flex-1 p-8 flex flex-col items-center justify-center relative">
                    {/* Document Analysis Mockup */}
                    <div className="relative w-40 h-48 bg-slate-50 border border-slate-200 rounded-lg shadow-sm overflow-hidden p-3 flex flex-col gap-2">
                        <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                        <div className="w-full h-2 bg-slate-200 rounded-full"></div>
                        <div className="w-[85%] h-2 bg-slate-200 rounded-full"></div>
                        <div className="flex-1"></div>
                        <div className="w-full h-2 bg-slate-200 rounded-full"></div>
                        <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>

                        {/* Scanning Laser */}
                        <div className="ins-scan absolute top-0 left-0 w-full h-1 bg-brand-blue shadow-[0_0_8px_rgba(45,107,255,1)] z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent mix-blend-multiply placeholder-gray-500"></div>
                    </div>
                </div>
            </div>
            <div className="ins-float ins-card absolute -left-8 top-16 bg-[#0B1521] rounded-2xl p-5 border border-slate-700 shadow-2xl w-60 z-20">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-400/10 flex items-center justify-center relative">
                        <ShieldCheck className="ins-shield w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <div className="text-white text-sm font-bold">Fraud Detection</div>
                        <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">Clear / Verified</div>
                    </div>
                </div>
            </div>
            <div className="ins-card ins-float absolute -right-6 bottom-32 bg-white rounded-2xl p-4 border border-slate-200 shadow-xl w-56 z-30" style={{ animationDelay: '0.4s' }}>
                <div className="text-slate-400 text-xs font-bold mb-2">Auto-Settlement Rate</div>
                <div className="flex items-end gap-2 mb-2">
                    <div className="text-3xl font-black text-slate-900 leading-none">68%</div>
                    <div className="text-emerald-500 text-sm font-bold flex items-center"><TrendingUp className="w-3 h-3 mr-0.5" /> +14%</div>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 10. Legal Visual
// ---------------------------------------------------------
const LegalVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.leg-main', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" })
                .from('.leg-doc', { x: -40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.2")
                .from('.leg-float', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
            gsap.to('.leg-float', { y: -6, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            <div className="leg-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 flex flex-col">
                <div className="h-12 border-b border-slate-100 flex items-center px-6 gap-3 bg-slate-50/50">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Case Management System</div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-3">
                    {[
                        { title: "M&A Agreement.docx", stat: "Reviewed", color: "text-emerald-500" },
                        { title: "Non-Disclosure.pdf", stat: "Pending Signature", color: "text-amber-500" },
                        { title: "Vendor Contract V3", stat: "AI Scanned", color: "text-brand-blue" }
                    ].map((doc, i) => (
                        <div key={i} className="leg-doc flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-white shadow-sm">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-slate-400" />
                                <span className="text-sm font-bold text-slate-700">{doc.title}</span>
                            </div>
                            <div className={`text-[10px] uppercase font-bold tracking-wider ${doc.color}`}>{doc.stat}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="leg-float leg-card absolute -right-8 top-24 bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-2xl w-60 z-20">
                <div className="flex items-center gap-3 mb-2">
                    <FileCheck className="w-5 h-5 text-brand-blue" />
                    <span className="text-white text-sm font-bold">Contract AI Extracted</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">14 Liability Clauses Identified.</div>
            </div>
            <div className="leg-card leg-float absolute -left-6 bottom-32 bg-white rounded-xl p-3 border border-slate-200 shadow-xl w-48 z-30 flex items-center gap-3" style={{ animationDelay: '0.4s' }}>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"><Lock className="w-5 h-5 text-slate-600" /></div>
                <div>
                    <div className="text-slate-900 text-sm font-bold leading-tight">Client Vault</div>
                    <div className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">Encrypted</div>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 11. Fashion Visual
// ---------------------------------------------------------
const FashionVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.fsh-main', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" })
                .from('.fsh-img', { scale: 0.8, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.2")
                .from('.fsh-float', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
            gsap.to('.fsh-float', { y: -8, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            <div className="fsh-main absolute inset-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl p-6 flex flex-col z-10">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-black text-slate-900 uppercase tracking-widest">FW/24 Analytics</div>
                    <Shirt className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="flex gap-4 h-48">
                    <div className="fsh-img w-1/2 rounded-xl bg-slate-200 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" alt="Fashion" className="w-full h-full object-cover grayscale opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-3">
                            <div className="text-white text-xs font-bold">Runway Core</div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-end gap-2 pb-2">
                        <div className="text-xs font-bold text-slate-400">Demand Index</div>
                        <div className="text-3xl font-black text-slate-900">High</div>
                        <div className="w-full h-2 rounded-full bg-slate-100 mt-2 overflow-hidden">
                            <div className="w-[85%] h-full bg-brand-blue rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fsh-float fsh-card absolute -left-8 top-24 bg-[#0B1521] rounded-2xl p-4 border border-slate-700 shadow-2xl w-48 z-20">
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">E-Commerce Flow</div>
                <div className="flex items-center justify-between">
                    <span className="text-white font-medium text-sm">Cart Conv.</span>
                    <span className="text-emerald-400 font-bold">12.8%</span>
                </div>
            </div>
            <div className="fsh-card fsh-float absolute -right-6 bottom-24 bg-white rounded-2xl p-4 border border-slate-200 shadow-xl w-56 z-30" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Predictive AI</div>
                        <div className="text-slate-900 font-black text-sm">Stock Optimized</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// 12. Sports Visual
// ---------------------------------------------------------
const SportsVisual: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.from('.spt-main', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" })
                .from('.spt-stat', { scale: 0, duration: 0.6, stagger: 0.1, ease: "back.out(2)" }, "-=0.2")
                .from('.spt-float', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
            gsap.to('.spt-float', { y: -6, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });

            gsap.to('.spt-live', { opacity: 0.2, duration: 0.8, repeat: -1, yoyo: true, ease: "linear" });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
            <div className="spt-main absolute inset-4 bg-[#0B1521] rounded-3xl border border-slate-700 shadow-2xl p-8 flex flex-col z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,107,255,0.05)_0%,transparent_100%)]"></div>
                <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className="text-white font-bold tracking-widest uppercase text-sm">Match Day Hub</div>
                    <div className="bg-red-500/20 px-2 py-1 rounded text-red-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                        <div className="spt-live w-1.5 h-1.5 bg-red-500 rounded-full"></div> Live
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="spt-stat bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-slate-400 text-xs font-bold mb-1">In Stadium</div>
                        <div className="text-2xl font-black text-white">42,881</div>
                    </div>
                    <div className="spt-stat bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-slate-400 text-xs font-bold mb-1">App Active</div>
                        <div className="text-2xl font-black text-emerald-400">128K</div>
                    </div>
                    <div className="spt-stat col-span-2 bg-brand-blue/10 border border-brand-blue/30 rounded-xl p-4 text-center mt-2 flex items-center justify-between">
                        <div className="text-left">
                            <div className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-0.5">Fan Engagement Score</div>
                            <div className="text-white text-lg font-bold">Trending High</div>
                        </div>
                        <Activity className="w-6 h-6 text-brand-blue" />
                    </div>
                </div>
            </div>
            <div className="spt-float spt-card absolute -left-8 top-1/2 -mt-8 bg-white rounded-xl p-3 border border-slate-200 shadow-xl w-48 z-20 flex flex-col">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                    <Ticket className="w-4 h-4 text-brand-blue" />
                    <span className="text-slate-800 text-xs font-bold uppercase tracking-widest">Digital Ticketing</span>
                </div>
                <div className="flex justify-between items-end">
                    <span className="text-slate-400 text-xs font-medium">Scanned</span>
                    <span className="text-slate-900 font-bold">94%</span>
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------
// Component Map
// ---------------------------------------------------------
export const IndustryHeroVisual: FC<IndustryHeroVisualProps> = ({ slug }) => {
    switch (slug) {
        case 'finance': return <FinanceVisual />;
        case 'healthcare': return <HealthcareVisual />;
        case 'education': return <EducationVisual />;
        case 'real-estate': return <RealEstateVisual />;
        case 'retail': return <RetailVisual />;
        case 'supply-chain': return <SupplyChainVisual />;
        case 'transportation': return <TransportationVisual />;
        case 'marketing': return <MarketingVisual />;
        case 'insurance': return <InsuranceVisual />;
        case 'legal': return <LegalVisual />;
        case 'fashion': return <FashionVisual />;
        case 'sports': return <SportsVisual />;
        default: return <FinanceVisual />;
    }
};

export default IndustryHeroVisual;
