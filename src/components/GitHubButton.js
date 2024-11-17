import React from "react";

function GitHubButton({ username, image }) {
  return (
    <div className="GitHubButtonContainer" style={{ marginTop: "20px" }}>
      <button
        className="btn"
        onClick={() => window.open(`https://github.com/${username}`, "_blank")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "15px 25px",
          borderRadius: "12px",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
          backgroundColor: "#f5f5f5", // Light gray background for a soft look
          color: "#333", // Dark text for contrast
          border: "1px solid #ddd", // Subtle border for definition
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow =
            "0px 8px 12px rgba(0, 0, 0, 0.15), 0px 3px 6px rgba(0, 0, 0, 0.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow =
            "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)";
        }}
      >
        <img
          src={image}
          alt="Profile"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid #fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
          }}
        />
        <div style={{ textAlign: "left" }}>
          <small style={{ display: "block", fontSize: "12px", color: "#666" }}>
            Developed by
          </small>
          <span
            style={{
              fontSize: "18px",
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "700",
              color: "#333"
            }}
          >
            {username}
          </span>
        </div>
      </button>
    </div>
  );
}

export default GitHubButton;
