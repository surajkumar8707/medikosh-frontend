import React from "react";
import { FaSmile, FaUsers, FaAward, FaHeartbeat } from "react-icons/fa";

const stats = [
  {
    icon: <FaSmile />,
    value: "500+",
    label: "Satisfied Customers",
    color: "#3b82f6",
  },
  {
    icon: <FaUsers />,
    value: "50+",
    label: "Healthcare Partners",
    color: "#22c55e",
  },
  {
    icon: <FaAward />,
    value: "25+",
    label: "Quality Certifications",
    color: "#facc15",
  },
  {
    icon: <FaHeartbeat />,
    value: "15+",
    label: "Years of Excellence",
    color: "#ef4444",
  },
];

const StatsSection = () => {
  const styles = {
    statsSection: {
      position: "relative",
      height: "420px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      overflow: "hidden",
      background: "linear-gradient(135deg, #ff6b6b, #ff8e53, #feca57, #48dbfb, #1dd1a1, #5f27cd, #e84342)",
      backgroundSize: "400% 400%",
      animation: "gradientShift 15s ease infinite",
    },
    overlay: {
      width: "100%",
      maxWidth: "1400px",
      zIndex: 1,
      position: "relative",
    },
    sectionHeader: {
      textAlign: "center",
      marginBottom: "2.5rem",
      animation: "fadeInDown 1s ease-out",
    },
    sectionTitle: {
      fontSize: "2.5rem",
      color: "white",
      marginBottom: "0.5rem",
      fontWeight: 700,
      textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    sectionSubtitle: {
      fontSize: "1.1rem",
      color: "rgba(255, 255, 255, 0.95)",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: 1.6,
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "2rem",
      justifyContent: "center",
      alignItems: "center",
    },
    statCard: {
      background: "rgba(255, 255, 255, 0.95)",
      borderRadius: "16px",
      padding: "1.8rem 1.2rem",
      textAlign: "center",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
      transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      position: "relative",
      overflow: "hidden",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      animation: "fadeInUp 0.8s ease-out",
      animationFillMode: "both",
      opacity: 0,
    },
    iconWrapper: {
      position: "relative",
      width: "80px",
      height: "80px",
      margin: "0 auto 1.2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      transition: "all 0.5s ease",
    },
    icon: {
      fontSize: "2.5rem",
      position: "relative",
      zIndex: 2,
      transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    iconShadow: {
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      opacity: 0.15,
      filter: "blur(8px)",
      transition: "all 0.5s ease",
    },
    statValue: {
      fontSize: "2.8rem",
      fontWeight: 800,
      color: "#1a1a1a",
      marginBottom: "0.3rem",
      transition: "all 0.3s ease",
    },
    statLabel: {
      fontSize: "1rem",
      color: "#555",
      marginBottom: "1.2rem",
      fontWeight: 500,
      transition: "all 0.3s ease",
    },
    statUnderline: {
      width: "50px",
      height: "3px",
      margin: "0 auto",
      borderRadius: "2px",
      transition: "all 0.5s ease",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounceRotate {
            0% { transform: scale(1) rotate(0deg); }
            30% { transform: scale(1.2) rotate(180deg); }
            50% { transform: scale(1.1) rotate(360deg); }
            70% { transform: scale(1.15) rotate(360deg); }
            100% { transform: scale(1) rotate(360deg); }
          }
          
          .stat-card:nth-child(1) { animation-delay: 0.1s; }
          .stat-card:nth-child(2) { animation-delay: 0.3s; }
          .stat-card:nth-child(3) { animation-delay: 0.5s; }
          .stat-card:nth-child(4) { animation-delay: 0.7s; }
          
          .stat-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.7s ease;
          }
          
          .stat-card:hover::before {
            left: 100%;
          }
          
          .stat-card:hover .icon-wrapper {
            animation: bounceRotate 1s ease-out;
          }
          
          .stat-card:hover .icon {
            transform: scale(1.2);
          }
          
          .stat-card:hover .icon-shadow {
            opacity: 0.3;
            filter: blur(12px);
          }
          
          .stat-card:hover .stat-value {
            transform: scale(1.08);
            background: linear-gradient(45deg, #1a1a1a, #4a4a4a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .stat-card:hover .stat-label {
            color: #333;
            transform: translateY(3px);
          }
          
          .stat-card:hover .stat-underline {
            width: 80px;
          }
          
          @media (max-width: 992px) {
            .stats-section {
              height: auto !important;
              min-height: 400px !important;
              padding: 2rem 1.5rem !important;
            }
            
            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          
          @media (max-width: 768px) {
            .stats-section {
              padding: 2rem 1.2rem !important;
            }
            
            .section-title {
              font-size: 2rem !important;
            }
            
            .section-subtitle {
              font-size: 1rem !important;
            }
            
            .stats-grid {
              grid-template-columns: 1fr !important;
              max-width: 350px !important;
            }
          }
          
          @media (max-width: 480px) {
            .stats-section {
              padding: 1.8rem 1rem !important;
            }
            
            .section-title {
              font-size: 1.8rem !important;
            }
            
            .stat-card {
              padding: 1.5rem 1rem !important;
            }
            
            .icon-wrapper {
              width: 70px !important;
              height: 70px !important;
            }
            
            .icon {
              font-size: 2.2rem !important;
            }
            
            .stat-value {
              font-size: 2.2rem !important;
            }
          }
        `}
      </style>
      <section className="stats-section" style={styles.statsSection}>
        <div className="overlay" style={styles.overlay}>
          <div className="section-header" style={styles.sectionHeader}>
            <h1 className="section-title" style={styles.sectionTitle}>
              Our Achievements
            </h1>
            <p className="section-subtitle" style={styles.sectionSubtitle}>
              Years of Excellence in Healthcare Services
            </p>
          </div>
          <div className="stats-grid" style={styles.statsGrid}>
            {stats.map((item, index) => (
              <div className="stat-card" key={index} style={styles.statCard}>
                <div
                  className="icon-wrapper"
                  style={{ ...styles.iconWrapper, backgroundColor: `${item.color}15` }}
                >
                  <div
                    className="icon"
                    style={{ ...styles.icon, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div 
                    className="icon-shadow" 
                    style={{ ...styles.iconShadow, backgroundColor: item.color }}
                  ></div>
                </div>
                <h2 className="stat-value" style={styles.statValue}>
                  {item.value}
                </h2>
                <p className="stat-label" style={styles.statLabel}>
                  {item.label}
                </p>
                <div 
                  className="stat-underline" 
                  style={{ ...styles.statUnderline, backgroundColor: item.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;