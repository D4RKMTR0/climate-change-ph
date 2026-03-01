import FadeIn from './ui/FadeIn';

interface Event {
  year: string;
  title: string;
  desc: string;
  color: 'green' | 'blue';
}

const events: Event[] = [
  {
    year: '1992',
    title: 'Philippines Signs the UNFCCC',
    desc: 'The Philippines was among the first countries to sign the United Nations Framework Convention on Climate Change, signaling early recognition that this was a problem worth taking seriously.',
    color: 'green',
  },
  {
    year: '1999',
    title: 'Philippine Clean Air Act',
    desc: 'The first major environmental law targeting air pollution. Metro Manila was choking and this was the right answer. Allowing them to regulate the emissions before the problem became irreversible.',
    color: 'green',
  },
  {
    year: '2004',
    title: 'Philippine Clean Water Act',
    desc: 'Rivers and bays across the country were being used as open drains. This law drew the line and started the long process of cleaning them back up.',
    color: 'blue',
  },
  {
    year: '2008',
    title: 'Renewable Energy Act',
    desc: 'The country sat on enormous renewable potential and barely used it. This law changed the economics of clean energy and opened the door for serious investment.',
    color: 'green',
  },
  {
    year: '2009',
    title: 'Climate Change Act',
    desc: 'The most important climate legislation in Philippine history. It created the Climate Change Commission and made climate action a permanent part of how the government operates.',
    color: 'green',
  },
  {
    year: '2010',
    title: 'Philippine Disaster Risk Reduction Act',
    desc: 'Typhoon Ondoy hit the year before and exposed how unprepared the country was. This law built the national system for preparing, responding, and recovering from disasters.',
    color: 'blue',
  },
  {
    year: '2011',
    title: 'National Climate Change Action Plan Launched',
    desc: 'The blueprint for 2011 to 2028. For the first time the country had a single coordinated plan covering every sector affected by climate change.',
    color: 'green',
  },
  {
    year: '2013',
    title: 'Typhoon Yolanda',
    desc: 'The strongest tropical cyclone ever recorded at landfall killed over 6,000 people. It became a turning point in how the Philippines and the world talked about climate vulnerability.',
    color: 'blue',
  },
  {
    year: '2015',
    title: 'Philippines Signs the Paris Agreement',
    desc: 'The Philippines committed to reducing emissions by 70% by 2030. For a country responsible for less than 1% of global emissions but facing some of the worst consequences, it was a moral stance as much as a policy one.',
    color: 'green',
  },
  {
    year: '2018',
    title: 'Expanded NIPAS Act',
    desc: 'Protected areas across the country were expanded and strengthened. Forests and reefs that had been shrinking for decades finally got the legal protection they needed.',
    color: 'green',
  },
  {
    year: '2021',
    title: 'Updated NDC — 75% Reduction Target',
    desc: 'The Philippines raised its climate ambition, committing to a 75% reduction in emissions by 2030. Most of it was conditional on international support but the signal was clear.',
    color: 'blue',
  },
  {
    year: '2023',
    title: 'National Adaptation Plan Finalized',
    desc: 'After years of drafting, the country finalized its long-term plan for adapting to climate impacts that are already locked in. Not just mitigation anymore but learning to live with what is coming.',
    color: 'blue',
  },
];

function History() {
  return (
    <section className="py-24 px-6 bg-[var(--bg2)]" id="history">
      <div className="max-w-4xl mx-auto">

        <FadeIn direction="up" distance={20} duration={600}>
          <h2 className="text-4xl font-black tracking-tight mb-4">
            A History of <br />Climate Action
          </h2>
        </FadeIn>

        <FadeIn direction="up" distance={16} delay={100} duration={600}>
          <p className="text-white/45 mb-16 max-w-md leading-relaxed">
            From the first international commitments to the laws and plans that followed — how the Philippines got here.
          </p>
        </FadeIn>

        <div className="relative pl-4">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-blue-500 to-transparent" />

          <div className="flex flex-col">
            {events.map((event, i) => (
              <FadeIn key={i} direction="left" distance={24} delay={i * 80} duration={600}>
                <div className="relative pl-8 pb-12 group">
                    <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full -translate-x-1/2 border-2 transition-all duration-300
                        ${event.color === 'green'
                        ? 'border-green-500 bg-[hsl(150_22%_4%)] group-hover:bg-green-500'
                        : 'border-blue-400 bg-[hsl(150_22%_4%)] group-hover:bg-blue-400'
                        }`}
                    />
                    <div className={`text-xs font-semibold tracking-widest uppercase mb-1
                        ${event.color === 'green' ? 'text-green-500' : 'text-blue-400'}`}>
                        {event.year}
                    </div>
                    <div className="text-white font-bold text-lg mb-2 leading-snug">
                        {event.title}
                    </div>
                    <div className="text-white/45 text-sm leading-relaxed max-w-xl">
                        {event.desc}
                    </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default History;