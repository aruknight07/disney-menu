import { fetchHome } from '../services/api.js';
import { handleTileKeyEvents } from '../handlers/tileHandlers.js';
import { handleSidebarKeyEvents } from '../handlers/sideBarHandlers.js';
import { scrollingHandler } from '../helpers/scrolling.js';
import { setHighResolutionImageLoadEvent, setHandleBrokenImg } from '../helpers/imageHelpers.js';

class HomeController {
  constructor(view) {
    this.view = view;
  }

  async init() {
    // Set up image handlers
    setHighResolutionImageLoadEvent();
    setHandleBrokenImg();
    const collection = await fetchHome();
    this.bindKeyDownEvents();
    this.bindScrollEvents();
    this.view.render(collection);
  }

  bindKeyDownEvents() {
    document.querySelector('html').addEventListener('keydown', (event) => {
            event.stopPropagation();
            event.preventDefault();
    
            const currentScreen = this.getCurrentScreen();
    
            if (currentScreen === 'tiles') {
                handleTileKeyEvents(event);
            } else if (currentScreen === 'sidebar') {
                handleSidebarKeyEvents(event);
            }
        });
    }

    bindScrollEvents() {
        document.addEventListener( 'scrollend', scrollingHandler);
    }

    getCurrentScreen() {
        if (document.querySelector('.sidenav.visible')) {
            return 'sidebar';
        } else {
            return 'tiles';
        }
    }
}

export default HomeController;