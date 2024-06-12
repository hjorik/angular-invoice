/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qu9t0n6r5sc9j0t",
    "created": "2024-06-12 08:38:12.169Z",
    "updated": "2024-06-12 08:38:12.169Z",
    "name": "billings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6tci1j2y",
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
      },
      {
        "system": false,
        "id": "2ukpice8",
        "name": "sum",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("qu9t0n6r5sc9j0t");

  return dao.deleteCollection(collection);
})
