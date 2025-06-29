// Simple Theme Switcher
document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Remove active class from all buttons
            themeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Apply theme
            document.documentElement.removeAttribute('data-theme');
            if (theme !== 'modern') {
                document.documentElement.setAttribute('data-theme', theme);
            }
            
            // Save to localStorage
            localStorage.setItem('preferred-theme', theme);
            
            // Show success message
            const themeNames = {
                'modern': 'Modern',
                'minimalist': 'Minimalist', 
                'nature': 'Nature',
                'corporate': 'Corporate',
                'creative': 'Creative'
            };
            
            // Create a simple notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 10000;
                font-weight: 500;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                font-family: 'Inter', sans-serif;
            `;
            notification.textContent = `Theme: ${themeNames[theme]} 🎨`;
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        });
    });
    
    // Initialize saved theme
    const savedTheme = localStorage.getItem('preferred-theme') || 'modern';
    document.documentElement.removeAttribute('data-theme');
    if (savedTheme !== 'modern') {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // Set active button
    themeButtons.forEach(button => {
        if (button.getAttribute('data-theme') === savedTheme) {
            button.classList.add('active');
        }
    });
    
    console.log('Theme switcher loaded! 🎨');
}); 