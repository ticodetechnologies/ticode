import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CalculatorField } from '@/data/services';

interface Props {
  fields: CalculatorField[] | { id: string; label: string; type: 'select'; options: { label: string; value: string; multiplier: number }[] }[];
  baseRate: number;
}

const EstimationCalculator = ({ fields, baseRate }: Props) => {
  const { t } = useTranslation();
  const initValues: Record<string, string | number> = {};
  fields.forEach((f) => {
    if (f.type === 'select' && f.options) initValues[f.id] = f.options[0].value;
    if (f.type === 'slider') initValues[f.id] = (f as CalculatorField).defaultValue ?? (f as CalculatorField).min ?? 1;
  });

  const [values, setValues] = useState(initValues);

  const estimate = useMemo(() => {
    const safeBase = Number.isFinite(baseRate) ? baseRate : 0;
    let total = safeBase;
    fields.forEach((f) => {
      if (f.type === 'select' && f.options) {
        const selected = f.options.find((o) => o.value === values[f.id]);
        const multiplier = selected?.multiplier ?? 1;
        total *= Number.isFinite(multiplier) ? multiplier : 1;
      }
      if (f.type === 'slider') {
        const cf = f as CalculatorField;
        const raw = values[f.id];
        const val = Number.isFinite(Number(raw)) ? Number(raw) : (cf.defaultValue ?? cf.min ?? 0);
        const unit = Number.isFinite(cf.multiplierPerUnit ?? 0) ? (cf.multiplierPerUnit ?? 0) : 0;
        total *= 1 + unit * val;
      }
    });
    const low = Number.isFinite(total) ? Math.round(total * 0.85 / 100) * 100 : NaN;
    const high = Number.isFinite(total) ? Math.round(total * 1.25 / 100) * 100 : NaN;
    const isValid = Number.isFinite(low) && Number.isFinite(high);
    return { low, high, isValid };
  }, [values, fields, baseRate]);

  return (
    <div id="calculator" className="rounded-xl border border-primary/20 bg-card/80 p-8 sm:p-10">
      <h3 className="mb-8 text-xl font-bold text-foreground">{t('pages.calculator.title')}</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.id} className="space-y-2">
            <Label className="text-sm text-muted-foreground">{f.label}</Label>
            {f.type === 'select' && f.options && (
              <Select value={values[f.id] as string} onValueChange={(v) => setValues((p) => ({ ...p, [f.id]: v }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {f.options.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {f.type === 'slider' && (
              <div className="pt-2">
                <Slider
                  min={(f as CalculatorField).min}
                  max={(f as CalculatorField).max}
                  step={(f as CalculatorField).step}
                  value={[values[f.id] as number]}
                  onValueChange={([v]) => setValues((p) => ({ ...p, [f.id]: v }))}
                />
                <p className="mt-1 text-sm font-medium text-primary">{values[f.id]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-primary/30 bg-primary/10 p-8 text-center">
        <p className="text-sm text-muted-foreground">{t('pages.calculator.estimatedRange')}</p>
        <p className="mt-2 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          {estimate.isValid ? `$${estimate.low.toLocaleString()} - $${estimate.high.toLocaleString()}` : 'Estimate available after selections'}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{t('pages.calculator.currency')}</p>
        <Button asChild className="mt-6">
          <Link to="/contact">{t('pages.calculator.scheduleCta')} <ArrowRight className="ms-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
};

export default EstimationCalculator;

