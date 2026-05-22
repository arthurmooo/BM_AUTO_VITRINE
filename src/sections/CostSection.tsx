import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Clock, Euro, Minus, Plus, Timer, Coins, UserCheck } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Animated Number — counts up/down smoothly                          */
/* ------------------------------------------------------------------ */
function AnimatedNumber({ value, duration = 400 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = prevRef.current;
    const end = value;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setDisplay(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        prevRef.current = end;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return <>{display.toLocaleString('fr-FR')}</>;
}

/* ------------------------------------------------------------------ */
/*  Animated Value — for non-integer like ETP                          */
/* ------------------------------------------------------------------ */
function AnimatedValue({ value }: { value: string }) {
  return <>{value}</>;
}

/* ------------------------------------------------------------------ */
/*  Slider Input — Polished                                           */
/* ------------------------------------------------------------------ */
interface SliderFieldProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  unitLabel?: string;
}

function SliderField({ icon, label, value, onChange, min, max, step, unit, unitLabel }: SliderFieldProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const decrement = () => onChange(Math.max(min, value - step));
  const increment = () => onChange(Math.min(max, value + step));

  return (
    <div className="flex items-start gap-4">
      {/* Icon */}
      <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center flex-shrink-0 mt-1">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-gray">{label}</p>
        {/* Animated value */}
        <div className="flex items-baseline gap-2 mt-1 tabular-nums">
          <span className="font-serif text-[clamp(32px,3vw,42px)] text-violet font-light leading-none tracking-tight">
            <AnimatedNumber value={value} />
          </span>
          <span className="text-sm text-muted-gray font-medium">{unitLabel || unit}</span>
        </div>

        {/* Slider row */}
        <div className="flex items-center gap-3 mt-3">
          {/* Slider */}
          <div className="flex-1 relative h-6 flex items-center">
            {/* Track background */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-[4px] bg-cream rounded-full overflow-hidden">
                {/* Filled track */}
                <div
                  className="h-full rounded-full transition-all duration-150 ease-out"
                  style={{
                    width: `${percentage}%`,
                    background: 'linear-gradient(90deg, #2B1E3D 0%, #2B1E3D 70%, #B89B5E 100%)',
                  }}
                />
              </div>
            </div>
            {/* Native range input (invisible, for interaction) */}
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleSlider}
              className="slider-premium w-full absolute inset-0 opacity-0 cursor-pointer"
              style={{ zIndex: 2 }}
            />
            {/* Custom thumb (positioned) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-150 ease-out"
              style={{ left: `calc(${percentage}% - 10px)` }}
            >
              <div className="w-5 h-5 rounded-full bg-gold border-[2.5px] border-ivory shadow-[0_1px_6px_rgba(43,30,61,0.25)] slider-thumb-premium" />
            </div>
          </div>

          {/* +/- Buttons */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={decrement}
              className="w-7 h-7 rounded-md border border-lavender/30 flex items-center justify-center text-muted-gray hover:border-violet hover:text-violet transition-all active:scale-95"
            >
              <Minus className="w-3 h-3" strokeWidth={1.5} />
            </button>
            <button
              onClick={increment}
              className="w-7 h-7 rounded-md border border-lavender/30 flex items-center justify-center text-muted-gray hover:border-violet hover:text-violet transition-all active:scale-95"
            >
              <Plus className="w-3 h-3" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cost Section                                                       */
/* ------------------------------------------------------------------ */
export default function CostSection() {
  const [people, setPeople] = useState(6);
  const [minutesPerDay, setMinutesPerDay] = useState(45);
  const [hourlyRate, setHourlyRate] = useState(85);

  const hoursPerYear = Math.round((people * minutesPerDay * 230) / 60);
  const workingDaysLost = Math.round(hoursPerYear / 8);
  const annualCost = people * minutesPerDay * 230 * (hourlyRate / 60);
  const etpEquivalent = (hoursPerYear / 1607).toFixed(1).replace('.', ',');

  const headlineWords = 'Le manuel ne se voit pas dans vos outils. Il se voit dans vos marges.'.split(' ');

  return (
    <section
      id="cost"
      className="relative w-full py-[12vh] bg-ivory z-20"
    >
      <div className="relative z-10 flex flex-col items-center px-[6vw]">
        {/* Micro label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-gold/40" />
          <span className="micro-label text-gold tracking-[0.18em]">COÛT CACHÉ DU MANUEL</span>
          <div className="w-8 h-[1px] bg-gold/40" />
        </div>

        {/* Headline */}
        <h2
          className="font-serif text-display-sm text-violet text-center max-w-[78vw]"
          style={{ fontWeight: 400 }}
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
        </h2>

        <p className="text-center text-muted-gray text-[clamp(14px,1.15vw,16px)] leading-relaxed mt-4 max-w-[48vw]">
          Quelques minutes perdues chaque jour par des profils qualifiés deviennent très vite une capacité invisible qui coûte cher.
        </p>

        {/* Calculator Card */}
        <div className="mt-8 w-full max-w-[880px] bg-ivory rounded-[12px] shadow-card border border-gold/15 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Hypotheses */}
            <div className="flex-1 p-8 lg:border-r border-gold/10">
              <p className="micro-label text-muted-gray text-[10px] mb-8">VOS HYPOTHÈSES</p>

              <div className="space-y-8">
                <SliderField
                  icon={<Users className="w-4 h-4 text-gold" strokeWidth={1.5} />}
                  label="Personnes concernées"
                  value={people}
                  onChange={setPeople}
                  min={1}
                  max={20}
                  step={1}
                  unit=""
                />
                <SliderField
                  icon={<Clock className="w-4 h-4 text-gold" strokeWidth={1.5} />}
                  label="Minutes perdues / jour"
                  value={minutesPerDay}
                  onChange={setMinutesPerDay}
                  min={5}
                  max={120}
                  step={5}
                  unit="min"
                />
                <SliderField
                  icon={<Euro className="w-4 h-4 text-gold" strokeWidth={1.5} />}
                  label="Coût horaire"
                  value={hourlyRate}
                  onChange={setHourlyRate}
                  min={30}
                  max={300}
                  step={5}
                  unit="€/h"
                  unitLabel="€/h"
                />
              </div>
            </div>

            {/* Right: Impact */}
            <div className="lg:w-[340px] flex-shrink-0 p-8 bg-cream/30">
              <p className="micro-label text-muted-gray text-[10px] mb-8">VOTRE IMPACT ANNUEL</p>

              <div className="space-y-7">
                {/* Temps perdu */}
                <div className="flex items-start gap-3">
                  <Timer className="w-5 h-5 text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-gray">Temps perdu / an</p>
                    <p className="font-serif text-[clamp(36px,3vw,48px)] text-violet font-light leading-tight tabular-nums">
                      <AnimatedNumber value={hoursPerYear} /> <span className="text-lg text-muted-gray font-sans">heures</span>
                    </p>
                    <p className="text-xs text-muted-gray mt-1">≈ <AnimatedNumber value={workingDaysLost} /> jours ouvrés perdus</p>
                  </div>
                </div>

                <div className="h-[1px] bg-gold/20" />

                {/* Coût annuel */}
                <div className="flex items-start gap-3">
                  <Coins className="w-5 h-5 text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-gray">Coût annuel</p>
                    <p className="font-serif text-[clamp(36px,3vw,48px)] text-violet font-light leading-tight tabular-nums">
                      <AnimatedNumber value={Math.round(annualCost)} /> <span className="text-lg text-muted-gray font-sans">€</span>
                    </p>
                    <p className="text-xs text-gold mt-1">Coût invisible. Impact bien réel.</p>
                  </div>
                </div>

                <div className="h-[1px] bg-gold/20" />

                {/* ETP */}
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-gray">Équivalent capacité perdue</p>
                    <p className="font-serif text-2xl text-violet font-light mt-1 tabular-nums">
                      <AnimatedValue value={etpEquivalent} /> <span className="text-sm text-muted-gray font-sans">ETP</span>
                    </p>
                    <p className="text-xs text-muted-gray mt-1">Une ressource à temps plein mobilisée... sans création de valeur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <button className="btn-premium group flex items-center gap-2 bg-violet text-ivory px-6 py-3 rounded-lg text-sm font-medium hover:bg-violet/90">
            Identifier un gain de temps
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
