import Slider from "./components/slider/slider.js";
import { fetchHome } from "./helpers/fetchCalls.js";
import { saveShowInDataStore, getShowInformationByType } from './helpers/helpers';
import { setMainControls } from "./controls/mainControls.js";
import { setHandleBrokenImg } from "./helpers/imageHelpers.js";
import { setHighResolutionImageLoadEvent } from "./helpers/imageHelpers.js";

import './sidenav.scss';
import './style.scss';

async function buildContainers() {
  const homeData = await fetchHome();
  const fragment = document.createDocumentFragment();
  
  homeData.data.StandardCollection.containers.forEach((container) => {
    const title = container?.set?.text?.title?.full?.set?.default?.content || text?.title?.full?.set?.default?.content;
    const type = container.type;
    const style = container.style;
    const refId = container.set.refId;
    
    if (container.set.items) {
      const div = document.createElement('div');
      div.classList.add('set-container');
      
      const imagesHtml = container.set.items.map((tile) => {
        saveShowInDataStore(tile, tile.type);
        return getShowInformationByType(tile, tile.type);
      });

      const slider = new Slider(title, imagesHtml, type, style, refId);
      div.innerHTML = slider.render();
      fragment.appendChild(div);
    } else {
      const div = document.createElement('div');
      div.dataset.refId = refId || '';
      div.classList.add('set-container');
      const slider = new Slider(title, [], type, style, refId);
      div.innerHTML = slider.render();
      fragment.appendChild(div);
    }
  });

  document.querySelector('#root').appendChild(fragment);
  setMainControls();
}

document.addEventListener('DOMContentLoaded', buildContainers);
setHighResolutionImageLoadEvent();
setHandleBrokenImg();
