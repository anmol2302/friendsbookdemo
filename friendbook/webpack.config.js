
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
   entry: SRC_DIR + "/index.js",
   output: {
       path: DIST_DIR,
       filename: "bundle.js"
   },devServer: {
    disableHostCheck: true
},
   devtool:"cheap-module-source-map",
   module: {
       rules: [
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
           {
               test: /\.js?/,
               include: SRC_DIR,
               loader: "babel-loader",
               query: {
                   presets: ["@babel/react", "@babel/env",]
               }
           },
           {
             test: /\.(png|jpg|jpeg|gif)$/,
             use: [
               {
                 loader: 'file-loader',
                 options: {}
               }
             ]
           }
       ],
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: './index.html',
       filename: 'index.html'
     })
   ],
   mode: "development"
};
module.exports = config;