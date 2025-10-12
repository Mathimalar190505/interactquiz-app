// Dashboard/DashboardPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

// Define the custom Phthalo Green shades for arbitrary values
const PHYTALO_GREEN = '#004F43';
const PHYTALO_GREEN_HOVER = '#003B33';

const subjects = [
  // Original Four Topics
  { name: "Aptitude", description: "Logical and numerical reasoning", icon: "🧠" },
  { name: "Python", description: "Core Python concepts and syntax", icon: "🐍" },
  { name: "Java", description: "OOP and programming fundamentals", icon: "☕" },
  { name: "Networking", description: "IP addressing and network layers", icon: "🌐" },
  
  // New Four Topics
  { name: "SQL", description: "Database querying, joins, and optimization", icon: "💾" },
  { name: "Data Structures", description: "Arrays, lists, trees, and algorithms", icon: "🧱" },
  { name: "Cloud Computing", description: "AWS, Azure, and fundamental cloud services", icon: "☁️" },
  { name: "Operating Systems", description: "Process management, memory, and concurrency", icon: "💻" },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleViewTopics = (subject) => {
    // This function routes to the topic list page for the selected subject
    navigate(`/topics/${subject}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* HEADER SECTION */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-wide">
          Available Practice Exams 📚
        </h1>
        <p className="mt-3 text-xl text-gray-500">
          Choose a subject to view its list of topics.
        </p>
      </header>

      {/* GRID CONTAINER: Now showing up to 4 columns on large screens */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="
              bg-white 
              shadow-xl 
              rounded-2xl 
              p-8 
              flex flex-col 
              items-center 
              text-center
              border border-gray-100
              transform 
              hover:scale-[1.03] 
              hover:shadow-2xl 
              transition duration-300
            "
          >
            {/* Subject Icon: Using light PHYTALO_GREEN background */}
            <div 
                className="text-4xl mb-4 p-3 rounded-full"
                style={{ backgroundColor: `${PHYTALO_GREEN}1A`, color: PHYTALO_GREEN }} 
            >
                {subject.icon}
            </div>

            {/* Subject Title: Using PHYTALO_GREEN text color */}
            <h2 
                className="text-2xl font-bold mb-2" 
                style={{ color: PHYTALO_GREEN }}
            >
              {subject.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 flex-grow">
              {subject.description}
            </p>
            
            {/* View Topics Button: Using PHYTALO_GREEN for background and hover */}
            <button
              onClick={() => handleViewTopics(subject.name)}
              className="
                w-full 
                text-white 
                font-semibold
                px-6 
                py-3 
                rounded-xl 
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
              View Topics
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;