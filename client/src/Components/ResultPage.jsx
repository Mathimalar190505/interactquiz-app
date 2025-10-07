import React from "react";

// Theme colors
const PHYTALO_GREEN = '#004F43';
const PHYTALO_GREEN_HOVER = '#003B33';

const ResultPage = ({ score, total, onRetry, onExit }) => {
  // Calculate progress in %
  const progress = (score / total) * 100;

  // Performance message
  const getMessage = () => {
    if (score === total) return "🎉 Excellent! Perfect score!";
    if (score >= total / 2) return "👍 Good job! Keep practicing.";
    return " Don’t worry, try again!";
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Quiz Result</h1>

        {/* Score */}
        <p style={styles.scoreText}>Score: {score} / {total}</p>

        {/* Progress Bar */}
        <div style={styles.progressBarBackground}>
          <div style={{ ...styles.progressBarFill, width: `${progress}%` }}></div>
        </div>

        {/* Message */}
        <p style={styles.message}>{getMessage()}</p>

        {/* Buttons */}
        <div style={styles.buttonRow}>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = PHYTALO_GREEN_HOVER)}
            onMouseOut={(e) => (e.target.style.backgroundColor = PHYTALO_GREEN)}
            onClick={onRetry}
          >
             Try Again
          </button>

          <button
            style={{ ...styles.button, backgroundColor: "#777" }}
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

// Styles
const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  container: {
    backgroundColor: "white",
    padding: "40px",
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    width: "380px",
  },
  title: {
    color: PHYTALO_GREEN,
    fontSize: "2.5rem",
    fontWeight: "normal",   // Not bold
    marginBottom: "20px",
  },
  scoreText: {
    fontSize: "2rem",
    fontWeight: "bold",     // Bold score
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
    backgroundColor: PHYTALO_GREEN,
    transition: "width 0.5s ease-in-out",
  },
  message: {
    fontSize: "1.2rem",
    fontWeight: "normal",   // Regular weight
    color: PHYTALO_GREEN,
    marginBottom: "25px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
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