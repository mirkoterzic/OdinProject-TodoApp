const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/script.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Output bundle file
    publicPath: "", // Adjust as needed
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply babel-loader to .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/, // Apply style and css loaders to .css files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Apply file-loader to handle images
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Apply file-loader to handle fonts
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your HTML template
      filename: "index.html", // Output HTML filename
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/style.css", to: "style.css" }, // Copy style.css from src to dist
      ],
    }),
  ],
};
