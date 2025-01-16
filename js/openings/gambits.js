const GAMBIT_OPENINGS = {
    kings_gambit: {
        name: "King's Gambit",
        category: "Gambit",
        difficulty: "Intermediate",
        popularity: 3,
        yearFirstPlayed: 1560,
        description: "A romantic-era opening where White sacrifices a pawn for rapid development and attacking chances. One of the most aggressive openings from move two.",
        strategicThemes: [
            "Kingside attack",
            "Piece activity",
            "Open lines",
            "King safety battles"
        ],
        commonTraps: [
            "Falkbeer Counter-Gambit traps",
            "Early queen checks",
            "f7 attacking patterns"
        ],
        typicalPlans: [
            "Attack the f7 square",
            "Control the e-file",
            "Develop pieces rapidly",
            "Castle queenside in some lines"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "Standard king pawn opening"
            },
            {
                from: "e7",
                to: "e5",
                explanation: "Black accepts the challenge"
            },
            {
                from: "f2",
                to: "f4",
                explanation: "The King's Gambit - sacrificing a pawn for rapid development"
            }
        ]
    },

    evans_gambit: {
        name: "Evans Gambit",
        category: "Gambit",
        difficulty: "Intermediate",
        popularity: 3,
        yearFirstPlayed: 1827,
        description: "A spectacular attacking weapon in the Italian Game where White sacrifices a pawn to build a strong center and attack Black's kingside.",
        strategicThemes: [
            "Rapid development",
            "Central control",
            "Kingside attack",
            "Bishop pair advantage"
        ],
        commonTraps: [
            "Early queen sortie traps",
            "d5 breakthrough tactics",
            "f7 attacking motifs"
        ],
        typicalPlans: [
            "Build strong pawn center",
            "Attack f7 square",
            "Control a4-e8 diagonal",
            "Castle queenside"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "Standard king pawn opening"
            },
            {
                from: "e7",
                to: "e5",
                explanation: "Black matches in the center"
            },
            {
                from: "g1",
                to: "f3",
                explanation: "Develops knight and attacks e5"
            },
            {
                from: "b8",
                to: "c6",
                explanation: "Defends e5"
            },
            {
                from: "f1",
                to: "c4",
                explanation: "Italian Game setup"
            },
            {
                from: "f8",
                to: "c5",
                explanation: "Black mirrors White's bishop"
            },
            {
                from: "b2",
                to: "b4",
                explanation: "The Evans Gambit - sacrificing a pawn for rapid development"
            }
        ]
    },

    queens_gambit: {
        name: "Queen's Gambit",
        category: "Gambit",
        difficulty: "Intermediate",
        popularity: 5,
        yearFirstPlayed: 1490,
        description: "A positional gambit where White offers a pawn to gain central control and development. Not a true gambit as Black can't safely hold the pawn.",
        strategicThemes: [
            "Central control",
            "Minority attack",
            "Isolated queen pawn positions",
            "Piece activity"
        ],
        commonTraps: [
            "Elephant Trap",
            "Early queen sortie traps",
            "Exchange tricks"
        ],
        typicalPlans: [
            "Control the center",
            "Attack queenside minority",
            "Pressure isolated d-pawn",
            "Create passed c-pawn"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "d2",
                to: "d4",
                explanation: "Claims central space"
            },
            {
                from: "d7",
                to: "d5",
                explanation: "Black matches in the center"
            },
            {
                from: "c2",
                to: "c4",
                explanation: "The Queen's Gambit - offering a pawn for central control"
            }
        ]
    },

    benko_gambit: {
        name: "Benko Gambit",
        category: "Gambit",
        difficulty: "Advanced",
        popularity: 3,
        yearFirstPlayed: 1929,
        description: "A hypermodern gambit where Black sacrifices a pawn for long-term pressure on White's queenside. Popular at all levels of play.",
        strategicThemes: [
            "Queenside pressure",
            "Bishop activity",
            "Pawn breaks",
            "Rook play on a and b files"
        ],
        commonTraps: [
            "Early queen penetration",
            "a6 bishop traps",
            "Back rank tactics"
        ],
        typicalPlans: [
            "Control the a and b files",
            "Pressure the queenside pawns",
            "Create passed a-pawn",
            "Attack weak dark squares"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "d2",
                to: "d4",
                explanation: "White claims central space"
            },
            {
                from: "g8",
                to: "f6",
                explanation: "Black develops flexibly"
            },
            {
                from: "c2",
                to: "c4",
                explanation: "White expands in the center"
            },
            {
                from: "c7",
                to: "c5",
                explanation: "Black begins the Benko setup"
            },
            {
                from: "d4",
                to: "d5",
                explanation: "White claims more space"
            },
            {
                from: "b7",
                to: "b5",
                explanation: "The Benko Gambit - sacrificing a pawn for long-term pressure"
            }
        ]
    },

    budapest_gambit: {
        name: "Budapest Gambit",
        category: "Gambit",
        difficulty: "Intermediate",
        popularity: 2,
        yearFirstPlayed: 1896,
        description: "A sharp counter-attacking option against 1.d4 where Black sacrifices a pawn for quick development and attacking chances.",
        strategicThemes: [
            "Quick development",
            "Kingside pressure",
            "Active piece play",
            "Central control"
        ],
        commonTraps: [
            "Fajarowicz variation traps",
            "e4 push tactics",
            "Early queen sortie ideas"
        ],
        typicalPlans: [
            "Attack f2/f7 squares",
            "Control light squares",
            "Create kingside pressure",
            "Quick development advantage"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "d2",
                to: "d4",
                explanation: "White claims central space"
            },
            {
                from: "g8",
                to: "f6",
                explanation: "Black develops knight"
            },
            {
                from: "c2",
                to: "c4",
                explanation: "White expands in center"
            },
            {
                from: "e7",
                to: "e5",
                explanation: "The Budapest Gambit - sacrificing a pawn for activity"
            }
        ]
    },

    smith_morra_gambit: {
        name: "Smith-Morra Gambit",
        category: "Gambit",
        difficulty: "Intermediate",
        popularity: 3,
        yearFirstPlayed: 1925,
        description: "A dynamic gambit against the Sicilian where White sacrifices a pawn for rapid development and attacking chances.",
        strategicThemes: [
            "Open lines",
            "Piece activity",
            "Quick development",
            "King safety battles"
        ],
        commonTraps: [
            "d5 breakthrough tactics",
            "Bishop pin patterns",
            "Early queen attacks"
        ],
        typicalPlans: [
            "Control d5 square",
            "Attack weak dark squares",
            "Create kingside pressure",
            "Quick piece development"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "White claims central space"
            },
            {
                from: "c7",
                to: "c5",
                explanation: "The Sicilian Defense"
            },
            {
                from: "d2",
                to: "d4",
                explanation: "The Smith-Morra Gambit begins"
            },
            {
                from: "c5",
                to: "d4",
                explanation: "Black accepts the gambit"
            },
            {
                from: "c2",
                to: "c3",
                explanation: "White offers second pawn for development"
            }
        ]
    },

    danish_gambit: {
        name: "Danish Gambit",
        category: "Gambit",
        difficulty: "Intermediate",
        popularity: 2,
        yearFirstPlayed: 1800,
        description: "A romantic-era gambit where White sacrifices up to two pawns for rapid development and attacking chances.",
        strategicThemes: [
            "Rapid development",
            "Open lines",
            "King hunt",
            "Piece activity"
        ],
        commonTraps: [
            "Early queen attacks",
            "Bishop pin tactics",
            "f7 attacking patterns"
        ],
        typicalPlans: [
            "Quick piece development",
            "Attack f7 square",
            "Create open lines",
            "Early kingside attack"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "White claims central space"
            },
            {
                from: "e7",
                to: "e5",
                explanation: "Black matches in center"
            },
            {
                from: "d2",
                to: "d4",
                explanation: "The Danish Gambit begins"
            },
            {
                from: "e5",
                to: "d4",
                explanation: "Black accepts first pawn"
            },
            {
                from: "c2",
                to: "c3",
                explanation: "White offers second pawn"
            }
        ]
    },

    latvian_gambit: {
        name: "Latvian Gambit",
        category: "Gambit",
        difficulty: "Advanced",
        popularity: 1,
        yearFirstPlayed: 1881,
        description: "A highly aggressive but risky gambit where Black sacrifices a pawn for attacking chances. More common in blitz chess.",
        strategicThemes: [
            "King hunt",
            "Open lines",
            "Piece activity",
            "Tactical complications"
        ],
        commonTraps: [
            "Early queen attacks",
            "f-file tactics",
            "King hunt patterns"
        ],
        typicalPlans: [
            "Attack White's king",
            "Control f-file",
            "Create tactical chaos",
            "Quick piece activation"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "White claims central space"
            },
            {
                from: "e7",
                to: "e5",
                explanation: "Black matches in center"
            },
            {
                from: "g1",
                to: "f3",
                explanation: "White develops naturally"
            },
            {
                from: "f7",
                to: "f5",
                explanation: "The Latvian Gambit - extremely aggressive"
            }
        ]
    },

    blackmar_diemer_gambit: {
        name: "Blackmar-Diemer Gambit",
        category: "Gambit",
        difficulty: "Intermediate",
        popularity: 2,
        yearFirstPlayed: 1889,
        description: "An aggressive gambit where White sacrifices a pawn to open lines and create attacking chances against Black's king.",
        strategicThemes: [
            "Open lines",
            "Piece activity",
            "King hunt",
            "Pawn weaknesses"
        ],
        commonTraps: [
            "e5 push tactics",
            "Bishop pin patterns",
            "Queen raid ideas"
        ],
        typicalPlans: [
            "Control e5 square",
            "Attack f7 point",
            "Create kingside pressure",
            "Quick piece development"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "d2",
                to: "d4",
                explanation: "White claims central space"
            },
            {
                from: "d7",
                to: "d5",
                explanation: "Black challenges center"
            },
            {
                from: "e2",
                to: "e4",
                explanation: "The Blackmar-Diemer Gambit"
            },
            {
                from: "d5",
                to: "e4",
                explanation: "Black accepts the gambit"
            },
            {
                from: "b1",
                to: "c3",
                explanation: "White prepares to regain the pawn"
            }
        ]
    }
};

// Add to the main OPENINGS object
Object.assign(OPENINGS, GAMBIT_OPENINGS); 