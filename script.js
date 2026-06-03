// Check for user preference and apply theme
(function() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme based on preference: saved > system > default (dark)
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-theme');
    } else if (prefersDark) {
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
    }
})();

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const body = document.body;
    const isLight = body.classList.contains('light-theme');
    
    if (isLight) {
        // Switching to dark
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Dark Mode';
    } else {
        // Switching to light
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Light Mode';
    }
    
    // Update button text immediately
    themeToggle.textContent = body.classList.contains('light-theme') ? 'Dark Mode' : 'Light Mode';
});

// Update toggle button text based on current theme
(function() {
    const body = document.body;
    const isLight = body.classList.contains('light-theme');
    themeToggle.textContent = isLight ? 'Dark Mode' : 'Light Mode';
})();