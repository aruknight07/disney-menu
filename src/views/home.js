import { fetchHome } from "../services/api.js";
import {setMainControls} from "../controls/mainControls.js"
import {setHandleBrokenImg, setHighResolutionImageLoadEvent} from "../helpers/imageHelpers.js"
import Container from "../components/container/container.js"
import { dataStore } from "../helpers/datastores.js";

class Home {
    constructor() {
        setHighResolutionImageLoadEvent();
        setHandleBrokenImg();
        document.addEventListener('DOMContentLoaded', this.buildContainers);
    }
    buildContainers = async () =>  {
        const homeData = await fetchHome();
        const fragment = document.createDocumentFragment();
    
        homeData.containers.forEach((container) => {
            const containerInstance = new Container(container);
            fragment.appendChild(containerInstance.getElement());
            if(container.set.items) {
                container.set.items.forEach((tile) => dataStore.set(tile.id, tile));
            }
        });
    
    document.querySelector('#root').appendChild(fragment);
    setMainControls();
    }
}

export default Home;