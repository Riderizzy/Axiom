/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UnitHolding {
  unitsOwned: number;
  currentUnitValue: number;
  totalPortfolioValue: number;
  growthPercentage: number;
  lastUpdated: string;
}

export interface StewardMetrics {
  fundValue: number;
  activeLoans: number;
  reserveBalance: number;
  totalMembers: number;
  unitPrice: number;
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'passed' | 'defeated' | 'pending';
  yesPercentage: number;
  noPercentage: number;
  endsAt: string;
}

export interface Loan {
  id: string;
  amount: number;
  status: 'active' | 'repaid' | 'pending';
  repaymentDate: string;
  interestRate: number;
  purpose: string;
}

export interface Report {
  id: string;
  title: string;
  date: string;
  type: 'monthly' | 'cycle';
  summary: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'approved' | 'suspended';
  units: number;
  joinDate: string;
}

export interface Transaction {
  id: string;
  type: 'contribution' | 'withdrawal' | 'loan_repayment' | 'loan_disbursement';
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}
