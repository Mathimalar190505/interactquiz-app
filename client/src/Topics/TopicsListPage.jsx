// Topics/TopicListPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Define the custom Phthalo Green shades
const PHYTALO_GREEN = '#004F43';
const PHYTALO_GREEN_HOVER = '#003B33';

const topicMap = {
  Aptitude: [
    { title: "Percentages", questions: 28 },
    { title: "Profit and Loss", questions: 32 },
    { title: "Time and Work", questions: 34 },
    { title: "Number Series", questions: 25 },
    { title: "Ratio and Proportion", questions: 20 },
    { title: "Simple Interest", questions: 17 },
    { title: "Ages", questions: 27 },
    { title: "Puzzles", questions: 25 },
  ],
  Python: [
    { title: "Data Types", questions: 30 },
    { title: "Functions", questions: 40 },
    { title: "Loops", questions: 35 },
    { title: "Strings", questions: 25 },
    { title: "File Handling", questions: 22 },
    { title: "OOP Basics", questions: 38 },
    { title: "Modules", questions: 15 },
    { title: "List Comprehension", questions: 20 },
  ],
  Java: [
    { title: "Classes and Objects", questions: 45 },
    { title: "Inheritance", questions: 30 },
    { title: "Polymorphism", questions: 25 },
    { title: "Interfaces", questions: 20 },
    { title: "Exception Handling", questions: 30 },
    { title: "Collections Framework", questions: 40 },
    { title: "Multithreading", questions: 25 },
    { title: "File IO", questions: 18 },
  ],
  Networking: [
    { title: "IP Addressing", questions: 30 },
    { title: "Subnetting", questions: 45 },
    { title: "OSI Model", questions: 25 },
    { title: "TCP/IP Protocols", questions: 30 },
    { title: "Routing Basics", questions: 22 },
    { title: "Switching", questions: 20 },
    { title: "Network Security", questions: 35 },
    { title: "DNS and DHCP", questions: 15 },
  ],
};

const TopicListPage = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  
  // Update topicMap structure to include question counts for better display
  const topics = topicMap[subject] || []; 

  const handleStartTest = (topicTitle) => {
    // Note: URI encoding is good practice for URL segments containing spaces
    navigate(`/exam/${subject}/${encodeURIComponent(topicTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Subject Header */}
      <h1 
        className="text-4xl sm:text-5xl font-extrabold mb-10 pb-2 border-b-4 tracking-wide"
        style={{ color: PHYTALO_GREEN, borderColor: PHYTALO_GREEN }}
      >
        {subject} Topics
      </h1>

      {/* Topic Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="
              bg-white 
              shadow-lg 
              rounded-xl 
              p-6 
              flex flex-col sm:flex-row 
              justify-between 
              items-center
              border border-gray-200
              hover:shadow-xl 
              transform hover:translate-y-[-2px] 
              transition duration-200
            "
          >
            <div className="text-left mb-4 sm:mb-0 sm:mr-4 flex-grow">
              {/* Topic Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {topic.title}
              </h3>
              {/* Question Count */}
              <p className="text-sm text-gray-500 font-medium">
                <span style={{ color: PHYTALO_GREEN }}>{topic.questions}</span> Questions
              </p>
            </div>
            
            {/* Start Button */}
            <button
              onClick={() => handleStartTest(topic.title)}
              className="
                flex-shrink-0
                text-white 
                font-semibold
                px-6 
                py-2 
                rounded-full 
                shadow-md 
                focus:outline-none 
                focus:ring-4 
                focus:ring-opacity-50
                transition duration-150
              "
              style={{ 
                  backgroundColor: PHYTALO_GREEN,
              }}
              // Manually handle hover for custom arbitrary colors
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = PHYTALO_GREEN_HOVER}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = PHYTALO_GREEN}
            >
              Start Test
            </button>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="
          mt-10 
          bg-gray-500 
          text-white 
          font-medium
          px-6 
          py-3 
          rounded-xl 
          shadow-md 
          hover:bg-gray-600 
          transition duration-150
        "
      >
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default TopicListPage;