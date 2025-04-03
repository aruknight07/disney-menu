export function getVisibleTileIndexInWindow(tile) {
    const currentRow = tile.closest('.container');
    const tileStyle = window.getComputedStyle(tile);
    const tileWidth = parseFloat(tileStyle.width);

    const visibleTilesInWindow = Math.floor(window.innerWidth / tileWidth);
    const tileOffset = tile.getBoundingClientRect().left - currentRow.getBoundingClientRect().left;

    return Math.round(tileOffset / tileWidth);
}