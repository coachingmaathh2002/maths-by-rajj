
import React from 'react';

const ContactView: React.FC = () => {
    return (
        <div className="w-full max-w-3xl animate-fade-in">
            <div className="glass-panel p-10 rounded-3xl text-center">
                <div className="w-16 h-16 mx-auto bg-brand-500/10 rounded-full flex items-center justify-center mb-6 text-brand-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Have questions about our mock tests or need technical support? <br/>We're here to help you succeed.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a 
                        href="mailto:contact@mathmocktest.com" 
                        className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all duration-300 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-slate-200 font-medium">contact@mathmocktest.com</span>
                    </a>
                    
                    <a 
                        href="tel:+913210" 
                        className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all duration-300 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-slate-200 font-medium">+91 3210 0000</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactView;
