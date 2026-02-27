import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const schema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  company: z.string().min(1, 'Company name is required'),
  industry: z.string().min(1, 'Please select an industry'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().min(10, 'Please provide more details'),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <>
        <SEOHead title={`${t('pages.contact.thankYou')} | Ticode Technologies`} description="" path="/contact" />
        <section className="relative min-h-[80vh] flex items-center justify-center section-padding bg-[#071826] overflow-hidden">
          {/* Deep Space Background for Success State */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-50" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="container-tight relative z-10"
          >
            <div className="mx-auto max-w-lg text-center p-12 rounded-3xl border border-white/10 bg-[#0B1F33]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(43,179,255,0.1)]">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 mb-8 shadow-[0_0_30px_rgba(54,224,255,0.2)]">
                <CheckCircle2 className="h-10 w-10 text-accent-cyan" />
              </div>
              <h1 className="text-3xl font-black tracking-tighter text-white font-heading md:text-5xl mb-4">{t('pages.contact.thankYou')}</h1>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">{t('pages.contact.thankYouDesc')}</p>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead title={`${t('pages.contact.headline')} | Ticode Technologies`} description={t('pages.contact.subtitle')} path="/contact" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-[#071826] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-50" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

        <div className="container-tight relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(54,224,255,0.8)]" />
              <span className="text-xs font-bold tracking-[0.2em] text-accent-cyan uppercase font-mono">
                {t('pages.contact.label', 'Executive Outreach')}
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white font-heading md:text-7xl lg:text-[5rem] leading-[1.05] mb-6">
              Initiate Strategic
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">Dialog.</span>
            </h1>
            <p className="text-lg text-slate-400 font-medium leading-[1.6] max-w-2xl">
              {t('pages.contact.subtitle', 'Engage our technical board to architect sovereign digital outcomes for your enterprise.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative pb-24 md:pb-32 bg-[#071826] overflow-hidden">
        {/* Ambient Blur Bottom Left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1a365d]/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />
        <div className="container-tight relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Left Column: Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-6"
            >
              {[
                { icon: MapPin, title: t('pages.contact.office'), desc: t('footer.address') },
                { icon: Mail, title: t('pages.contact.email'), desc: t('footer.email') },
                { icon: Phone, title: t('pages.contact.phone'), desc: t('footer.phone') }
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1F33]/50 p-6 backdrop-blur-sm transition-all hover:bg-[#0B1F33] hover:border-brand-blue/30">
                  <div className="absolute left-0 top-0 h-full w-1 bg-brand-blue opacity-0 transition-opacity group-hover:opacity-100 shadow-[0_0_15px_rgba(47,107,255,0.6)]" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-accent-cyan transition-colors group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 font-mono">
                        {item.title}
                      </h3>
                      <p className="text-base font-medium text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right Column: Intake Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onSubmit={handleSubmit(onSubmit)}
              className="lg:col-span-8 rounded-3xl border border-white/10 bg-[#0B1F33] p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              <div className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">{t('pages.contact.fullName')}</Label>
                    <Input
                      {...register('fullName')}
                      placeholder={t('pages.contact.fullNamePlaceholder')}
                      className="bg-black/20 border-white/10 text-white placeholder:text-white/20 h-14 rounded-xl focus-visible:ring-1 focus-visible:ring-accent-cyan focus-visible:border-accent-cyan"
                    />
                    {errors.fullName && <p className="text-xs font-medium text-red-400 mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">{t('pages.contact.companyName')}</Label>
                    <Input
                      {...register('company')}
                      placeholder={t('pages.contact.companyPlaceholder')}
                      className="bg-black/20 border-white/10 text-white placeholder:text-white/20 h-14 rounded-xl focus-visible:ring-1 focus-visible:ring-accent-cyan focus-visible:border-accent-cyan"
                    />
                    {errors.company && <p className="text-xs font-medium text-red-400 mt-1">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">{t('pages.contact.industry')}</Label>
                    <Select onValueChange={(v) => setValue('industry', v)}>
                      <SelectTrigger className="bg-black/20 border-white/10 text-white h-14 rounded-xl focus:ring-1 focus:ring-accent-cyan focus:border-accent-cyan">
                        <SelectValue placeholder={t('pages.contact.industryPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0B1F33] border-white/10 text-white">
                        {['Fashion', 'Sports', 'Education', 'Healthcare', 'Marketing', 'Real Estate', 'Retail', 'Transportation', 'Supply Chain', 'Finance', 'Insurance', 'Legal', 'Other'].map(i => (
                          <SelectItem key={i} value={i.toLowerCase()} className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{i}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.industry && <p className="text-xs font-medium text-red-400 mt-1">{errors.industry.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">{t('pages.contact.serviceNeeded')}</Label>
                    <Select onValueChange={(v) => setValue('service', v)}>
                      <SelectTrigger className="bg-black/20 border-white/10 text-white h-14 rounded-xl focus:ring-1 focus:ring-accent-cyan focus:border-accent-cyan">
                        <SelectValue placeholder={t('pages.contact.servicePlaceholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0B1F33] border-white/10 text-white">
                        {['IT Consulting', 'AI & ML', 'Software Development', 'Cloud & Infrastructure', 'Digital Marketing', 'Data & Analytics', 'Other'].map(s => (
                          <SelectItem key={s} value={s.toLowerCase()} className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-xs font-medium text-red-400 mt-1">{errors.service.message}</p>}
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">{t('pages.contact.budget')}</Label>
                    <Select onValueChange={(v) => setValue('budget', v)}>
                      <SelectTrigger className="bg-black/20 border-white/10 text-white h-14 rounded-xl focus:ring-1 focus:ring-accent-cyan focus:border-accent-cyan">
                        <SelectValue placeholder={t('pages.contact.budgetPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0B1F33] border-white/10 text-white">
                        <SelectItem value="under-10k" className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{t('pages.contact.budgetOptions.under10k')}</SelectItem>
                        <SelectItem value="10k-50k" className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{t('pages.contact.budgetOptions.10k50k')}</SelectItem>
                        <SelectItem value="50k-100k" className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{t('pages.contact.budgetOptions.50k100k')}</SelectItem>
                        <SelectItem value="100k+" className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{t('pages.contact.budgetOptions.100kPlus')}</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.budget && <p className="text-xs font-medium text-red-400 mt-1">{errors.budget.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">{t('pages.contact.timeline')}</Label>
                    <Select onValueChange={(v) => setValue('timeline', v)}>
                      <SelectTrigger className="bg-black/20 border-white/10 text-white h-14 rounded-xl focus:ring-1 focus:ring-accent-cyan focus:border-accent-cyan">
                        <SelectValue placeholder={t('pages.contact.timelinePlaceholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0B1F33] border-white/10 text-white">
                        <SelectItem value="1-3" className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{t('pages.contact.timelineOptions.1to3')}</SelectItem>
                        <SelectItem value="3-6" className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{t('pages.contact.timelineOptions.3to6')}</SelectItem>
                        <SelectItem value="6-12" className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{t('pages.contact.timelineOptions.6to12')}</SelectItem>
                        <SelectItem value="12+" className="focus:bg-brand-blue/30 focus:text-white cursor-pointer">{t('pages.contact.timelineOptions.12plus')}</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.timeline && <p className="text-xs font-medium text-red-400 mt-1">{errors.timeline.message}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">{t('pages.contact.message')}</Label>
                  <Textarea
                    {...register('message')}
                    placeholder={t('pages.contact.messagePlaceholder')}
                    rows={6}
                    className="bg-black/20 border-white/10 text-white placeholder:text-white/20 rounded-xl resize-none py-4 focus-visible:ring-1 focus-visible:ring-accent-cyan focus-visible:border-accent-cyan"
                  />
                  {errors.message && <p className="text-xs font-medium text-red-400 mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-16 rounded-xl bg-blend-screen bg-gradient-to-r from-brand-blue to-accent-cyan text-white font-bold tracking-widest uppercase font-mono shadow-[0_10px_30px_-10px_rgba(47,107,255,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(54,224,255,0.7)] transition-all flex items-center justify-center gap-3 group"
                >
                  <span>{t('pages.contact.submit')}</span>
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
