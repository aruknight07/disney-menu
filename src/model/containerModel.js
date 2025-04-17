import SetModel from "./SetModel";

class ContainerModel {
    constructor({ set, style, type }) {
      this.set =new SetModel(set);
      this.style = style;
      this.type = type;
    }
  }

  export default ContainerModel;