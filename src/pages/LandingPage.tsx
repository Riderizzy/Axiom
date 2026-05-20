import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  ShieldCheck, 
  Users, 
  ArrowUpRight, 
  Menu, 
  X,
  ChevronRight,
  TrendingUp,
  Scale,
  HandCoins,
  History
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 accent-gradient rounded-sm flex items-center justify-center shadow-lg shadow-accent/20">
              <span className="text-black font-bold text-xs uppercase tracking-widest italic">A</span>
            </div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase italic serif">Axiom</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#principles" className="hover:text-foreground transition-colors hover:accent-glow">Principles</a>
            <a href="#steward" className="hover:text-foreground transition-colors hover:accent-glow">Steward</a>
            <a href="#governance" className="hover:text-foreground transition-colors hover:accent-glow">Governance</a>
            <Link to="/auth/signin">
              <span className="hover:text-foreground transition-colors cursor-pointer">Member login</span>
            </Link>
            <Link to="/auth/request-access">
              <Button className="bg-[#1A1A1A] text-accent border border-white/10 hover:bg-white/5 rounded-full px-6 text-[10px] uppercase font-bold tracking-widest transition-all">Request Access</Button>
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-accent relative z-50">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] pt-28 px-6 flex flex-col md:hidden overflow-hidden"
          >
            <motion.nav 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col space-y-8 text-center"
            >
              {[
                { name: 'Principles', href: '#principles' },
                { name: 'Steward', href: '#steward' },
                { name: 'Governance', href: '#governance' },
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-3xl font-light italic serif opacity-60 hover:opacity-100 transition-opacity"
                >
                  {item.name}
                </a>
              ))}
              <Link 
                to="/auth/signin" 
                onClick={() => setIsMenuOpen(false)} 
                className="text-3xl font-light italic serif opacity-60 hover:opacity-100 transition-opacity"
              >
                Member Login
              </Link>
              <Link to="/auth/request-access" onClick={() => setIsMenuOpen(false)} className="pt-10">
                <Button className="w-full bg-accent text-black rounded-full h-16 text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-accent/20">
                  Request Access
                </Button>
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center text-center space-y-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-[9px] uppercase tracking-[0.3em] font-bold text-accent mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_8px_rgba(212,175,55,1)]"></span>
            </span>
            Private Community
          </div>
          
          <h1 className="text-6xl md:text-9xl font-light tracking-tight text-foreground max-w-5xl leading-[1] italic serif">
            Capital governed by <span className="opacity-50">principle.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground/60 max-w-2xl leading-relaxed serif italic">
            A private capital institution built for disciplined growth, collective ownership, and long-term thinking.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto pt-8">
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90 rounded-full px-12 h-14 text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-accent/10 transition-all hover:scale-105 active:scale-95">
              Request Access
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 rounded-full px-12 h-14 text-[11px] font-bold uppercase tracking-[0.2em] transition-all">
              Read Charter
            </Button>
          </div>
        </motion.div>

        {/* Abstract Mockup Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="mt-20 mx-auto max-w-5xl rounded-2xl overflow-hidden border border-border/50 relative"
        >
          <div className="aspect-[16/9] premium-gradient relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent)] pointer-events-none"></div>
            <div className="w-full max-w-4xl p-8 grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-40 glass rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                  <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-white/5 rounded"></div>
                    <div className="h-8 w-3/4 bg-accent/20 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Core Principles</h2>
            <p className="text-3xl md:text-4xl font-medium tracking-tight">How we operate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quiet Discipline", desc: "We favor meticulous analysis and sustained execution over noise and trends.", icon: <ShieldCheck className="w-6 h-6 text-accent" /> },
              { title: "Shared Responsibility", desc: "Every unit represents a commitment to the collective growth of the fund.", icon: <Users className="w-6 h-6 text-accent" /> },
              { title: "Clarity Over Vibes", desc: "Our decisions are rooted in data, governance protocols, and transparent metrics.", icon: <BarChart3 className="w-6 h-6 text-accent" /> },
              { title: "Respect for Structure", desc: "Institutional-grade governance ensures longevity and protects member interest.", icon: <Scale className="w-6 h-6 text-accent" /> },
              { title: "Patience Wins", desc: "We optimize for decades, not days. Compounding requires discipline.", icon: <History className="w-6 h-6 text-accent" /> }
            ].map((p, i) => (
              <Card key={i} className="bg-card border-border hover:border-accent/40 transition-all group rounded-2xl overflow-hidden">
                <CardContent className="p-10 space-y-6">
                  <div className="bg-background w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steward Section */}
      <section id="steward" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Pooled Capital</h2>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">Collective ownership for modern investors.</h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Active members contribute to the Axiom Steward Fund, where capital is pooled to invest in private assets, secondary markets, and high-impact credit facilities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Starting Pool", value: "₦1,000,000" },
                { label: "Total Units", value: "1,000" },
                { label: "Unit Value", value: "₦1,000" },
                { label: "Minimum Units", value: "5 Units" }
              ].map((m, i) => (
                <div key={i} className="p-6 border-l border-accent/20 bg-card/20 hover:bg-card/40 transition-colors">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{m.label}</div>
                  <div className="text-xl font-bold">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center mt-12 md:mt-0 mb-24 md:mb-0">
            <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-none aspect-square glass rounded-full flex items-center justify-center p-12 sm:p-20 border border-white/5 shadow-2xl shadow-accent/5">
              <div className="w-full h-full relative">
                <motion.div 
                  className="absolute inset-0 border-4 border-accent rounded-full border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-widest mb-2">Fund Capacity</span>
                  <span className="text-5xl font-bold">1.2M</span>
                  <span className="text-xs text-accent mt-2 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12.4% APY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-[10px] uppercase">A</span>
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase italic">Axiom</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A private digital financial institution for disciplined members.
            </p>
          </div>
          
          <div className="col-span-1 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Community</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Charter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Principles</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">The Steward</a></li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Governance</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Proposals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Voting Rights</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Audit Logs</a></li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
          <div>© 2026 Axiom Capital Community</div>
          <div>Built for long-term thinking</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
