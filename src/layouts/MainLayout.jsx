import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50">
      {/* Simplified background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-100 to-amber-50 -z-10" />
      
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}