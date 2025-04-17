import Container from '../container/container';
import './collection.scss';

class Collection {
    constructor(collection) {
        const {type, title, set} = collection;

        this.fragment = document.createDocumentFragment();
        const container = new Container({set, style, type});
        fragment.appendChild(container.getElement());
    }

    getElement() {
        return this.fragment;
    }
}

export default Collection;
