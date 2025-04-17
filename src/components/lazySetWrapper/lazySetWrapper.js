import LazyTile from "../lazyTile/LazyTile";
import "./lazySetWrapper.scss";

const templateId = "lazy-set-wrapper-template";
class LazySetWrapper {
    constructor({title, type, style, refId}) {
        const template = document.getElementById(templateId);

        if (!template) {
            throw new Error(`Template with ID "${templateId}" not found.`);
        }

        this.fragment = template.content.cloneNode(true);
        this.element = this.fragment.querySelector('.container');
        this.setTitle(title);
        this.setRefId();
        this.setLazyTiles();
    }

    setTitle(title) {
        const heading = this.element.querySelector('h3');
        heading.innerText = title
    }

    setRefId() {

    }

    setLazyTiles() {
        const ul = this.element.querySelector('.slider');
        const emptyList = (new Array(15)).fill({});
        const lazyTileList = emptyList.map(() => (new LazyTile()).getElement());
        lazyTileList.forEach((lazyTile) => {
            ul.appendChild(lazyTile)
        })
    }

    getElement() {
        return this.fragment;
    }
}

export default LazySetWrapper;