import SEOHead from '@/components/SEOHead';

const Privacy = () => {
    return (
        <>
            <SEOHead
                title="Privacy Policy | Ticode Technologies"
                description="Read the privacy policy of Ticode Technologies covering data collection, usage, and protection practices."
                path="/privacy"
            />
            <div className="min-h-screen bg-[#0B1521] pt-40 pb-20">
                <div className="container-tight max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Privacy Policy</h1>
                    <p className="text-white/40 text-sm font-mono mb-12">Last updated: February 2026</p>

                    <div className="space-y-10 text-white/70 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                            <p>Ticode Technologies ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
                            <p>We may collect the following types of information:</p>
                            <ul className="list-disc list-inside mt-3 space-y-2">
                                <li><strong className="text-white/90">Contact Information:</strong> Name, email, phone number, and company name when you submit forms or request consultations.</li>
                                <li><strong className="text-white/90">Usage Data:</strong> Browser type, IP address, pages visited, and interaction patterns collected through cookies and analytics tools.</li>
                                <li><strong className="text-white/90">Business Information:</strong> Project details, budget, and requirements shared during consultation requests.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>To respond to consultation requests and inquiries</li>
                                <li>To provide and improve our services</li>
                                <li>To send relevant updates about our services (with your consent)</li>
                                <li>To analyze website usage and improve user experience</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Data Protection</h2>
                            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is stored securely and access is restricted to authorized personnel only.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at <a href="mailto:info@ticodetech.com" className="text-brand-blue hover:underline">info@ticodetech.com</a>.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. Contact</h2>
                            <p>For any privacy-related questions, please contact us at <a href="mailto:info@ticodetech.com" className="text-brand-blue hover:underline">info@ticodetech.com</a>.</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Privacy;
