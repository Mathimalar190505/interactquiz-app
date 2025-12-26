import React from "react";

// Theme colors
const PHYTALO_GREEN = '#004F43';
const PHYTALO_GREEN_HOVER = '#003B33';
const LIGHT_GREEN = '#4CAF50'; // Use a brighter green for high scores

const ResultPage = ({ score, total, onRetry, onExit }) => {
  // Calculate progress in %
  const progress = (score / total) * 100;

  // --- Performance Message Logic (Remains the same) ---
  const getMessage = () => {
    if (score > 20) {
      return {
        title: "Exceptional Performance!",
        message: "You demonstrated a superb grasp of the material. Keep up the excellent work!",
        color: LIGHT_GREEN,
      };
    } 
    else if (score >= 10 && score <= 20) {
      return {
        title: "Good Effort!",
        message: "You're making solid progress. Reviewing the incorrect answers will help you reach the top tier.",
        color: PHYTALO_GREEN,
      };
    } 
    else {
      return {
        title: "Needs More Practice.",
        message: "This is a tough quiz, but dedication is key. Focus on the core concepts before trying again.",
        color: '#D32F2F', // Red for emphasis
      };
    }
  };

  const result = getMessage();

  return (
    <div style={responsiveStyles.page}>
      <div style={responsiveStyles.container}>
        {/* Title */}
        <h1 style={{ ...responsiveStyles.title, color: result.color }}>{result.title}</h1>

        {/* Score */}
        <p style={responsiveStyles.scoreText}>Score: {score} / {total}</p>

        {/* Progress Bar */}
        <div style={responsiveStyles.progressBarBackground}>
          <div style={{ 
            ...responsiveStyles.progressBarFill, 
            width: `${progress}%`,
            backgroundColor: result.color, // Color changes based on score tier
          }}></div>
        </div>

        {/* Message */}
        <p style={{ ...responsiveStyles.message, color: '#555' }}>{result.message}</p>

        {/* Buttons */}
        <div style={responsiveStyles.buttonRow}>
          {/* Retry Button */}
          <button
            style={responsiveStyles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = PHYTALO_GREEN_HOVER)}
            onMouseOut={(e) => (e.target.style.backgroundColor = PHYTALO_GREEN)}
            onClick={onRetry}
          >
            Try Again
          </button>

          {/* Exit Button */}
          <button
            style={{ ...responsiveStyles.button, backgroundColor: "#777" }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#777")}
            onClick={onExit}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Responsive Styles ---
const responsiveStyles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    // Ensure scrolling works on small screens if necessary
    padding: '10px', 
    boxSizing: 'border-box',
  },
  container: {
    backgroundColor: "white",
    padding: "min(8vw, 40px)", // Padding scales with viewport width up to 40px
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    
    // Key to Responsiveness: Use max-width and percentage width
    width: "90%", 
    maxWidth: "400px", // Maintains good reading width on large screens
  },
  title: {
    fontSize: "clamp(1.8rem, 5vw, 2.2rem)", // Font scales down on small screens
    fontWeight: "bold", 
    marginBottom: "10px",
  },
  scoreText: {
    fontSize: "clamp(1.6rem, 7vw, 2rem)", // Font scales down on small screens
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  progressBarBackground: {
    width: "100%",
    height: "12px",
    backgroundColor: "#ddd",
    borderRadius: "6px",
    overflow: "hidden",
    marginBottom: "25px",
  },
  progressBarFill: {
    height: "100%",
    transition: "width 0.5s ease-in-out",
  },
  message: {
    fontSize: "clamp(1rem, 4vw, 1.2rem)", // Font scales down on small screens
    fontWeight: "normal",
    marginBottom: "25px",
  },
  buttonRow: {
    display: "flex",
    // Allow buttons to stack on very small screens using flex-wrap
    flexWrap: 'wrap', 
    justifyContent: "center",
    gap: "min(4vw, 20px)", // Gap scales down
  },
  button: {
    // Buttons take up full width on small screens, otherwise maintain padding
    flexGrow: 1, 
    minWidth: '120px',
    maxWidth: '45%', 
    padding: "12px 25px",
    backgroundColor: PHYTALO_GREEN,
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default ResultPage;