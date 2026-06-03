import Header from "./Header";
import CategoryCards from "./CategoryCards";
import ProgressCards from "./ProgressCards";

function Dashboard({ openCreateTask }) {
    return(
        <div className="dashboard">
            <Header/>
            

            <div className="divider"></div>
            <div className="task-header">
            <h2>My Task</h2>
            <button
             className="add-btn"
             onClick={openCreateTask}
            >
            +
            </button>



        </div>
        <CategoryCards />
        <ProgressCards />
        </div>
    );
}

export default Dashboard;