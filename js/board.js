class ChessBoard {
    constructor(elementId, config = {}) {
        this.element = typeof elementId === 'string' ? 
            document.getElementById(elementId) : elementId;
        this.config = {
            isDraggable: true,
            showHints: true,
            ...config
        };
        
        this.squares = [];
        this.currentPosition = null;
        this.init();
    }

    init() {
        this.createBoard();
    }

    createBoard() {
        this.element.innerHTML = '';
        this.squares = [];

        // Create the board wrapper
        const boardWrapper = document.createElement('div');
        boardWrapper.className = 'board-wrapper';

        // Create file labels (a-h) - top
        const topFiles = document.createElement('div');
        topFiles.className = 'files-labels';
        'abcdefgh'.split('').forEach(file => {
            const label = document.createElement('div');
            label.textContent = file;
            topFiles.appendChild(label);
        });
        boardWrapper.appendChild(topFiles);

        // Create rank labels (8-1) - left
        const leftRanks = document.createElement('div');
        leftRanks.className = 'ranks-labels';
        '87654321'.split('').forEach(rank => {
            const label = document.createElement('div');
            label.textContent = rank;
            leftRanks.appendChild(label);
        });
        boardWrapper.appendChild(leftRanks);

        // Create the actual board
        const boardGrid = document.createElement('div');
        boardGrid.className = 'board-grid';

        // Create 8x8 grid
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement('div');
                square.className = `square ${(row + col) % 2 === 0 ? 'light' : 'dark'}`;
                square.dataset.position = this.coordinateToPosition(col, row);
                boardGrid.appendChild(square);
                this.squares.push(square);
            }
        }

        boardWrapper.appendChild(boardGrid);
        this.element.appendChild(boardWrapper);
    }

    coordinateToPosition(col, row) {
        const files = 'abcdefgh';
        const ranks = '87654321';
        return `${files[col]}${ranks[row]}`;
    }

    loadPosition(fen) {
        this.currentPosition = fen;
        this.clearBoard();
        
        const fenBoard = fen.split(' ')[0];
        let row = 0;
        let col = 0;

        for (const char of fenBoard) {
            if (char === '/') {
                row++;
                col = 0;
            } else if (/\d/.test(char)) {
                col += parseInt(char);
            } else {
                const position = this.coordinateToPosition(col, row);
                this.placePiece(char, position);
                col++;
            }
        }
    }

    placePiece(piece, position) {
        const square = this.getSquare(position);
        if (!square) return;

        const pieceElement = document.createElement('div');
        pieceElement.className = `piece ${this.getPieceClass(piece)}`;
        square.appendChild(pieceElement);
    }

    getPieceClass(piece) {
        const color = piece === piece.toUpperCase() ? 'white' : 'black';
        const type = piece.toLowerCase();
        return `${color}-${type}`;
    }

    getSquare(position) {
        return this.squares.find(square => square.dataset.position === position);
    }

    clearBoard() {
        this.squares.forEach(square => {
            while (square.firstChild) {
                square.removeChild(square.firstChild);
            }
        });
    }

    movePiece(from, to) {
        const fromSquare = this.getSquare(from);
        const toSquare = this.getSquare(to);
        
        if (!fromSquare || !toSquare || !fromSquare.firstChild) {
            return false;
        }

        const piece = fromSquare.firstChild;
        // Remove any existing pieces on the target square
        while (toSquare.firstChild) {
            toSquare.removeChild(toSquare.firstChild);
        }
        fromSquare.removeChild(piece);
        toSquare.appendChild(piece);
        return true;
    }

    highlightSquare(position, type = 'highlight-from') {
        const square = this.getSquare(position);
        if (square) {
            square.classList.add(type);
        }
    }

    clearHighlights() {
        this.squares.forEach(square => {
            square.classList.remove('highlight-from', 'highlight-to');
        });
    }

    getPieceName(position) {
        const square = this.getSquare(position);
        if (!square || !square.firstChild) return '';
        
        const pieceClass = square.firstChild.className;
        if (pieceClass.includes('p')) return 'pawn';
        if (pieceClass.includes('r')) return 'rook';
        if (pieceClass.includes('n')) return 'knight';
        if (pieceClass.includes('b')) return 'bishop';
        if (pieceClass.includes('q')) return 'queen';
        if (pieceClass.includes('k')) return 'king';
        return '';
    }
}

class ChessPatterns {
    // ... existing code ...

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
        
        // Show instruction and explanation
        this.updateMoveInstruction(move);
        this.showMoveExplanation(move);
    }

    showMoveExplanation(move) {
        const explanationElement = document.querySelector('.move-explanation');
        if (explanationElement && move.explanation) {
            explanationElement.textContent = move.explanation;
        }
    }

    // Add method to show opening information
    showOpeningInfo(opening) {
        const infoElement = document.querySelector('.opening-info');
        if (infoElement) {
            infoElement.innerHTML = `
                <h3>${opening.name}</h3>
                <div class="difficulty">Difficulty: ${opening.difficulty}</div>
                <div class="category">Category: ${opening.category}</div>
                <p class="description">${opening.description}</p>
            `;
        }
    }
} 