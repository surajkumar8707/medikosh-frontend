import React from "react";

const MissionVision = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .mission-vision-section {
          position: relative;
          padding: 3rem 1.5rem;
          background: linear-gradient(145deg, #f8fffc 0%, #f0f9f0 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          overflow: hidden;
        }

        /* Decorative background elements */
        .bg-leaf {
          position: absolute;
          width: 300px;
          height: 300px;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%232e7d32" opacity="0.03" d="M50 10c-8 0-15 4-20 10-5 6-8 14-8 22 0 16 10 30 28 38-2-8-1-18 4-28 5-10 14-18 26-22-12 2-22 10-28 20 6-4 14-6 22-4 8 2 16 8 20 16 2-8 2-16-2-24-4-8-12-14-22-16 8-2 16-1 24 2 4-8 6-16 4-24-8-4-16-6-24-4-10 2-18 8-22 16 2-8 4-16 2-24-4-8-12-14-22-16z"/></svg>');
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 0.4;
          animation: float 20s infinite ease-in-out;
          z-index: 0;
        }

        .bg-leaf-1 {
          top: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          transform: rotate(15deg);
          animation-delay: 0s;
        }

        .bg-leaf-2 {
          bottom: -150px;
          right: -80px;
          width: 450px;
          height: 450px;
          transform: rotate(-20deg);
          animation-delay: 5s;
        }

        .bg-dots {
          position: absolute;
          top: 20%;
          right: 10%;
          width: 200px;
          height: 200px;
          background-image: radial-gradient(#2e7d32 2px, transparent 2px);
          background-size: 20px 20px;
          opacity: 0.1;
          z-index: 0;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          width: 100%;
        }

        /* Section header animations */
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .pillar-tag {
          display: inline-block;
          background: rgba(46, 125, 50, 0.1);
          color: #2e7d32;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 1.5px;
          padding: 0.5rem 1.25rem;
          border-radius: 30px;
          margin-bottom: 1rem;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(46, 125, 50, 0.2);
          text-transform: uppercase;
          animation: pulseSoft 3s infinite;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          color: #1a2e1c;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem;
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, #2e7d32, #4caf50);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
        }

        .section-subtitle {
          max-width: 600px;
          margin: 0 auto;
          font-size: 1rem;
          color: #4a5c4a;
          line-height: 1.5;
        }

        /* Cards wrapper */
        .cards-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 992px) {
          .cards-wrapper {
            flex-direction: row;
          }
        }

        /* Card styles with animations */
        .card {
          flex: 1;
          background: white;
          border-radius: 28px;
          box-shadow: 0 20px 40px -10px rgba(0, 32, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: slideInCard 0.8s ease-out forwards;
          border: 1px solid rgba(46, 125, 50, 0.1);
          width: 100%;
        }

        .mission-card {
          animation-delay: 0.2s;
          background: linear-gradient(145deg, #ffffff, #fafffa);
        }

        .vision-card {
          animation-delay: 0.4s;
          background: linear-gradient(145deg, #ffffff, #f5fff0);
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px -12px rgba(46, 125, 50, 0.2);
          border-color: rgba(46, 125, 50, 0.3);
        }

        .card-inner {
          padding: 2rem 1.75rem;
          position: relative;
          z-index: 2;
        }

        .card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(145deg, #e8f5e9, #c8e6c9);
          border-radius: 20px;
          color: #2e7d32;
          margin-bottom: 1.25rem;
          transition: all 0.3s ease;
          box-shadow: 0 6px 14px rgba(46, 125, 50, 0.1);
        }

        .card:hover .card-icon {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          background: #2e7d32;
          color: white;
          transform: scale(1.05);
        }

        .card-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1d2b1e;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .card-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #2e7d32, #81c784);
          border-radius: 4px;
          margin-bottom: 1.25rem;
        }

        .card-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #3d4e3d;
          margin-bottom: 1.5rem;
          font-weight: 450;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: #2a3a2a;
          font-weight: 500;
          transition: transform 0.2s ease;
        }

        .feature-item:hover {
          transform: translateX(5px);
          color: #2e7d32;
        }

        .check-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: #2e7d32;
          color: white;
          border-radius: 50%;
          font-size: 12px;
          font-weight: bold;
          flex-shrink: 0;
        }

        /* Floating shapes inside cards */
        .floating-shape {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle at 30% 30%, rgba(76, 175, 80, 0.1), transparent 70%);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .shape-1 {
          top: -50px;
          right: -50px;
          animation: rotateSlow 25s infinite linear;
        }

        .shape-2 {
          bottom: -30px;
          left: -30px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle at 70% 70%, rgba(46, 125, 50, 0.08), transparent 70%);
          animation: rotateReverse 20s infinite linear;
        }

        .shape-3 {
          top: -20px;
          right: -20px;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle at 20% 20%, rgba(129, 199, 132, 0.12), transparent 70%);
          animation: float 18s infinite alternate;
        }

        .shape-4 {
          bottom: -40px;
          left: -10px;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle at 40% 60%, rgba(76, 175, 80, 0.1), transparent 70%);
          animation: float 22s infinite alternate-reverse;
        }

        /* Image wrapper with eye-catching animation */
        .image-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1.5rem;
          opacity: 0;
          animation: fadeInUp 0.8s 0.6s ease-out forwards;
        }

        .image-container {
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .image-container {
            width: 300px;
            height: 300px;
          }
        }

        .image-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(46, 125, 50, 0.2), transparent 70%);
          filter: blur(20px);
          animation: pulseGlow 3s infinite alternate;
          border-radius: 50%;
        }

        .image-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px dashed rgba(46, 125, 50, 0.3);
          border-radius: 50%;
          animation: spinSlow 20s infinite linear;
        }

        .image-ring-2 {
          position: absolute;
          width: 90%;
          height: 90%;
          border: 1px solid rgba(46, 125, 50, 0.2);
          border-radius: 50%;
          animation: spinSlow 15s infinite reverse;
          border-style: dotted;
        }

        .image-content {
          position: relative;
          width: 200px;
          height: 200px;
          background: linear-gradient(145deg, #eaffea, #d4eed4);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 30px rgba(46, 125, 50, 0.15);
          animation: morphShape 12s infinite ease-in-out;
          border: 2px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(4px);
          overflow: hidden;
        }

        .leaf-icon,
        .capsule-icon {
          position: absolute;
          font-size: 2.5rem;
          animation: floatIcon 6s infinite ease-in-out;
          filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.08));
        }

        .leaf-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
          font-size: 3rem;
        }
        .leaf-2 {
          bottom: 20%;
          right: 15%;
          animation-delay: 1s;
          font-size: 2.8rem;
        }
        .leaf-3 {
          top: 60%;
          left: 20%;
          animation-delay: 2s;
          font-size: 2.2rem;
        }
        .capsule-1 {
          top: 10%;
          right: 20%;
          animation-delay: 0.5s;
          font-size: 2rem;
          opacity: 0.9;
        }
        .capsule-2 {
          bottom: 30%;
          left: 10%;
          animation-delay: 1.5s;
          font-size: 2rem;
        }
        .capsule-3 {
          top: 40%;
          right: 10%;
          animation-delay: 2.5s;
          font-size: 2.5rem;
        }

        .floating-dna {
          position: absolute;
          opacity: 0.25;
          transform: rotate(15deg);
          animation: spinSlow 25s infinite linear;
        }

        .trust-badge {
          background: rgba(46, 125, 50, 0.9);
          backdrop-filter: blur(8px);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 1px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 20px rgba(46, 125, 50, 0.3);
          position: absolute;
          bottom: -10px;
          right: -10px;
          animation: pulseBadge 2.5s infinite;
        }

        .image-caption {
          margin-top: 1.5rem;
          font-size: 1rem;
          color: #2c3e2c;
          font-weight: 450;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          border: 1px solid rgba(46, 125, 50, 0.2);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.02);
        }

        .caption-highlight {
          font-weight: 700;
          color: #2e7d32;
          border-bottom: 2px solid #81c784;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInCard {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseSoft {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; transform: scale(1.02); }
        }

        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes morphShape {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          33% { border-radius: 60% 40% 30% 70% / 60% 40% 70% 30%; }
          66% { border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
        }

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
        }

        @keyframes pulseGlow {
          from { opacity: 0.5; transform: scale(0.95); }
          to { opacity: 0.9; transform: scale(1.2); }
        }

        @keyframes pulseBadge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); background: #2e7d32; }
        }

        /* ========== RESPONSIVE MEDIA QUERIES FOR ALL SCREENS ========== */

        /* Extra large screens (1400px and above) */
        @media (min-width: 1400px) {
          .container {
            max-width: 1400px;
          }
          .section-title {
            font-size: 3.5rem;
          }
          .card-inner {
            padding: 2.5rem 2rem;
          }
          .image-container {
            width: 350px;
            height: 350px;
          }
          .image-content {
            width: 250px;
            height: 250px;
          }
        }

        /* Large screens (1200px to 1399px) */
        @media (min-width: 1200px) and (max-width: 1399px) {
          .container {
            max-width: 1140px;
          }
          .section-title {
            font-size: 3.2rem;
          }
        }

        /* Medium-large screens (992px to 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .section-title {
            font-size: 2.8rem;
          }
          .card-title {
            font-size: 1.6rem;
          }
          .card-inner {
            padding: 1.75rem 1.5rem;
          }
        }

        /* Tablet screens (768px to 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .mission-vision-section {
            padding: 2.5rem 1.5rem;
          }
          .section-title {
            font-size: 2.5rem;
          }
          .cards-wrapper {
            gap: 1.25rem;
          }
          .card-inner {
            padding: 1.75rem 1.5rem;
          }
          .card-title {
            font-size: 1.6rem;
          }
          .image-container {
            width: 260px;
            height: 260px;
          }
          .image-content {
            width: 180px;
            height: 180px;
          }
        }

        /* Large mobile screens (576px to 767px) */
        @media (min-width: 576px) and (max-width: 767px) {
          .mission-vision-section {
            padding: 2rem 1.25rem;
          }
          .section-title {
            font-size: 2.2rem;
          }
          .section-subtitle {
            font-size: 0.95rem;
            max-width: 100%;
          }
          .card-inner {
            padding: 1.5rem;
          }
          .card-title {
            font-size: 1.5rem;
          }
          .card-description {
            font-size: 0.95rem;
          }
          .feature-item {
            font-size: 0.9rem;
          }
          .image-container {
            width: 220px;
            height: 220px;
          }
          .image-content {
            width: 160px;
            height: 160px;
          }
          .leaf-icon, .capsule-icon {
            font-size: 2rem;
          }
        }

        /* Small mobile screens (401px to 575px) */
        @media (min-width: 401px) and (max-width: 575px) {
          .mission-vision-section {
            padding: 1.75rem 1rem;
          }
          .pillar-tag {
            font-size: 0.75rem;
            padding: 0.4rem 1rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
          .section-subtitle {
            font-size: 0.9rem;
            padding: 0 0.5rem;
          }
          .card-inner {
            padding: 1.25rem;
          }
          .card-icon {
            width: 50px;
            height: 50px;
          }
          .card-icon svg {
            width: 30px;
            height: 30px;
          }
          .card-title {
            font-size: 1.35rem;
          }
          .card-divider {
            width: 50px;
            height: 2px;
            margin-bottom: 1rem;
          }
          .card-description {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 1.25rem;
          }
          .feature-item {
            font-size: 0.85rem;
            gap: 0.5rem;
          }
          .check-icon {
            width: 18px;
            height: 18px;
            font-size: 10px;
          }
          .image-container {
            width: 180px;
            height: 180px;
          }
          .image-content {
            width: 130px;
            height: 130px;
          }
          .leaf-icon, .capsule-icon {
            font-size: 1.5rem;
          }
          .trust-badge {
            padding: 0.3rem 0.8rem;
            font-size: 0.7rem;
            bottom: -5px;
            right: -5px;
          }
          .image-caption {
            font-size: 0.85rem;
            padding: 0.4rem 1rem;
          }
        }

        /* 400px specific media query */
        @media (max-width: 400px) {
          .mission-vision-section {
            padding: 1.5rem 0.75rem;
          }
          .pillar-tag {
            font-size: 0.7rem;
            padding: 0.3rem 0.8rem;
            margin-bottom: 0.75rem;
          }
          .section-title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          .section-subtitle {
            font-size: 0.85rem;
            line-height: 1.4;
            padding: 0 0.25rem;
          }
          .cards-wrapper {
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .card {
            border-radius: 20px;
          }
          .card-inner {
            padding: 1rem;
          }
          .card-icon {
            width: 45px;
            height: 45px;
            border-radius: 15px;
            margin-bottom: 0.75rem;
          }
          .card-icon svg {
            width: 25px;
            height: 25px;
          }
          .card-title {
            font-size: 1.2rem;
            margin-bottom: 0.25rem;
          }
          .card-divider {
            width: 40px;
            height: 2px;
            margin-bottom: 0.75rem;
          }
          .card-description {
            font-size: 0.85rem;
            line-height: 1.4;
            margin-bottom: 1rem;
          }
          .feature-list {
            gap: 0.5rem;
          }
          .feature-item {
            font-size: 0.8rem;
            gap: 0.4rem;
          }
          .check-icon {
            width: 16px;
            height: 16px;
            font-size: 9px;
          }
          .floating-shape {
            width: 100px;
            height: 100px;
          }
          .shape-2 {
            width: 150px;
            height: 150px;
          }
          .image-wrapper {
            margin-top: 1rem;
          }
          .image-container {
            width: 150px;
            height: 150px;
          }
          .image-content {
            width: 110px;
            height: 110px;
          }
          .leaf-icon, .capsule-icon {
            font-size: 1.2rem;
          }
          .leaf-1, .leaf-2, .leaf-3 {
            font-size: 1.5rem;
          }
          .capsule-1, .capsule-2, .capsule-3 {
            font-size: 1.2rem;
          }
          .trust-badge {
            padding: 0.25rem 0.6rem;
            font-size: 0.6rem;
            bottom: -3px;
            right: -3px;
            border-radius: 30px;
          }
          .image-caption {
            margin-top: 1rem;
            font-size: 0.8rem;
            padding: 0.35rem 0.9rem;
            white-space: nowrap;
          }
          .image-glow {
            filter: blur(15px);
          }
          .image-ring, .image-ring-2 {
            border-width: 1px;
          }
        }

        /* Very small screens (320px and below) */
        @media (max-width: 320px) {
          .mission-vision-section {
            padding: 1.25rem 0.5rem;
          }
          .section-title {
            font-size: 1.3rem;
          }
          .section-subtitle {
            font-size: 0.8rem;
          }
          .card-title {
            font-size: 1.1rem;
          }
          .card-description {
            font-size: 0.8rem;
          }
          .feature-item {
            font-size: 0.75rem;
          }
          .image-container {
            width: 130px;
            height: 130px;
          }
          .image-content {
            width: 95px;
            height: 95px;
          }
          .image-caption {
            font-size: 0.7rem;
            white-space: normal;
            text-align: center;
          }
        }

        /* Landscape orientation for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .mission-vision-section {
            padding: 1.5rem;
          }
          .cards-wrapper {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .card {
            flex: 1 1 calc(50% - 0.75rem);
            min-width: 250px;
          }
          .image-wrapper {
            margin-top: 2rem;
          }
        }

        /* High-resolution screens */
        @media (min-width: 2000px) {
          .container {
            max-width: 1800px;
          }
          .section-title {
            font-size: 4rem;
          }
          .card-title {
            font-size: 2.2rem;
          }
          .card-description {
            font-size: 1.2rem;
          }
          .image-container {
            width: 400px;
            height: 400px;
          }
          .image-content {
            width: 300px;
            height: 300px;
          }
        }

        /* Print styles */
        @media print {
          .mission-vision-section {
            background: white;
            padding: 1rem;
          }
          .bg-leaf, .bg-dots, .floating-shape, .image-glow, .image-ring, .image-ring-2 {
            display: none;
          }
          .card {
            box-shadow: none;
            border: 1px solid #ccc;
            break-inside: avoid;
          }
        }

        /* Accessibility & performance */
        @media (prefers-reduced-motion) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="mission-vision-section">
        {/* Decorative background elements */}
        <div className="bg-leaf bg-leaf-1"></div>
        <div className="bg-leaf bg-leaf-2"></div>
        <div className="bg-dots"></div>

        <div className="container">
          {/* Header */}
          <div className="section-header">
            <span className="pillar-tag">Our Pillars</span>
            <h2 className="section-title">
              Driven by science, <span className="text-gradient">rooted in care</span>
            </h2>
            <p className="section-subtitle">
              Evidence-based nutrition meets rigorous quality — made accessible for every individual.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="cards-wrapper">
            {/* Mission Card */}
            <div className="card mission-card">
              <div className="card-inner">
                <div className="card-icon mission-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="card-title">Our Mission</h3>
                <div className="card-divider"></div>
                <p className="card-description">
                  To provide safe, effective, and clinically informed dietary supplements that help
                  people live healthier lives.
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <span className="check-icon">✓</span> Science-driven formulations
                  </li>
                  <li className="feature-item">
                    <span className="check-icon">✓</span> Rigorous quality control
                  </li>
                  <li className="feature-item">
                    <span className="check-icon">✓</span> Patient-centric approach
                  </li>
                </ul>
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="card vision-card">
              <div className="card-inner">
                <div className="card-icon vision-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z" />
                    <path d="M12 6v2" />
                    <path d="M12 16v2" />
                    <path d="M6 12H4" />
                    <path d="M20 12h-2" />
                  </svg>
                </div>
                <h3 className="card-title">Our Vision</h3>
                <div className="card-divider"></div>
                <p className="card-description">
                  To become India's most trusted nutraceutical brand by making evidence-based nutrition
                  accessible and understandable for everyone.
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <span className="check-icon">✓</span> Accessible premium nutrition
                  </li>
                  <li className="feature-item">
                    <span className="check-icon">✓</span> Transparent communication
                  </li>
                  <li className="feature-item">
                    <span className="check-icon">✓</span> Sustainable growth
                  </li>
                </ul>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
              </div>
            </div>
          </div>

          {/* Image Area with eye-catching animation */}
         
        </div>
      </section>
    </>
  );
};

export default MissionVision;