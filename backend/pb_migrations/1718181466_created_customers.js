/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ponz3hb4n6x39jy",
    "created": "2024-06-12 08:37:46.628Z",
    "updated": "2024-06-12 08:37:46.628Z",
    "name": "customers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yfxwc9je",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ponz3hb4n6x39jy");

  return dao.deleteCollection(collection);
})
