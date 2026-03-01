import { useEffect, useState } from 'react';
import FadeIn from './ui/FadeIn';

interface Tag {
  label: string;
  color: 'green' | 'blue';
}

interface Law {
  ra: string;
  title: string;
  desc: string;
  tags: Tag[];
}

const laws: Law[] = [
  {
    ra: 'Republic Act 9729',
    title: 'Climate Change Act of 2009',
    desc: 'Before this, climate action in the Philippines was scattered and uncoordinated. This law created one body to oversee it all and made every city and municipality accountable.',
    tags: [
      { label: 'CCC', color: 'green' },
      { label: 'National Action Plan', color: 'green' },
      { label: 'Adaptation', color: 'blue' },
    ],
  },
  {
    ra: 'Republic Act 9513',
    title: 'Renewable Energy Act of 2008',
    desc: 'The Philippines sits on geothermal gold, gets battered by wind, and is soaked in sunlight year-round. This law finally said to use it.',
    tags: [
      { label: 'Solar', color: 'green' },
      { label: 'Wind', color: 'blue' },
      { label: 'Geothermal', color: 'green' },
    ],
  },
  {
    ra: 'Republic Act 8749',
    title: 'Philippine Clean Air Act of 1999',
    desc: 'Metro Manila once had some of the worst air in Asia. This law drew a hard line on what industries and vehicles can release into the sky above 110 million people.',
    tags: [
      { label: 'Air Quality', color: 'blue' },
      { label: 'Emissions', color: 'green' },
      { label: 'Pollution Control', color: 'blue' },
    ],
  },
  {
    ra: 'Republic Act 9275',
    title: 'Philippine Clean Water Act of 2004',
    desc: 'The Pasig River was once declared biologically dead. This law set strict standards for what can enter the country\'s waterways and helped bring them back to life.',
    tags: [
      { label: 'Water Quality', color: 'blue' },
      { label: 'Marine', color: 'blue' },
      { label: 'Ecosystem', color: 'green' },
    ],
  },
  {
    ra: 'Republic Act 9003',
    title: 'Ecological Solid Waste Management Act',
    desc: 'Waste left to rot in open dumps releases methane, which is 80 times more potent than CO2. This law made that practice unacceptable and pushed for proper waste management nationwide.',
    tags: [
      { label: 'Waste', color: 'green' },
      { label: 'Methane', color: 'blue' },
      { label: 'Recycling', color: 'green' },
    ],
  },
  {
    ra: 'Executive Order 174',
    title: 'Greenhouse Gas Inventory',
    desc: 'For years nobody really knew how much the Philippines was emitting. This order mandated a full national count of every greenhouse gas the country produces.',
    tags: [
      { label: 'GHG', color: 'blue' },
      { label: 'Monitoring', color: 'blue' },
      { label: 'Data', color: 'green' },
    ],
  },
  {
    ra: 'Republic Act 10121',
    title: 'Philippine Disaster Risk Reduction Act',
    desc: 'Typhoon Ondoy, Yolanda, and Frank. The Philippines knows disaster very well. This law stopped treating calamities as surprises and started building systems to prepare for them.',
    tags: [
      { label: 'Disaster Risk', color: 'blue' },
      { label: 'NDRRMC', color: 'green' },
      { label: 'Resilience', color: 'blue' },
    ],
  },
  {
    ra: 'Republic Act 11038',
    title: 'Expanded NIPAS Act of 2018',
    desc: 'The Philippines is one of the world\'s biodiversity hotspots and one of the most threatened. This law expanded the network of protected areas before more of it disappeared for good.',
    tags: [
      { label: 'Biodiversity', color: 'green' },
      { label: 'Protected Areas', color: 'green' },
      { label: 'Conservation', color: 'blue' },
    ],
  },
  {
    ra: 'Republic Act 9147',
    title: 'Wildlife Resources Conservation Act',
    desc: 'The Philippine eagle. The tamaraw. The sea turtle. Climate change threatens them all. This law made exploiting native wildlife a criminal offense.',
    tags: [
      { label: 'Wildlife', color: 'green' },
      { label: 'Biodiversity', color: 'green' },
      { label: 'Ecosystems', color: 'blue' },
    ],
  },
  {
    ra: 'Republic Act 11285',
    title: 'Energy Efficiency and Conservation Act',
    desc: 'The cheapest energy is the energy you never use. This law pushed government buildings, industries, and households to stop wasting power and cut emissions without cutting output.',
    tags: [
      { label: 'Energy Efficiency', color: 'green' },
      { label: 'Conservation', color: 'green' },
      { label: 'Industry', color: 'blue' },
    ],
  },
  {
    ra: 'Republic Act 9512',
    title: 'National Environmental Awareness Act',
    desc: 'Laws mean nothing if people do not understand why they exist. This act embedded environmental education into every school in the country.',
    tags: [
      { label: 'Education', color: 'blue' },
      { label: 'Awareness', color: 'blue' },
      { label: 'Youth', color: 'green' },
    ],
  },
  {
    ra: 'Republic Act 10587',
    title: 'Environmental Planning Act of 2013',
    desc: 'Cities that grow without a plan flood easily and trap heat. This law professionalised environmental planning across the country to make sure growth does not come at nature\'s expense.',
    tags: [
      { label: 'Urban Planning', color: 'blue' },
      { label: 'Land Use', color: 'blue' },
      { label: 'Sustainability', color: 'green' },
    ],
  },
];

function Laws() {
  const [cols, setCols] = useState<number>(3);

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width < 768) setCols(1);
      else if (width < 1024) setCols(2);
      else setCols(3);
    };

    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const getDelay = (i: number) => (i % cols) * 100;

  return (
    <section className="py-24 px-6 bg-[var(--bg2)]" id="laws">
      <div className="max-w-6xl mx-auto">

        <FadeIn direction="up" distance={20} duration={600}>
          <h2 className="text-4xl font-black tracking-tight mb-4">
            Key Laws on <br />Climate Change
          </h2>
        </FadeIn>

        <FadeIn direction="up" distance={16} delay={100} duration={600}>
          <p className="text-white/45 mb-12 max-w-md leading-relaxed">
            The legal foundation of the Philippines' fight against climate change — built over decades of legislation.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/7 rounded-xl overflow-hidden">
          {laws.map((law, i) => (
            <FadeIn key={i} direction="up" distance={24} delay={getDelay(i)} duration={600}>
              <div className="h-full p-8 border-b border-r border-white/7 hover:bg-white/3 transition-colors">
                <div className="text-green-500 text-xs font-semibold tracking-widest uppercase mb-3">
                  {law.ra}
                </div>
                <div className="text-white font-bold text-lg mb-2 leading-snug">
                  {law.title}
                </div>
                <div className="text-white/45 text-sm leading-relaxed mb-5">
                  {law.desc}
                </div>
                <div className="flex flex-wrap gap-2">
                  {law.tags.map((tag, j) => (
                    <button
                      key={j}
                      className={`text-xs font-medium px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer
                        ${tag.color === 'green'
                          ? 'text-green-500 bg-green-500/10 border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40'
                          : 'text-blue-400 bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40'
                        }`}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Laws;