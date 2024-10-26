// Show the loading animation when the page starts loading
document.addEventListener('DOMContentLoaded', function () {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'flex'; // Display the loading overlay
});

// Hide the loading animation when the page has fully loaded
window.addEventListener('load', function () {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'none'; // Hide the loading overlay
});
