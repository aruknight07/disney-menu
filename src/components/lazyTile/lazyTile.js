import './lazyTile.scss';

const templateId = "lazy-tile-template";
class LazyTile {
    constructor() {
        const template = document.getElementById(templateId);
        if (!template) {
            throw new Error(`Template with ID "${templateId}" not found.`);
        }
        this.fragment = template.content.cloneNode(true);
    }

    getElement() {
        return this.fragment;
    }
}

export default LazyTile;
