import { Activity, MapPin, BarChart2, Shield, Cloud, TrendingUp } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from './animations/ScrollReveal';

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Monitor charger status, sessions, power usage, and device health in real time.',
    span: 'lg:col-span-2',
    accent: true,
  },
  {
    icon: MapPin,
    title: 'Station Management',
    description: 'Manage multiple charging stations and track performance from one dashboard.',
    span: 'lg:col-span-1',
    accent: false,
  },
  {
    icon: BarChart2,
    title: 'Analytics and Reporting',
    description: 'Detailed analytics on energy usage, session data, revenue, and network trends.',
    span: 'lg:col-span-1',
    accent: false,
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Secure authentication, encrypted communication, and role-based access control.',
    span: 'lg:col-span-1',
    accent: true,
  },
  {
    icon: Cloud,
    title: 'Cloud or On-Premise',
    description: 'Deploy on your preferred infrastructure to fit compliance and operations.',
    span: 'lg:col-span-1',
    accent: false,
  },
  {
    icon: TrendingUp,
    title: 'Built for Scale',
    description: 'Designed to grow from a single site to nationwide charging networks.',
    span: 'lg:col-span-1',
    accent: false,
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-4 py-24 md:px-8 md:py-28 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[#09090B]/55" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mb-14 max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Everything you need to scale
          </h2>
          <p className="text-lg text-zinc-300 md:text-xl">
            Built for enterprise operations, designed for teams that need clarity under load.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`stagger-item group relative overflow-hidden rounded-2xl border p-8 transition-colors duration-300 ${
                feature.accent
                  ? 'border-violet-500/25 bg-[#110f1a]/95 shadow-lg shadow-black/20'
                  : 'border-white/12 bg-[#0c0c10]/95 shadow-lg shadow-black/20'
              } ${feature.span}`}
            >
              <div className="relative space-y-5">
                <div
                  className={`flex size-12 items-center justify-center rounded-xl border ${
                    feature.accent
                      ? 'border-violet-400/30 bg-violet-500/20'
                      : 'border-white/15 bg-white/8'
                  }`}
                >
                  <feature.icon
                    className={`size-6 ${feature.accent ? 'text-violet-200' : 'text-white'}`}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-2.5">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-zinc-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
