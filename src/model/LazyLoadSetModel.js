import itemModel from "./itemModel";

class LazyLoadSetModel {
    constructor(lazySet) {
        const set = this.getSetByType(lazySet);
        this.setId = set.setId;
        this.items = set.items && set.items.map((item) => new itemModel(item));
        this.title = set.text.title?.full?.set?.default?.content
        this.contentClass = set.contentClass;
    }

    getSetByType(data) {
        if (data.CuratedSet) return data.CuratedSet;
        if (data.TrendingSet) return data.TrendingSet;
        if (data.PersonalizedCuratedSet) return data.PersonalizedCuratedSet;
        return [];
    }

}

export default LazyLoadSetModel;


