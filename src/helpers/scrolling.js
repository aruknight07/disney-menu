import { getCurrentTileIndex } from "./tileNavigationHelper";
import { handleRowData } from "../handlers/tileHandlers";

const FLEX_GAP = '0.5';

/**
 * calculates the total amount of visible tiles inside a row at a time.
 */
export function calculateVisibleTilesInRow(tile) {
    const tileWidth = tile.getBoundingClientRect().width;
    const windowWidth = window.innerWidth;
    return Math.floor(windowWidth / tileWidth);
}

/**
 * Calculates the translateX value to position the slider correctly.
 */
export function calculateTranslateX(tile, nextElement) {
    // Get the original width of a single tile by using computed style
    const tileStyle = window.getComputedStyle(tile);
    const tileWidth = parseFloat(tileStyle.width); // This gives the actual width without scaling

    // Calculate the number of visible tiles dynamically
    const visibleTilesAtATime = Math.floor(window.innerWidth / tileWidth);

    const nextTileIndex = getCurrentTileIndex(nextElement) + 1;

    return `translateX(calc(-${nextElement.getBoundingClientRect().width * (nextTileIndex - visibleTilesAtATime)}px - ${(nextTileIndex - visibleTilesAtATime) * FLEX_GAP}rem))`;
}

function isElementVisible(el) {
    // Get the element's bounding rectangle relative to the viewport
    const rect = el.getBoundingClientRect();

    return (
        rect.bottom > 0 && // Part of the element is below the top of the viewport
        rect.top < (window.innerHeight || document.documentElement.clientHeight) && // Part of the element is above the bottom of the viewport
        rect.right > 0 && // Part of the element is left of the right of the viewport
        rect.left < (window.innerWidth || document.documentElement.clientWidth) // Part of the element is right of the left of the viewport
    );
}

export const scrollingHandler = (event) => {
    const rowElements = document.querySelectorAll('[data-ref-id]');
    
    rowElements.forEach((rowElement, index) => {
        if (rowElement && isElementVisible(rowElement)) {
            handleRowData(rowElement, index === 0)
        }
    });
}

