const path = require('path');

module.exports = {
  entry: './src/index.js', // Starting point of your code
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'index.js', // Output file name
    library: 'MyGlobalLibrary', // Library name for global use
    libraryTarget: 'umd', // Format that works in different environments (CommonJS, AMD, and as global variables)
    globalObject: 'this', // Ensures compatibility for both browser and Node.js
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process .js and .jsx files
        exclude: /node_modules/, // Ignore files in node_modules
        use: 'babel-loader', // Use Babel to transform the files
      },
      {
        test: /\.css$/, // Process .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensions to resolve
  },
  externals: {
    react: 'react', // Don't bundle React
    'react-dom': 'react-dom', // Don't bundle ReactDOM
  },
};
