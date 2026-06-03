import "../assets/ProgressCards.css";

function ProgressCards() {
  return (
    <div className="progress-section">

      {/* CARD 1 */}

      <div className="progress-card">

        <div className="left-panel blue-panel">

          <div className="loader-circle">
            <span>15%</span>
          </div>

          <h3>Design</h3>

        </div>

        <div className="right-panel">

          <span className="status blue-status">
            In Progress
          </span>

          <p>
            Improve task organization by refining
            dashboard layouts and enhancing user
            experience across project views.
          </p>

        </div>

      </div>

      {/* CARD 2 */}

      <div className="progress-card">

        <div className="left-panel orange-panel">

          <div className="loader-circle">
            <span>30%</span>
          </div>

          <h3>Development</h3>

        </div>

        <div className="right-panel">

          <span className="status orange-status">
            In Progress
          </span>

          <p>
            Build core task management features,
            integrate project tracking, and improve
            productivity workflows.
          </p>

          <div className="team-row">

            <div className="avatars">

              <img
                src="https://i.pravatar.cc/40?img=1"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=2"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=3"
                alt=""
              />

            </div>

            <button className="team-add-btn">
              +
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProgressCards;