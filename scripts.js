document.addEventListener('DOMContentLoaded', (event) => {
    showProject('project1'); // Display the first project's details by default
});

function toggleProject(projectId) {
    const project = document.getElementById(projectId);
    const isExpanded = project.classList.contains('expanded');
    closeAllProjects();
    if (!isExpanded) {
        project.classList.add('expanded');
    }
}

function closeAllProjects() {
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach(project => {
        project.classList.remove('expanded');
    });
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
