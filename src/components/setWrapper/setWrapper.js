import Tile from "../tile/Tile";
import "./setWrapper.scss";

const templateId = "set-wrapper-template";
class SetWrapper {
    constructor({title, items, type, style, refId}) {
        const template = document.getElementById(templateId);
        if (!template) {
            throw new Error(`Template with ID "${templateId}" not found.`);
        }

        this.fragment = template.content.cloneNode(true);
        this.element = this.fragment.querySelector('.container');

        this.setTitle(title);
        this.setTiles(items);
    }

    setTitle(title) {
        const heading = this.element.querySelector('h3');
        heading.innerText = title
    }

    setTiles(items) {
        const ul = this.element.querySelector('.slider');
        const tileList = items.map((item) => (new Tile(item)).getElement());
        tileList.forEach((tile) => {
            ul.appendChild(tile)
        })
    }

    getElement() {
        return this.fragment;
    }

    
}

export default SetWrapper; 