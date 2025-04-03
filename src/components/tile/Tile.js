import './tile.scss';

class Tile {
    constructor({ src = '', alt = '', type = '', id = '' }) {
        this.src = src;
        this.alt = alt;
        this.type = type;
        this.id = id;
    }

    render() {
        return `
            <li class="tile image-container" tabindex="-1" data-id="${this.id}" data-type="${this.type}">
                <a href="#">
                    <img src="${this.src}" alt="${this.alt}" loading="lazy">
                </a>
            </li>
        `.trim().replace(/\s+/g, ' ');
    }
}

export default Tile;
