const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.base.conf");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

config.output.filename = "nuxt-it-bigger.min.js";
config.output.libraryTarget = "umd";
config.output.library = "Lightbox";

config.entry = path.resolve(__dirname, "../src/components/LightBox.vue");

config.devtool = "source-map";

config.module.rules.push({
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
});

config.optimization = {
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin(),
    new TerserPlugin({
      terserOptions: {
        warnings: false,
        compress: {
          drop_debugger: true,
          drop_console: true,
          global_defs: {
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
          },
        },

        output: {
          comments: false,
        },
      },
    }),
  ],
};

config.plugins = (config.plugins || []).concat([
  new MiniCssExtractPlugin({
    filename: "nuxt-it-bigger.min.css",
  }),
]);

module.exports = config;
