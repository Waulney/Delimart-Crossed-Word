// Dictionnaire multilingue FR / EN pour Delimart
const I18N = {
    fr: {
        levelWord: "Niveau",
        scoreWord: "Mots trouvés",
        instruction: "Consigne : Glisse ton doigt ou ta souris de manière fluide d'une lettre à l'autre en ligne droite pour relier et trouver les mots cachés.",
        wordsTitle: "Mots à chercher :",
        modalSuccessTitle: "Chariot Validé ! 🛍️",
        modalSuccessDesc: "Prêt pour le rayon suivant ?",
        modalFinalTitle: "Supermarché Complété ! 🏆",
        modalFinalDesc: "Félicitations, tu as complété les 20 niveaux Delimart !",
        nextBtn: "Niveau Suivant",
        replayBtn: "Rejouer depuis le début"
    },
    en: {
        levelWord: "Level",
        scoreWord: "Words found",
        instruction: "Instruction: Slide your finger or mouse smoothly from letter to letter in a straight line to find and connect the hidden words.",
        wordsTitle: "Words to find:",
        modalSuccessTitle: "Cart Validated! 🛍️",
        modalSuccessDesc: "Ready for the next aisle?",
        modalFinalTitle: "Supermarket Completed! 🏆",
        modalFinalDesc: "Congratulations, you completed all 20 Delimart levels!",
        nextBtn: "Next Level",
        replayBtn: "Play Again from Start"
    }
};

// 20 Niveaux supermarché (produits, services, matériels, rayons) adaptés pour une grille 10x10
const LEVELS = [
    {
        title: { fr: "1. Fruits & Légumes", en: "1. Fruits & Vegetables" },
        words: { fr: ["POMME", "BANANE", "SALADE", "MELON", "RAISIN"], en: ["APPLE", "BANANA", "SALAD", "MELON", "GRAPE"] }
    },
    {
        title: { fr: "2. Boucherie & Viandes", en: "2. Butcher & Meats" },
        words: { fr: ["BOEUF", "POULET", "PORC", "STEAK", "JAMBON"], en: ["BEEF", "CHICKEN", "PORK", "STEAK", "HAM"] }
    },
    {
        title: { fr: "3. Produits Laitiers", en: "3. Dairy Products" },
        words: { fr: ["LAIT", "BEURRE", "FROMAGE", "YAOURT", "OEUF"], en: ["MILK", "BUTTER", "CHEESE", "YOGURT", "EGG"] }
    },
    {
        title: { fr: "4. Boulangerie & Pains", en: "4. Bakery & Breads" },
        words: { fr: ["PAIN", "BRIOCHE", "TOUR", "GATEAU", "FARINE"], en: ["BREAD", "BUN", "TART", "CAKE", "FLOUR"] }
    },
    {
        title: { fr: "5. Boissons & Jus", en: "5. Beverages & Juices" },
        words: { fr: ["EAU", "JUS", "SODA", "BIERE", "CAFE"], en: ["WATER", "JUICE", "SODA", "BEER", "COFFEE"] }
    },
    {
        title: { fr: "6. Épicerie Salée", en: "6. Pantry & Grocery" },
        words: { fr: ["RIZ", "HUILE", "SEL", "SUCRE", "PATES"], en: ["RICE", "OIL", "SALT", "SUGAR", "PASTA"] }
    },
    {
        title: { fr: "7. Snacks & Friandises", en: "7. Snacks & Sweets" },
        words: { fr: ["CHIPS", "BISCUIT", "BONBON", "CHOCO", "NOIX"], en: ["CHIPS", "COOKIE", "CANDY", "CHOCO", "NUT"] }
    },
    {
        title: { fr: "8. Produits d'Entretien", en: "8. Cleaning Products" },
        words: { fr: ["SAVON", "JAVE", "BALAI", "EPONGE", "GEL"], en: ["SOAP", "BLEACH", "BROOM", "SPONGE", "GEL"] }
    },
    {
        title: { fr: "9. Hygiène & Beauté", en: "9. Health & Beauty" },
        words: { fr: ["SHAMPOO", "CREME", "RASOIR", "PAYS", "COTON"], en: ["SHAMPOO", "CREAM", "RAZOR", "SOAP", "COTTON"] }
    },
    {
        title: { fr: "10. Matériel & Caisse", en: "10. Equipment & Checkout" },
        words: { fr: ["CAISSE", "PANIER", "CHARIOT", "TICKET", "TAPE"], en: ["TILL", "BASKET", "CART", "TICKET", "TAPE"] }
    },
    {
        title: { fr: "11. Poissonnerie", en: "11. Seafood Market" },
        words: { fr: ["POISSON", "THON", "CREVETTE", "SAUMON", "GLACE"], en: ["FISH", "TUNA", "SHRIMP", "SALMON", "ICE"] }
    },
    {
        title: { fr: "12. Surgelés", en: "12. Frozen Foods" },
        words: { fr: ["GLACE", "FRITE", "PIZZA", "POULE", "FROID"], en: ["ICE", "FRIES", "PIZZA", "CHICK", "COLD"] }
    },
    {
        title: { fr: "13. Sauces & Condiments", en: "13. Sauces & Condiments" },
        words: { fr: ["SAUCE", "KETCHUP", "MAYOS", "MOUTARDE", "VINAIGRE"], en: ["SAUCE", "KETCHUP", "MAYO", "MUSTARD", "VINEGAR"] }
    },
    {
        title: { fr: "14. Bébé & Enfant", en: "14. Baby & Kids" },
        words: { fr: ["COUCHE", "LAIT", "LINGETTE", "JOUET", "BIBERON"], en: ["DIAPER", "MILK", "WIPES", "TOY", "BOTTLE"] }
    },
    {
        title: { fr: "15. Animaux & Compagnie", en: "15. Pet Supplies" },
        words: { fr: ["CROQUETTE", "NICHE", "OS", "LAISSE", "CHAT"], en: ["KIBBLE", "HOUSE", "BONE", "LEASH", "CAT"] }
    },
    {
        title: { fr: "16. Services & Accueil", en: "16. Services & Reception" },
        words: { fr: ["ACCUEIL", "SERVICE", "CHANGE", "CARTE", "CLIENT"], en: ["DESK", "SERVICE", "CHANGE", "CARD", "CLIENT"] }
    },
    {
        title: { fr: "17. Électroménager & Divers", en: "17. Appliances & Misc" },
        words: { fr: ["LAMPE", "PILE", "RADION", "SAC", "BOX"], en: ["LAMP", "BATTERY", "BULB", "BAG", "BOX"] }
    },
    {
        title: { fr: "18. Condiments & Épices", en: "18. Spices & Seasoning" },
        words: { fr: ["POIVRE", "EPICE", "MENTHE", "AIL", "CIBOULE"], en: ["PEPPER", "SPICE", "MINT", "GARLIC", "CHIVE"] }
    },
    {
        title: { fr: "19. Promotions & Soldes", en: "19. Deals & Sales" },
        words: { fr: ["SOLDE", "PRIX", "PROMO", "RABAIS", "BONUS"], en: ["SALE", "PRICE", "DEAL", "OFF", "BONUS"] }
    },
    {
        title: { fr: "20. Delimart Ultime", en: "20. Ultimate Delimart" },
        words: { fr: ["DELIMART", "MARKET", "ACHAT", "PANIER", "CHOIX"], en: ["DELIMART", "MARKET", "SHOP", "CART", "CHOICE"] }
    }
];

let currentLang = 'fr';
let currentLevelIndex = 0;
let grid = [];
let placedWords = [];
let foundWords = new Set();
let selectedCells = [];
let isInteracting = false;
let startCell = null;

const GRID_SIZE = 10;

document.addEventListener('DOMContentLoaded', () => {
    initLevel(currentLevelIndex);

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUIStaticTexts();
        initLevel(currentLevelIndex);
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('theme-dark');
        const btn = document.getElementById('themeToggleBtn');
        btn.innerText = document.body.classList.contains('theme-dark') ? '☀️' : '🌙';
    });

    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        document.getElementById('levelModal').classList.add('hidden');
        currentLevelIndex++;
        if (currentLevelIndex >= LEVELS.length) {
            currentLevelIndex = 0;
        }
        initLevel(currentLevelIndex);
    });

    window.addEventListener('mouseup', endSelection);
    window.addEventListener('touchend', endSelection);
});

function updateUIStaticTexts() {
    const t = I18N[currentLang];
    document.getElementById('gameInstruction').innerText = t.instruction;
    document.getElementById('wordsToFindTitle').innerText = t.wordsTitle;
}

function initLevel(levelIdx) {
    const levelData = LEVELS[levelIdx];
    const t = I18N[currentLang];
    const wordsForLang = levelData.words[currentLang];
    
    document.getElementById('levelDisplay').innerText = `${t.levelWord} ${levelIdx + 1} / ${LEVELS.length}`;
    document.getElementById('levelThemeTitle').innerText = levelData.title[currentLang];
    updateUIStaticTexts();
    
    foundWords.clear();
    generateGrid(wordsForLang);
    renderWordList(wordsForLang);
    renderGrid();
}

function generateGrid(words) {
    grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    placedWords = [];

    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const cleanWord = word.replace(/[^A-Z]/g, '');

        while (!placed && attempts < 100) {
            attempts++;
            const direction = Math.floor(Math.random() * 3); // 0: Horizontal, 1: Vertical, 2: Diagonal
            let row = Math.floor(Math.random() * GRID_SIZE);
            let col = Math.floor(Math.random() * GRID_SIZE);

            if (canPlaceWord(cleanWord, row, col, direction)) {
                placeWord(cleanWord, row, col, direction);
                placedWords.push({ word: cleanWord, coords: getWordCoords(cleanWord, row, col, direction) });
                placed = true;
            }
        }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    const len = word.length;
    if (dir === 0 && col + len > GRID_SIZE) return false;
    if (dir === 1 && row + len > GRID_SIZE) return false;
    if (dir === 2 && (col + len > GRID_SIZE || row + len > GRID_SIZE)) return false;

    for (let i = 0; i < len; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            return false;
        }
    }
    return true;
}

function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        grid[r][c] = word[i];
    }
}

function getWordCoords(word, row, col, dir) {
    let coords = [];
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        coords.push(`${r}-${c}`);
    }
    return coords;
}

function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.innerText = grid[r][c];

            // Événements unifiés Souris et Tactile fluides avec verrouillage de trajectoire linéaire
            cell.addEventListener('mousedown', (e) => { e.preventDefault(); startSelection(r, c); });
            cell.addEventListener('mouseenter', () => { if (isInteracting) updateSelection(r, c); });

            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(r, c);
            }, { passive: false });

            cell.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (!isInteracting) return;
                const touch = e.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    updateSelection(parseInt(target.dataset.row), parseInt(target.dataset.col));
                }
            }, { passive: false });

            container.appendChild(cell);
        }
    }
}

function renderWordList(words) {
    const container = document.getElementById('wordList');
    container.innerHTML = '';
    const t = I18N[currentLang];
    words.forEach(word => {
        const chip = document.createElement('div');
        chip.classList.add('word-chip');
        chip.id = `chip-${word}`;
        chip.innerText = word;
        container.appendChild(chip);
    });
    document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : 0 / ${words.length}`;
}

function startSelection(r, c) {
    isInteracting = true;
    startCell = { r, c };
    selectedCells = [`${r}-${c}`];
    updateCellStyles();
}

function updateSelection(r, c) {
    if (!isInteracting || !startCell) return;

    let dr = r - startCell.r;
    let dc = c - startCell.c;
    
    let steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) {
        selectedCells = [`${startCell.r}-${startCell.c}`];
        updateCellStyles();
        return;
    }

    let stepR = dr === 0 ? 0 : dr / steps;
    let stepC = dc === 0 ? 0 : dc / steps;

    if (Math.abs(stepR) !== Math.abs(stepC) && stepR !== 0 && stepC !== 0) {
        return;
    }

    selectedCells = [];
    for (let i = 0; i <= steps; i++) {
        let currR = Math.round(startCell.r + (i * stepR));
        let currC = Math.round(startCell.c + (i * stepC));
        selectedCells.push(`${currR}-${currC}`);
    }

    updateCellStyles();
}

function endSelection() {
    if (!isInteracting) return;
    isInteracting = false;
    startCell = null;

    let formedWord = selectedCells.map(key => {
        const [r, c] = key.split('-').map(Number);
        return grid[r][c];
    }).join('');

    const currentWords = LEVELS[currentLevelIndex].words[currentLang];
    let matched = placedWords.find(pw => pw.word === formedWord || pw.word === formedWord.split('').reverse().join(''));
    const t = I18N[currentLang];

    if (matched && currentWords.includes(matched.word) && !foundWords.has(matched.word)) {
        foundWords.add(matched.word);
        
        selectedCells.forEach(key => {
            const cell = document.querySelector(`[data-row='${key.split('-')[0]}'][data-col='${key.split('-')[1]}']`);
            if (cell) cell.classList.add('found');
        });

        const chip = document.getElementById(`chip-${matched.word}`);
        if (chip) chip.classList.add('found');

        document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : ${foundWords.size} / ${currentWords.length}`;

        if (foundWords.size === currentWords.length) {
            setTimeout(showLevelModal, 400);
        }
    }

    selectedCells = [];
    updateCellStyles();
}

function updateCellStyles() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const key = `${cell.dataset.row}-${cell.dataset.col}`;
        if (selectedCells.includes(key)) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function showLevelModal() {
    const modal = document.getElementById('levelModal');
    const t = I18N[currentLang];
    
    if (currentLevelIndex === LEVELS.length - 1) {
        document.getElementById('modalTitle').innerText = t.modalFinalTitle;
        document.getElementById('modalDesc').innerText = t.modalFinalDesc;
        document.getElementById('nextLevelBtn').innerText = t.replayBtn;
    } else {
        document.getElementById('modalTitle').innerText = t.modalSuccessTitle;
        document.getElementById('modalDesc').innerText = t.modalSuccessDesc;
        document.getElementById('nextLevelBtn').innerText = t.nextBtn;
    }
    modal.classList.remove('hidden');
}