'use strict';

const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap

function resolve(dir) {
    return path.join(__dirname, dir)
}

let skeletonWebpackConfig = merge(baseWebpackConfig, {
    target: 'node',
    devtool: false,
    entry: {
        app: resolve('../src/main.skeleton.js')
    },
    output: Object.assign({}, baseWebpackConfig.output, {
        libraryTarget: 'commonjs2'
    }),
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    plugins: []
})
let loaderList = skeletonWebpackConfig.module.rules[0].use;
// important: enable extract-text-webpack-plugin
skeletonWebpackConfig.module.rules[0].use[1].options.loaders = utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: true
})

module.exports = skeletonWebpackConfig
