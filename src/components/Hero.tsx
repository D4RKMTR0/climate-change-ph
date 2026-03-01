import ScrollIndicator from "./ui/ScrollIndicator";

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="hero-grid" />
        <h1 className="text-6xl font-black tracking-tight">
            Laws and Programs <br />
            <span className="text-white/40">Fighting</span><br />
            <span className="bg-gradient-to-tr from-green-500 to-blue-400 bg-clip-text text-transparent">
                Climate Change
            </span>
        </h1>
        <p className="text-white/45 max-w-lg mb-10 leading-relaxed pt-6">
            Every year, typhoons grow stronger and seas rise higher. These are the laws and programs our country put in place to protect the people and nature we love.
        </p>
        <ScrollIndicator />
    </section>
  );
}

export default Hero;