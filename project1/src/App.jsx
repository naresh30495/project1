import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    course: "",
    rating: "",
    comments: ""
  });

  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbacks([...feedbacks, form]);
    setForm({ name: "", course: "", rating: "", comments: "" });
    alert("Feedback Submitted Successfully!");
  };

  return (
    <div className="container">
      <h1>Student Feedback System</h1>

      {/* Student Form */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Course Name"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          required
        />

        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          required
        />

        <textarea
          placeholder="Comments"
          value={form.comments}
          onChange={(e) => setForm({ ...form, comments: e.target.value })}
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>

      {/* Admin View */}
      <h2>Submitted Feedback</h2>

      {feedbacks.map((f, index) => (
        <div key={index} className="card">
          <p><strong>Name:</strong> {f.name}</p>
          <p><strong>Course:</strong> {f.course}</p>
          <p><strong>Rating:</strong> {f.rating}</p>
          <p><strong>Comments:</strong> {f.comments}</p>
        </div>
      ))}
    </div>
  );
}

export default App;