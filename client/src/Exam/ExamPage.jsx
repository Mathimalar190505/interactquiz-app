import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QUESTIONS } from "../Data/QuestionIndex"; // Assuming this is correct

const ExamPage = () => {
  const { subject, topic } = useParams();
  const navigate = useNavigate();
  const decodedTopic = decodeURIComponent(topic);

  // Get questions dynamically
  const questions =
    QUESTIONS[subject] && QUESTIONS[subject][decodedTopic]
      ? QUESTIONS[subject][decodedTopic]
      : [
          { question: "No questions available.", options: ["N/A"], answer: "N/A" },
        ];

  const totalQuestions = questions.length;
  // Based on the image, the time is 09:59 (almost 10 minutes)
  const initialTime = 60 * 10; // 10 min

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState({});
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [showPopup, setShowPopup] = useState(false);
  const [examEnded, setExamEnded] = useState(false);

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selected[index] === q.answer) score++;
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    navigate(`/result/${subject}/${encodeURIComponent(decodedTopic)}`, {
      state: {
        score,
        total: questions.length,
        subject,
        topic: decodedTopic,
        questionsReview: questions, // optional
      },
    });
  };

  useEffect(() => {
    if (examEnded) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setExamEnded(true);
          setShowPopup(true);
          // Auto-submit on time-out
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [examEnded]);

  const handleOptionSelect = (option) => {
    setSelected({ ...selected, [currentIndex]: option });
  };

  const next = () => currentIndex < totalQuestions - 1 && setCurrentIndex(currentIndex + 1);
  const prev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  const handleEndExam = () => setShowPopup(true);
  const q = questions[currentIndex];

  // Helper function to navigate to a specific question
  const jumpToQuestion = (index) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans antialiased text-sm">
      <header className="sticky top-0 w-full bg-white shadow-md border-b border-gray-200 p-3 flex justify-center">
        <div className="w-full max-w-4xl flex justify-between items-center">
          <h1 className="text-base font-medium text-gray-700">
            {subject} maths inference exam ({decodedTopic})
          </h1>
          <div className="flex items-center space-x-4">
            {/* Question Index Pagination */}
            <div className="flex space-x-1">
              {Array.from({ length: totalQuestions > 10 ? 10 : totalQuestions }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => jumpToQuestion(index)}
                  className={`w-7 h-7 flex items-center justify-center rounded text-xs font-semibold border ${
                    index === currentIndex
                      ? "bg-green-600 text-white border-green-600"
                      : selected[index]
                      ? "bg-blue-100 text-blue-700 border-blue-200"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              {totalQuestions > 10 && <span className="text-gray-500">...</span>}
            </div>

            {/* Timer Display */}
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-2 py-1">
              <span className="text-gray-600 text-sm font-semibold">⏰</span>
              <div className="font-bold text-red-600 text-sm">
                {Math.floor(timeLeft / 60)
                  .toString()
                  .padStart(2, "0")}:
                {(timeLeft % 60).toString().padStart(2, "0")}
              </div>
            </div>
            <button
              onClick={handleEndExam}
              className="px-4 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition duration-150 shadow-md"
            >
              End Exam
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl p-6">
        {/* Question Card */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
             <div className="text-gray-600 text-sm">Question {currentIndex + 1} of {totalQuestions}</div>
             {/* Navigation for small screens / or just showing context */}
             <div className="text-sm text-gray-500">{subject}: {decodedTopic}</div>
          </div>
          
          <p className="text-lg font-medium text-gray-800 mb-6 leading-relaxed">
            {currentIndex + 1}. {q.question}
          </p>

          {/* Options */}
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(option)}
                className={`w-full text-left px-4 py-2 rounded-md border text-sm transition duration-150 ${
                  selected[currentIndex] === option
                    ? "bg-teal-50 text-teal-800 border-teal-300 font-medium shadow-sm" // Light teal/green for selected
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {String.fromCharCode(97 + i)}) {option}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 text-sm rounded shadow-sm transition duration-150 ${
                currentIndex === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Previous
            </button>
            
            <span className="text-xs text-gray-500">
                {currentIndex + 1}/{totalQuestions}
            </span>

            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={next}
                className="px-5 py-2 bg-blue-600 text-white text-sm rounded shadow-md hover:bg-blue-700 transition duration-150"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit} 
                className="px-5 py-2 bg-blue-600 text-white text-sm rounded shadow-md hover:bg-blue-700 transition duration-150"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl w-11/12 max-w-md p-6 text-center">
            <h2 className="text-xl font-bold mb-4">End Exam Confirmation</h2>
            <p className="text-gray-700 mb-6">Are you sure you want to end the exam? You will not be able to return.</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Continue Exam
              </button>
              <button
                onClick={handleSubmit} // Submit the exam when confirming to end
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                End and Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamPage;