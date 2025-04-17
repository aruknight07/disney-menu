import itemModel from "./itemModel";

class SetModel {
    constructor({ setId, refId, items, text }) {
      this.setId = setId || refId;
      this.items = items = items && items.map((item) => new itemModel(item));
      this.title = text?.title?.full?.set?.default?.content;
    }
}

export default SetModel;