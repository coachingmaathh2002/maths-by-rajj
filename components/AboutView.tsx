
import React from 'react';

const AboutView: React.FC = () => {
    return (
        <div className="w-full max-w-4xl animate-fade-in">
            <div className="glass-panel p-8 md:p-12 rounded-3xl border-t border-brand-500/20">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">About <span className="text-brand-400">MathStudy</span></h2>
                
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                    <p>
                        Our platform is meticulously designed to provide aspiring students with a <span className="text-white font-medium">comprehensive and intuitive</span> tool for mastering mathematical concepts. We bridge the gap between learning and performance.
                    </p>
                    <p>
                        We focus on delivering <span className="text-brand-300">high-quality, adaptive mock tests</span> for a variety of competitive exams, including WBJEE, JEE Mains, and more. Our goal is to help you assess your knowledge, identify weak spots, and build the confidence needed to excel.
                    </p>
                    <p>
                        We believe that consistent, targeted practice is the key to success. Our mission is to make that process as effective and seamless as possible. Our questions are curated by experts to mirror the <span className="text-white font-medium">complexity and format of actual exams</span>, giving you a realistic test-taking experience before the big day.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 rounded-xl bg-white/5">
                        <h3 className="text-brand-400 font-bold text-xl mb-2">Expert Content</h3>
                        <p className="text-sm text-slate-400">Curated by top educators</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5">
                        <h3 className="text-brand-400 font-bold text-xl mb-2">Real-time Analysis</h3>
                        <p className="text-sm text-slate-400">Instant performance feedback</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5">
                        <h3 className="text-brand-400 font-bold text-xl mb-2">Adaptive Learning</h3>
                        <p className="text-sm text-slate-400">Tests that grow with you</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutView;
