import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft } from 'lucide-react';

const AuthLayout = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 relative overflow-hidden text-[#FDFCF0]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent)]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm z-10"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-accent mb-16 transition-all group">
          <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Charter
        </Link>

        <div className="space-y-3 mb-12">
          <h1 className="text-4xl font-light italic serif leading-tight">{title}</h1>
          <p className="text-muted-foreground/60 text-sm serif italic">{subtitle}</p>
        </div>

        <div className="space-y-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const SignIn = () => (
  <SignInWithLayout />
);

const SignInWithLayout = () => {
  return (
    <AuthLayout title="Presence required." subtitle="Verify your identity to engage with the Steward.">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Certified Email</label>
          <input type="email" placeholder="name@axiom.capital" className="w-full h-12 bg-transparent border-b border-white/10 text-lg font-light focus:outline-none focus:border-[#D4AF37] transition-colors" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Protocol Password</label>
            <Link to="/auth/reset-password" title="Recover" className="text-[9px] uppercase tracking-widest font-bold text-accent">Forgotten?</Link>
          </div>
          <input type="password" placeholder="••••••••" className="w-full h-12 bg-transparent border-b border-white/10 text-lg font-light focus:outline-none focus:border-[#D4AF37] transition-colors" />
        </div>
        
        <div className="pt-6 space-y-6">
          <Link to="/dashboard" className="block">
            <Button className="w-full bg-[#D4AF37] text-black hover:scale-[1.02] active:scale-[0.98] h-14 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl shadow-accent/10 transition-all border-none">
              Verify & Enter
            </Button>
          </Link>

          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-white/5"></div>
            <span className="absolute bg-[#050505] px-4 text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">OR</span>
          </div>

          <button className="w-full h-14 bg-white/5 border border-white/10 text-[#FDFCF0] hover:bg-white/10 transition-all rounded-full flex items-center justify-center gap-3 group">
            <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Identify with Google</span>
          </button>

          <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            Non-member? <Link to="/auth/request-access" className="text-accent underline underline-offset-4">Request Listing</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export const RequestAccess = () => (
  <AuthLayout title="Seek admission." subtitle="The committee reviews all applications for capital alignment.">
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">First Name</label>
          <input placeholder="John" className="w-full h-10 bg-transparent border-b border-white/10 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Last Name</label>
          <input placeholder="Doe" className="w-full h-10 bg-transparent border-b border-white/10 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Primary Contact</label>
        <input type="email" placeholder="name@domain.com" className="w-full h-10 bg-transparent border-b border-white/10 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors" />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Stated Intention</label>
        <textarea 
          placeholder="Briefly describe your capital outlook..." 
          className="w-full bg-white/5 border border-white/5 h-24 p-4 text-xs serif italic focus:outline-none focus:ring-1 focus:ring-accent resize-none rounded-xl"
        ></textarea>
      </div>
      <Button className="w-full bg-[#D4AF37] text-black hover:scale-[1.02] active:scale-[0.98] h-14 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl shadow-accent/10 transition-all border-none">
        Submit Application
      </Button>
      <p className="text-center text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
        Reviews typically conclude within 72 hours.
      </p>
    </div>
  </AuthLayout>
);

export const ResetPassword = () => (
  <AuthLayout title="Recovery." subtitle="A secure link will be dispatched to your registered email.">
    <div className="space-y-8">
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Registered Email</label>
        <input type="email" placeholder="name@axiom.capital" className="w-full h-10 bg-transparent border-b border-white/10 text-lg font-light focus:outline-none focus:border-[#D4AF37] transition-colors" />
      </div>
      <Button className="w-full bg-accent text-black h-14 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl shadow-accent/10 transition-all border-none">
        Dispatch Link
      </Button>
    </div>
  </AuthLayout>
);
