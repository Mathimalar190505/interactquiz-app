import React, { useState } from 'react';

// Define the custom Phthalo Green shades for arbitrary values
const PHYTALO_GREEN = '#004F43';
const PHYTALO_GREEN_HOVER = '#003B33';

// --- Subject Data (Centralized for easy access) ---
const EXAMS_DATA = [
    {
        id: 1,
        subject: 'Aptitude',
        description: 'Test your logical reasoning, quantitative ability, and verbal skills crucial for competitive exams and job interviews.',
        tests: 18,
    },
    {
        id: 2,
        subject: 'C',
        description: 'Focuses on the fundamentals of the C programming language, covering pointers, memory management, and basic data structures.',
        tests: 10,
    },
    {
        id: 3,
        subject: 'Python',
        description: 'Examines core Python concepts, including data types, control flow, functions, and object-oriented programming principles.',
        tests: 14,
    },
    {
        id: 4,
        subject: 'Web Technology',
        description: 'Covers essential web development topics like HTML5, CSS3, JavaScript, REST APIs, and basic concepts of front-end and back-end frameworks.',
        tests: 15,
    },
    {
        id: 5,
        subject: 'Java',
        description: 'Assesses your knowledge of the Java language, focusing on OOP concepts, exception handling, collections, and multi-threading.',
        tests: 12,
    },
    {
        id: 6,
        subject: 'C++',
        description: 'Tests advanced C++ features, including classes, objects, inheritance, polymorphism, templates, and the Standard Template Library (STL).',
        tests: 11,
    },
    {
        id: 7,
        subject: 'Networking',
        description: 'Deep dive into protocols, network topologies, routing algorithms, and crucial network security mechanisms like firewalls.',
        tests: 13,
    },
    {
        id: 8,
        subject: 'Cyber Security',
        description: 'Covers risk assessment, cryptography, secure software development, and common defensive strategies against cyber threats.',
        tests: 9,
    },
];

// --- 1. Topic List Page Component ---
const TopicListPage = ({ subject, onGoBack }) => {
    // Generate a generic list of 10 topics for the selected subject
    const topics = Array.from({ length: 10 }, (_, i) => ({
        name: `${subject} Topic ${i + 1}`,
        questionCount: Math.floor(Math.random() * 20) + 10, // Example question count
    }));

    return (
        <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-2xl w-full max-w-sm md:max-w-lg border border-gray-200">
            {/* Header and Back Button */}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800 uppercase truncate pr-4">{subject} Topics</h2>
                <button
                    onClick={onGoBack}
                    className="flex-shrink-0 bg-gray-200 text-gray-700 font-medium py-2 px-3 sm:px-4 rounded-xl hover:bg-gray-300 transition duration-300 text-sm sm:text-base"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
                    Back
                </button>
            </div>

            {/* Topics List Container */}
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 transition duration-200"
                    >
                        <span className="text-base sm:text-lg font-medium text-gray-700 mb-2 sm:mb-0">{topic.name}</span>
                        <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto justify-between">
                            <span className="text-xs sm:text-sm text-gray-500 font-semibold flex-shrink-0">{topic.questionCount} Qs</span>
                             <button
                                className="text-white bg-[#004F43] text-sm font-medium py-2 px-4 rounded-lg hover:bg-[#003B33] transition duration-300 shadow-md flex-shrink-0"
                            >
                                Start Test
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- 2. Exam Card Component (Modified to accept handler) ---
const ExamCard = ({ exam, onStartExam }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 w-full flex flex-col justify-between h-full transform hover:scale-[1.02] transition-transform duration-300">
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{exam.subject}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3 h-[60px]">{exam.description}</p>
                
                {/* Statistics line */}
                <div className="flex items-center text-sm text-gray-600 mb-4 pt-2 border-t border-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#004F43]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span className="font-semibold text-gray-600 mr-1">Total Tests:</span> 
                    <span className="text-gray-500 font-medium">{exam.tests}</span>
                </div>
            </div>

            {/* Action Button: calls the handler to switch the view */}
            <div className="mt-4">
                <button 
                    onClick={() => onStartExam(exam.subject)} 
                    className="w-full bg-[#004F43] text-white font-semibold py-3 rounded-xl hover:bg-[#003B33] transition duration-300 shadow-lg shadow-[#004F43]/40 active:shadow-none"
                >
                    Start Exam
                </button>
            </div>
        </div>
    );
};

// --- 3. Main App Component (Controls Routing) ---
const DashboardPage = () => {
    // State to control the view: 'grid' (default) or 'topics'
    const [view, setView] = useState('grid');
    // State to hold the subject name for the topic page
    const [selectedSubject, setSelectedSubject] = useState(null);

    // Handler to switch to the topic page
    const handleStartExam = (subject) => {
        setSelectedSubject(subject);
        setView('topics');
    };

    // Handler to switch back to the main grid page
    const handleGoBack = () => {
        setSelectedSubject(null);
        setView('grid');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-sans flex justify-center items-start pt-10">
            <div className="container mx-auto max-w-7xl flex justify-center w-full">

                {/* --- Conditional Rendering for Grid View --- */}
                {view === 'grid' && (
                    <div className="w-full">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-b-4 border-[#004F43] inline-block pb-1">
                            Available Exams 🎓
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {EXAMS_DATA.map((exam) => (
                                <ExamCard 
                                    key={exam.id} 
                                    exam={exam} 
                                    onStartExam={handleStartExam} 
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* --- Conditional Rendering for Topic List View --- */}
                {view === 'topics' && selectedSubject && (
                    <TopicListPage 
                        subject={selectedSubject} 
                        onGoBack={handleGoBack} 
                    />
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
