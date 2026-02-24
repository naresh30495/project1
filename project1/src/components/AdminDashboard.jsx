function AdminDashboard() {
  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {feedbacks.map((f, index) => (
        <div key={index}>
          <p>Name: {f.name}</p>
          <p>Course: {f.course}</p>
          <p>Rating: {f.rating}</p>
          <p>Comments: {f.comments}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;