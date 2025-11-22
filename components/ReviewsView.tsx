
import React from 'react';
import { studentReviews } from '../constants';

const ReviewsView: React.FC = () => {
    return (
        <div className="w-full max-w-3xl animate-fade-in">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-white mb-4">Student Success Stories</h2>
                <p className="text-slate-400">Hear from students who have aced their exams with our platform.</p>
            </div>
            
            <div className="grid gap-6">
                {studentReviews.map((review, index) => (
                    <div 
                        key={index} 
                        className="glass-card p-8 rounded-2xl relative overflow-hidden"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Quote Icon */}
                        <div className="absolute top-4 right-8 text-7xl font-serif text-brand-500/10 pointer-events-none">
                            "
                        </div>
                        
                        <div className="relative z-10">
                            <p className="text-lg text-slate-200 leading-relaxed italic mb-6">
                                {review.review}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-white text-sm">{review.name}</p>
                                    <p className="text-xs text-brand-400">Verified Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsView;
