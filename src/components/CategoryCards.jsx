import { useState, useEffect } from "react";
import "../assets/CategoryCards.css";

function CategoryCards() {
  const developmentTasks = [6, 8, 11, 12];
  const designTasks = [3, 6, 14, 1];
  const researchTasks = [4, 15, 9, 5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="category-section">
      {/* Tabs */}
     <div className="tabs">
     <button className="tab active">Today</button>
     <button className="tab">Recently</button>
     <button className="tab">Upcoming</button>
     <button className="tab">Later</button>
    </div>

      {/* Cards */}
    <div className="carousel">
  <div className="carousel-track">

    <div
      className={`task-card development ${
        activeCard === "development" ? "active-card" : ""
      }`}
      onClick={() => setActiveCard("development")}
    >
      <div className="task-number">
        {String(developmentTasks[currentIndex]).padStart(2, "0")}
      </div>

      <div className="task-label">Tasks</div>

      <div className="task-pill">
        Development
      </div>
    </div>

    <div
      className={`task-card design ${
        activeCard === "design" ? "active-card" : ""
      }`}
      onClick={() => setActiveCard("design")}
    >
      <div className="task-number">
        {String(designTasks[currentIndex]).padStart(2, "0")}
      </div>

      <div className="task-label">Tasks</div>

      <div className="task-pill">
        Design
      </div>
    </div>

    <div
      className={`task-card research ${
        activeCard === "research" ? "active-card" : ""
      }`}
      onClick={() => setActiveCard("research")}
    >
      <div className="task-number">
        {String(researchTasks[currentIndex]).padStart(2, "0")}
      </div>

      <div className="task-label">Tasks</div>

      <div className="task-pill">
        Research
      </div>
    </div>

    </div>
    </div>

      {/* Productive Day Section */}
      <div className="productive-day">
        <h2>Have a productive day</h2>
        <p>Let's start organizing your work.</p>
      </div>
    </div>
  );
}

export default CategoryCards;