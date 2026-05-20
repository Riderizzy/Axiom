import {
  UnitHolding,
  StewardMetrics,
  Proposal,
  Loan,
  Report,
  Member,
  Transaction,
} from '../types';

export const mockUnitHolding: UnitHolding = {
  unitsOwned: 25,
  currentUnitValue: 1250,
  totalPortfolioValue: 31250,
  growthPercentage: 12.5,
  lastUpdated: '2026-05-20',
};

export const mockStewardMetrics: StewardMetrics = {
  fundValue: 1250000,
  activeLoans: 450000,
  reserveBalance: 800000,
  totalMembers: 42,
  unitPrice: 1250,
};

export const mockProposals: Proposal[] = [
  {
    id: 'prop-1',
    title: 'Expansion of Real Estate Portfolio',
    description: 'Proposal to allocate 15% of the fund to commercial real estate in Lagos.',
    status: 'active',
    yesPercentage: 65,
    noPercentage: 35,
    endsAt: '2026-06-01',
  },
  {
    id: 'prop-2',
    title: 'Adjustment of Loan Interest Rates',
    description: 'Increase repayment interest rates from 5% to 6.5% for short-term loans.',
    status: 'passed',
    yesPercentage: 80,
    noPercentage: 20,
    endsAt: '2026-05-15',
  },
];

export const mockLoans: Loan[] = [
  {
    id: 'loan-1',
    amount: 500000,
    status: 'active',
    repaymentDate: '2026-12-01',
    interestRate: 5.5,
    purpose: 'Business Expansion',
  },
  {
    id: 'loan-2',
    amount: 250000,
    status: 'repaid',
    repaymentDate: '2026-03-01',
    interestRate: 5.0,
    purpose: 'Emergency Liquidity',
  },
];

export const mockReports: Report[] = [
  {
    id: 'rep-1',
    title: 'Monthly Summary - April 2026',
    date: '2026-05-01',
    type: 'monthly',
    summary: 'A strong month for unit appreciation with high loan turnover.',
  },
  {
    id: 'rep-2',
    title: 'Q1 2026 Cycle Report',
    date: '2026-04-10',
    type: 'cycle',
    summary: 'Full audit and review of portfolio performance for the first quarter.',
  },
];

export const mockMembers: Member[] = [
  {
    id: 'mem-1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'approved',
    units: 50,
    joinDate: '2025-01-10',
  },
  {
    id: 'mem-2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'pending',
    units: 10,
    joinDate: '2026-05-15',
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: 'tx-1',
    type: 'contribution',
    amount: 10000,
    date: '2026-05-18',
    status: 'completed',
  },
  {
    id: 'tx-2',
    type: 'loan_repayment',
    amount: 50000,
    date: '2026-05-10',
    status: 'completed',
  },
];
