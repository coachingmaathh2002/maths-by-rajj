
import React from 'react';
import { testData } from '../constants.ts';

interface ExamTopicsViewProps {
    examName: string;
    onStartTest: (section: string) => void;
    onBack: () => void; // Used for logout or return to home
}

const ExamTopicsView: React.FC<ExamTopicsViewProps> = ({ examName, onStartTest, onBack }) => {
    const exams = testData[examName];

    if (!exams) return <div>Exam data not found</div>;

    const renderTopicCards = () => {
        return Object.keys(exams).map((section, idx) => {
            const test = exams[section];
            const difficultyColor = test.difficulty === 'Easy' ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' :
                                   test.difficulty === 'Medium' ? 'text-amber-400 bg-amber-400/10 border-amber-400/20' :
                                   'text-rose-400 bg-rose-400/10 border-rose-400/20';
            const questionCount = test.questions.length;
            const isComingSoon = questionCount === 0;

            return (
                <div 
                    key={section} 
                    className="glass-card rounded-2xl p-6 flex flex-col justify-between group animate-slide-up"
                    style={{ animationDelay: `${idx * 50}ms` }}
                >
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${difficultyColor}`}>
                                {test.difficulty}
                            </div>
                            {!isComingSoon && (
                                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 group-hover:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors duration-300 line-clamp-2">{test.title}</h3>
                        <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">{test.description}</p>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/5">
                        <div className="flex items-center justify-between text-slate-400 text-sm mb-5">
                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{test.time}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <span>{questionCount > 0 ? `${questionCount} Qs` : 'N/A'}</span>
                            </div>
                        </div>
                        
                        {isComingSoon ? (
                             <button disabled className="w-full py-3 rounded-xl bg-white/5 text-slate-500 font-medium text-sm cursor-not-allowed border border-white/5">
                                Coming Soon
                            </button>
                        ) : (
                            <button 
                                onClick={() => onStartTest(section)} 
                                className="w-full py-3 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-lg shadow-brand-900/20 hover:bg-brand-500 hover:shadow-brand-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Start Practice
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="w-full max-w-7xl animate-fade-in">
            {/* Dashboard Header */}
            <div className="glass-panel rounded-3xl p-8 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                                Logged In
                            </div>
                            <span className="text-slate-500 text-sm">Welcome back, Student</span>
                        </div>
                        <h1 className="text-4xl font-bold text-white">
                            {examName} <span className="text-brand-400">Dashboard</span>
                        </h1>
                        <p className="text-slate-400 mt-2 max-w-xl">
                            Access your premium study materials and mock tests below. Track your progress and master the syllabus.
                        </p>
                    </div>
                    
                    <button 
                        onClick={onBack}
                        className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all font-medium text-sm flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Switch Category / Logout
                    </button>
                </div>
            </div>

            <div className="mb-8 flex items-center gap-3">
                <h2 className="text-2xl font-bold text-white">Available Modules</h2>
                <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
                {renderTopicCards()}
            </div>
        </div>
    );
};

export default ExamTopicsView;
