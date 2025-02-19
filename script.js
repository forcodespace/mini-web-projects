function loadProject(project) {
  const container = document.getElementById('project-container');

  // Clear the container before loading new content
  container.innerHTML = '';

  // Create an iframe to load the selected project
  const iframe = document.createElement('iframe');
  iframe.src = `${project}/index.html`;  // Load the index.html from the respective project folder
  iframe.style.width = '100%';
  iframe.style.height = '600px'; // Adjust height as needed

  // Append the iframe to the container
  container.appendChild(iframe);
}
