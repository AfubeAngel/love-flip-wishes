// Navigation functions
function navigateToWishes() {
    window.location.href = 'wishes.html';
}

function navigateToHome() {
    window.location.href = 'index.html';
}

// Card flip functionality
function toggleCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// Load wishes data and create cards
async function loadWishes() {
    try {
        const response = await fetch('./wishes.json');
        const wishes = await response.json();
        
        const cardsGrid = document.getElementById('cardsGrid');
        
        wishes.forEach((wish, index) => {
            const cardElement = createWishCard(wish, index);
            cardsGrid.appendChild(cardElement);
        });
        
    } catch (error) {
        console.error('Error loading wishes:', error);
        // Fallback data if JSON fails to load
        const fallbackWishes = [
            {
                id: 1,
                sender: "Sarah & Mike",
                message: "Wishing you both a lifetime filled with love, laughter, and endless happiness. Your love story has always inspired us, and we can't wait to see what beautiful adventures await you as husband and wife!"
            },
            {
                id: 2,
                sender: "The Johnson Family",
                message: "Congratulations on finding your perfect match! May your marriage be filled with all the right ingredients: a heap of love, a dash of humor, a touch of romance, and a spoonful of understanding. Here's to your new beginning!"
            },
            {
                id: 3,
                sender: "Emma",
                message: "Two hearts, one love, endless possibilities! Watching you both together makes my heart so happy. May your wedding day be the start of a lifetime filled with special moments, cherished memories, and most importantly, each other."
            }
        ];
        
        const cardsGrid = document.getElementById('cardsGrid');
        fallbackWishes.forEach((wish, index) => {
            const cardElement = createWishCard(wish, index);
            cardsGrid.appendChild(cardElement);
        });
    }
}

// Create individual wish card
function createWishCard(wish, index) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'wish-card';
    cardContainer.style.animationDelay = `${index * 150}ms`;
    
    cardContainer.innerHTML = `
        <div class="wish-card-inner">
            <!-- Front of card -->
            <div class="wish-card-front">
                <div class="card-front-content">
                    <div class="card-icon">💌</div>
                    <h3 class="card-front-title">Wedding Wishes</h3>
                    <p class="card-front-sender">From ${wish.sender}</p>
                    <p class="card-front-instruction">Click to read</p>
                </div>
            </div>
            
            <!-- Back of card -->
            <div class="wish-card-back">
                <div class="card-back-content">
                    <p class="card-message">${wish.message}</p>
                    <div class="card-divider"></div>
                    <p class="card-sender">— ${wish.sender}</p>
                    <p class="card-back-instruction">Click to flip back</p>
                </div>
            </div>
        </div>
    `;
    
    // Add click event listener
    cardContainer.addEventListener('click', function() {
        toggleCard(this);
    });
    
    return cardContainer;
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add any global initialization here if needed
});