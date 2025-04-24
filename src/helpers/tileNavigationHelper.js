export function getCurrentTileIndex(tile) {
    if(!tile) return -1;
    return Array.from(tile.parentNode.children).indexOf(tile);
}

export function updateHighlight(tile, translateX = '') {
    if(!tile) return;
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(col => col.classList.remove('selected'));

    tile.classList.add('selected');
    
    const currentTileIndex = getCurrentTileIndex(tile);
    if(currentTileIndex >= 0) {
        // Update the parent container's transform property for horizontal scrolling
        tile.parentElement.style.transform = translateX;
        tile.parentElement.setAttribute('current-tile', currentTileIndex);
        // Focus the tile
        tile.focus();
    }

    
}

export function getVisibleTileIndexInWindow(tile) {
    const currentRow = tile.closest('.container');
    const tileStyle = window.getComputedStyle(tile);
    const tileWidth = parseFloat(tileStyle.width);

    const visibleTilesInWindow = Math.floor(window.innerWidth / tileWidth);
    const tileOffset = tile.getBoundingClientRect().left - currentRow.getBoundingClientRect().left;

    return Math.round(tileOffset / tileWidth);
}