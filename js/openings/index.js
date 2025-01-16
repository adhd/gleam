// Main entry point for openings
import { basicOpenings } from './basic.js';
import { advancedOpenings } from './advanced.js';
import { gambits } from './gambits.js';

export const OPENINGS = {
    ...basicOpenings,
    ...advancedOpenings,
    ...gambits
}; 