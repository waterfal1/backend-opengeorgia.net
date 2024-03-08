function transvers(db) {
  return db.collection('transfers').insertMany([
    {
      id: 1,
      cost: "10€",
      placeName: "Трансфер Тбилиси аэропорт"
    },
    {
      id: 2,
      cost: "50€",
      placeName: "Трансфер Гудаури"
    },
    {
      id: 3,
      cost: "70€",
      placeName: "Трансфер Кутаиси аэропорт"
    },
    {
      id: 4,
      cost: "60€",
      placeName: "Трансфер Казбеги"
    },
    {
      id: 5,
      cost: "60€",
      placeName: "Трансфер Боржоми"
    },
    {
      id: 6,
      cost: "70€",
      placeName: "Трансфер Бакуриани"
    }
  ])
}

export { transvers };
