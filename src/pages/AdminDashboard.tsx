import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  HandCoins, 
  Vote, 
  FileText, 
  Activity, 
  ShieldCheck, 
  ArrowUpRight, 
  Check, 
  X, 
  Search,
  MoreVertical,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from 'react-router-dom';
import { mockMembers, mockProposals } from '@/src/lib/mockData';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-border flex-col p-6 sticky top-0 h-screen bg-card/10">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-[10px] uppercase">A</span>
          </div>
          <span className="text-lg font-bold tracking-tighter uppercase italic">Axiom Admin</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { name: 'Overview', icon: <Activity className="w-5 h-5" />, active: true },
            { name: 'Applications', icon: <Users className="w-5 h-5" /> },
            { name: 'Members', icon: <ShieldCheck className="w-5 h-5" /> },
            { name: 'Loans', icon: <HandCoins className="w-5 h-5" /> },
            { name: 'Governance', icon: <Vote className="w-5 h-5" /> },
            { name: 'Reports', icon: <FileText className="w-5 h-5" /> },
          ].map((item) => (
            <button 
              key={item.name} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active 
                  ? 'bg-accent text-accent-foreground' 
                  : 'text-muted-foreground hover:bg-card hover:text-foreground'
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-border">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-card hover:text-foreground transition-all">
            <ArrowUpRight className="w-5 h-5" />
            <span className="text-sm font-medium">Exit Admin</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-12">
          {children}
        </div>
      </main>
    </div>
  );
};

export const AdminDashboard = () => {
  return (
    <AdminLayout>
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-medium tracking-tight">Institutional Console</h1>
          <p className="text-muted-foreground">Managing the Steward Fund and community activities.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-none font-bold uppercase tracking-widest text-[10px] h-10">Export Audit</Button>
          <Button className="bg-accent text-accent-foreground rounded-none font-bold uppercase tracking-widest text-[10px] h-10">
            <Plus className="w-4 h-4 mr-2" /> Publish Report
          </Button>
        </div>
      </header>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total AUM', value: '₦1.25M', trend: '+4.2%' },
          { label: 'Loan Utilization', value: '36.5%', trend: '+1.5%' },
          { label: 'Pending Apps', value: '14', trend: 'Critical' },
          { label: 'Voter Turnout', value: '82%', trend: 'Steady' }
        ].map((stat, i) => (
          <Card key={i} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">{stat.label}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <Badge className={stat.trend === 'Critical' ? 'bg-destructive/10 text-destructive border-destructive/20' : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'}>
                {stat.trend}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Applications & Members */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Active Applications</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search applicants..." className="pl-10 h-10 border-border bg-card/50 text-xs w-64 rounded-none" />
            </div>
          </div>
          
          <div className="border border-border rounded-2xl overflow-hidden bg-card/30">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow className="hover:bg-transparent border-border">
                  <TableHead className="text-[10px] uppercase tracking-widest font-bold h-12">Applicant</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest font-bold h-12">Units Requested</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest font-bold h-12">Date Submited</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest font-bold h-12 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockMembers.map((member) => (
                  <TableRow key={member.id} className="border-border hover:bg-card/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{member.name}</div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-tight">{member.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs">{member.units} Units</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{member.joinDate}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full text-emerald-500 hover:bg-emerald-500/10">
                          <Check className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full text-destructive hover:bg-destructive/10">
                          <X className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full">
                          <MoreVertical className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* System Activity */}
        <div className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Fund Evolution</h2>
          <Card className="bg-card border-border h-full">
            <CardHeader>
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Event Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {[
                { event: 'Governance Prop #04 Passed', time: '2h ago', icon: <Vote className="w-4 h-4" /> },
                { event: 'Loan Disbursed - mem_24', time: '5h ago', icon: <HandCoins className="w-4 h-4" /> },
                { event: 'New Member Approved', time: '1d ago', icon: <Users className="w-4 h-4" /> },
                { event: 'Report: Q1 Cycle Published', time: '2d ago', icon: <FileText className="w-4 h-4" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start relative pb-8 last:pb-0">
                  {i < 3 && <div className="absolute left-2.5 top-5 bottom-0 w-px bg-border"></div>}
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold">{item.event}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{item.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};
