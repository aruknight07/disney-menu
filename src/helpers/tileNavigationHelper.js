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

export function getVisibleTileIndexInWindow(tile) {
    const currentRow = tile.closest('.container');
    const tileStyle = window.getComputedStyle(tile);
    const tileWidth = parseFloat(tileStyle.width);

    const visibleTilesInWindow = Math.floor(window.innerWidth / tileWidth);
    const tileOffset = tile.getBoundingClientRect().left - currentRow.getBoundingClientRect().left;

    return Math.round(tileOffset / tileWidth);
}