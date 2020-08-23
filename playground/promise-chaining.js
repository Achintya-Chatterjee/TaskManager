require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5f15c4ec4a23353b54000d48", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((errr) => {
//     console.log(errr);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5f15c4ec4a23353b54000d48", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((errrr) => {
    console.log(errrr);
  });
