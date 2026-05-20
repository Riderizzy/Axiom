/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { SignIn, RequestAccess, ResetPassword } from './pages/AuthPages';
import { 
  MemberDashboard, 
  PortfolioPage, 
  GovernancePage, 
  LoansPage, 
  ReportsPage 
} from './pages/MemberDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Auth Routes */}
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/request-access" element={<RequestAccess />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          
          {/* Member Dashboard Routes */}
          <Route path="/dashboard" element={<MemberDashboard />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
