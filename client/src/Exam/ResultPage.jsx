import { useLocation, useNavigate, useParams } from "react-router-dom";

const PHYTALO_GREEN = "#004F43";
const PHYTALO_GREEN_HOVER = "#003B33";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams(); // fallback from URL

  // Destructure from state, with defaults
  const {
    score = 0,
    total = 0,
  } = location.state || {};

  // Use state if available, otherwise fallback to URL params
  const subject = location.state?.subject || params.subject || "";
  const topic = location.state?.topic || params.topic || "";

  // Retry: go back to the same exam, first question
  const onRetry = () => {
    if (!subject || !topic) {
      alert("Cannot retry: missing subject or topic.");
      return;
    }
    navigate(`/exam/${subject}/${encodeURIComponent(topic)}`, {
      state: { subject, topic },
    });
  };

  // Quit: go back to topics page
  const onExit = () => {
    if (!subject) {
      alert("Cannot go to topics: missing subject.");
      return;
    }
    navigate(`/topics/${subject}`);
  };



  const progress = total > 0 ? (score / total) * 100 : 0;

  const getMessage = () => {
    if (score === total) return "🎉 Excellent! Perfect score!";
    if (score >= total * 0.8) return "🌟 Great job! You nailed the material.";
    if (score >= total / 2) return "👍 Good effort! Keep practicing for better results.";
    return "Don’t worry, review the material and try again!";
  };

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#f4f4f4",
    },
    container: {
      backgroundColor: "white",
      padding: "40px",
      textAlign: "center",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "450px",
    },
    title: { color: PHYTALO_GREEN, fontSize: "2.5rem", fontWeight: 600, marginBottom: "20px" },
    scoreText: { fontSize: "2.2rem", fontWeight: "bold", color: "#333", marginBottom: "20px" },
    topicLabel: { fontSize: "1rem", color: "#777", marginBottom: "15px" },
    progressBarBackground: { width: "100%", height: "14px", backgroundColor: "#ddd", borderRadius: "7px", overflow: "hidden", marginBottom: "25px" },
    progressBarFill: { height: "100%", backgroundColor: PHYTALO_GREEN, transition: "width 0.8s ease-in-out" },
    message: { fontSize: "1.3rem", fontWeight: 500, color: PHYTALO_GREEN, marginBottom: "30px" },
    buttonRow: { display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" },
    button: { 
      padding: "12px 20px", 
      backgroundColor: PHYTALO_GREEN, 
      color: "white", 
      border: "none", 
      borderRadius: "8px", 
      cursor: "pointer", 
      fontSize: "15px", 
      fontWeight: "bold", 
      transition: "background-color 0.3s ease, transform 0.1s ease",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    },
  };

  // Hover and click styles
  const getButtonHandlers = (baseColor, hoverColor) => ({
    onMouseOver: (e) => (e.target.style.backgroundColor = hoverColor),
    onMouseOut: (e) => (e.target.style.backgroundColor = baseColor),
    onMouseDown: (e) => (e.target.style.transform = "translateY(1px)"),
    onMouseUp: (e) => (e.target.style.transform = "translateY(0)"),
  });

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Quiz Result</h1>
        <p style={styles.topicLabel}>{subject}: {topic}</p>
        
        <p style={styles.scoreText}>
          {score} / {total}
        </p>

        <div style={styles.progressBarBackground}>
          <div style={{ ...styles.progressBarFill, width: `${progress}%` }}></div>
        </div>

        <p style={styles.message}>{getMessage()}</p>

        <div style={styles.buttonRow}>
 

          <button
            style={styles.button}
            {...getButtonHandlers(PHYTALO_GREEN, PHYTALO_GREEN_HOVER)}
            onClick={onRetry}
          >
            Try Again
          </button>

          <button
            style={{ ...styles.button, backgroundColor: "#777" }}
            {...getButtonHandlers("#777", "#555")}
            onClick={onExit}
          >
            Go to Topics
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
