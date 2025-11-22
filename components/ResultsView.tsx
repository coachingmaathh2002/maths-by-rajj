
import React, { useEffect, useRef } from 'react';
import { testData } from '../constants.ts';
import { Student } from '../types.ts';

declare global {
    interface Window {
        MathJax: any;
        html2pdf: any;
    }
}

interface ResultsViewProps {
    exam: string;
    section: string;
    userAnswers: Record<string, string>;
    onBack: () => void;
    student: Student | null;
}

const ResultsView: React.FC<ResultsViewProps> = ({ exam, section, userAnswers, onBack, student }) => {
    const test = testData[exam]?.[section];
    const scoreCardRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (window.MathJax) {
            setTimeout(() => {
                window.MathJax.typesetPromise && window.MathJax.typesetPromise();
            }, 50);
        }
    }, [test]);

    if (!test) {
        return <div>Test not found.</div>;
    }

    const score = test.questions.filter(q => userAnswers[q.id] === q.answer).length;
    const total = test.questions.length;
    const percentage = Math.round((score / total) * 100);
    
    let gradeColor = 'text-rose-500';
    let cardBorder = 'border-rose-500';
    let bgGradient = 'from-rose-500/20 to-slate-900';
    let motivationLine = "Don't give up! Keep practicing to improve your score.";
    
    if (percentage >= 80) {
        gradeColor = 'text-emerald-500';
        cardBorder = 'border-emerald-500';
        bgGradient = 'from-emerald-500/20 to-slate-900';
        motivationLine = "Outstanding Performance! You are ready for the exam.";
    } else if (percentage >= 60) {
        gradeColor = 'text-brand-400';
        cardBorder = 'border-brand-400';
        bgGradient = 'from-brand-500/20 to-slate-900';
        motivationLine = "Good Job! A little more effort will get you to the top.";
    } else if (percentage >= 40) {
        gradeColor = 'text-amber-400';
        cardBorder = 'border-amber-400';
        bgGradient = 'from-amber-500/20 to-slate-900';
        motivationLine = "You're getting there! Focus on your weak areas.";
    }

    const handleDownloadPDF = () => {
        if (!scoreCardRef.current || !window.html2pdf) {
            alert("PDF generation is not available right now.");
            return;
        }

        const element = scoreCardRef.current;
        const opt = {
            margin: 0.5,
            filename: `${student?.name || 'Student'}_${exam}_ScoreCard.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        window.html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="w-full max-w-5xl animate-fade-in pb-20">
            <div className="flex justify-between items-center mb-8">
                 <button onClick={onBack} className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Topics
                </button>
                
                <button 
                    onClick={handleDownloadPDF}
                    className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg shadow-brand-500/20 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                </button>
            </div>

            {/* Printable Score Card Area */}
            <div ref={scoreCardRef} className="bg-slate-950 p-4">
                <div className={`relative overflow-hidden rounded-3xl border-2 ${cardBorder} bg-slate-900 p-8 md:p-12`}>
                    {/* Decorative Background */}
                    <div className={`absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b ${bgGradient} opacity-20 pointer-events-none`}></div>
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    {/* Brand Header */}
                    <div className="relative z-10 text-center mb-12">
                        <h1 className="font-signature text-5xl text-brand-400 mb-2 transform -rotate-2">Maths by Raj Sir</h1>
                        <p className="text-slate-400 uppercase tracking-[0.3em] text-xs font-bold">Official Examination Report</p>
                    </div>

                    {/* Student & Exam Details */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h3 className="text-slate-500 uppercase text-xs font-bold tracking-wider mb-4">Student Profile</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-slate-400">Name</span>
                                    <span className="text-white font-semibold text-lg">{student?.name || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-slate-400">Enrollment ID</span>
                                    <span className="text-white font-mono">{student?.mobile || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Date</span>
                                    <span className="text-white">{new Date().toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>

                         <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h3 className="text-slate-500 uppercase text-xs font-bold tracking-wider mb-4">Exam Details</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-slate-400">Exam Category</span>
                                    <span className="text-white font-semibold">{exam}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-slate-400">Module</span>
                                    <span className="text-white font-medium text-right truncate max-w-[200px]">{test.title}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Total Questions</span>
                                    <span className="text-white">{total}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Score Display */}
                    <div className="relative z-10 flex flex-col items-center justify-center mb-10">
                        <div className="text-center mb-4">
                            <span className="text-slate-400 text-sm uppercase tracking-widest">Total Score Secured</span>
                        </div>
                        <div className={`text-8xl font-black ${gradeColor} tracking-tighter mb-2`}>
                            {score}<span className="text-4xl text-slate-600">/{total}</span>
                        </div>
                        <div className={`px-6 py-2 rounded-full border ${cardBorder} ${gradeColor} font-bold bg-slate-900`}>
                            {percentage}% Accuracy
                        </div>
                    </div>

                    {/* Performance Line */}
                    <div className={`relative z-10 p-6 rounded-2xl text-center border border-white/10 bg-gradient-to-r ${bgGradient}`}>
                        <p className="text-xl text-white font-medium italic font-serif">"{motivationLine}"</p>
                    </div>
                    
                    {/* Footer Signature */}
                    <div className="relative z-10 mt-12 flex justify-between items-end text-slate-500 text-xs pt-8 border-t border-white/5">
                        <div>
                            Generated by MathStudy App
                        </div>
                        <div className="text-right">
                            <div className="h-10 w-32 border-b border-slate-700 mb-2"></div>
                            <span>Authorized Signature</span>
                        </div>
                    </div>
                </div>
                
                 {/* Analysis Table (Included in PDF) */}
                <div className="mt-8 p-4 bg-slate-900 rounded-2xl border border-white/10">
                    <h3 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Answer Key Summary</h3>
                    <div className="grid grid-cols-1 gap-2">
                         {test.questions.map((q, i) => {
                             const isCorrect = userAnswers[q.id] === q.answer;
                             return (
                                 <div key={q.id} className="flex text-xs border-b border-white/5 py-2 last:border-0">
                                     <span className="w-8 text-slate-500 font-mono">{i+1}.</span>
                                     <div className="flex-1">
                                         <span className={`${isCorrect ? 'text-emerald-500' : 'text-rose-500'}`}>
                                             {isCorrect ? 'Correct' : 'Incorrect'}
                                         </span>
                                         { !isCorrect && <span className="text-slate-500 ml-2">(Ans: {q.answer})</span> }
                                     </div>
                                 </div>
                             )
                         })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsView;
