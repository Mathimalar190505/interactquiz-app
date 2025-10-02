import React, { useState, useEffect } from 'react';
import EndExamPopup from '../Components/EndExamPopup';

// --- Custom Color Definitions (Phthalo Green) ---
const PHYTALO_GREEN = '#086f5fff';
const PHYTALO_GREEN_HOVER = '#003B33';
const LIGHT_GREEN_BG = '#e6fff7'; // A light shade for selection/hover background

// --- Component Styles (Inline for Simplicity) ---
const styles = {
    // --- Layout & Container Styles ---
    pageContainer: { maxWidth: '1024px', margin: '35px auto', padding: '20px', fontFamily: 'Inter, Arial, sans-serif', backgroundColor: '#f0f0f0', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', },

    // Box around Question Content (Base for Options and Timer)
    questionBox: { border: '1px solid #333', padding: '30px', borderRadius: '8px', backgroundColor: '#fff', marginTop: '17px', position: 'relative', boxShadow: '2px 2px 0px 0px rgba(0,0,0,0.1)', },

    // --- Button & Interaction Styles ---
    button: { padding: '10px 20px', borderRadius: '8px', border: '1px solid #333', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.15s ease-in-out', },

    // Highlighted Primary Green Button Style (Next, Current Question)
    primaryButton: { backgroundColor: PHYTALO_GREEN, color: '#fff', boxShadow: '2px 2px 0px 0px #000', },

    // Primary Green Button Hover Effect
    primaryButtonHover: { backgroundColor: PHYTALO_GREEN_HOVER, transform: 'translateY(-1px) translateX(-1px)', boxShadow: '3px 3px 0px 0px #000', },

    // Default White Button Style (Previous, Navbar)
    whiteButton: { backgroundColor: '#fff', color: '#333', boxShadow: '2px 2px 0px 0px #ccc', },

    // White Button Hover Effect
    whiteButtonHover: { backgroundColor: '#f0f0f0', transform: 'translateY(-1px) translateX(-1px)', boxShadow: '3px 3px 0px 0px #aaa', },

    // Option Hover/Selected Effect Base (Uses Phthalo Green Accents)
    optionSelected: { border: `2px solid ${PHYTALO_GREEN}`, backgroundColor: LIGHT_GREEN_BG, boxShadow: `0 0 5px rgba(0, 79, 67, 0.8)`, },
    optionHover: { backgroundColor: LIGHT_GREEN_BG, borderColor: PHYTALO_GREEN, boxShadow: '0 0 5px rgba(0, 79, 67, 0.5)', },


    // New Timer Style (Redesigned & Decreased Size)
    timerBox: { padding: '3px 10px', borderRadius: '6px', backgroundColor: '#fff', border: '2px solid #333', boxShadow: '3px 3px 0px 0px #ccc', display: 'flex', alignItems: 'center' },
};


// --- Single Main Component ---
const ExamPage = () => {
    // --- State and Data ---
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const totalQuestions = 30, examTitle = "Harvard maths inference exam (hard)";
    // Timer state (in seconds)
    const [timeElapsed, setTimeElapsed] = useState(0);
    // Convert seconds → MM:SS
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    // Timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeElapsed(prev => prev + 1); // Increment time
        }, 1000);

        return () => clearInterval(timer);    // Cleanup when component unmounts
    }, []);

    const questionData = {
        text: 'What is the value of the hardest math question $1+1=$?',
        options: [
            { label: 'a', value: '1' },
            { label: 'b', value: '2' },
            { label: 'c', value: '3' },
            { label: 'd', value: 'karkuzhali only knows' }
        ],
    };

    // --- Handlers ---
    const handleAnswerSelect = setSelectedAnswer;

    const handleNavigate = (q) => {
        if (q >= 1 && q <= totalQuestions) {
            setCurrentQuestion(q);
            setSelectedAnswer(null); // Load saved answer in a real app
        }
    };


    const [startIndex, setStartIndex] = useState(0); // window start for question numbers
    const windowSize = 10; // how many numbers to show at a time

    const handlePrevious = () => {
        if (currentQuestion > 1) {
            const newQ = currentQuestion - 1;
            setCurrentQuestion(newQ);

            // Shift window left if needed
            if (newQ - 1 < startIndex) {
                setStartIndex(startIndex - 1);
            }
        }
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions) {
            const newQ = currentQuestion + 1;
            setCurrentQuestion(newQ);

            // Shift window right if needed
            if (newQ > startIndex + windowSize) {
                setStartIndex(startIndex + 1);
            }
        }
    };


    // --- Inline Helper Components ---

    // Renders a single answer option
    const OptionRenderer = ({ label, value, isSelected, onSelect }) => {
        const [isHovered, setIsHovered] = useState(false);
        const s = styles;
        const common = { ...s.questionBox, padding: '15px', marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', boxShadow: 'none', transition: 'all 0.2s ease-in-out', border: '1px solid #ddd', backgroundColor: '#fff' };
        const selected = isSelected ? s.optionSelected : {};
        // Apply hover style only if not currently selected
        const hover = isHovered && !isSelected ? { ...s.optionHover, border: `1px solid ${PHYTALO_GREEN}` } : {};

        return (
            <div
                style={{ ...common, ...selected, ...hover }}
                onClick={() => onSelect(value)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span style={{ width: '30px', fontWeight: 'bold', color: '#555' }}>{label})</span>
                <span>{value}</span>
            </div>
        );
    };

    // Renders the Previous/Next buttons (large style, at the bottom)
    const ControlButtonRenderer = ({ children, onClick, isPrimary }) => {
        const [isHovered, setIsHovered] = useState(false);
        const { button, primaryButton, whiteButton, primaryButtonHover, whiteButtonHover } = styles;
        
        // Use primary green for Next/Review
        const base = isPrimary ? primaryButton : whiteButton;
        const hover = isPrimary ? primaryButtonHover : whiteButtonHover;
        
        return (
            <button
                style={{ ...button, ...base, ...(isHovered && hover) }}
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >{children}</button>
        );
    };

    // Renders the Question Navigation buttons (small, numbered style)
    const NavButtonRenderer = ({ num }) => {
        const [isHovered, setIsHovered] = useState(false);
        const { button, primaryButton, whiteButton, primaryButtonHover, whiteButtonHover } = styles;
        const isCurrent = num === currentQuestion;
        
        // Use primary green for the current question number
        const base = isCurrent ? primaryButton : whiteButton;
        const hover = isCurrent ? primaryButtonHover : whiteButtonHover;

        return (
            <button
                style={{ ...button, ...base, width: '40px', height: '40px', padding: 0, ...(isHovered && hover) }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => handleNavigate(num)}
            >{num}</button>
        );
    };

    // Renders the small Previous/Next arrow buttons for the navigation bar
    const NavArrowButtonRenderer = ({ direction }) => {
        const [isHovered, setIsHovered] = useState(false);
        const isPrev = direction === 'prev';
        const isDisabled = isPrev ? currentQuestion === 1 : currentQuestion === totalQuestions;
        const onClick = isPrev ? handlePrevious : handleNext;
        const { button } = styles;

        const baseStyle = { ...button, width: '40px', height: '40px', padding: 0, border: 'none', boxShadow: 'none', backgroundColor: 'transparent', opacity: isDisabled ? 0.5 : 1, cursor: isDisabled ? 'not-allowed' : 'pointer', color: '#555' };
        const hoverStyle = { backgroundColor: '#e0e0e0', border: 'none', boxShadow: 'none' };

        return (
            <button
                style={{ ...baseStyle, ...(isHovered && !isDisabled && hoverStyle) }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => { if (!isDisabled) onClick(); }}
                disabled={isDisabled}
            >{isPrev ? '◀' : '▶'}</button>
        );
    };


    // --- Main Render Block ---
    const questionNumbers = Array.from({ length: totalQuestions }, (_, i) => i + 1);
    const [showEndPopup, setShowEndPopup] = useState(false);

    return (
        <div style={styles.pageContainer}>

            {/* 1. Header (Left: Title, Center: Timer Nudged Right, Right: End Practice) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', marginBottom: '20px' }}>

                {/* Left: Title */}
                <h1 style={{ fontSize: 'clamp(1.2em, 4vw, 1.5em)', fontWeight: 'bold', justifySelf: 'start' }}>{examTitle}</h1>

                {/* Center: Timer Box (Nudged right via marginLeft) */}
                <div style={{ justifySelf: 'center', marginLeft: '20px' }}>
                    <div style={styles.timerBox}>
                        <span role="img" aria-label="timer" style={{ fontSize: 'clamp(0.8em, 2.5vw, 1em)' }}>⏱️</span>
                        <span style={{ fontWeight: '900', color: '#d9534f', fontSize: 'clamp(0.8em, 2.5vw, 1em)' }}>{formatTime(timeElapsed)}
                        </span>
                    </div>
                </div>


                {/* Right: End Practice Button (Red for final action) */}
                <button
                    onClick={() => setShowEndPopup(true)}
                    className="cursor-pointer py-3 px-5 rounded-lg font-semibold text-white bg-gradient-to-br from-[#e74c3c] to-[#c0392b] transition-transform duration-300 hover:shadow-lg hover:shadow-red-400/50"
                    style={{ justifySelf: 'end' }}
                >
                    End Exam
                </button>

                {/* End Exam Popup */}
                {showEndPopup && (
                    <EndExamPopup
                        onClose={() => setShowEndPopup(false)}            // Continue Exam
                        onQuit={() => {
                            // In a real application, this would trigger navigation or state change
                            console.log("Exam Ended");
                        }}
                    />
                )}


            </div>

            {/* 2. Question Navbar (Centered with Prev/Next arrows) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px', justifyContent: 'center' }}>
                <NavArrowButtonRenderer direction="prev" />
                {questionNumbers.slice(startIndex, startIndex + windowSize).map(num => (
                    <NavButtonRenderer key={num} num={num} />
                ))}

                {/* Show ellipsis if more questions follow */}
                {startIndex + windowSize < totalQuestions && (
                    <span style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: '#555' }}>...</span>
                )}

                <NavArrowButtonRenderer direction="next" />
            </div>

            {/* 3. Question Area */}
            <div style={styles.questionBox}>
                <p style={{ fontSize: '1.2em', fontWeight: 'normal', marginBottom: '20px' }}>
                    {currentQuestion}. {questionData.text}
                </p>

                {/* Options */}
                <div style={{ marginBottom: '35px' }}>
                    {questionData.options.map(option => (
                        <OptionRenderer
                            key={option.label}
                            label={option.label}
                            value={option.value}
                            isSelected={selectedAnswer === option.value}
                            onSelect={handleAnswerSelect}
                        />
                    ))}
                </div>

                {/* Controls */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ControlButtonRenderer onClick={handlePrevious} isPrimary={false}>Previous</ControlButtonRenderer>
                    <ControlButtonRenderer onClick={handleNext} isPrimary={true}>
                        {currentQuestion === totalQuestions ? 'Review' : 'Next'}
                    </ControlButtonRenderer>
                </div>

                <p style={{ textAlign: 'center', fontSize: '0.9em', marginTop: '15px', color: '#555' }}>
                    {currentQuestion}/{totalQuestions}
                </p>
            </div>

        </div>
    );
};

export default ExamPage;
