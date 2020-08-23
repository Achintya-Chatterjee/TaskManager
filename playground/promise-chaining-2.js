require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5f185e941dc4863c64610b64")
//   .then((tasks) => {
//     console.log(tasks);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5f15d079a96d00313ca1df9b")
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
