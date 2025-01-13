const fs = require("node:fs");
const content = " some content";
fs.writeFile("/test.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    // success
  }
});
