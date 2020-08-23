const express = require("express");
require("./db/mongoose");
const { response } = require("express");
const { update } = require("./models/user");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled!!");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("The site is under maintainence");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is up on port " + port);
});

const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc@345" }, "inthiscitybangalore", {
    expiresIn: "7 days",
  });
  // console.log(token);

  const data = jwt.verify(token, "inthiscitybangalore");
  // console.log(data);
};
myFunction();

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("5f316f18a56e463058bc908b");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);
  const user = await User.findById("5f316d7610567138ece0edc7");
  await user.populate("mytask").execPopulate();
  console.log(user.task);
};
main();
