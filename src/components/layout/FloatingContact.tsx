import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import PhoneInput, { type Country } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [countryCode, setCountryCode] = useState<Country>('KW');
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        requirements: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const { t } = useTranslation();

    useEffect(() => {
        // Fetch user's country code based on IP
        const fetchCountryCode = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                if (data && data.country_code) {
                    setCountryCode(data.country_code.toUpperCase() as Country);
                }
            } catch (error) {
                console.error('Error fetching country code:', error);
            }
        };

        fetchCountryCode();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsOpen(false);
            setFormData({ fullName: '', phone: '', email: '', requirements: '' });
            toast({
                title: t('floatingContact.requestSubmitted', 'Request Submitted'),
                description: t('floatingContact.ctoContact', 'Our CTO will contact you shortly.'),
            });
        }, 1500);
    };

    return (
        <>
            {/* Desktop: bottom-right floating cluster */}
            <div className="fixed bottom-5 end-5 z-50 hidden md:flex flex-col items-end gap-2">
                {/* Get a Call Back Button */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <button className="flex items-center gap-2 bg-[#005EED] hover:bg-[#004dc2] text-white px-4 py-2.5 rounded-full shadow-[0_4px_16px_rgba(0,94,237,0.28)] hover:shadow-[0_6px_22px_rgba(0,94,237,0.38)] transition-all duration-300 hover:-translate-y-0.5 border border-[#005EED]/80 font-semibold text-sm tracking-wide whitespace-nowrap">
                            <Phone className="h-4 w-4 shrink-0" fill="white" />
                            {t('floatingContact.getCallBack', 'Get a Call Back')}
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-[#1E1B29] text-white border-gray-800">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">
                                {t('floatingContact.dialogTitle', 'Discuss your Idea')} <br />  {t('floatingContact.dialogWith', 'with a')} <span className="text-[#00B4D8]">{t('floatingContact.dialogCTO', 'CTO!')}</span>
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
                            <Input
                                placeholder={t('floatingContact.fullName', 'Full Name')}
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                required
                                className="bg-[#2D283E] border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-[#00B4D8]"
                            />

                            <div className="phone-input-dark-theme">
                                <PhoneInput
                                    international
                                    defaultCountry={countryCode}
                                    value={formData.phone}
                                    onChange={(val) => setFormData({ ...formData, phone: val || '' })}
                                    className="flex h-10 w-full rounded-md border border-gray-700 bg-[#2D283E] px-3 py-2 text-sm text-white focus-within:ring-2 focus-within:ring-[#00B4D8] focus-within:ring-offset-0 focus-within:border-transparent"
                                    placeholder={t('floatingContact.mobileNumber', 'Mobile Number')}
                                    required
                                />
                            </div>

                            <Input
                                type="email"
                                placeholder={t('floatingContact.businessEmail', 'Business Email')}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="bg-[#2D283E] border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-[#00B4D8]"
                            />

                            <Textarea
                                placeholder={t('floatingContact.requirements', 'Please Share Your Business Requirements')}
                                value={formData.requirements}
                                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                required
                                className="bg-[#2D283E] border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-[#00B4D8] min-h-[100px]"
                            />

                            <Button
                                type="submit"
                                className="w-full bg-[#00B4D8] hover:bg-[#0096B4] text-white font-semibold mt-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? t('floatingContact.submitting', 'Submitting...') : t('floatingContact.callMeNow', 'Call Me Now!')}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* WhatsApp Button (Desktop) */}
                <a
                    href="https://wa.me/96541103254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5"
                >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413v.001z" />
                    </svg>
                </a>
            </div>

            {/* WhatsApp Button (Mobile only) */}
            <div className="fixed bottom-6 end-6 z-50 md:hidden">
                <a
                    href="https://wa.me/96541103254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition-transform transform hover:scale-105"
                    aria-label="Contact us on WhatsApp"
                >
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413v.001z" />
                    </svg>
                </a>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes whatsapp-wiggle {
            0%, 100% { transform: rotate(0deg) scale(1); }
            10%, 30%, 50%, 70%, 90% { transform: rotate(-10deg) scale(1.1); }
            20%, 40%, 60%, 80% { transform: rotate(10deg) scale(1.1); }
            95% { transform: rotate(0deg) scale(1); }
        }
        .animate-whatsapp-wiggle {
            animation: whatsapp-wiggle 3s ease-in-out infinite;
            transform-origin: center;
        }
        .phone-input-dark-theme .PhoneInputCountry {
          padding-left: 0.5rem;
          margin-right: 0.5rem;
        }
        .phone-input-dark-theme .PhoneInputCountryIcon--border {
          box-shadow: none;
          background-color: transparent;
        }
        .phone-input-dark-theme .PhoneInputCountrySelectArrow {
          color: #9ca3af;
        }
        .phone-input-dark-theme .PhoneInputInput {
          background: transparent;
          border: none;
          color: white;
          outline: none;
          width: 100%;
          font-size: 0.875rem;
        }
        .phone-input-dark-theme .PhoneInputInput::placeholder {
          color: #9ca3af;
        }
        .phone-input-dark-theme .PhoneInput {
          display: flex;
          align-items: center;
        }
        .phone-input-dark-theme select {
          background-color: #2D283E;
          color: white;
        }
      `}} />
        </>
    );
};

export default FloatingContact;
