// Function to handle course selection and navigation
function viewCourse(courseName) {
  // Convert the course name into a URL-friendly format
  const formattedCourseName = courseName.toLowerCase().replace(/\s+/g, "-");

  // Generate the URL for the course page (e.g., "introduction-to-html.html")
  const courseUrl = `${formattedCourseName}.html`;

  // Redirect to the course page
  window.location.href = courseUrl;
}
