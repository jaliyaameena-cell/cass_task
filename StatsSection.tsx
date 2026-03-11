import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 50, suffix: "+", label: "Events Conducted" },
  { value: 25, suffix: "+", label: "Workshops Organized" },
  { value: 15, suffix: "+", label: "Partner Institutions" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(id);
  }, [target, inView]);
  return count;
}

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(210,45%,8%) 0%, hsl(190,40%,12%) 50%, hsl(160,50%,18%) 100%)" }}
    >
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Reach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Making an Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s, i) => {
              const count = useCountUp(s.value, inView);
              return (
                <div key={s.label} className="text-center relative">
                  {i > 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
                  )}
                  <span className="stat-number text-accent">
                    {count}
                    {s.suffix}
                  </span>
                  <p className="text-white/50 text-sm mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
