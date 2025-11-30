
import React, { useState, useEffect } from 'react';
import { testData } from '../constants';

declare global {
    interface Window {
        MathJax: any;
    }
}

interface TestViewProps {
    exam: string;
    section: string;
    onSubmit: (answers: Record<string, string>) => void;
    onBack: () => void;
}

const TestView: React.FC<TestViewProps> = ({ exam, section, onSubmit, onBack }) => {
    const test = testData[exam]?.[section];
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visitedQuestions, setVisitedQuestions] = useState<Set<number>>(new Set([0]));

    useEffect(() => {
        if (window.MathJax) {
            // Delay slightly to allow React render
            setTimeout(() => {
                window.MathJax.typesetPromise && window.MathJax.typesetPromise();
            }, 50);
        }
    }, [currentIndex, test]); 

    if (!test || test.questions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-center animate-fade-in">
                <div className="text-rose-400 font-bold text-xl mb-2">Test Unavailable</div>
                <p className="text-slate-400">Please try again later.</p>
                <button onClick={onBack} className="mt-6 text-brand-400 hover:text-brand-300 font-semibold">Go Back</button>
            </div>
        );
    }

    const totalQuestions = test.questions.length;
    const currentQuestion = test.questions[currentIndex];
    
    const handleAnswerChange = (questionId: string, answer: string) => {
        setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
    };
    
    const handleNext = () => {
        if (currentIndex < totalQuestions - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setVisitedQuestions(prev => new Set(prev).add(nextIndex));
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleJumpToQuestion = (index: number) => {
        setCurrentIndex(index);
        setVisitedQuestions(prev => new Set(prev).add(index));
    };
    
    const handleSubmit = () => {
        const answeredCount = Object.keys(userAnswers).length;
        if (answeredCount < totalQuestions) {
            if(!confirm(`You have answered ${answeredCount} out of ${totalQuestions} questions. Are you sure you want to submit?`)) return;
        }
        onSubmit(userAnswers);
    };

    const progress = (Object.keys(userAnswers).length / totalQuestions) * 100;

    return (
        <div className="w-full max-w-7xl animate-fade-in">
            {/* Top Bar: Title and Progress */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">{test.title}</h2>
                    <p className="text-slate-400 text-sm">Attempting question {currentIndex + 1} of {totalQuestions}</p>
                </div>
                <div className="w-full md:w-64">
                     <div className="flex justify-between text-xs mb-1 text-slate-400 font-medium uppercase">
                         <span>Progress</span>
                         <span>{Math.round(progress)}%</span>
                     </div>
                     <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-brand-600 to-brand-400 h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 pb-20">
                {/* Left Column: Question Area */}
                <div className="flex-1 order-2 lg:order-1">
                    <div className="glass-panel rounded-3xl p-6 md:p-10 min-h-[400px] flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative number background */}
                        <div className="absolute -top-6 -left-4 text-[10rem] font-bold text-white/5 select-none pointer-events-none">
                            {currentIndex + 1}
                        </div>

                        <div>
                            <div className="flex items-start gap-4 mb-8 relative z-10">
                                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-brand-500 text-white font-bold text-lg shadow-lg shadow-brand-500/30">
                                    Q{currentIndex + 1}
                                </span>
                                <p className="text-xl md:text-2xl text-slate-100 font-medium leading-relaxed mt-1">
                                    {currentQuestion.question}
                                </p>
                            </div>
                            
                            <div className="space-y-3 pl-0 md:pl-14 relative z-10">
                                {currentQuestion.options.map((option, oIndex) => (
                                    <label key={oIndex} className="relative cursor-pointer group block">
                                        <input 
                                            type="radio" 
                                            name={currentQuestion.id} 
                                            value={option}
                                            onChange={() => handleAnswerChange(currentQuestion.id, option)}
                                            checked={userAnswers[currentQuestion.id] === option}
                                            className="peer sr-only custom-radio"
                                        />
                                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 peer-checked:border-brand-500 peer-checked:bg-brand-500/10 transition-all duration-200 flex items-center">
                                            <div className="radio-circle w-6 h-6 rounded-full border-2 border-slate-500 mr-4 flex items-center justify-center transition-all duration-200 relative flex-shrink-0">
                                                 <div className="w-2.5 h-2.5 bg-white rounded-full transform scale-0 transition-transform duration-200 absolute"></div>
                                            </div>
                                            <span className="text-slate-300 peer-checked:text-white text-lg group-hover:text-slate-200">{option}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Navigation (Inside Card) */}
                        <div className="mt-10 flex justify-between items-center lg:hidden">
                             <button 
                                onClick={handlePrev} 
                                disabled={currentIndex === 0}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                            >
                                Previous
                            </button>
                            
                            {currentIndex === totalQuestions - 1 ? (
                                <button 
                                    onClick={handleSubmit}
                                    className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-500"
                                >
                                    Submit Test
                                </button>
                            ) : (
                                <button 
                                    onClick={handleNext}
                                    className="px-6 py-3 rounded-xl bg-brand-600 text-white font-bold shadow-lg shadow-brand-500/20 hover:bg-brand-500"
                                >
                                    Next Question
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Question Palette (Sidebar) */}
                <div className="w-full lg:w-80 order-1 lg:order-2">
                    <div className="glass-card rounded-3xl p-6 sticky top-24">
                        <h3 className="text-white font-bold mb-4 text-lg border-b border-white/10 pb-4">Question Palette</h3>
                        
                        <div className="grid grid-cols-5 gap-3 mb-6">
                            {test.questions.map((_, idx) => {
                                const isAnswered = userAnswers[test.questions[idx].id];
                                const isCurrent = idx === currentIndex;
                                const isVisited = visitedQuestions.has(idx);
                                
                                let btnClass = "bg-slate-800 text-slate-400 border-transparent"; // Default: Not visited
                                if (isCurrent) btnClass = "bg-brand-500 text-white border-brand-400 ring-2 ring-brand-500/30";
                                else if (isAnswered) btnClass = "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
                                else if (isVisited) btnClass = "bg-amber-500/10 text-amber-400 border-amber-500/30";
                                
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleJumpToQuestion(idx)}
                                        className={`h-10 w-10 rounded-lg flex items-center justify-center text-sm font-bold border transition-all duration-200 ${btnClass} hover:scale-105`}
                                    >
                                        {idx + 1}
                                    </button>
                                );
                            })}
                        </div>
                        
                        <div className="space-y-2 text-xs text-slate-400 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/50"></div>
                                <span>Answered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded bg-amber-500/10 border border-amber-500/30"></div>
                                <span>Visited & Unanswered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded bg-slate-800"></div>
                                <span>Not Visited</span>
                            </div>
                        </div>

                        {/* Desktop Navigation Buttons */}
                        <div className="hidden lg:flex flex-col gap-3">
                            <div className="flex gap-3">
                                <button 
                                    onClick={handlePrev} 
                                    disabled={currentIndex === 0}
                                    className="flex-1 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    Previous
                                </button>
                                <button 
                                    onClick={handleNext}
                                    disabled={currentIndex === totalQuestions - 1}
                                    className="flex-1 py-3 rounded-xl bg-brand-600 text-white font-semibold shadow-lg shadow-brand-500/20 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    Next
                                </button>
                            </div>
                            
                            <button 
                                onClick={handleSubmit}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/20 hover:from-emerald-500 hover:to-emerald-400 transition-all transform hover:-translate-y-1"
                            >
                                Submit Test
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestView;
