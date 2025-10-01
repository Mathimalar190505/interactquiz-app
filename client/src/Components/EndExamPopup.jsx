import React from 'react';

// Define the custom Phthalo Green shades for use in Tailwind CSS classes
const PHYTALO_GREEN = '#086f5fff';
const PHYTALO_GREEN_DARK = '#003B33';

const EndExamPopup = ({ onClose, onQuit }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-[1000]"
        // z-[1000] ensures popup is above everything else
        >
            <div className="bg-white w-[420px] rounded-2xl p-6 shadow-xl text-center animate-slideUp relative z-[1001]">
                <div className="text-[50px] text-red-600 mb-4">⚠️</div>
                <h2 className="text-[22px] text-[#222] mb-4 font-inter font-semibold">
                    Are you sure you want to end the exam?
                </h2>

                <div className="text-left my-5 text-[15px] text-[#444] leading-[26px] space-y-2">
                    {/* Checkmark color updated to Phthalo Green (#004F43) */}
                    <p className={`before:content-['✔'] before:mr-2 before:text-[${PHYTALO_GREEN}] before:font-bold`}>
                        You can't undo this action.
                    </p>
                    <p className={`before:content-['✔'] before:mr-2 before:text-[${PHYTALO_GREEN}] before:font-bold`}>
                        Once you quit, you would have to retake the entire exam.
                    </p>
                </div>

                <div className="flex justify-between mt-5">
                    <button
                        onClick={onQuit}
                        className="cursor-pointer flex-1 mx-2 py-3 rounded-lg font-semibold text-[15px] text-white bg-gradient-to-br from-[#e74c3c] to-[#c0392b] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-400/50"
                    >
                        Quit Exam
                    </button>
                    <button
                        onClick={onClose}
                        className="cursor-pointer flex-1 mx-2 py-3 rounded-lg font-semibold text-[15px] text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{
                            background: `linear-gradient(to bottom right, ${PHYTALO_GREEN}, ${PHYTALO_GREEN_DARK})`,
                            boxShadow: `0 10px 15px -3px ${PHYTALO_GREEN}33, 0 4px 6px -2px ${PHYTALO_GREEN}33`, // optional shadow with transparency
                        }}
                    >
                        Continue Exam
                    </button>

                </div>
            </div>

            <style>
                {`
          @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp {
            animation: slideUp 0.4s ease;
          }
        `}
            </style>
        </div>
    );
};

export default EndExamPopup;
