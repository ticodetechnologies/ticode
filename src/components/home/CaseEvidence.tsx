import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CaseEvidence = () => {
    return (
        <section className="relative overflow-hidden bg-base py-32 lg:py-48">
            {/* Background radial glow */}
            <div className="absolute inset-x-0 bottom-0 h-[400px] w-full bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.1)_0%,transparent_70%)]" />

            <div className="container-tight relative z-10">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 flex items-center justify-between">
                        <h2 className="font-heading text-2xl font-bold tracking-tight text-white md:text-4xl">
                            Verified Enterprise Impact.
                        </h2>
                        <Link
                            to="/case-studies"
                            className="group hidden items-center text-sm font-semibold text-text-primary/70 transition-colors hover:text-white md:flex"
                        >
                            View Full Archive
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface-1 shadow-2xl">
                        {/* Ambient inner glow */}
                        <div className="absolute -top-[200px] -right-[200px] h-[400px] w-[400px] rounded-full bg-brand-blue/20 blur-[100px]" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
                            {/* Image/Visual Side */}
                            <div className="relative h-64 overflow-hidden bg-surface-2 lg:h-auto">
                                {/* Replace with actual Unsplash enterprise imagery */}
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                                    alt="Enterprise boardroom"
                                    className="h-full w-full object-cover opacity-60 mix-blend-luminosity transition-transform duration-1000 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/50 to-transparent lg:bg-gradient-to-r" />

                                <div className="absolute bottom-8 left-8">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                                        Case Study
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex flex-col justify-center p-10 lg:p-16">
                                <blockquote className="relative">
                                    <Quote className="absolute -top-4 -left-6 h-8 w-8 text-brand-blue/30 lg:-left-10 lg:h-12 lg:w-12" />
                                    <p className="relative z-10 text-xl font-medium leading-relaxed text-white lg:text-2xl">
                                        "Ticode architected a sovereign intelligence framework that reduced our multi-cloud deployment overhead by 40% while achieving absolute GCC data compliance."
                                    </p>
                                </blockquote>

                                <div className="mt-12 mb-12 flex flex-col gap-6 border-y border-white/10 py-8 sm:flex-row sm:items-center sm:divide-x sm:divide-white/10">
                                    <div className="sm:pr-8">
                                        <div className="font-mono text-4xl font-bold text-accent-cyan metric-glow">
                                            40%
                                        </div>
                                        <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted">
                                            Cost Reduction
                                        </div>
                                    </div>
                                    <div className="sm:pl-8">
                                        <div className="font-mono text-4xl font-bold text-white">
                                            Zero
                                        </div>
                                        <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted">
                                            Compliance Breaches
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-surface-2">
                                        <img
                                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                                            alt="Chief Technology Officer"
                                            className="h-full w-full object-cover grayscale"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">Ibrahim Al-Rashid</div>
                                        <div className="text-sm text-text-primary/60">
                                            Chief Technology Officer, Leading GCC Financial Institution
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center md:hidden">
                        <Button
                            asChild
                            variant="outline"
                            className="w-full rounded-full border-white/20 bg-transparent py-6 text-sm font-semibold text-white hover:bg-white/5"
                        >
                            <Link to="/case-studies">
                                View Full Archive <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseEvidence;
