import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const ExecutiveAction = () => {
    return (
        <section className="relative overflow-hidden bg-base py-32 md:py-48 lg:py-64 border-t border-white/5">
            {/* Pure Radial Authority Gradient - No Grid Dots */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="container-tight relative z-10 flex flex-col items-center justify-center text-center">
                <div className="mb-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan"></span>
                    </span>
                    Executive Command
                </div>

                <h2 className="font-heading text-5xl font-black tracking-tighter text-white md:text-7xl lg:text-[7.5rem] leading-[0.9] drop-shadow-2xl max-w-5xl">
                    Initiate Strategic
                    <span className="block text-white/50 mt-2">Engagement.</span>
                </h2>

                <p className="mt-12 text-lg md:text-2xl font-medium leading-[1.6] text-white/60 max-w-2xl">
                    Blueprint your organization's sovereign digital infrastructure with the Ticode Engineering Board.
                </p>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
                    <Button
                        asChild
                        size="lg"
                        className="group relative overflow-hidden rounded-full bg-brand-blue/90 px-10 py-7 text-lg font-bold text-white transition-all duration-500 hover:scale-[1.03] hover:bg-brand-blue hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] w-full sm:w-auto"
                    >
                        <Link to="/contact">
                            {/* Sliding Tracking Background */}
                            <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-black/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />

                            <span className="relative z-10 flex items-center justify-center">
                                Request Board Review
                                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                            </span>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveAction;
