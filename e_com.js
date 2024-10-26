// Ensure all links open in a new tab
const links = document.querySelectorAll('a');
links.forEach(link => link.setAttribute('target', '_blank'));
