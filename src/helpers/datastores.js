class DataStore {
    constructor(name) {
      if (DataStore.instance) {
        return DataStore.instance; // Ensuring singleton behavior
      }
  
      this.name = name;
      this.data = new Map();  // Using a Map to store data
      DataStore.instance = this;
    }
  
    // Add data to the store
    set(key, value) {
      this.data.set(key, value);
    }
  
    // Retrieve data from the store
    get(key) {
      return this.data.get(key);
    }
  
    // Remove data from the store
    remove(key) {
      this.data.delete(key);
    }
  
    // Check if a key exists
    has(key) {
      return this.data.has(key);
    }
  
    // Clear all data from the store
    clear() {
      this.data.clear();
    }
  
    // Optional: Get all data
    getAll() {
      return Array.from(this.data.entries());
    }
}

export const dataStore = new DataStore();