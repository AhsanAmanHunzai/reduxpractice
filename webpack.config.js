const path = require("path");

module.exports = {
  entry: "./src/index.js",   // This is the entry point for our code
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),  // this is to tell the application to load from this folder "dist" at port 9000
    port: 9000
  },
  mode: "development"
};
