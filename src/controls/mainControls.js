import { handleTileKeyEvents } from './tileControls';
import { handleSidebarKeyEvents } from './sideBarControls';

export function setMainControls() {
    document.querySelector('html').addEventListener('keydown', (event) => {
        event.stopPropagation();
        event.preventDefault();

        const currentScreen = getCurrentScreen();

        if (currentScreen === 'tiles') {
            handleTileKeyEvents(event);
        } else if (currentScreen === 'sidebar') {
            handleSidebarKeyEvents(event);
        }
    });
}

function getCurrentScreen() {
    if (document.querySelector('.sidenav.visible')) {
        return 'sidebar';
    } else {
        return 'tiles';
    }
}
