
import React from 'react';
import { studentReviews } from '../constants';

const ReviewsView: React.FC = () => {
    // Duplicate reviews to create infinite scroll effect
    const loopedReviews = [...studentReviews, ...studentReviews];

    return (
        <div className="w-full max-w-7xl animate-fade-in flex flex-col items-center">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Student Success Stories</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Join thousands of students who have transformed their mathematical understanding and exam results with our premium platform.
                </p>
            </div>
            
            <div className="w-full overflow-hidden relative group">
                {/* Fade overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

                {/* Marquee Container */}
                <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]">
                    {loopedReviews.map((review, index) => (
                        <div 
                            key={index} 
                            className="w-[350px] md:w-[400px] glass-card p-6 rounded-2xl flex flex-col justify-between flex-shrink-0 border border-white/5 hover:border-brand-500/30 transition-colors duration-300"
                        >
                            <div>
                                {/* Rating Stars */}
                                <div className="flex gap-1 text-amber-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                
                                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                                    "{review.review}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-brand-500/20">
                                        <img 
                                            src={review.image} 
                                            alt={review.name} 
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${review.name}&background=0ea5e9&color=fff`;
                                            }}
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full border border-slate-900"></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                                    <p className="text-brand-400 text-xs font-medium uppercase tracking-wide">{review.course}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsView;
