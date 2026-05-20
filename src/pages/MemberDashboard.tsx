import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Wallet, 
  Vote, 
  HandCoins, 
  FileText, 
  Users, 
  Settings, 
  LogOut,
  TrendingUp,
  ArrowUpRight,
  Clock,
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { 
  mockUnitHolding, 
  mockStewardMetrics, 
  mockProposals, 
  mockLoans, 
  mockReports,
  mockTransactions
} from '@/src/lib/mockData';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'STOWAGE', path: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'LEDGERS', path: '/portfolio', icon: <Wallet className="w-4 h-4" /> },
    { name: 'GOVERNANCE', path: '/governance', icon: <Vote className="w-4 h-4" /> },
    { name: 'LOAN OFFICE', path: '/loans', icon: <HandCoins className="w-4 h-4" /> },
    { name: 'REPORTS', path: '/reports', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className="flex w-full min-h-screen bg-[#050505] text-[#FDFCF0] font-sans overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-white/5 flex-col justify-between py-8 px-6 bg-[#080808] sticky top-0 h-screen">
        <div className="space-y-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 accent-gradient rounded-sm flex items-center justify-center text-black font-bold italic tracking-tighter shadow-lg shadow-accent/20">A</div>
            <span className="text-xl font-medium tracking-[0.2em] uppercase italic serif">Axiom</span>
          </div>

          <nav className="space-y-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center space-x-3 text-[11px] font-bold tracking-[.15em] transition-all px-4 py-2 rounded-lg ${
                  location.pathname === item.path 
                    ? 'opacity-100 bg-white/5' 
                    : 'opacity-40 hover:opacity-100'
                }`}
              >
                {location.pathname === item.path && (
                  <div className="absolute left-6 w-1 h-4 bg-[#D4AF37] rounded-full"></div>
                )}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <Link to="/admin" className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center space-x-3 hover:bg-white/10 transition-all">
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs text-accent">JD</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest">John Doe</p>
              <p className="text-[8px] opacity-40 uppercase tracking-[.2em]">Tier III Member</p>
            </div>
          </Link>
          <Link to="/" className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-destructive transition-all py-2">
            <LogOut className="w-3 h-3" />
            <span>Terminate Session</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen relative overflow-y-auto pb-24 md:pb-0">
        <header className="h-20 shrink-0 border-b border-white/5 flex items-center justify-between px-10 glass sticky top-0 z-30">
          <div>
            <h1 className="text-xl md:text-2xl font-light italic serif leading-tight">Capital governed by <span className="opacity-60">principle.</span></h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex flex-col items-end">
              <span className="text-[9px] opacity-40 uppercase tracking-[.2em] font-bold">Steward Pool Value</span>
              <span className="text-sm font-mono text-[#D4AF37] tabular-nums">₦128,450,000.00</span>
            </div>
            <button className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-[.15em] hover:bg-white/10 transition-all uppercase">
              Withdrawal Window
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 md:p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/10 px-4 py-3 z-50">
        <div className="flex justify-between items-center max-w-lg mx-auto">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center gap-1.5 p-2 transition-all ${
                location.pathname === item.path ? 'text-accent scale-110' : 'text-muted-foreground opacity-60'
              }`}
            >
              {item.icon}
              <span className="text-[8px] font-bold uppercase tracking-[.1em]">{item.name.split(' ')[0]}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export const MemberDashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12">
        {/* Portfolio Card - Col 4 Span */}
        <div className="md:col-span-4 bg-[#121212] rounded-2xl border border-white/5 p-6 flex flex-col justify-between h-[280px]">
          <div>
            <h3 className="text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold mb-1">Individual Holding</h3>
            <div className="flex items-baseline space-x-2">
              <p className="text-3xl font-light tracking-tight">₦{mockUnitHolding.totalPortfolioValue.toLocaleString()}</p>
              <span className="text-[10px] text-emerald-400 font-mono">+{mockUnitHolding.growthPercentage}%</span>
            </div>
          </div>
          <div className="flex justify-between items-end border-t border-white/5 pt-4 text-[#FDFCF0]">
            <div>
              <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">UNIT COUNT</p>
              <p className="text-sm font-mono">{mockUnitHolding.unitsOwned} Units</p>
            </div>
            <div>
              <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">NAV / UNIT</p>
              <p className="text-sm font-mono">₦{mockUnitHolding.currentUnitValue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Steward Fund Appreciation - Col 8 Span */}
        <div className="md:col-span-8 bg-zinc-900/40 rounded-2xl border border-white/5 p-8 flex flex-col relative overflow-hidden h-[280px]">
          <div className="absolute inset-0 opacity-10 pointer-events-none p-12">
             {/* Abstract SVG path as seen in template */}
             <svg viewBox="0 0 800 400" className="w-full h-full stroke-current text-[#D4AF37] fill-none">
              <path d="M0,350 Q100,340 200,320 T400,200 T600,100 T800,40" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="z-10 h-full flex flex-col">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold">Steward Fund Appreciation</h3>
                <p className="text-xs opacity-60 italic serif">Annualized disciplined growth trajectory</p>
              </div>
              <div className="flex space-x-4">
                <span className="text-[10px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-tighter italic font-bold">Stable Growth</span>
              </div>
            </div>
            <div className="mt-auto flex justify-between text-[10px] opacity-30 font-mono tracking-widest uppercase font-bold">
              <span>JAN 26</span>
              <span>FEB 26</span>
              <span>MAR 26</span>
              <span>APR 26</span>
              <span>PRESENT</span>
            </div>
          </div>
        </div>

        {/* Metrics - Col 4 Span */}
        <div className="md:col-span-4 bg-[#121212] rounded-2xl border border-white/5 p-6 flex flex-col justify-center gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Active Loans</span>
              <span className="text-sm font-mono">₦{mockStewardMetrics.activeLoans.toLocaleString()}</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#D4AF37]/60 w-[36%]"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Reserve Ratio</span>
              <span className="text-sm font-mono">92.4%</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500/60 w-[92%]"></div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Member Count</span>
            <span className="text-sm font-mono truncate">{mockStewardMetrics.totalMembers} / 200</span>
          </div>
        </div>

        {/* Governance - Col 4 Span */}
        <div className="md:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/5 p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold">Governance</h3>
            <span className="text-[10px] text-[#D4AF37] italic font-bold">Active Voting</span>
          </div>
          <div className="space-y-4">
            {mockProposals.filter(p => p.status === 'active').map(proposal => (
              <div key={proposal.id} className="p-4 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-all group">
                <p className="text-xs font-semibold mb-2 group-hover:text-accent transition-colors">{proposal.title}</p>
                <div className="flex justify-between items-center text-[10px] font-bold tracking-tight">
                  <span className="text-emerald-400">{proposal.yesPercentage}% APPROVAL</span>
                  <span className="opacity-40 uppercase">12h REMAINING</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full h-10 border border-white/5 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-white/5">
            Participate in Governance
          </Button>
        </div>

        {/* Reports - Col 4 Span */}
        <div className="md:col-span-4 bg-[#0C0C0C] rounded-2xl border border-white/5 p-6 flex flex-col h-full">
          <h3 className="text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold mb-4">Audit & Reports</h3>
          <div className="flex-1 space-y-4">
            {mockReports.slice(0, 2).map((report, i) => (
              <div key={report.id} className={`flex items-center justify-between ${i > 0 ? 'opacity-50' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-[10px] border border-white/5 italic font-bold">A</div>
                  <div>
                    <p className="text-xs font-medium">{report.title}</p>
                    <p className="text-[9px] opacity-40 uppercase font-bold">Steward Verified</p>
                  </div>
                </div>
                <FileText className="w-3 h-3 opacity-40 cursor-pointer hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/5 bg-[#1A1A1A]/40 -mx-6 -mb-6 p-6 rounded-b-2xl">
             <div className="flex justify-between items-center">
                <div className="space-y-1">
                   <p className="text-[10px] opacity-40 uppercase font-bold tracking-widest">Available Credit</p>
                   <p className="text-sm font-bold text-accent">₦{ (mockUnitHolding.totalPortfolioValue * 0.4).toLocaleString() }</p>
                </div>
                <Link to="/loans">
                  <button className="px-4 py-2 bg-accent text-black text-[9px] font-bold uppercase tracking-widest rounded-lg hover:scale-105 transition-all">
                    GET CAPITAL
                  </button>
                </Link>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export const PortfolioPage = () => (
  <DashboardLayout>
    <header className="mb-10">
      <h2 className="text-3xl font-light italic serif">Asset <span className="opacity-40">Ledgers</span></h2>
      <p className="text-xs opacity-40 uppercase tracking-[0.2em] font-bold mt-2">Member ID: AX-920401</p>
    </header>
    
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-8 space-y-8">
        <div className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-8 border-b border-white/5 flex justify-between items-end">
            <div>
              <p className="text-[10px] opacity-40 uppercase tracking-widest font-bold mb-1">Growth Index</p>
              <p className="text-4xl font-light tracking-tighter italic serif">₦1,250.00 <span className="text-sm opacity-40 font-sans tracking-tight">/ UNIT</span></p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">+12.5% Annualized</p>
            </div>
          </div>
          <div className="p-8 h-64 relative bg-zinc-900/20">
             {/* Chart Placeholder styling */}
             <div className="absolute inset-x-8 bottom-8 top-16 border-l border-b border-white/5 flex items-end">
                <div className="flex-1 bg-accent/20 h-[40%] mx-1 rounded-t"></div>
                <div className="flex-1 bg-accent/20 h-[45%] mx-1 rounded-t"></div>
                <div className="flex-1 bg-accent/20 h-[55%] mx-1 rounded-t"></div>
                <div className="flex-1 bg-accent/20 h-[50%] mx-1 rounded-t"></div>
                <div className="flex-1 bg-[#D4AF37] h-[80%] mx-1 rounded-t shadow-[0_0_15px_rgba(212,175,55,0.3)]"></div>
             </div>
          </div>
        </div>

        <div className="bg-[#0C0C0C] rounded-2xl border border-white/5 p-8">
          <h3 className="text-[10px] opacity-40 uppercase tracking-widest font-bold mb-6">Historical Ledger Entries</h3>
          <div className="space-y-4">
            {mockTransactions.map(tx => (
              <div key={tx.id} className="flex items-center justify-between py-4 border-b border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center border border-white/5 italic font-bold text-[10px]">
                    {tx.type === 'contribution' ? 'C' : 'W'}
                  </div>
                  <div>
                    <p className="text-sm font-medium capitalize">{tx.type.replace('_', ' ')}</p>
                    <p className="text-[9px] opacity-40 font-bold tracking-widest uppercase">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">₦{tx.amount.toLocaleString()}</p>
                  <p className="text-[9px] opacity-40 font-bold uppercase tracking-widest">COMPLETED</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:col-span-4 space-y-8">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/5 p-8 space-y-6">
          <h3 className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Allocation</h3>
          <div className="aspect-square rounded-full border-[10px] border-white/5 flex items-center justify-center relative">
             <div className="absolute inset-0 rounded-full border-[10px] border-[#D4AF37] border-r-transparent border-b-transparent rotate-45"></div>
             <div className="text-center">
                <p className="text-3xl font-light serif italic">75%</p>
                <p className="text-[9px] opacity-40 uppercase font-bold tracking-widest">Concentration</p>
             </div>
          </div>
          <div className="space-y-4 pt-4">
             <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> Staked Units</span>
                <span>25 Units</span>
             </div>
             <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest opacity-40">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-zinc-600"></div> Treasury Reserve</span>
                <span>N/A</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export const GovernancePage = () => (
  <DashboardLayout>
    <header className="mb-10">
      <h2 className="text-3xl font-light italic serif">Community <span className="opacity-40">Principles</span></h2>
      <p className="text-xs opacity-40 uppercase tracking-[0.2em] font-bold mt-2">Weighted Voting Rights Engaged</p>
    </header>
    
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        <div className="bg-[#121212] rounded-2xl border border-white/5 p-8 space-y-6 sticky top-24">
           <div>
              <p className="text-[10px] opacity-40 uppercase tracking-widest font-bold mb-1">Your Voting Power</p>
              <p className="text-4xl font-light italic serif">25.0 <span className="text-sm opacity-40 font-sans tracking-tight">VP</span></p>
           </div>
           <p className="text-xs opacity-60 italic leading-relaxed serif">
              Your voice is weighted by your stake in the Axiom Steward Fund.
           </p>
           <Button className="w-full h-12 bg-white/5 border border-white/10 rounded-xl text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 transition-all">
              Submit New Proposal
           </Button>
        </div>
      </div>

      <div className="md:col-span-8 space-y-6">
        {mockProposals.map(proposal => (
          <div key={proposal.id} className="bg-zinc-900/40 rounded-2xl border border-white/5 p-10 space-y-8 hover:bg-zinc-900/60 transition-all group">
            <div className="flex justify-between items-start">
               <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase font-bold tracking-widest">Active Vote</span>
                    <span className="text-[9px] opacity-40 font-mono tracking-widest uppercase">ID: {proposal.id}</span>
                  </div>
                  <h3 className="text-2xl font-light italic serif group-hover:text-accent transition-colors">{proposal.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed max-w-xl italic serif">
                    {proposal.description}
                  </p>
               </div>
               <div className="px-4 py-3 bg-[#050505] border border-white/5 rounded-xl text-center shadow-inner">
                  <p className="text-[8px] opacity-40 uppercase tracking-widest font-bold mb-1">Time Remaining</p>
                  <p className="text-lg font-mono font-bold tracking-tight text-[#D4AF37]">12:44:02</p>
               </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/5">
              <div>
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest mb-3 opacity-60">
                   <span>AFFIRMATIVE</span>
                   <span>{proposal.yesPercentage}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" style={{ width: `${proposal.yesPercentage}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest mb-3 opacity-60">
                   <span>DISSENTING</span>
                   <span>{proposal.noPercentage}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-destructive/60" style={{ width: `${proposal.noPercentage}%` }}></div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                 <button className="flex-1 h-12 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                    VOTE IN FAVOR
                 </button>
                 <button className="flex-1 h-12 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all">
                    REJECT PROPOSAL
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export const LoansPage = () => (
  <DashboardLayout>
    <header className="mb-10">
      <h2 className="text-3xl font-light italic serif">Credit <span className="opacity-40">Office</span></h2>
      <p className="text-xs opacity-40 uppercase tracking-[0.2em] font-bold mt-2">Liquidity facilities for disciplined members</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-8 space-y-8">
        <div className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden">
           <div className="p-8 bg-zinc-900/50 flex justify-between items-center border-b border-white/5">
              <div>
                 <p className="text-[10px] opacity-40 uppercase tracking-widest font-bold mb-1">Outstanding Balance</p>
                 <p className="text-4xl font-light italic serif">₦500,000.00</p>
              </div>
              <div className="text-right">
                 <p className="text-[10px] opacity-40 uppercase tracking-widest font-bold mb-1">Interest Rate</p>
                 <p className="text-xl font-bold font-mono text-accent tracking-tighter">7.0% APR</p>
              </div>
           </div>

           <div className="p-0 overflow-x-auto">
             <table className="w-full text-left">
                <thead className="bg-[#050505] border-b border-white/5">
                   <tr className="text-[9px] uppercase tracking-widest font-bold opacity-30">
                      <th className="px-8 py-4">CYCLE</th>
                      <th className="px-8 py-4">MATURITY</th>
                      <th className="px-8 py-4">NET AMOUNT</th>
                      <th className="px-8 py-4 text-right">STATUS</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                   {[1, 2, 3, 4].map(i => (
                     <tr key={i} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                        <td className="px-8 py-6 font-mono text-xs italic">Q{i}-2026</td>
                        <td className="px-8 py-6 uppercase text-[10px] font-bold tracking-widest">June 01, 2026</td>
                        <td className="px-8 py-6 font-bold">₦45,000.00</td>
                        <td className="px-8 py-6 text-right font-bold text-[9px] uppercase tracking-widest">
                           {i === 1 ? <span className="text-accent italic">Upcoming</span> : <span className="opacity-40">Scheduled</span>}
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
           </div>
        </div>
      </div>

      <div className="md:col-span-4 space-y-8">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/5 p-8 space-y-8">
           <div className="space-y-4">
              <h3 className="text-[10px] opacity-40 uppercase tracking-widest font-bold">New Facility Request</h3>
              <div className="p-6 bg-[#050505] rounded-xl border border-white/5">
                 <p className="text-[9px] opacity-40 uppercase tracking-widest font-bold mb-1">Max Facility Capacity</p>
                 <p className="text-2xl font-bold tracking-tighter text-accent">₦1,250,000</p>
              </div>
           </div>

           <div className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Request Amount (₦)</label>
                 <input type="number" placeholder="250,000" className="w-full h-12 bg-transparent border-b border-white/10 text-xl font-light focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Amortization Period</label>
                 <select className="w-full h-12 bg-transparent border-b border-white/10 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer">
                    <option className="bg-[#121212]">06 Months (5.5% INT)</option>
                    <option className="bg-[#121212]">12 Months (7.0% INT)</option>
                    <option className="bg-[#121212]">24 Months (8.5% INT)</option>
                 </select>
              </div>
              <button className="w-full h-14 bg-[#D4AF37] text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl shadow-accent/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
                 SUBMIT APPLICATION
              </button>
           </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export const ReportsPage = () => (
  <DashboardLayout>
    <header className="mb-10">
      <h2 className="text-3xl font-light italic serif">Audit <span className="opacity-40">Records</span></h2>
      <p className="text-xs opacity-40 uppercase tracking-[0.2em] font-bold mt-2">Transparent disclosures for capital security</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
      {mockReports.map(report => (
        <div key={report.id} className="bg-[#121212] rounded-2xl border border-white/5 p-8 flex flex-col h-full hover:bg-zinc-900/40 transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-10">
             <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/10 uppercase font-bold tracking-widest">{report.type}</span>
             <span className="text-[9px] opacity-40 font-mono font-bold tracking-widest">{report.date}</span>
          </div>
          <h3 className="text-xl font-light italic serif mb-4 group-hover:text-accent transition-colors">{report.title}</h3>
          <p className="text-sm opacity-40 leading-relaxed line-clamp-3 italic serif mb-8">
            {report.summary}
          </p>
          <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
             <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">OPEN DISCLOSURE</span>
             <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </div>
      ))}
      
      <div className="rounded-2xl border border-dashed border-white/5 p-10 flex flex-col items-center justify-center text-center space-y-6 opacity-30">
         <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center">
            <FileText className="w-6 h-6 opacity-40" />
         </div>
         <div>
            <p className="text-[10px] font-bold uppercase tracking-widest">Next Audit Cycle</p>
            <p className="text-xs italic serif">Scheduled for July 15, 2026</p>
         </div>
      </div>
    </div>
  </DashboardLayout>
);
