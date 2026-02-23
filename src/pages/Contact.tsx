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
        <section className="section-padding">
          <div className="container-tight">
            <div className="mx-auto max-w-lg text-center">
              <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h1 className="text-3xl font-semibold tracking-tight text-foreground font-heading">{t('pages.contact.thankYou')}</h1>
              <p className="mt-3 text-muted-foreground">{t('pages.contact.thankYouDesc')}</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead title={`${t('pages.contact.headline')} | Ticode Technologies`} description={t('pages.contact.subtitle')} path="/contact" />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t('pages.contact.label')}</p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl">{t('pages.contact.headline')}</h1>
            <p className="mt-3 text-muted-foreground">{t('pages.contact.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-bg-tint">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><p className="text-sm font-semibold text-foreground">{t('pages.contact.office')}</p><p className="text-sm text-muted-foreground">{t('footer.address')}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><p className="text-sm font-semibold text-foreground">{t('pages.contact.email')}</p><p className="text-sm text-muted-foreground">{t('footer.email')}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><p className="text-sm font-semibold text-foreground">{t('pages.contact.phone')}</p><p className="text-sm text-muted-foreground">{t('footer.phone')}</p></div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-2 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>{t('pages.contact.fullName')}</Label>
                  <Input {...register('fullName')} placeholder={t('pages.contact.fullNamePlaceholder')} />
                  {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label>{t('pages.contact.companyName')}</Label>
                  <Input {...register('company')} placeholder={t('pages.contact.companyPlaceholder')} />
                  {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>{t('pages.contact.industry')}</Label>
                  <Select onValueChange={(v) => setValue('industry', v)}>
                    <SelectTrigger><SelectValue placeholder={t('pages.contact.industryPlaceholder')} /></SelectTrigger>
                    <SelectContent>
                      {['Fashion','Sports','Education','Healthcare','Marketing','Real Estate','Retail','Transportation','Supply Chain','Finance','Insurance','Legal','Other'].map(i => (
                        <SelectItem key={i} value={i.toLowerCase()}>{i}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.industry && <p className="text-xs text-destructive">{errors.industry.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label>{t('pages.contact.serviceNeeded')}</Label>
                  <Select onValueChange={(v) => setValue('service', v)}>
                    <SelectTrigger><SelectValue placeholder={t('pages.contact.servicePlaceholder')} /></SelectTrigger>
                    <SelectContent>
                      {['IT Consulting','AI & ML','Software Development','Cloud & Infrastructure','Digital Marketing','Data & Analytics','Other'].map(s => (
                        <SelectItem key={s} value={s.toLowerCase()}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>{t('pages.contact.budget')}</Label>
                  <Select onValueChange={(v) => setValue('budget', v)}>
                    <SelectTrigger><SelectValue placeholder={t('pages.contact.budgetPlaceholder')} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">{t('pages.contact.budgetOptions.under10k')}</SelectItem>
                      <SelectItem value="10k-50k">{t('pages.contact.budgetOptions.10k50k')}</SelectItem>
                      <SelectItem value="50k-100k">{t('pages.contact.budgetOptions.50k100k')}</SelectItem>
                      <SelectItem value="100k+">{t('pages.contact.budgetOptions.100kPlus')}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.budget && <p className="text-xs text-destructive">{errors.budget.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label>{t('pages.contact.timeline')}</Label>
                  <Select onValueChange={(v) => setValue('timeline', v)}>
                    <SelectTrigger><SelectValue placeholder={t('pages.contact.timelinePlaceholder')} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">{t('pages.contact.timelineOptions.1to3')}</SelectItem>
                      <SelectItem value="3-6">{t('pages.contact.timelineOptions.3to6')}</SelectItem>
                      <SelectItem value="6-12">{t('pages.contact.timelineOptions.6to12')}</SelectItem>
                      <SelectItem value="12+">{t('pages.contact.timelineOptions.12plus')}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.timeline && <p className="text-xs text-destructive">{errors.timeline.message}</p>}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>{t('pages.contact.message')}</Label>
                <Textarea {...register('message')} placeholder={t('pages.contact.messagePlaceholder')} rows={5} />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">{t('pages.contact.submit')}</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
