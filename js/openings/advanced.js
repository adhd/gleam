const ADVANCED_OPENINGS = {
    sicilian_najdorf: {
        name: "Sicilian Defense: Najdorf Variation",
        category: "Advanced",
        difficulty: "Expert",
        popularity: 5,
        yearFirstPlayed: 1950,
        description: "One of the sharpest and most theoretically dense openings. The Najdorf is a complex variation favored by many world champions including Fischer and Kasparov.",
        strategicThemes: [
            "Dynamic counterplay",
            "Control of d5 square",
            "Queenside expansion",
            "King safety"
        ],
        commonTraps: [
            "English Attack tactics",
            "Poisoned pawn variation traps",
            "Fischer-Sozin Attack dangers"
        ],
        typicalPlans: [
            "Push ...e5 to challenge White's center",
            "Develop bishop to e6 with queenside castle",
            "Prepare ...b5 advance",
            "Control the d5 square"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "White establishes central control"
            },
            {
                from: "c7",
                to: "c5",
                explanation: "The Sicilian Defense - Fighting for central control asymmetrically"
            },
            {
                from: "g1",
                to: "f3",
                explanation: "Develops knight and protects e4"
            },
            {
                from: "d7",
                to: "d6",
                explanation: "Prepares for the Najdorf structure"
            },
            {
                from: "d2",
                to: "d4",
                explanation: "White strikes in the center"
            },
            {
                from: "c5",
                to: "d4",
                explanation: "Captures and creates tension"
            },
            {
                from: "f3",
                to: "d4",
                explanation: "Recaptures with the knight"
            },
            {
                from: "g8",
                to: "f6",
                explanation: "Develops kingside knight"
            },
            {
                from: "b1",
                to: "c3",
                explanation: "Develops knight and supports e4"
            },
            {
                from: "a7",
                to: "a6",
                explanation: "The defining Najdorf move - prevents Bb5+ and prepares ...e5"
            }
        ]
    },

    kings_indian_defense: {
        name: "King's Indian Defense: Classical Variation",
        category: "Advanced",
        difficulty: "Expert",
        popularity: 4,
        yearFirstPlayed: 1925,
        description: "A hypermodern defense where Black allows White to establish a broad pawn center, planning to counter-attack it later. A favorite of many aggressive players.",
        strategicThemes: [
            "Kingside attack",
            "Pawn storm",
            "Central tension",
            "Piece sacrifice themes"
        ],
        commonTraps: [
            "Bayonet Attack tactics",
            "g4 breakthrough ideas",
            "e5 pawn breaks"
        ],
        typicalPlans: [
            "Launch kingside pawn storm with ...f5, ...g4",
            "Prepare ...e5 break",
            "Maneuver knight to f4 via e7",
            "Sacrifice on e4 for attack"
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
                explanation: "Black prepares fianchetto setup"
            },
            {
                from: "c2",
                to: "c4",
                explanation: "White expands in the center"
            },
            {
                from: "g7",
                to: "g6",
                explanation: "The King's Indian setup begins"
            },
            {
                from: "b1",
                to: "c3",
                explanation: "Develops knight and supports d4"
            },
            {
                from: "f8",
                to: "g7",
                explanation: "Completes the fianchetto"
            },
            {
                from: "e2",
                to: "e4",
                explanation: "White establishes a classical pawn center"
            }
        ]
    },

    grunfeld_defense: {
        name: "Grünfeld Defense",
        category: "Advanced",
        difficulty: "Expert",
        popularity: 5,
        yearFirstPlayed: 1922,
        description: "A dynamic opening where Black immediately strikes at White's center, leading to complex tactical play. Requires precise understanding of move orders.",
        strategicThemes: [
            "Central tension",
            "Piece activity",
            "Queenside minority attack",
            "Control of d5"
        ],
        commonTraps: [
            "Exchange variation tactics",
            "Early queen sorties",
            "d5 breakthrough themes"
        ],
        typicalPlans: [
            "Challenge White's center with ...c5",
            "Control d5 square",
            "Attack isolated queen pawn",
            "Create passed d-pawn"
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
                explanation: "Black develops with flexibility"
            },
            {
                from: "c2",
                to: "c4",
                explanation: "White expands in the center"
            },
            {
                from: "g7",
                to: "g6",
                explanation: "Prepares the Grünfeld setup"
            },
            {
                from: "b1",
                to: "c3",
                explanation: "Develops knight and supports d4"
            },
            {
                from: "d7",
                to: "d5",
                explanation: "The key Grünfeld move - immediately striking at White's center"
            }
        ]
    },

    ruy_lopez_closed: {
        name: "Ruy Lopez: Closed Variation",
        category: "Advanced",
        difficulty: "Expert",
        popularity: 5,
        yearFirstPlayed: 1560,
        description: "One of the most sophisticated and deeply analyzed openings in chess. The closed Ruy Lopez leads to complex positional battles with many subtle nuances.",
        strategicThemes: [
            "Minority attack",
            "Bishop pair advantage",
            "Pawn structure battles",
            "Prophylaxis"
        ],
        commonTraps: [
            "Marshall Attack themes",
            "c3 knight fork tricks",
            "Exchange sacrifice ideas"
        ],
        typicalPlans: [
            "Prepare and execute a5-a4 advance",
            "Control the center with c3 and d4",
            "Maneuver knight to better squares",
            "Create passed c-pawn"
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
                explanation: "Defends e5 and develops"
            },
            {
                from: "f1",
                to: "b5",
                explanation: "The Ruy Lopez - pins the knight and prepares castling"
            },
            {
                from: "a7",
                to: "a6",
                explanation: "The Morphy Defense - challenges White's bishop"
            },
            {
                from: "b5",
                to: "a4",
                explanation: "Maintains the pin - the closed variation"
            }
        ]
    },

    nimzo_indian: {
        name: "Nimzo-Indian Defense",
        category: "Advanced",
        difficulty: "Expert",
        popularity: 5,
        yearFirstPlayed: 1914,
        description: "A sophisticated defense where Black pins White's knight and fights for control of e4. One of the most respected defenses at the highest levels.",
        strategicThemes: [
            "Control of e4 square",
            "Pawn structure battles",
            "Bishop pair advantage",
            "IQP positions"
        ],
        commonTraps: [
            "e3-e4 breakthrough tactics",
            "Minority attack patterns",
            "c5 break timing"
        ],
        typicalPlans: [
            "Double White's pawns",
            "Control e4 and c4 squares",
            "Create isolated queen pawn",
            "Exploit pawn weaknesses"
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
                explanation: "White expands in center"
            },
            {
                from: "e7",
                to: "e6",
                explanation: "Black prepares development"
            },
            {
                from: "b1",
                to: "c3",
                explanation: "White develops knight"
            },
            {
                from: "f8",
                to: "b4",
                explanation: "The key Nimzo-Indian move - pinning the knight"
            }
        ]
    },

    alekhines_defense: {
        name: "Alekhine's Defense",
        category: "Advanced",
        difficulty: "Expert",
        popularity: 3,
        yearFirstPlayed: 1921,
        description: "A provocative defense where Black allows White to chase their knight, planning to undermine White's center later. Named after World Champion Alexander Alekhine.",
        strategicThemes: [
            "Hypermodern play",
            "Pawn center destruction",
            "Dynamic piece play",
            "Complex tactics"
        ],
        commonTraps: [
            "Early queen sortie traps",
            "Center collapse tactics",
            "f6 break opportunities"
        ],
        typicalPlans: [
            "Provoke pawn advances",
            "Undermine pawn center",
            "Create counterplay on flanks",
            "Attack overextended pawns"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "White claims central space"
            },
            {
                from: "g8",
                to: "f6",
                explanation: "Alekhine's Defense - provocatively attacking e4"
            },
            {
                from: "e4",
                to: "e5",
                explanation: "White chases the knight"
            },
            {
                from: "f6",
                to: "d5",
                explanation: "Knight retreats, preparing to undermine White's center"
            }
        ]
    },

    catalan_opening: {
        name: "Catalan Opening",
        category: "Advanced",
        difficulty: "Expert",
        popularity: 5,
        yearFirstPlayed: 1929,
        description: "A sophisticated queen's pawn opening where White fianchettoes the king's bishop and maintains pressure on the center. Popular among positional players.",
        strategicThemes: [
            "Queenside expansion",
            "Bishop pair advantage",
            "Positional pressure",
            "Long-term strategy"
        ],
        commonTraps: [
            "Early Bb5+ tactics",
            "d5 break timing",
            "e4 transformation ideas"
        ],
        typicalPlans: [
            "Control long diagonal",
            "Create queenside pressure",
            "Maintain flexible pawn structure",
            "Gradual positional squeeze"
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
                explanation: "Black develops naturally"
            },
            {
                from: "c2",
                to: "c4",
                explanation: "White expands in center"
            },
            {
                from: "e7",
                to: "e6",
                explanation: "Black prepares development"
            },
            {
                from: "g2",
                to: "g3",
                explanation: "Preparing the Catalan bishop fianchetto"
            }
        ]
    },

    dragon_sicilian: {
        name: "Sicilian Defense: Dragon Variation",
        category: "Advanced",
        difficulty: "Expert",
        popularity: 4,
        yearFirstPlayed: 1880,
        description: "One of the sharpest variations of the Sicilian Defense. Black fianchettoes their king's bishop and prepares for a kingside attack.",
        strategicThemes: [
            "Kingside attack",
            "Opposite side castling",
            "Pawn storms",
            "Piece sacrifices"
        ],
        commonTraps: [
            "Yugoslav Attack tactics",
            "h-pawn storm ideas",
            "Piece sacrifice themes"
        ],
        typicalPlans: [
            "Attack White's kingside",
            "Control long diagonal",
            "Create kingside pawn storm",
            "Sacrifice on h2/h3"
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
                from: "g1",
                to: "f3",
                explanation: "White develops naturally"
            },
            {
                from: "d7",
                to: "d6",
                explanation: "Black prepares the Dragon setup"
            },
            {
                from: "d2",
                to: "d4",
                explanation: "White challenges the center"
            },
            {
                from: "g7",
                to: "g6",
                explanation: "The Dragon variation - preparing to fianchetto"
            }
        ]
    }
};

// Add to the main OPENINGS object
Object.assign(OPENINGS, ADVANCED_OPENINGS); 