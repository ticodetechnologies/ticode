import SEOHead from '@/components/SEOHead';

const Terms = () => {
    return (
        <>
            <SEOHead
                title="Terms of Service | Ticode Technologies"
                description="Read the terms of service for Ticode Technologies covering usage, intellectual property, and service agreements."
                path="/terms"
            />
            <div className="min-h-screen bg-[#0B1521] pt-40 pb-20">
                <div className="container-tight max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Terms of Service</h1>
                    <p className="text-white/40 text-sm font-mono mb-12">Last updated: February 2026</p>

                    <div className="space-y-10 text-white/70 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing and using the Ticode Technologies website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Services</h2>
                            <p>Ticode Technologies provides IT consulting, AI solutions, software development, digital marketing, and related technology services. The specific scope, deliverables, and terms of each engagement are defined in individual service agreements.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Intellectual Property</h2>
                            <p>All content on this website—including text, graphics, logos, and software—is the property of Ticode Technologies and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. User Responsibilities</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Provide accurate information when submitting forms or consultation requests</li>
                                <li>Use the website and services in compliance with applicable laws</li>
                                <li>Not attempt to disrupt or compromise website security</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                            <p>Ticode Technologies shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability is limited to the fees paid for the specific service in question.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. Governing Law</h2>
                            <p>These terms are governed by the laws of the State of Kuwait. Any disputes arising from these terms shall be resolved in the courts of Kuwait.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">7. Contact</h2>
                            <p>For questions about these terms, please contact us at <a href="mailto:info@ticodetech.com" className="text-brand-blue hover:underline">info@ticodetech.com</a>.</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Terms;
