import { Hero } from "./components/hero";
import { Philosophy } from "./components/philosophy";
import { Modes } from "./components/modes";
import { CodePreview } from "./components/code-preview";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen font-[Inter,sans-serif]">
      <Hero />
      <Philosophy />
      <Modes />
      <CodePreview />
      <Footer />
    </div>
  );
}
