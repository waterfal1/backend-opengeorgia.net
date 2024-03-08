function users(db) {
    return db.collection('users').insertMany([{
      "email": "f1ne23.com@gmail.com",
      "password": "$2b$12$XPfUrd7NnkU7xDBhJODZrO0R3W/EX8t5TYv4bBMFtGIt8uaQLaxzy",
      "isActivated": true,
      "activationLink": "3385eb0a-5b8c-4030-91c0-899172dfa1d6",
      "role": "User",
      "__v": 0
    },{
      "email": "admin@admin.com",
      "password": "$2b$12$uoJGjpiB3EEiZiGJgh6DcevHKix69t/vsMdSL6dhBwnX9YmTQzId.",
      "isActivated": true,
      "activationLink": "58adf058-14ce-43aa-a731-8b579c70ef5e",
      "role": "Admin",
      "__v": 0
    }])
    }
  export { users };
  