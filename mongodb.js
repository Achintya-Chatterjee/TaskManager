// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect the database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Arindam,",
    //     age: 18,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Bumba",
    //       age: 23,
    //     },
    //     {
    //       name: "Bonu",
    //       age: 16,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert documents!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "I Write code",
    //       completed: true,
    //     },
    //     {
    //       description: "cloud Associate",
    //       completed: false,
    //     },
    //     {
    //       description: "akshay da going to home",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert description");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5f04cc16c214cd4e001c3ac5") },
    //   (err, user) => {
    //     if (err) {
    //       return console.log("unable to fetch!!!!");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((err, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((err, count) => {
    //     console.log(count);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5f04d2663c936b47482d2d0f") },
    //   (err, task) => {
    //     if (err) {
    //       return console.log("unable to fetch user!!!");
    //     }
    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((err, task) => {
    //     console.log(task);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5f04cd89d8bcd93254749ba1"),
    //     },
    //     {
    //       $inc: {
    //         age: 2,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((errrrr) => {
    //     console.log(errrrr);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((errrrr) => {
    //     console.log(errrrr);
    //   });

    // db.collection("users")
    //   .deleteMany({ age: 23 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((errrrr) => {
    //     console.log(errrrr);
    //   });

    db.collection("tasks")
      .deleteOne({ description: "cloud Associate" })
      .then((result) => {
        console.log(result);
      })
      .catch((errrr) => {
        console.log(errrr);
      });
  }
);
