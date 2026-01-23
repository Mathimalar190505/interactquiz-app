import React from "react";

// Same color palette as ExamPage
const PHYTALO_GREEN = "#004F43";
const PHYTALO_GREEN_HOVER = "#003B33";

const EndExamPopup = ({ onClose, onQuit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-8 text-center animate-fade-in">
        {/* Header */}
        <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
          End Exam Confirmation
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-8 text-lg">
          Are you sure you want to end the exam? <br />
          Your progress will not be saved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-white font-semibold shadow-md transition"
            style={{ backgroundColor: PHYTALO_GREEN }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = PHYTALO_GREEN_HOVER)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = PHYTALO_GREEN)
            }
          >
            Continue Exam
          </button>

          <button
            onClick={onQuit}
            className="px-6 py-2 rounded-xl text-white font-semibold bg-red-600 shadow-md hover:bg-red-700 transition"
          >
            Quit Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndExamPopup;
