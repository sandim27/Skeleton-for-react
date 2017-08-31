const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const path = require('path');
const stylelint = require('stylelint');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = (nodeEnv === 'production');

const publicFolder = 'dist';

// Additional configs for development mode
const devEntry = isProd ? [] : [
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server'
  ];

const devLoaders = isProd ? [] : [
    'react-hot-loader'
  ];

const devConfig = isProd ? {} : {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api/**', '/auth/**'],
          target: 'http://localhost:3000/',
          secure: false
        }
      ]
    }
  };

const INCLUDED_PATHS = [path.join(__dirname, 'app')];
const ESLINT_EXCLUDE = [path.join(__dirname, 'app', 'js', 'components', '_common')];
const INCLUDED_MATERIAL_DESIGN_ICON = path.join(__dirname, 'node_modules/material-design-icons');
const INCLUDED_COMMON_ICON = path.join(__dirname, 'app/src/components/_common');
const INCLUDED_IMAGES = path.join(__dirname, 'app/assets/images');

module.exports = Object.assign({

  entry: [
    ...devEntry,
    './app/src/conf',
    './app/src/index.jsx'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json']
  },
  output: {
    path: path.join(__dirname, publicFolder),
    filename: 'application.js',
    chunkFilename: '[id].chunk.js'
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          emitWarning: true
        }
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: INCLUDED_PATHS,
        exclude: ESLINT_EXCLUDE,
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        loaders: [...devLoaders, 'babel-loader'],
        include: INCLUDED_PATHS
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=map-[local]___[hash:base64:5]',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                stylelint(),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ]
            }
          }
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: [
          path.resolve(__dirname, './node_modules/font-awesome/css'),
          path.resolve(__dirname, './node_modules/material-design-icons/'),
          path.resolve(__dirname, './node_modules/react-datetime/')
        ]
      },

      {
        test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON, INCLUDED_COMMON_ICON]
      },
      {
        test: /\.woff?(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON, INCLUDED_COMMON_ICON]
      },
      {
        test: /\.ttf(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=55000&mimetype=application/octet-stream',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON, INCLUDED_COMMON_ICON]
      },
      {
        test: /\.otf(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=55000&mimetype=application/octet-stream',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON, INCLUDED_COMMON_ICON]
      },
      {
        test: /\.eot(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON, INCLUDED_COMMON_ICON]
      },
      {
        test: /\.svg(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON, INCLUDED_COMMON_ICON]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?name=[path][name].[ext]&context=./app/',
          'image-webpack?bypassOnDebug=false&optimizationLevel=7&interlaced=false'
        ],
        include: [/media/, INCLUDED_IMAGES]
      },
      {
        test: /\.(png|jpg)$/,
        include: INCLUDED_PATHS,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.json$/,
        loader: 'file-loader?name=mocks/[name].[ext]',
        include: /mocks/
      },
      {
        test: /\.(html|ico)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  }
}, devConfig);
