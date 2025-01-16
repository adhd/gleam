const BASIC_OPENINGS = {
    italian_game: {
        name: "Italian Game",
        category: "Basic",
        difficulty: "Beginner",
        popularity: 5, // 1-5 scale
        yearFirstPlayed: 1560,
        description: "One of the oldest and most straightforward openings. Focuses on controlling the center and developing pieces naturally.",
        strategicThemes: [
            "Central control",
            "Quick development",
            "Kingside attacking chances"
        ],
        commonTraps: [
            "Fried Liver Attack if Black plays incorrectly",
            "Scholar's Mate needs to be watched"
        ],
        typicalPlans: [
            "Attack the f7 square",
            "Control the center with pawns",
            "Develop bishops to active squares"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "Controls the center and opens lines for bishop and queen"
            },
            {
                from: "e7",
                to: "e5",
                explanation: "Black matches White's central control"
            },
            {
                from: "g1",
                to: "f3",
                explanation: "Develops knight and attacks e5"
            },
            {
                from: "b8",
                to: "c6",
                explanation: "Defends e5 and develops a piece"
            },
            {
                from: "f1",
                to: "c4",
                explanation: "The defining move of the Italian Game - develops bishop to an active square"
            }
        ]
    },

    french_defense: {
        name: "French Defense",
        category: "Basic",
        difficulty: "Beginner-Intermediate",
        popularity: 4,
        yearFirstPlayed: 1834,
        description: "A solid defense where Black challenges White's center immediately and aims for counterplay.",
        strategicThemes: [
            "Pawn chains",
            "Light square control",
            "Queenside expansion"
        ],
        commonTraps: [
            "Wing Gambit trap",
            "Early queen sortie traps"
        ],
        typicalPlans: [
            "Break with c5 or f6",
            "Attack White's pawn chain",
            "Control the e5 square"
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
                to: "e6",
                explanation: "The French Defense - Solidly protects d5 for a future advance"
            },
            {
                from: "d2",
                to: "d4",
                explanation: "White establishes a strong pawn center"
            },
            {
                from: "d7",
                to: "d5",
                explanation: "Challenges White's center immediately"
            }
        ]
    },

    caro_kann: {
        name: "Caro-Kann Defense",
        category: "Basic",
        difficulty: "Beginner-Intermediate",
        popularity: 4,
        yearFirstPlayed: 1839,
        description: "A very solid defense that avoids early tactical complications while maintaining good structure.",
        strategicThemes: [
            "Solid pawn structure",
            "Counter-attack in the center",
            "Endgame strength"
        ],
        commonTraps: [
            "Mortimer Trap",
            "Fantasy Variation tactics"
        ],
        typicalPlans: [
            "Challenge White's center with c5",
            "Develop bishop before e6",
            "Control the e5 square"
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
                to: "c6",
                explanation: "The Caro-Kann - Prepares d5 with solid pawn support"
            },
            {
                from: "d2",
                to: "d4",
                explanation: "White establishes a strong pawn center"
            },
            {
                from: "d7",
                to: "d5",
                explanation: "Challenges the center with good pawn support"
            }
        ]
    },

    scandinavian_defense: {
        name: "Scandinavian Defense",
        category: "Basic",
        difficulty: "Beginner",
        popularity: 3,
        yearFirstPlayed: 1475,
        description: "One of the oldest recorded openings. Black immediately challenges White's center with the queen pawn.",
        strategicThemes: [
            "Early center confrontation",
            "Quick piece development",
            "Queen mobility"
        ],
        commonTraps: [
            "Icelandic Gambit",
            "Early queen harassment"
        ],
        typicalPlans: [
            "Develop queen safely after recapture",
            "Control central light squares",
            "Castle queenside in some variations"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "White claims central space"
            },
            {
                from: "d7",
                to: "d5",
                explanation: "Immediately challenges White's center pawn"
            },
            {
                from: "e4",
                to: "d5",
                explanation: "White captures, gaining time"
            },
            {
                from: "d8",
                to: "d5",
                explanation: "Recaptures with the queen - the main line"
            }
        ]
    },

    london_system: {
        name: "London System",
        category: "Basic",
        difficulty: "Beginner",
        popularity: 5,
        yearFirstPlayed: 1922,
        description: "A solid system opening that White can play against almost any Black setup. Very popular at club level.",
        strategicThemes: [
            "Quick development",
            "Solid pawn structure",
            "Bishop pair potential"
        ],
        commonTraps: [
            "Raptor Variation tactics",
            "Early h4-h5 kingside attack"
        ],
        typicalPlans: [
            "Develop dark-squared bishop to f4",
            "Control e5 square",
            "Prepare queenside castle"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "d2",
                to: "d4",
                explanation: "Establishes central presence"
            },
            {
                from: "d7",
                to: "d5",
                explanation: "Black matches in the center"
            },
            {
                from: "c1",
                to: "f4",
                explanation: "The characteristic London System move"
            },
            {
                from: "g8",
                to: "f6",
                explanation: "Natural development"
            },
            {
                from: "e2",
                to: "e3",
                explanation: "Supports the bishop and prepares Bd3"
            }
        ]
    },

    pirc_defense: {
        name: "Pirc Defense",
        category: "Basic",
        difficulty: "Beginner-Intermediate",
        popularity: 3,
        yearFirstPlayed: 1929,
        description: "A flexible hypermodern defense where Black allows White to build a center, planning to undermine it later. Good for players who enjoy counterattacking.",
        strategicThemes: [
            "Hypermodern center control",
            "Kingside fianchetto",
            "Flexible pawn structure",
            "Counter-attack preparation"
        ],
        commonTraps: [
            "Early h-pawn push traps",
            "e5 break tactics",
            "g4 attacking ideas"
        ],
        typicalPlans: [
            "Fianchetto kingside bishop",
            "Prepare ...e5 or ...c5 breaks",
            "Control dark squares",
            "Kingside castle and attack"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "White takes central space"
            },
            {
                from: "d7",
                to: "d6",
                explanation: "Black prepares for a flexible setup"
            },
            {
                from: "d2",
                to: "d4",
                explanation: "White establishes a strong center"
            },
            {
                from: "g8",
                to: "f6",
                explanation: "Develops knight and prepares fianchetto"
            },
            {
                from: "b1",
                to: "c3",
                explanation: "White develops naturally"
            },
            {
                from: "g7",
                to: "g6",
                explanation: "The key Pirc move - preparing to fianchetto"
            }
        ]
    },

    modern_defense: {
        name: "Modern Defense",
        category: "Basic",
        difficulty: "Beginner-Intermediate",
        popularity: 3,
        yearFirstPlayed: 1920,
        description: "A highly flexible defense where Black develops the kingside fianchetto and waits to see White's setup before committing to a structure.",
        strategicThemes: [
            "Flexible pawn structure",
            "Hypermodern center control",
            "Dynamic piece play",
            "Multiple pawn break options"
        ],
        commonTraps: [
            "Early h4-h5 attacks",
            "d5 break tactics",
            "Quick kingside attacks"
        ],
        typicalPlans: [
            "Fianchetto kingside bishop",
            "Prepare ...c5 or ...e5 breaks",
            "Control dark squares",
            "Flexible central response"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "e2",
                to: "e4",
                explanation: "White claims central space"
            },
            {
                from: "g7",
                to: "g6",
                explanation: "The Modern Defense - immediate fianchetto preparation"
            },
            {
                from: "d2",
                to: "d4",
                explanation: "White establishes central control"
            },
            {
                from: "f8",
                to: "g7",
                explanation: "Completes the fianchetto"
            }
        ]
    },

    queens_indian_defense: {
        name: "Queen's Indian Defense",
        category: "Basic",
        difficulty: "Beginner-Intermediate",
        popularity: 4,
        yearFirstPlayed: 1924,
        description: "A solid defense to 1.d4 where Black fianchettoes the queen's bishop and maintains flexibility. Very popular at all levels.",
        strategicThemes: [
            "Queenside fianchetto",
            "Solid pawn structure",
            "Minor piece activity",
            "Strategic play"
        ],
        commonTraps: [
            "b4 push tactics",
            "e4 break opportunities",
            "Knight outpost traps"
        ],
        typicalPlans: [
            "Control e4 square",
            "Prepare ...b6 and ...Bb7",
            "Control light squares",
            "Create queenside pressure"
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
                explanation: "Black prepares fianchetto"
            },
            {
                from: "g1",
                to: "f3",
                explanation: "White develops naturally"
            },
            {
                from: "b7",
                to: "b6",
                explanation: "The Queen's Indian setup"
            }
        ]
    },

    english_opening: {
        name: "English Opening",
        category: "Basic",
        difficulty: "Beginner",
        popularity: 4,
        yearFirstPlayed: 1843,
        description: "A flexible flank opening that can transpose into many different structures. Named after Howard Staunton, the unofficial World Champion from England.",
        strategicThemes: [
            "Flexible pawn structure",
            "Queenside control",
            "Reversed Sicilian positions",
            "Strategic play"
        ],
        commonTraps: [
            "Early b4 pushes",
            "d5 break tactics",
            "e4 transformation ideas"
        ],
        typicalPlans: [
            "Control b5 square",
            "Prepare queenside expansion",
            "Build pawn triangle",
            "Control central light squares"
        ],
        initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        sequence: [
            {
                from: "c2",
                to: "c4",
                explanation: "The English Opening - controlling d5 from the flank"
            },
            {
                from: "e7",
                to: "e5",
                explanation: "Black claims central space"
            },
            {
                from: "b1",
                to: "c3",
                explanation: "Develops knight and supports c4"
            },
            {
                from: "g8",
                to: "f6",
                explanation: "Natural development"
            }
        ]
    },

    philidor_defense: {
        name: "Philidor Defense",
        category: "Basic",
        difficulty: "Beginner",
        popularity: 2,
        yearFirstPlayed: 1749,
        description: "A solid but passive defense named after François-André Danican Philidor. Provides a safe but somewhat restricted position.",
        strategicThemes: [
            "Solid pawn structure",
            "Counter-attack preparation",
            "Central control",
            "Defensive setup"
        ],
        commonTraps: [
            "d5 break tactics",
            "f5 push opportunities",
            "Kingside attacking patterns"
        ],
        typicalPlans: [
            "Defend e5 pawn",
            "Prepare ...f5 break",
            "Control d4 square",
            "Counter in the center"
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
                explanation: "Attacks e5"
            },
            {
                from: "d7",
                to: "d6",
                explanation: "The Philidor - solidly defends e5"
            }
        ]
    }
};

// Add to the main OPENINGS object
Object.assign(OPENINGS, BASIC_OPENINGS); 

console.log('BASIC_OPENINGS:', typeof BASIC_OPENINGS, BASIC_OPENINGS);
console.log('OPENINGS before assign:', OPENINGS);
console.log('After assign:', OPENINGS);