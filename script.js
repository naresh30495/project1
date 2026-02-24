document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const feedback = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        rating: document.getElementById("rating").value,
        comments: document.getElementById("comments").value
    };

    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    alert("Feedback submitted successfully!");
});