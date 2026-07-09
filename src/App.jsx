import Beams from './components/Beams.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#0003fe"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={-40}
        />
      </div>

      {/* Vignette overlay for readability */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.9)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
