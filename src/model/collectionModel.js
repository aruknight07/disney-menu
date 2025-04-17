import ContainerModel from "./containerModel";

class CollectionModel {
    constructor({ collectionId, containers, type, text }) {
      this.collectionId = collectionId;
      this.containers = containers.map((container => new ContainerModel(container)));
      this.type = type;
      this.title = text?.title?.full?.collection?.default?.content;
    }
  }

  export default CollectionModel;