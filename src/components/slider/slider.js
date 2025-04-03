import Tile from "../tile/Tile.js";
import "./slider.scss";

export default class Slider {
    constructor(title, items, type, style, refId) {
        this.title = title;
        this.items = items;
        this.type = type;
        this.style = style;
        this.refId = refId;
    }

    getItemsHtml() {
        return this.items.map(item => new Tile(item).render()).join('');
    }

    getLazyLoadTiles() {
        const emptyList = (new Array(15)).fill({});
        return emptyList.map(() => new Tile({}).render()).join('');
    }

    render() {
        const itemsHtml = this.refId ? this.getLazyLoadTiles() : this.getItemsHtml();

        return `
            <div class="container">
                <h3>${this.title}</h3>
                <ul class="slider">${itemsHtml}</ul>
            </div>
        `.trim().replace(/\s+/g, ' ');
    }
}