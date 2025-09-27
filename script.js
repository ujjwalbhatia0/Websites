// Games database - Add all your games here!
const games = [
    {
        id: 1,
        title: "I'm Not a Robot",
        description: "Prove you're human by solving CAPTCHA-style challenges across 50 increasingly difficult levels.",
        icon: "🤖",
        link: "games/I-m-not-a-Robot/index.html",
        difficulty: "medium",
        category: "puzzle",
        tags: ["captcha", "verification", "levels", "challenge"]
        
    },
    {
        id: 2,
        title: "Click Speed Test",
        description: "How many times can you click in 10 seconds? Test your clicking speed and reflexes!",
        icon: "⚡",
        link: "games/click speed test/index.html",
        difficulty: "easy",
        category: "arcade",
        tags: ["clicking", "speed", "reflex", "test"]
    },
    {
        id: 3,
        title: "Spend Elon Musk Money",
        description: "Spending Money is always Satisfying. Try to spend $500 Billion in this fun simulation game.",
        icon: "💸",
        link: "games/Elon musk money/index.html",
        difficulty: "easy",
        category: "satisfying",
        tags: ["money", "satisfying", "spending", "fun"]
    },
    {
        id: 4,
        title: "Infinite Craft",
        description: "Start with basic elements and combine them to discover new items in this endless crafting game.",
        icon: "🧪",
        link: "games/infinite craft/index.html",
        difficulty: "hard",
        category: "creative",
        tags: ["crafting", "combine", "discovery", "infinite"]
    },
    {
        id: 5,
        title: "Password Generator",
        description: "Create strong, secure passwords with customizable options for your online accounts.",
        icon: "🔐",
        link: "games/password game/index.html",
        difficulty: "easy",
        category: "tools",
        tags: ["security", "password", "generator", "tools"]
    },
    {
        id: 6,
        title: "Space Explorer",
        description: "Take a journey through our solar system and learn about planets, stars, and galaxies.",
        icon: "🚀",
        link: "games/space explorer/index.html",
        difficulty: "easy",
        category: "educational",
        tags: ["space", "planets", "solar system", "exploration"]
    },
    {
        id: 7,
        title: "Reaction Time Test",
        description: "Measure your reaction speed with this simple but addictive timing game.",
        icon: "⏱️",
        link: "games/reaction time test/index.html",
        difficulty: "medium",
        category: "arcade",
        tags: ["reaction", "speed", "timing", "test"]
    },
    {
        id: 8,
        title: "Make Perfect Circle",
        description: "Test your precision and drawing skills.",
        icon: "🎨",
        link: "games/perfect circle/index.html",
        difficulty: "hard",
        category: "puzzle",
        tags: ["colors", "matching", "perception", "challenge"]
    },
    {
        id: 9,
        title: "Clicker Simulator",
        description: "Test your skills with this addictive game",
        icon: "⚡",
        link: "games/clicker simulator/index.html",
        difficulty: "hard",
        category: "simulator",
        tags: ["simulation", "grow", "spend", "challenge"]
    },
    {
        id: 10,
        title: "Pacman",
        description: "Test your skills with this addictive game",
        icon: "😆",
        link: "games/pacman/index.html",
        difficulty: "hard",
        category: "challenge",
        tags: ["points", "grow", "collect", "challenge"]
    },
    {
        id: 11,
        title: "Dino Game",
        description: "Test your skills with this addictive game",
        icon: "🦖",
        link: "games/Dino Game/index.html",
        difficulty: "hard",
        category: "challenge",
        tags: ["infinite", "hard", "dinosaur", "challenge"]
    },
    {
        id: 12,
        title: "Snake Game",
        description: "Test your skills with this addictive game",
        icon: "🐍",
        link: "games/Snake Game/index.html",
        difficulty: "hard",
        category: "challenge",
        tags: ["infinite", "hard", "dinosaur", "challenge"]
    }

];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayGames(games);
    setupSearch();
    updateGameCount();
});

// Display games in the grid
function displayGames(gamesArray) {
    const gamesGrid = document.getElementById('games-grid');
    
    gamesGrid.innerHTML = gamesArray.map(game => `
        <a href="${game.link}" class="game-card">
            <span class="game-icon">${game.icon}</span>
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <div class="game-meta">
                <span class="game-difficulty difficulty-${game.difficulty}">
                    ${game.difficulty.charAt(0).toUpperCase() + game.difficulty.slice(1)}
                </span>
                <span class="game-category">${game.category}</span>
            </div>
        </a>
    `).join('');
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            displayGames(games);
        } else {
            const filteredGames = games.filter(game => 
                game.title.toLowerCase().includes(searchTerm) ||
                game.description.toLowerCase().includes(searchTerm) ||
                game.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                game.category.toLowerCase().includes(searchTerm)
            );
            displayGames(filteredGames);
        }
        
        updateGameCount();
    });
}

// Update game count display
function updateGameCount() {
    const gameCount = document.querySelectorAll('.game-card').length;
    document.getElementById('game-count').textContent = gameCount;
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.style.opacity = '0';
    
    setTimeout(() => {
        gamesGrid.style.transition = 'opacity 0.5s ease';
        gamesGrid.style.opacity = '1';
    }, 100);
    
    // Add keyboard shortcut for search (Ctrl+K or /)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey && e.key === 'k') || e.key === '/') {
            e.preventDefault();
            document.getElementById('search-input').focus();
        }
    });
});