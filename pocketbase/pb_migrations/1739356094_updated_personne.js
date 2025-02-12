/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2663700287",
    "maxSelect": 1,
    "name": "nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "UK",
      "US"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2663700287",
    "maxSelect": 1,
    "name": "nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "us",
      "UK"
    ]
  }))

  return app.save(collection)
})
