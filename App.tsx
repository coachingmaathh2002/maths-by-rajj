import React, { useState, useCallback } from 'react';
import { View, Student } from './types';
import { studentData } from './constants';
import Navbar from './components/Navbar';
import MockTestsView from './components/MockTestsView';
import ExamTopicsView from './components/ExamTopicsView';
import AboutView from './components/AboutView';
import ReviewsView from './components/ReviewsView';
import ContactView from './components/ContactView';
import LoginModal from './components/LoginModal';
import TestView from './components/TestView';
import ResultsView from './components/ResultsView';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<View>(View.MockTests);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState<Student | null>(null);
    const [selectedExam, setSelectedExam] = useState<string>('WBJEE'); // Current exam context
    const [loggedInUserExam, setLoggedInUserExam] = useState<string | null>(null); // Exam user is permitted for
    const [selectedSection, setSelectedSection] = useState<string | null>(null);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

    const handleNavigate = useCallback((view: View) => {
        // If trying to go to MockTests, just show categories (Home)
        if (view === View.MockTests) {
            setCurrentView(View.MockTests);
        } else {
            setCurrentView(view);
        }
    }, []);

    // Triggered when user clicks an Exam Category Card on Home Screen
    const handleSelectExam = useCallback((exam: string) => {
        setSelectedExam(exam);
        
        // Special case for Free Mock Tests - bypass login
        if (exam === 'Free Mock Tests') {
            setCurrentView(View.ExamTopics);
            return;
        }

        if (isLoggedIn) {
            // If logged in, check if the clicked exam matches their authorized exam
            if (loggedInUserExam === exam) {
                setCurrentView(View.ExamTopics);
            } else {
                alert(`You are currently logged in for ${loggedInUserExam}. Please logout to access ${exam}.`);
            }
        } else {
            // Not logged in, open modal to login for this specific exam
            setLoginModalOpen(true);
        }
    }, [isLoggedIn, loggedInUserExam]);

    // Triggered when user clicks "Start Practice" on a specific topic (Inside ExamTopicsView)
    const handleStartTest = useCallback((section: string) => {
        // Logic assumes user is already logged in if they are seeing ExamTopicsView (or it is a free test)
        setSelectedSection(section);
        setCurrentView(View.Test);
    }, []);

    const handleLogin = (user: Student): boolean => {
        // Check against the exam selected before opening modal
        const studentListOfExam = studentData[selectedExam] || [];
        const foundStudent = studentListOfExam.find(student =>
            student.name.toLowerCase() === user.name.toLowerCase() &&
            student.email.toLowerCase() === user.email.toLowerCase() &&
            student.mobile === user.mobile
        );

        if (foundStudent) {
            setLoggedIn(true);
            setCurrentUser(foundStudent);
            setLoggedInUserExam(selectedExam);
            setLoginModalOpen(false);
            setCurrentView(View.ExamTopics); // Go straight to topics
            return true;
        }
        return false;
    };
    
    const handleLogout = () => {
        setLoggedIn(false);
        setCurrentUser(null);
        setLoggedInUserExam(null);
        setLoginModalOpen(false);
        setCurrentView(View.MockTests);
        setUserAnswers({});
        setSelectedSection(null);
    };

    const handleSubmitTest = (answers: Record<string, string>) => {
        setUserAnswers(answers);
        setCurrentView(View.Results);
    };

    const handleBackToTopics = () => {
        setSelectedSection(null);
        setUserAnswers({});
        setCurrentView(View.ExamTopics);
    };

    const renderContent = () => {
        switch (currentView) {
            case View.About:
                return <AboutView />;
            case View.Reviews:
                return <ReviewsView />;
            case View.Contact:
                return <ContactView />;
            case View.ExamTopics:
                 // Allow free mock tests without authentication check
                 if (selectedExam === 'Free Mock Tests') {
                     return <ExamTopicsView examName={selectedExam} onStartTest={handleStartTest} onBack={() => setCurrentView(View.MockTests)} />;
                 }
                 // Safety check: should be logged in and have correct exam
                 if (isLoggedIn && loggedInUserExam) {
                     return <ExamTopicsView examName={loggedInUserExam} onStartTest={handleStartTest} onBack={handleLogout} />;
                 }
                 return <MockTestsView onSelectExam={handleSelectExam} />;
            case View.Test:
                if (selectedExam && selectedSection) {
                    return <TestView exam={selectedExam} section={selectedSection} onSubmit={handleSubmitTest} onBack={handleBackToTopics}/>;
                }
                return <MockTestsView onSelectExam={handleSelectExam} />;
            case View.Results:
                 if (selectedExam && selectedSection) {
                    return <ResultsView 
                        exam={selectedExam} 
                        section={selectedSection} 
                        userAnswers={userAnswers} 
                        onBack={handleBackToTopics} 
                        student={currentUser}
                    />;
                }
                return <MockTestsView onSelectExam={handleSelectExam} />;
            case View.MockTests:
            default:
                return <MockTestsView onSelectExam={handleSelectExam} />;
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100">
            {/* Ambient Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                 <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
                 <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-violet-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
                 <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
            </div>

            <Navbar 
                currentView={currentView} 
                onNavigate={handleNavigate} 
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
            />

            <main className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-start min-h-[calc(100vh-80px)]">
                {renderContent()}
            </main>

            <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} onLogin={handleLogin} />
        </div>
    );
};

export default App;