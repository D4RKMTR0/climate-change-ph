import Navbar from './components/Nav.tsx';
import Hero from './components/Hero.tsx';
import ScrollProgress from './components/ui/ScrollProgress.tsx';
import StatsBar from './components/ui/Statistics.tsx';
import Laws from './components/Laws.tsx';
import Programs from './components/Programs.tsx';
import History from './components/History.tsx';
import Foot from './components/Foot.tsx';

function App() {

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Laws />
        <Programs />
        <History />
        <Foot />
      </main>
    </>
  );
}

export default App
