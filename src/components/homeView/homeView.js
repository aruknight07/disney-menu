import Container from '../container/container.js';
import { dataStore } from '../../helpers/datastores.js';

export default class HomeView {
  constructor(rootElementId = '#root') {
    this.root = document.querySelector(rootElementId);
  }

  render(collectionModel) {
    const fragment = document.createDocumentFragment();

    collectionModel.containers.forEach(containerModel => {
      const containerInstance = new Container(containerModel);
      fragment.appendChild(containerInstance.getElement());
    });

    this.root.appendChild(fragment);
  }
}
