#!/bin/bash

# Create the SVG files for all chess pieces
cd assets

# Function to create a piece SVG file
create_piece() {
    local filename=$1
    local content=$2
    echo "$content" > "$filename"
    echo "Created $filename"
}

# Create white pieces
create_piece "wp.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="m22.5 9c-2.21 0-4 1.79-4 4 0 0.89 0.29 1.71 0.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03 0.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62 0.49-0.67 0.78-1.49 0.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-linecap="round" stroke-width="1.5"/>
</svg>'

create_piece "wr.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fff" stroke="#000" stroke-width="1.5">
        <path d="m9 39h27v-3h-27v3z" stroke-linecap="round"/>
        <path d="m12 36v-4h21v4h-21z" stroke-linecap="round"/>
        <path d="m11 14v-5h4v2h5v-2h5v2h5v-2h4v5" stroke-linecap="round"/>
        <path d="m34 14-3 3h-17l-3-3"/>
        <path d="m31 17v12.5h-17v-12.5" stroke-linecap="round"/>
    </g>
</svg>'

create_piece "wn.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fff" stroke="#000">
        <path d="m22 10c10.5 1 16.5 8 16 29h-23c0-9 10-6.5 8-21"/>
        <path d="m24 18c0.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-0.94 1.41-3.04 0-3-1 0 0.19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-0.73-0.994-0.5-2-0.5-3 1-1 3 2.5 3 2.5h2s0.78-1.992 2.5-3c1 0 1 3 1 3" stroke-linecap="round"/>
    </g>
</svg>'

create_piece "wb.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="m9 36c3.39-0.97 10.11 0.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65 0.54 3 2-0.68 0.97-1.65 0.99-3 0.5-3.39-0.97-10.11 0.46-13.5-1-3.39 1.46-10.11 0.03-13.5 1-1.354 0.49-2.323 0.47-3-0.5 1.354-1.94 3-2 3-2z"/>
        <path d="m15 32c2.5 2.5 12.5 2.5 15 0 0.5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-0.5 0.5 0 2z"/>
    </g>
</svg>'

create_piece "wq.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fff" stroke="#000" stroke-width="1.5">
        <path d="m9 26c8.5-1.5 21-1.5 27 0l2-12-7 11v-14l-5.5 13.5-3-15-3 15-5.5-14v14.5l-7-11z" stroke-linecap="round"/>
        <path d="m9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 0.5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 0.5-1.5-1-2.5-0.5-2.5-0.5-2 0.5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="round"/>
    </g>
</svg>'

create_piece "wk.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fff" stroke="#000" stroke-width="1.5">
        <path d="m22.5 11.63v-5.63"/>
        <path d="m22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/>
        <path d="m11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4v3.5-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10v7.5z"/>
    </g>
</svg>'

# Create black pieces
create_piece "bp.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="m22.5 9c-2.21 0-4 1.79-4 4 0 0.89 0.29 1.71 0.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03 0.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62 0.49-0.67 0.78-1.49 0.78-2.38 0-2.21-1.79-4-4-4z" fill="#000" stroke="#000" stroke-linecap="round" stroke-width="1.5"/>
</svg>'

create_piece "br.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#000" stroke="#000" stroke-width="1.5">
        <path d="m9 39h27v-3h-27v3z" stroke-linecap="round"/>
        <path d="m12 36v-4h21v4h-21z" stroke-linecap="round"/>
        <path d="m11 14v-5h4v2h5v-2h5v2h5v-2h4v5" stroke-linecap="round"/>
        <path d="m34 14-3 3h-17l-3-3"/>
        <path d="m31 17v12.5h-17v-12.5" stroke-linecap="round"/>
    </g>
</svg>'

create_piece "bn.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#000" stroke="#000">
        <path d="m22 10c10.5 1 16.5 8 16 29h-23c0-9 10-6.5 8-21"/>
        <path d="m24 18c0.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-0.94 1.41-3.04 0-3-1 0 0.19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-0.73-0.994-0.5-2-0.5-3 1-1 3 2.5 3 2.5h2s0.78-1.992 2.5-3c1 0 1 3 1 3" stroke-linecap="round"/>
    </g>
</svg>'

create_piece "bb.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="m9 36c3.39-0.97 10.11 0.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65 0.54 3 2-0.68 0.97-1.65 0.99-3 0.5-3.39-0.97-10.11 0.46-13.5-1-3.39 1.46-10.11 0.03-13.5 1-1.354 0.49-2.323 0.47-3-0.5 1.354-1.94 3-2 3-2z"/>
        <path d="m15 32c2.5 2.5 12.5 2.5 15 0 0.5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-0.5 0.5 0 2z"/>
    </g>
</svg>'

create_piece "bq.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#000" stroke="#000" stroke-width="1.5">
        <path d="m9 26c8.5-1.5 21-1.5 27 0l2-12-7 11v-14l-5.5 13.5-3-15-3 15-5.5-14v14.5l-7-11z" stroke-linecap="round"/>
        <path d="m9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 0.5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 0.5-1.5-1-2.5-0.5-2.5-0.5-2 0.5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="round"/>
    </g>
</svg>'

create_piece "bk.svg" '<?xml version="1.0" encoding="UTF-8"?>
<svg width="45" height="45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="#000" stroke="#000" stroke-width="1.5">
        <path d="m22.5 11.63v-5.63"/>
        <path d="m22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/>
        <path d="m11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4v3.5-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10v7.5z"/>
    </g>
</svg>'

# Make the script executable
chmod +x create_pieces.sh

echo "All chess piece SVGs have been created!" 