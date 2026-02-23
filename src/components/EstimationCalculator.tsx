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
    <div id="calculator" className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-1 p-8 sm:p-12 shadow-2xl">
      <div className="absolute top-0 right-0 p-6 flex justify-end pointer-events-none">
        <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/20">
          Internal Estimation Engine // Secure
        </div>
      </div>

      <h3 className="mb-2 text-2xl font-black tracking-tight text-white font-heading">
        Strategic Investment Model
      </h3>
      <p className="mb-10 text-sm font-medium text-white/50 leading-relaxed max-w-lg">
        Configure engagement perimeters below. Final scope requires validation by the Ticode Executive Engineering Board.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.id} className="space-y-3">
            <Label className="text-xs font-bold uppercase tracking-widest text-white/60">{f.label}</Label>
            {f.type === 'select' && f.options && (
              <Select value={values[f.id] as string} onValueChange={(v) => setValues((p) => ({ ...p, [f.id]: v }))}>
                <SelectTrigger className="bg-base border-white/10 text-white rounded-lg h-12 hover:border-brand-blue/50 focus:ring-brand-blue transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-surface-1 border-white/10">
                  {f.options.map((o) => (
                    <SelectItem key={o.value} value={o.value} className="text-white/80 focus:bg-brand-blue/20 focus:text-white">
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {f.type === 'slider' && (
              <div className="pt-4">
                <Slider
                  min={(f as CalculatorField).min}
                  max={(f as CalculatorField).max}
                  step={(f as CalculatorField).step}
                  value={[values[f.id] as number]}
                  onValueChange={([v]) => setValues((p) => ({ ...p, [f.id]: v }))}
                  className="[&_[role=slider]]:bg-brand-blue [&_[role=slider]]:border-white"
                />
                <p className="mt-3 text-sm font-bold text-accent-cyan tracking-wider">{values[f.id]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16 rounded-xl border border-white/5 bg-base p-8 md:p-10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05)_0%,transparent_80%)] opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
        <p className="text-[0.70rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-4 text-center md:text-left">
          Projected Capital Allocation Range
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="font-mono text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white drop-shadow-md relative z-10 text-center md:text-left">
            {estimate.isValid ? `$${estimate.low.toLocaleString()} - $${estimate.high.toLocaleString()}` : 'Validating Input...'}
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand-blue text-white font-bold h-14 px-8 border border-white/10 transition-all hover:bg-brand-blue-dark shadow-[0_5px_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 relative z-10 w-full md:w-auto"
          >
            <Link to="/contact">Request Board Review <ArrowRight className="ms-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EstimationCalculator;

