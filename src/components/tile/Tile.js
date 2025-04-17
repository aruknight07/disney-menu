import './tile.scss';

const templateId = "tile-template";
class Tile {
    constructor({id, alt, src, type}) {
        const template = document.getElementById(templateId);
        if (!template) {
            throw new Error(`Template with ID "${templateId}" not found.`);
        }
        this.fragment = template.content.cloneNode(true);
        this.element = this.fragment.querySelector('.tile');

        this.setImg(src, alt);
        this.setDataId(id);
    }

    setImg(src, alt) {
        const img = this.element.querySelector('img');
        img.src = src;
        img.alt = alt;
    }

    setDataId(id) {
        this.element.dataset.id = id;
    }

    getElement() {
        return this.fragment;
    }
}

export default Tile;
