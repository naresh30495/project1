import { useState } from "react";

function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    course: "",
    rating: "",
    comments: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(form);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    alert("Feedback Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Feedback</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Course" onChange={e => setForm({...form, course: e.target.value})} />
      <input type="number" min="1" max="5" placeholder="Rating"
        onChange={e => setForm({...form, rating: e.target.value})} />
      <textarea placeholder="Comments"
        onChange={e => setForm({...form, comments: e.target.value})}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;