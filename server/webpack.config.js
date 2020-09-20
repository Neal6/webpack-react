require("dotenv").config();

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  target: "node",
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  watch: true,
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  entry: {
    main: path.resolve(__dirname, "src/index.ts"),
  },
  output: {
    path: path.resolve("build-server"),
    filename: "[name].[contentHash].js",
    // chunkFilename: "[name].[contentHash].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    // runtimeChunk: {
    //   name: "runtime",
    // },
  },
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
