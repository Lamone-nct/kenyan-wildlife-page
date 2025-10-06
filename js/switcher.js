// --- CSS Switching Function ---
function switchStyle(theme) {
    const styleLink = document.getElementById('theme-style');
    if (theme === 'classic') {
        styleLink.href = 'css/style_classic.css';
        console.log('Switched to Classic theme.');
    } else if (theme === 'modern') {
        styleLink.href = 'css/style_modern.css';
        console.log('Switched to Modern theme.');
    }
}

// --- JavaScript Switching Function ---
function switchScript(mode) {
    const dynamicScript = document.getElementById('dynamic-script');
    const dynamicArea = document.getElementById('dynamic-area');
    let newSrc = '';

    if (mode === 'info') {
        newSrc = 'js/script_info.js';
    } else if (mode === 'quiz') {
        newSrc = 'js/script_quiz.js';
    }

    if (newSrc && dynamicScript.src !== newSrc) {
        // 1. Remove the old script tag
        dynamicScript.remove();

        // 2. Clear the dynamic content area
        dynamicArea.innerHTML = '<p>Loading new interaction mode...</p>';

        // 3. Create a new script tag
        const newScript = document.createElement('script');
        newScript.id = 'dynamic-script';
        newScript.src = newSrc;
        
        // 4. Append the new script to the body to execute it
        document.body.appendChild(newScript);
        console.log(`Switched to ${mode} script.`);
    }
}

// Ensure initial script loads the content on page load
document.addEventListener('DOMContentLoaded', () => {
    // Manually run the current dynamic script to load content on initial page load
    try {
        if (typeof loadInfoContent === 'function') {
            loadInfoContent();
        } else if (typeof loadQuizContent === 'function') {
             loadQuizContent();
        }
    } catch (e) {
        console.warn("Initial script function not found. Please ensure script_info.js is the default source.");
        switchScript('info'); // Fallback to load it if not executed
    }
});