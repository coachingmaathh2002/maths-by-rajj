
import React from 'react';
import { View } from '../types.ts';

interface NavbarProps {
    currentView: View;
    onNavigate: (view: View) => void;
    isLoggedIn?: boolean;
    onLogout?: () => void;
}

const navItems = [
    { id: View.MockTests, label: 'Home' },
    { id: View.About, label: 'About' },
    { id: View.Reviews, label: 'Reviews' },
    { id: View.Contact, label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isLoggedIn, onLogout }) => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <div 
                    className="flex items-center space-x-3 cursor-pointer group" 
                    onClick={() => onNavigate(View.MockTests)}
                >
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-violet-600 shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                        Math<span className="text-brand-400">Study</span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                        {navItems.map(item => (
                            <button 
                                key={item.id} 
                                onClick={() => onNavigate(item.id)}
                                className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    currentView === item.id && !isLoggedIn // Highlight standard nav only if not in deep test view
                                    ? 'text-white bg-slate-800 shadow-sm' 
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {item.label}
                                {currentView === item.id && !isLoggedIn && (
                                    <span className="absolute inset-0 rounded-full ring-1 ring-white/10 pointer-events-none"></span>
                                )}
                            </button>
                        ))}
                    </div>
                    
                    {isLoggedIn && onLogout && (
                        <button 
                            onClick={onLogout}
                            className="hidden md:flex px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300"
                        >
                            Logout
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button (Visual Placeholder) */}
                <div className="md:hidden text-slate-400">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
