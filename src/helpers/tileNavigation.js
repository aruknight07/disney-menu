export function getCurrentTileIndex(tile) {
    return Array.from(tile.parentNode.children).indexOf(tile);
}

export function updateHighlight(tile, translateX = '') {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(col => col.classList.remove('selected'));

    tile.classList.add('selected');
    
    // Update the parent container's transform property for horizontal scrolling
    tile.parentElement.style.transform = translateX;
    tile.parentElement.setAttribute('current-tile', getCurrentTileIndex(tile));

    // Focus the tile
    tile.focus();
}
