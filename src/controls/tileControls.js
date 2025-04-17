import { updateHighlight } from '../helpers/tileNavigationHelper.js';
import { getVisibleTileIndexInWindow } from '../helpers/tileNavigationHelper.js';
import { calculateTranslateX } from '../helpers/scrolling.js';
import { handleShowInformation } from '../helpers/showInformationActions.js';
import { getCurrentTileIndex } from '../helpers/tileNavigationHelper.js';
import { fetchReq } from '../services/api.js';
import { dataStore } from '../helpers/datastores.js';
import Tile from '../components/tile/Tile.js';

export function handleTileKeyEvents(event) {
    let tile = document.querySelector('.tile.selected') || document.querySelector('.tile');
    if (!tile) return;

    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            handleVerticalNavigation(tile, event.key);
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            handleHorizontalNavigation(tile, event.key);
            break;
        case 'Enter':
        case ' ':
            handleTileEnter(tile);
            break;
        default:
            break;
    }
}

function handleVerticalNavigation(tile, direction) {
    const currentRow = tile.closest('.set-container');
    const nextRow = direction === 'ArrowDown' ? currentRow.nextElementSibling : currentRow.previousElementSibling;

    if (!nextRow) return;


    navigateToNextRow(nextRow, tile);
}

export async function handleRowData(nextRow, focusTile = false) {
    const lazySetWrapper = await fetchReq(nextRow.dataset.refId);
    const fragment = document.createDocumentFragment();
    

    lazySetWrapper.items.forEach(tile => {
        dataStore.set(tile.id, tile);
        fragment.appendChild((new Tile(tile)).getElement());
    });
    
    const selectedTilePosition = document.querySelector('.tile.selected');
    const currentTileIndex = getCurrentTileIndex(selectedTilePosition);
    nextRow.querySelector('.slider').replaceChildren(fragment);

    if(focusTile) {
        nextRow.querySelectorAll('.tile')[currentTileIndex].classList.add('selected')
        const tile = document.querySelector('.tile.selected');
        navigateToNextRow(nextRow, tile);
    }
    
    delete nextRow.dataset.refId;
}

function navigateToNextRow(nextRow, tile) {
    const nextRowTiles = nextRow.querySelectorAll('.tile');
    const nextRowOffset = Number(nextRow.dataset.offsetElement) || 0;
    const visibleIndex = Math.max(0, getVisibleTileIndexInWindow(tile));
    const nextTileIndex = Math.min(visibleIndex, nextRowTiles.length - 1);
    const nextTile = nextRowTiles[nextTileIndex + nextRowOffset];
    const translateX = nextRowOffset === 0 ? calculateTranslateX(nextTile, nextTile) : 0;
    updateHighlight(nextTile, translateX);
}

function handleHorizontalNavigation(tile, direction) {
    let nextTile = null;

    if (direction === 'ArrowLeft') {
        nextTile = tile.previousElementSibling?.classList.contains('tile') ? tile.previousElementSibling : null;
    } else if (direction === 'ArrowRight') {
        nextTile = tile.nextElementSibling?.classList.contains('tile') ? tile.nextElementSibling : null;
    }

    if (nextTile) {
        const tileStyle = window.getComputedStyle(tile);
        const tileWidth = parseFloat(tileStyle.width);
        const currentRow = tile.closest('.set-container');
        const visibleTilesInWindow = Math.floor(window.innerWidth / tileWidth);
        const offset = getCurrentTileIndex(nextTile) + 1 - visibleTilesInWindow
        currentRow.dataset.offsetElement = offset <= 0 ? 0: offset

        updateHighlight(nextTile, calculateTranslateX(tile, nextTile));
    }
}

function handleTileEnter(tile) {
    handleShowInformation(tile);
}
