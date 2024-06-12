/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ponz3hb4n6x39jy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vaedpelu",
    "name": "billings",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "qu9t0n6r5sc9j0t",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ponz3hb4n6x39jy")

  // remove
  collection.schema.removeField("vaedpelu")

  return dao.saveCollection(collection)
})
