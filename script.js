function loadProject(project) {
  const container = document.getElementById('project-container');

container.innerHTML = '';
const iframe = document.createElement('iframe');
  iframe.src = `${project}/index.html`; 
  iframe.style.width = '100%';
  iframe.style.height = '600px';
  
  container.appendChild(iframe);
}
