import { Configuration, HotModuleReplacementPlugin } from "webpack"
import { resolve } from "path"
import * as HtmlWebpackPlugin from "html-webpack-plugin"

const paths = {
  src: toAbsolute("src"),
  dist: toAbsolute("dist")
}

const configuration: Configuration = {
  // entry: "./app/entry", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  entry: {
    app: paths.src
  },

  output: {
    // options related to how webpack emits results

    // path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    path: paths.dist,
    pathinfo: true,

    // filename: "bundle.js", // string
    // the filename template for entry chunks
    filename: "[name].js"

    // publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page

    // library: "MyLibrary", // string,
    // the name of the exported library

    // libraryTarget: "umd", // universal module definition
    // the type of the exported library

    /* Advanced output configuration (click to show) */
  },

  module: {
    // configuration regarding modules

    rules: [
      {
        test: /\.tsx?$/,
        include: [paths.src],
        loader: "ts-loader"
      }
      // rules for modules (configure loaders, parser options, etc.)

      // {
      //   test: /\.jsx?$/,
      //   include: [
      //     path.resolve(__dirname, "app")
      //   ],
      //   exclude: [
      //     path.resolve(__dirname, "app/demo-files")
      //   ],
      // these are matching conditions, each accepting a regular expression or string
      // test and include have the same behavior, both must be matched
      // exclude must not be matched (takes preferrence over test and include)
      // Best practices:
      // - Use RegExp only in test and for filename matching
      // - Use arrays of absolute paths in include and exclude
      // - Try to avoid exclude and prefer include

      // issuer: { test, include, exclude },
      // conditions for the issuer (the origin of the import)

      // enforce: "pre",
      // enforce: "post",
      // flags to apply these rules, even if they are overridden (advanced option)

      // loader: "babel-loader",
      // the loader which should be applied, it'll be resolved relative to the context
      // -loader suffix is no longer optional in webpack2 for clarity reasons
      // see webpack 1 upgrade guide

      // options: {
      //   presets: ["es2015"]
      // },
      // options for the loader
      // },
    ]
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    extensions: [".tsx", ".ts", ".js", ".json", ".jsx", ".css"]
    // extensions that are used
  },
  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  stats: "verbose",
  // lets you precisely control what bundle information gets displayed

  devServer: {
    // proxy: { // proxy URLs to backend development server
    //   '/api': 'http://localhost:3000'
    // },
    // contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    // compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true // only errors & warns on hot reload
    // ...
  },

  plugins: [new HotModuleReplacementPlugin(), new HtmlWebpackPlugin()]
  // list of additional plugins

  /* Advanced configuration (click to show) */
}

/**
 * changes relative path to absolute equivalent
 * @param filepath relative path to a file or directory
 * @returns absolute path
 */
function toAbsolute(...filepath: string[]) {
  return resolve(__dirname, ...filepath)
}

export default configuration
