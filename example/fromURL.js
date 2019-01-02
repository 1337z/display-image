const displayImage = require("../build/index") // Replace this with `require("display-image)` when used externally

displayImage.fromURL("https://cdn.pixabay.com/photo/2018/05/04/04/07/nature-3373196_960_720.jpg").then(image => {
  console.log(image)
})