import "../assets/CreateTask.css";

function CreateTask({ goBack }) {
  return (
    <div className="create-task">
        <button
         className="back-btn"
         onClick={goBack}
        >
         ←
        </button>

      <h1 className="create-title">
        Create Task
      </h1>

      <form className="task-form">

        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            placeholder="Enter Task Name"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="4"
            placeholder="Enter task description..."
          />
        </div>

        <div className="row">

          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input type="time" />
          </div>

        </div>

        <div className="form-group">
          <label>Category</label>

          <div className="categories">

            <button
              type="button"
              className="cat-btn blue"
            >
              Design
            </button>

            <button
              type="button"
              className="cat-btn orange"
            >
              Development
            </button>

            <button
              type="button"
              className="cat-btn pink"
            >
              Research
            </button>

          </div>

        </div>

        <div className="form-group">
          <label>Participants</label>

          <div className="participants">

            <div className="participant">
              👩
            </div>

            <div className="participant">
              👨
            </div>

            <div className="participant">
              👩‍💻
            </div>

            <button
              type="button"
              className="add-member"
            >
              +
            </button>

          </div>

        </div>

        <button className="create-btn">
          Create Task
        </button>

      </form>

    </div>
  );
}

export default CreateTask;``