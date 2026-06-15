document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById('btn-no');
    const yesBtn = document.getElementById('btn-yes');
    const comic = document.getElementById('comic');
    const celebration = document.getElementById('celebration');
    const panel4 = document.getElementById('panel-4');
    const starburstBg = document.getElementById('starburst-bg');

    // The "Evasive No" Logic
    // We use touchstart for iPhones and mouseover for desktop
    ['mouseover', 'touchstart'].forEach(eventType => {
        noBtn.addEventListener(eventType, function(e) {
            
            // Prevent default touch behavior so they can't actually click it on mobile
            if(eventType === 'touchstart') e.preventDefault();

            // Get boundaries of panel 4 so the button stays inside the comic panel
            const panelRect = panel4.getBoundingClientRect();
            const btnRect = noBtn.getBoundingClientRect();

            // Calculate max X and Y to keep it inside the panel bounds
            const maxX = panelRect.width - btnRect.width - 20; 
            const maxY = panelRect.height - btnRect.height - 20;

            // Generate random coordinates (keeping it at least 10px from the edges)
            const randomX = Math.max(10, Math.floor(Math.random() * maxX));
            const randomY = Math.max(10, Math.floor(Math.random() * maxY));

            // Apply new position
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;
        });
    });

    // The "Yes" Logic
    yesBtn.addEventListener('click', function(e) {
        // Prevent any default tap behaviors
        e.preventDefault();

        // Hide the comic layout & background
        comic.style.display = 'none';
        document.body.style.backgroundImage = 'none'; 
        
        // Show celebration elements
        starburstBg.style.display = 'block';
        celebration.style.display = 'block';
        
        // Ensure celebration screen is scrolled into view on mobile
        window.scrollTo(0, 0);
    });
});
