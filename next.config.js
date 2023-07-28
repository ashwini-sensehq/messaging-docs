const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  images:{
    // loader: "imgix",
    // path:''
    unoptimized: true,
  }
  ,
  // basePath: '/messaging-docs'
})
