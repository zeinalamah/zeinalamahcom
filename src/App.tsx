import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './components/Logo';
import { AnimatedCard } from './components/AnimatedCard';
import { PublicationCard } from './components/PublicationCard';
import { MobileMenu } from './components/MobileMenu';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const publications = [
    {
      title: "The role of international research collaboration and faculty related factors in publication citations: Evidence from Lebanon",
      link: "https://www.mdpi.com/2227-7099/11/3/90",
      abstract: "This study examines the impact of international research collaboration on academic publication citations in Lebanon..."
    },
    {
      title: "Does twitter economic uncertainty matter for wheat prices?",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0165176523004895",
      abstract: "This research investigates the relationship between social media-driven economic uncertainty and commodity prices..."
    },
    {
      title: "Is the Price of Ether Driven by Demand or Pure Speculation?",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0165176523004895",
      abstract: "This paper analyzes the driving factors behind Ethereum's price movements, examining the roles of utility demand..."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0F1F]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#0E0F1F]/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Logo />
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-[#F7F8F8]">
            <a href="#about" className="hover:text-[#2B3187] transition-colors">About</a>
            <a href="#publications" className="hover:text-[#2B3187] transition-colors">Publications</a>
            <a href="#contact" className="hover:text-[#2B3187] transition-colors">Contact</a>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#F7F8F8]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(14, 15, 31, 0.8), rgba(14, 15, 31, 0.8)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")'
        }}
      >
        <div className="container mx-auto text-center">
          <AnimatedCard>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F8F8] mb-6">
              Zein Alamah
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#F7F8F8] max-w-2xl mx-auto mb-8">
              Generalists Rule The World. Keep Learning.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-[#2B3187]">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedCard>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8F8] mb-8 sm:mb-12">About Me</h2>
          </AnimatedCard>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <AnimatedCard delay={0.2}>
              <div className="aspect-square bg-[#F7F8F8]/10 rounded-lg flex items-center justify-center">
                <p className="text-[#F7F8F8]">Your Photo Here</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <p className="text-base sm:text-lg text-[#F7F8F8] leading-relaxed">
                I'm a passionate developer and designer focused on creating intuitive and impactful digital solutions. With expertise in modern web technologies and design principles, I help businesses and individuals bring their visions to life.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 sm:py-20 bg-[#0E0F1F]">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedCard>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8F8] mb-8 sm:mb-12">Publications</h2>
          </AnimatedCard>
          <div className="space-y-6">
            {publications.map((pub, i) => (
              <AnimatedCard key={i} delay={i * 0.2}>
                <PublicationCard {...pub} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-[#2B3187]">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedCard>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8F8] mb-8 sm:mb-12">Get in Touch</h2>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <a href="mailto:zein@zeinalamah.com" className="text-lg sm:text-xl text-[#F7F8F8] hover:text-[#0E0F1F] transition-colors">
                zein@zeinalamah.com
              </a>
              <div className="flex gap-6">
                <a href="#" className="text-[#F7F8F8] hover:text-[#0E0F1F] transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-[#F7F8F8] hover:text-[#0E0F1F] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:zein@zeinalamah.com" className="text-[#F7F8F8] hover:text-[#0E0F1F] transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}

export default App;