import FadeIn from "./FadeIn";

const stats = [
    { number: '3rd', color: 'text-green-500', label: 'Most disaster-prone country on the planet' },
    { number: '20+', color: 'text-white', label: 'Typhoons tear through the archipelago every year' },
    { number: '7,641', color: 'text-blue-500', label: 'Islands at risk of being swallowed by rising seas' },
    { number: '75%', color: 'bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent', label: 'Emissions reduction pledged by 2030' },
    { number: '1.5B', color: 'text-green-500', label: 'Trees targeted for planting under the Greening Program' },
    { number: '35%', color: 'text-blue-500', label: 'Of national power to come from renewable energy' },
];

function StatsBar() {
  return (
    <div className="border-t border-b border-white/7 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 divide-x divide-y divide-white/7">
      {stats.map((stat, i) => (
        <FadeIn key={i} direction="up" distance={16} delay={i * 100} duration={500}>
            <div key={i} className={`px-10 py-8 ${i !== stats.length - 1 ? 'border-white/7' : ''}`}>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-white/45 text-sm leading-snug">{stat.label}</div>
            </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default StatsBar;