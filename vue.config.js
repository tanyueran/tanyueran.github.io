const webpack = require('webpack')
const semver = require('semver')
const dependencies = require('./package.json').dependencies
const IS_PRO = process.env.NODE_ENV !== 'development'

const getVersion = (dependencies => packageName => {
  if (dependencies[packageName]) {
    return semver.minVersion(dependencies[packageName])
  } else {
    throw new Error(`not found package: ${packageName}`)
  }
})(dependencies)

const cdn = {
  js: [
    `https://cdnjs.cloudflare.com/ajax/libs/vue/${getVersion('vue')}/vue.runtime.global.prod.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/vue-router/${getVersion('vue-router')}/vue-router.global.prod.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/vuex/${getVersion('vuex')}/vuex.global.prod.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/moment.js/${getVersion('moment')}/moment.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/ant-design-vue/${getVersion('ant-design-vue')}/antd.min.js`
  ],
  css: [
    // `https://cdnjs.cloudflare.com/ajax/libs/ant-design-vue/${getVersion('ant-design-vue')}/antd.min.css`
  ]
}

module.exports = {
  pwa: {
    name: 'HomePage'
  },
  configureWebpack: {
    externals: IS_PRO ? {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      moment: 'moment',
      'ant-design-vue': 'antd',
      'ant-design-vue/dist/antd.css': 'antd'
    } : {}
  },
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      IS_PRO && (args[0].cdn = cdn)
      return args
    })
  }
}
