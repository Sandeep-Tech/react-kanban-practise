import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
  favFoodItems: "++id, items", // Primary key and indexed props
});
