const mongoose = require("mongoose");
// const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// const me = new User({
//   name: "       Bantu      ",
//   email: "    BANTU@GMAIL.COM",
//   password: "    Phantom12::::     ",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!!!", error);
//   });

// const work = new tasks({
//   description: "    Eat Lunch",
// });

// work
//   .save()
//   .then(() => {
//     console.log(work);
//   })
//   .catch((errrrr) => {
//     console.log(errrrr);
//   });
