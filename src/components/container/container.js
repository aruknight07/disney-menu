
import LazySetWrapper from '../lazySetWrapper/lazySetWrapper';
import SetWrapper from '../setWrapper/setWrapper';
import './container.scss';

class Container {
    constructor({type, title, set}) {
        this.fragment = document.createDocumentFragment();
        const div = document.createElement('div');
        div.classList.add('set-container');

        if(set.items) {
            const setWrapper = new SetWrapper(set);
            div.appendChild(setWrapper.getElement());
        } else {
            div.dataset.refId = set.setId;
            const setWrapper = new LazySetWrapper(set);
            div.appendChild(setWrapper.getElement());
        }

        
        this.fragment.appendChild(div)
    }

    getElement() {
        return this.fragment;
    }
}

export default Container;