import { useState } from "react";

function Student() {
  const [form, setForm] = useState({
    name: "",
    course: "",
    rating: "",
    comments: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("feedbacks")) || [];
    oldData.push(form);
    localStorage.setItem("feedbacks", JSON.stringify(oldData));

    alert("Feedback Submitted!");
    setForm({ name: "", course: "", rating: "", comments: "" });
  };

  return (
    <div>
      <h2>Student Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Course"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          required
        />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          required
        />
        <textarea
          placeholder="Comments"
          value={form.comments}
          onChange={(e) => setForm({ ...form, comments: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Student;