import { useEffect, useState } from 'react';
import FadeIn from './ui/FadeIn';

interface Badge {
  label: string;
  color: 'green' | 'blue';
}

interface Program {
  number: string;
  title: string;
  desc: string;
  badges: Badge[];
}

const programs: Program[] = [
  {
    number: '01',
    title: 'National Climate Change Action Plan',
    desc: 'Running from 2011 to 2028, this is the country\'s central playbook for surviving a warming world. It touches everything from food and water to energy and disaster risk.',
    badges: [
      { label: 'Policy', color: 'green' },
      { label: 'Long-term', color: 'blue' },
    ],
  },
  {
    number: '02',
    title: 'National Greening Program',
    desc: 'One point five billion trees. That is the target. Decades of logging left massive scars across the archipelago and this program exists to heal them one seedling at a time.',
    badges: [
      { label: 'Reforestation', color: 'green' },
      { label: 'Biodiversity', color: 'green' },
    ],
  },
  {
    number: '03',
    title: "People's Survival Fund",
    desc: 'Climate money has a habit of disappearing before it reaches real people. This fund skips the middlemen and goes straight to local governments and communities on the ground.',
    badges: [
      { label: 'Financing', color: 'blue' },
      { label: 'Communities', color: 'green' },
    ],
  },
  {
    number: '04',
    title: 'Philippine Energy Plan — Renewable Energy',
    desc: 'The goal is 35% renewable power by 2030. The Philippines has the sun, the wind, the water, and the geothermal heat to do it. This plan is what turns that potential into electricity.',
    badges: [
      { label: 'Solar', color: 'green' },
      { label: 'Wind', color: 'blue' },
      { label: 'Geothermal', color: 'green' },
    ],
  },
  {
    number: '05',
    title: 'Coral Triangle Initiative',
    desc: 'The waters around the Philippines are the most biodiverse on the planet. Ocean acidification is eating them alive. Six nations joined forces under this program to push back.',
    badges: [
      { label: 'Marine', color: 'blue' },
      { label: 'Regional', color: 'blue' },
    ],
  },
  {
    number: '06',
    title: 'Climate Change Education K-12',
    desc: 'The students sitting in classrooms today will be the ones managing the worst effects of climate change tomorrow. This program makes sure they are not walking in blind.',
    badges: [
      { label: 'Education', color: 'blue' },
      { label: 'Youth', color: 'green' },
    ],
  },
  {
    number: '07',
    title: 'Philippine Disaster Resilience Program',
    desc: 'The Philippines cannot stop typhoons from forming. What it can do is make sure communities know what is coming, know where to go, and know how to come back after.',
    badges: [
      { label: 'Resilience', color: 'blue' },
      { label: 'Early Warning', color: 'blue' },
    ],
  },
  {
    number: '08',
    title: 'Integrated Coastal Management Program',
    desc: 'Thirty six thousand kilometers of coastline is a lot to protect. This program manages it all, keeping fishing communities, wildlife, and ecosystems alive as sea levels creep up.',
    badges: [
      { label: 'Coastal', color: 'blue' },
      { label: 'Fisheries', color: 'green' },
    ],
  },
  {
    number: '09',
    title: 'Manila Bay Rehabilitation Program',
    desc: 'Manila Bay was a dumping ground for decades. This rehabilitation effort brought together dozens of government agencies to clean it up and keep it that way.',
    badges: [
      { label: 'Rehabilitation', color: 'blue' },
      { label: 'Water Quality', color: 'blue' },
    ],
  },
  {
    number: '10',
    title: 'Philippine Biodiversity Strategy and Action Plan',
    desc: 'The Philippines is one of 17 megadiverse countries in the world. This plan maps every threatened species and ecosystem and lays out exactly how the country intends to protect them.',
    badges: [
      { label: 'Biodiversity', color: 'green' },
      { label: 'Conservation', color: 'green' },
    ],
  },
  {
    number: '11',
    title: 'Solid Waste Management Program',
    desc: 'Millions of tons of trash are generated across the islands every year. This program builds the infrastructure to sort, reduce, and process it before it ends up in the ocean or the air.',
    badges: [
      { label: 'Waste', color: 'green' },
      { label: 'Recycling', color: 'green' },
    ],
  },
  {
    number: '12',
    title: 'Urban Greening and Heat Island Reduction',
    desc: 'Cities trap heat. Concrete and steel turn Metro Manila into an oven during summer. This program brings trees, green roofs, and parks back into urban spaces to cool them down.',
    badges: [
      { label: 'Urban', color: 'blue' },
      { label: 'Heat Reduction', color: 'blue' },
    ],
  },
];

function Programs() {
  const [cols, setCols] = useState<number>(2);

  useEffect(() => {
    const updateCols = () => {
      setCols(window.innerWidth < 768 ? 1 : 2);
    };

    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const getDelay = (i: number) => (i % cols) * 100;

  return (
    <section className="py-24 px-6" id="programs">
      <div className="max-w-6xl mx-auto">

        <FadeIn direction="up" distance={20} duration={600}>
          <h2 className="text-4xl font-black tracking-tight mb-4">
            Government <br />Programs in Action
          </h2>
        </FadeIn>

        <FadeIn direction="up" distance={16} delay={100} duration={600}>
          <p className="text-white/45 mb-12 max-w-md leading-relaxed">
            Legislation have set the rules. These programs are where the real action happens.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/7 rounded-xl overflow-hidden">
          {programs.map((program, i) => (
            <FadeIn key={i} direction="up" distance={24} delay={getDelay(i)} duration={600}>
              <div className="h-full p-8 border-b border-r border-white/7 hover:bg-white/3 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-black text-white/10 leading-none">
                    {program.number}
                  </span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {program.badges.map((badge, j) => (
                      <button
                        key={j}
                        className={`text-xs font-medium px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer
                          ${badge.color === 'green'
                            ? 'text-green-500 bg-green-500/10 border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40'
                            : 'text-blue-400 bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40'
                          }`}
                      >
                        {badge.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-white font-bold text-lg mb-2 leading-snug">
                  {program.title}
                </div>
                <div className="text-white/45 text-sm leading-relaxed">
                  {program.desc}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Programs;