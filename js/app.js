// Prevent double initialization
if (window.ChessPatterns) {
    console.warn('ChessPatterns already defined - preventing double initialization');
} else {

class ChessPatterns {
    constructor() {
        this.currentOpening = null;
        this.moveIndex = 0;
        this.board = new ChessBoard('learning-board');
        this.currentCategory = 'Basic';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateOpeningsList();
    }

    setupEventListeners() {
        // Category buttons
        document.querySelector('.opening-categories').addEventListener('click', e => {
            if (e.target.classList.contains('category-btn')) {
                this.switchCategory(e.target.dataset.category);
            }
        });

        // Opening selector
        document.getElementById('opening-select').addEventListener('change', (e) => {
            this.selectOpening(e.target.value);
        });

        // Next move button
        document.getElementById('next-move').addEventListener('click', () => {
            this.executeNextMove();
        });

        // Undo button
        document.getElementById('undo-btn').addEventListener('click', () => {
            this.undoMove();
        });
    }

    switchCategory(category) {
        this.currentCategory = category;
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
        
        // Update OPENINGS based on category
        switch(category) {
            case 'Basic':
                window.OPENINGS = window.BASIC_OPENINGS;
                break;
            case 'Advanced':
                window.OPENINGS = window.ADVANCED_OPENINGS;
                break;
            case 'Gambit':
                window.OPENINGS = window.GAMBIT_OPENINGS;
                break;
            default:
                console.error('Unknown category:', category);
                return;
        }
        
        this.updateOpeningsList();
        
        // Reset opening selection
        document.getElementById('opening-select').value = '';
        document.getElementById('board-section').classList.add('hidden');
    }

    updateOpeningsList() {
        const select = document.getElementById('opening-select');
        select.innerHTML = '<option value="">Select an opening...</option>';
        
        console.log('All openings:', OPENINGS);
        console.log('Current category:', this.currentCategory);
        
        // Filter openings by current category
        const filteredOpenings = Object.entries(OPENINGS)
            .filter(([_, opening]) => opening.category === this.currentCategory);
            
        console.log('Filtered openings:', filteredOpenings);
        
        filteredOpenings
            .sort((a, b) => a[1].name.localeCompare(b[1].name))
            .forEach(([id, opening]) => {
                const option = document.createElement('option');
                option.value = id;
                option.textContent = opening.name;
                select.appendChild(option);
            });
    }

    selectOpening(openingId) {
        if (!openingId) {
            document.getElementById('board-section').classList.add('hidden');
            return;
        }
        
        this.currentOpening = OPENINGS[openingId];
        this.moveIndex = 0;
        
        // Set up board
        this.board.loadPosition(this.currentOpening.initialPosition);
        
        // Update displays
        document.getElementById('total-moves').textContent = this.currentOpening.sequence.length;
        document.getElementById('current-move').textContent = '1';
        
        // Show the board section
        document.getElementById('board-section').classList.remove('hidden');
        
        // Update traps and plans
        this.updateOpeningDetails();
        
        // Show first move
        this.showCurrentMove();
    }

    updateOpeningDetails() {
        const trapsList = document.querySelector('.traps-list');
        const plansList = document.querySelector('.plans-list');
        
        trapsList.innerHTML = this.currentOpening.commonTraps
            .map(trap => `<li>${trap}</li>`)
            .join('');
            
        plansList.innerHTML = this.currentOpening.typicalPlans
            .map(plan => `<li>${plan}</li>`)
            .join('');
    }

    showCurrentMove() {
        if (!this.currentOpening || this.moveIndex >= this.currentOpening.sequence.length) {
            return;
        }

        const move = this.currentOpening.sequence[this.moveIndex];
        
        // Clear previous highlights
        this.board.clearHighlights();
        
        // Highlight squares
        this.board.highlightSquare(move.from, 'highlight-from');
        this.board.highlightSquare(move.to, 'highlight-to');
        
        // Show instruction
        this.updateMoveInstruction(move);
    }

    executeNextMove() {
        if (!this.currentOpening || this.moveIndex >= this.currentOpening.sequence.length) {
            return;
        }

        const move = this.currentOpening.sequence[this.moveIndex];
        
        // Execute the move
        this.board.movePiece(move.from, move.to);
        
        // Update progress
        this.moveIndex++;
        document.getElementById('current-move').textContent = this.moveIndex + 1;

        // Check if opening is complete
        if (this.moveIndex >= this.currentOpening.sequence.length) {
            setTimeout(() => {
                alert('Opening complete! Select another opening to continue learning.');
                this.resetApp();
            }, 500);
            return;
        }

        // Show next move
        setTimeout(() => {
            this.showCurrentMove();
        }, 500);
    }

    undoMove() {
        if (this.moveIndex <= 0) return;
        
        this.moveIndex--;
        const move = this.currentOpening.sequence[this.moveIndex];
        
        // Move piece back
        this.board.movePiece(move.to, move.from);
        
        // Update display
        document.getElementById('current-move').textContent = this.moveIndex + 1;
        
        // Show current move
        this.showCurrentMove();
    }

    updateMoveInstruction(move) {
        const pieceName = this.board.getPieceName(move.from);
        const color = this.moveIndex % 2 === 0 ? 'White' : 'Black';
        
        const label = document.querySelector('.move-label');
        label.textContent = `${color}: ${move.from} → ${move.to}`;

        // Add explanation
        const explanation = document.querySelector('.move-explanation');
        explanation.textContent = move.explanation || '';
    }

    resetApp() {
        // Reset dropdown
        document.getElementById('opening-select').value = '';
        
        // Hide board section
        document.getElementById('board-section').classList.add('hidden');
        
        // Reset internal state
        this.currentOpening = null;
        this.moveIndex = 0;
        
        // Clear the board
        this.board.clearBoard();
        this.board.clearHighlights();
        
        // Clear the instruction and explanation
        document.querySelector('.move-label').textContent = '';
        document.querySelector('.move-explanation').textContent = '';
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.chessPatterns = new ChessPatterns();
});

} // end of else block 