/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 4,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "réalisateur",
      "producteur",
      "scénariste"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 1,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "réalisateur",
      "producteur",
      "scénariste"
    ]
  }))

  return app.save(collection)
})
