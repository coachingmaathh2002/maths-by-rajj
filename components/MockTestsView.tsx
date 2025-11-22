
import React from 'react';
import { testData } from '../constants';

interface MockTestsViewProps {
    onSelectExam: (exam: string) => void;
}

const MockTestsView: React.FC<MockTestsViewProps> = ({ onSelectExam }) => {
    const renderExamCards = () => {
        return Object.keys(testData).map((examName, idx) => {
            const examData = testData[examName];
            const topicCount = Object.keys(examData).length;
            const totalQuestions = Object.values(examData).reduce((acc, topic) => acc + topic.questions.length, 0);
            const isComingSoon = totalQuestions === 0;

            return (
                <div 
                    key={examName} 
                    onClick={() => onSelectExam(examName)}
                    className="glass-card rounded-3xl p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden animate-slide-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-500/20 blur-[50px] rounded-full group-hover:bg-brand-500/30 transition-all duration-500"></div>
                    
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-brand-400">{examName.charAt(0)}</span>
                            </div>
                            <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${isComingSoon ? 'bg-slate-800 text-slate-500 border-slate-700' : 'bg-brand-500/10 text-brand-400 border-brand-500/20'}`}>
                                {isComingSoon ? 'Coming Soon' : 'Active'}
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors duration-300">{examName}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Comprehensive preparation modules for {examName} aspirants.
                        </p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Topics</span>
                            <span className="text-white font-bold text-lg">{topicCount}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="w-full max-w-7xl animate-fade-in">
            {/* Hero Section */}
            <header className="text-center mb-20 pt-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-8 animate-slide-up">
                    <span className="w-2 h-2 rounded-full bg-brand-400 mr-2 animate-pulse"></span>
                    Premium Examination Portal
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight animate-slide-up" style={{ animationDelay: '100ms' }}>
                    Select Your <span className="text-gradient">Goal</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
                    Choose your exam category to access curated mock tests, performance analytics, and expert materials.
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-slide-up" style={{ animationDelay: '300ms' }}>
                {[
                    { label: 'Active Students', value: '10k+' },
                    { label: 'Mock Tests', value: '500+' },
                    { label: 'Questions', value: '25k+' },
                    { label: 'Qualified', value: '92%' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                        <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                        <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wide">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Exam Categories Grid */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-2 px-2">Exam Categories</h2>
                <p className="text-slate-400 px-2">Select an exam to log in and view specific test modules.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                {renderExamCards()}
            </div>
        </div>
    );
};

export default MockTestsView;
