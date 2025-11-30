
import React, { useState } from 'react';
import { Student } from '../types';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (user: Student) => boolean;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = onLogin({ name, email, mobile });
        if (!success) {
            setError('Access Denied: User not found in our premium database.');
        } else {
            setError('');
            setName('');
            setEmail('');
            setMobile('');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            ></div>
            
            {/* Modal */}
            <div className="relative w-full max-w-md bg-slate-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden transform transition-all scale-100 animate-fade-in">
                {/* Decorative Header */}
                <div className="bg-gradient-to-r from-brand-600 to-violet-600 p-6 text-center">
                    <h2 className="text-2xl font-bold text-white">Student Login</h2>
                    <p className="text-brand-100 text-sm mt-1 opacity-90">Access your personalized mock tests</p>
                </div>
                
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Full Name</label>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="e.g. Rohan Das" 
                                required 
                                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Email Address</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="name@example.com" 
                                required 
                                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Mobile Number</label>
                            <input 
                                type="tel" 
                                value={mobile} 
                                onChange={(e) => setMobile(e.target.value)} 
                                placeholder="10-digit number" 
                                required 
                                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" 
                            />
                        </div>
                        
                        {error && (
                            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm text-center">
                                {error}
                            </div>
                        )}
                        
                        <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-brand-600/25 mt-2">
                            Secure Login
                        </button>
                    </form>
                </div>
                
                <div className="bg-slate-950/50 p-4 text-center border-t border-white/5">
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
