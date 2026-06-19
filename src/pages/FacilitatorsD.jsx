import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FacilitatorsD.css";

function FacilitatorsD() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([
    "Web Development",
    "Database Systems",
    "UI/UX Design",
  ]);

  const [selectedCourse, setSelectedCourse] = useState("Web Development");
  const [newCourse, setNewCourse] = useState("");
  const [deleteMode, setDeleteMode] = useState(false);

  const handleAddCourse = () => {
    if (newCourse.trim() === "") return;

    setCourses([...courses, newCourse]);
    setNewCourse("");
  };

  const handleDeleteCourse = (course) => {
    const updated = courses.filter((c) => c !== course);
    setCourses(updated);

    if (selectedCourse === course) {
      setSelectedCourse(updated[0] || "");
    }
  };

  const toggleDeleteMode = () => {
    setDeleteMode(!deleteMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Courses</h2>

        {/* ADD COURSE */}
        <div className="add-course">
          <input
            type="text"
            placeholder="Add course"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <button onClick={handleAddCourse}>Add</button>
        </div>

        {/* COURSE LIST */}
        {courses.map((course, index) => (
          <div
            key={index}
            className={`course-item ${
              selectedCourse === course ? "active" : ""
            }`}
          >
            <span onClick={() => setSelectedCourse(course)}>
              {course}
            </span>

            {/* DELETE MODE ONLY */}
            {deleteMode && (
              <button
                className="delete-btn"
                onClick={() => handleDeleteCourse(course)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {/* MAIN AREA */}
      <div className="main">

        {/* HEADER */}
        <div className="header">
          <h1>{selectedCourse || "No Course Selected"}</h1>

          <div className="header-actions">
            <button className="delete-toggle" onClick={toggleDeleteMode}>
              {deleteMode ? "Exit Delete" : "Delete Course"}
            </button>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          <div className="card">
            <h2>Create Attendance</h2>
            <button>Create</button>
          </div>

          <div className="card">
            <h2>Attendance Records</h2>
            <p>No records yet</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default FacilitatorsD;