
/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** maintexts records **/
db.getCollection("maintexts").insert({
  "_id": ObjectId("571e559c11dd36af2d04a596"),
  "name": "Главная",
  "body": "Описание",
  "url": "index",
  "showhide": "show"
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("571e563011dd36af2d04a597"),
  "name": "Контакты",
  "body": "Мой телефон",
  "url": "contact",
  "showhide": "show"
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "kurs.users"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "kurs.maintexts"
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("571e497986fc38454b7acbe0"),
  "username": "Вася",
  "cities": [
    "Минск",
    "Брест",
    "Полоцк"
  ],
  "movies": [
    "Попугай Кеша",
    "Рома"
  ]
});
